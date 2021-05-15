"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = exports.AdminModel = exports.AdminController = void 0;
const model_1 = __importDefault(require("./model"));
exports.AdminModel = model_1.default;
const controller_1 = __importDefault(require("./controller"));
exports.AdminController = controller_1.default;
const service_1 = __importDefault(require("./service"));
exports.AdminService = service_1.default;
