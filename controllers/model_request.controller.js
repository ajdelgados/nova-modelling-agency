const { body } = require("express-validator")
const nodemailer = require('nodemailer')
const ModelRequest = require("../models/model_request");
const { Model } = require("mongoose");

exports.validate = method => {
    switch (method) {
        case "body": {
            return [
                body("email").isEmail()
            ];
        }
  }
}

exports.modelRequest = async (req, res) => {
    try {
        const modelRequest = new ModelRequest({
            email: req.body.email
        })

        const mailOptions = {
            from: process.env.EMAIL_SENDER,
            to: req.body.email,
            subject: "Model request created!",
            text: "We go back with you next days!",
        };

        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            secure: false,
            port: 25,
            auth: {
                user: process.env.EMAIL_SENDER,
                pass: process.env.EMAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        const result = await transporter.sendMail(mailOptions);

        modelRequest.result = result
        modelRequest.status = 1;
        await modelRequest.save()
        return res.status(201).json({
            success: true,
            message: "Model request created",
            data: {
                modelRequest
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

exports.getAll = async (req, res) => {
    try {
        const modelRequests = await ModelRequest.find()
        return res.status(200).json({
            success: true,
            message: "Users",
            data: {
                modelRequests
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
