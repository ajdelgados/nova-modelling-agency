const { body } = require("express-validator");
const bCrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

exports.validate = method => {
    switch (method) {
        case "body": {
            return [
                body("email").isEmail(),
                body("password").isLength({min: 6})
            ];
        }
  }
}

exports.signIn = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(401).json({
                success: false,
                message: "Email not found",
                error: {
                    statusCode: 401,
                    description: "Email not found",
                },
            });
        }

        let result = await bCrypt.compare(req.body.password, user.password);
        if(!result) {
            res.status(401).json({
                success: false,
                message: "Invalid Password",
                error: {
                    statusCode: 401,
                    description: "Invalid Password",
                },
            });
        }

        const apiToken = jwt.sign({}, process.env.JWT_KEY, { expiresIn: "1d"});
        res.status(200).json({
            success: true,
            message: "You're signed in successfully",
            api_token: apiToken
        });
        
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