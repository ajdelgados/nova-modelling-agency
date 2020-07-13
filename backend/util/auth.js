var jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
  try {
    var token = req.headers['x-access-token'];
    if (!token) {
      return res.status(403).send({
        success: false,
        message: "Token is required for verification",
        error: {
          statusCode: 403,
          description: "You must provide a token to authenticate your call"
        }
      });
    }
      
    const result = await jwt.verify(token, process.env.JWT_KEY)
    if(!result) {
      return res.status(401).json({
          success: false,
          message: "Invalid Token",
          error: {
              statusCode: 401,
              description: "Invalid Token",
          },
      });
    }

    next();
  } catch(error) {
    res.status(500).json({
      success: false,
      message: error,
      error: {
          statusCode: 500,
          description: error,
      },
  });
  }
}

module.exports = verifyToken;
