"use strict";
const CustomError = require('./custom');
class ForbiddenError extends CustomError {
    constructor(message) {
        if (!message) {
            message = 'No access for this feature';
        }
        super(403, 'Forbidden Error', message);
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
    serializeErrors() {
        return {
            type: this.type,
            message: this.message
        };
    }
}
module.exports = ForbiddenError;
