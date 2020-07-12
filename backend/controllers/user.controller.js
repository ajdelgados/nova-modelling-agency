const { body } = require("express-validator");
const bCrypt = require('bcryptjs');
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

exports.create = async (req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            res.status(401).json({
                success: false,
                message: "Email was taken",
                error: {
                    statusCode: 401,
                    description: "Email was taken",
                },
            });
        }

        const user = new User({
            name: req.body.name || null,
            email: req.body.email,
            password: await bCrypt.hash(req.body.password, 10)
        })
        await user.save();

        res.status(201).json({
            success: true,
            message: "User created",
            api_token: "",
            data: {
                user
            }
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