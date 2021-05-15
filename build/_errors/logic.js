"use strict";
const CustomError = require('./custom');
class LogicError extends CustomError {
    constructor(message, objects) {
        super(400, 'Logic Error', message, objects);
        Object.setPrototypeOf(this, LogicError.prototype);
    }
    serializeErrors() {
        return {
            type: this.type,
            message: this.message,
            errors: this.errors
        };
    }
}
module.exports = LogicError;
