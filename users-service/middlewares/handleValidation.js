const { validationResult } = require('express-validator');

function handleValidation(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

module.exports = handleValidation;
// This middleware checks for validation errors in the request.
// If there are errors, it sends a 400 response with the error details.
// If there are no errors, it calls the next middleware in the stack.
// This is useful for validating request data before processing it in the controller.
// It ensures that the data is in the expected format and meets any validation criteria.
// This helps to prevent errors and improve the reliability of the application.
// It is typically used in conjunction with validation libraries like express-validator.
// This middleware should be added to the route handlers where validation is needed.
// It can be used for creating, updating, or deleting resources.
// It can also be used for validating query parameters, request bodies, and URL parameters.