"use strict";
const CustomError = require('./custom');
class ExistsError extends CustomError {
    constructor(obj, errors) {
        super(400, 'Exists Error', obj + ' already exists.', errors);
        Object.setPrototypeOf(this, ExistsError.prototype);
    }
    serializeErrors() {
        const response = {
            type: this.type,
            message: this.message
        };
        if (this.errors) {
            response.errors = this.errors;
        }
        return response;
    }
}
module.exports = ExistsError;
