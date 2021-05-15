"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const index_1 = require("./index");
const router = express_1.default.Router();
/**
 *  Auth API is subjected with /api/auth prefix
 *  Eg. /api/auth/login
 */
/**
 *  Auth Route for admin
 */
router.post('/admin/login', [index_1.validateLogin('admin')], index_1.authController.login('admin'));
router.post('/admin/register', [index_1.validateRegister()], index_1.authController.register('admin'));
/**
 *  Auth Route for employee
 */
router.post('/employee/register', [index_1.validateRegister()], index_1.authController.register('employee'));
router.post('/employee/login', [index_1.validateLogin('employee')], index_1.authController.login('employee'));
module.exports = router;
