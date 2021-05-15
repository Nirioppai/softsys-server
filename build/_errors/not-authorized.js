"use strict";
const CustomError = require('./custom');
class NotAuthorizedError extends CustomError {
    constructor(message) {
        if (!message) {
            message = 'Not authorized!';
        }
        super(401, 'Not Authorized Error', message);
        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }
    serializeErrors() {
        return {
            type: this.type,
            message: this.message
        };
    }
}
module.exports = NotAuthorizedError;
