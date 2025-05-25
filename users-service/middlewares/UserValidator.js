const { body, param } = require('express-validator');

const UserValidator = {
    createUser: [
        body('name')
            .notEmpty().withMessage('Name is required')
            .isLength({ min: 2 }).withMessage('Name must have at least 2 characters'),
        body('email')
            .notEmpty().withMessage('Email is required')
            .isEmail().withMessage('Invalid email format'),
    ],

    getUserById: [
        param('id')
            .isInt().withMessage('ID must be an integer'),
    ],

    updateUser: [
        param('id')
            .isInt().withMessage('ID must be an integer'),
        body('name')
            .optional()
            .isLength({ min: 2 }).withMessage('Name must have at least 2 characters'),
        body('email')
            .optional()
            .isEmail().withMessage('Invalid email format'),
    ],

    deleteUser: [
        param('id')
            .isInt().withMessage('ID must be an integer'),
    ]
};

module.exports = UserValidator;
