const CustomError = require('./custom');
const NotFoundError = require('./not-found');
const NotAuthorizedError = require('./not-authorized');
const ForbiddenError = require('./forbidden');
const LogicError = require('./logic');
const ExistsError = require('./exists');

module.exports = {
  CustomError,
  NotFoundError,
  NotAuthorizedError,
  ForbiddenError,
  LogicError,
  ExistsError
};
