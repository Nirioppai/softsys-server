"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedAll = exports.permissionSeed = exports.employeeSeed = exports.adminSeed = void 0;
const adminSeed_1 = __importDefault(require("./adminSeed"));
exports.adminSeed = adminSeed_1.default;
const employeeSeed_1 = __importDefault(require("./employeeSeed"));
exports.employeeSeed = employeeSeed_1.default;
const permissionSeed_1 = __importDefault(require("./permissionSeed"));
exports.permissionSeed = permissionSeed_1.default;
const controller_1 = require("./controller");
Object.defineProperty(exports, "seedAll", { enumerable: true, get: function () { return controller_1.seedAll; } });
