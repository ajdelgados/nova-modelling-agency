const { body } = require("express-validator");
const bCrypt = require('bcryptjs');
const User = require("../models/user.js");

exports.validate = method => {
    switch (method) {
        case "create": {
            return [
                body("name").optional().isString(),
                body("email").isEmail(),
                body("password").isLength({min: 6})
            ];
        }
        case "update": {
            return [
                body("email").optional().isEmail(),
                body("password").optional().isLength({min: 6})
            ];
        }
  }
}

exports.create = async (req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            return res.status(401).json({
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

        return res.status(201).json({
            success: true,
            message: "User created",
            data: {
                user
            }
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error,
            error: {
                statusCode: 500,
                description: error,
            },
        });
    }
}

exports.getById = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        if(!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
                error: {
                    statusCode: 404,
                    description: "User not found",
                },
            });
        }
        return res.status(200).json({
            success: true,
            message: "User",
            data: {
                user
            }
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error,
            error: {
                statusCode: 500,
                description: error,
            },
        });
    }
}

exports.update = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        if(!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
                error: {
                    statusCode: 404,
                    description: "User not found",
                },
            });
        }

        if(req.body.email && user.email !== req.body.email) {
            const userExists = await User.findOne({ email: req.body.email });
            if (userExists) {
                return res.status(401).json({
                    success: false,
                    message: "Email was taken",
                    error: {
                        statusCode: 401,
                        description: "Email was taken",
                    },
                });
            }
        }

        let password = null
        if(req.body.password) {
            password = await bCrypt.hash(req.body.password, 10)
        }

        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        user.password = password || user.password
        await user.save();

        return res.status(200).json({
            success: true,
            message: "User updated",
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

exports.delete = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        if(!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
                error: {
                    statusCode: 404,
                    description: "User not found",
                },
            });
        }

        await user.remove()
        return res.status(200).json({
            success: true,
            message: "User revove",
            data: {
                user
            }
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error,
            error: {
                statusCode: 500,
                description: error,
            },
        });
    }
}

exports.getAll = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json({
            success: true,
            message: "Users",
            data: {
                users
            }
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error,
            error: {
                statusCode: 500,
                description: error,
            },
        });
    }
}
