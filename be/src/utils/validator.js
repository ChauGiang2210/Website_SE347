const { validationResult } = require('express-validator');
exports.validateFields = (req) => {
    const validationErrors = validationResult(req);
    //console.log('(validateFields) VALIDATION ERROR', validationErrors.array()[0]);
    return validationErrors.isEmpty() ? null : validationErrors.array()[0].msg;
}