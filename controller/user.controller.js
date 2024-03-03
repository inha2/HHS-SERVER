const db = require('../models');
const User = db.user;
const userServices = require('../service/user.service');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

const signUp = catchAsync(async (req, res) => {
    try {
        const user = await userServices.createUser(req.body);
        if (user) {
            res.status(201).json({
                message: 'success',
            });
            return;
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
const login = catchAsync(async (req, res) => {
    try {
        const login = await userServices.loginUser(req.body);
        if (login) {
            res.status(200).json({
                message: 'success',
            });
            return;
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = {
    signUp,
    login,
};
