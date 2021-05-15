"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const index_1 = require("./index");
const check_token_1 = require("../../_common/check-token");
const router = express_1.default.Router();
/**
 *  Employee API is subjected with /api/employee prefix
 *  Eg. /api/employee/get-all
 */
/**
 * Route to get all employee
 * @param { email, password } req
 *
 */
router.get('/get-all', [check_token_1.jwtAuth], index_1.EmployeeController.getAllEmployee);
module.exports = router;
