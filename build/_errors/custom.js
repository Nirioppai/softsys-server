"use strict";
class CustomError {
    /**
     * @param {number} statusCode HTTP status code
     * @param {string} type Error type
     * @param {string} message Error message
     */
    constructor(statusCode, type, message, errors) {
        this.message = message;
        this.statusCode = statusCode;
        this.type = type;
        this.errors = errors;
        Object.setPrototypeOf(this, CustomError.prototype);
    }
    serializeErrors() { }
}
module.exports = CustomError;
