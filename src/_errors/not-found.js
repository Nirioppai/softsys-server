const CustomError = require("./custom");

class NotFoundError extends CustomError {
  constructor(obj, message) {
    if (!message) {
      message = obj + " not found";
    }

    super(404, "Not Found Error", message);

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return {
      type: this.type,
      message: this.message,
    };
  }
}

module.exports = NotFoundError;
