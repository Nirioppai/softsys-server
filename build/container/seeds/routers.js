"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const router = express_1.default.Router();
/**
 *  Auth API is subjected with /api/seeds prefix
 *  Eg. /api/seeds/admin
 */
/**
 *  Route to create/seed admin accounts
 */
router.post('/admin-accounts', controller_1.adminSeed);
/**
 *  Route to create/seed employee accounts
 */
router.post('/employee-accounts', controller_1.employeeSeed);
/**
 *  Route to create/seed permissions
 */
router.post('/permissions', controller_1.permissionSeed);
/**
 *  Route to execute all seeded data
 */
router.post('/all', controller_1.seedAll);
module.exports = router;
