"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const index_1 = require("./index");
const check_token_1 = require("../../_common/check-token");
const router = express_1.default.Router();
/**
 *  Admin API is subjected with /api/admin prefix
 *  Eg. /api/admin/get-all
 */
/**
 * Route to get all administrator
 * @param { email, password } req
 *
 */
router.get('/get-all', [check_token_1.jwtAuth, check_token_1.checkIfAdmin], index_1.AdminController.getAllAdmin);
module.exports = router;
