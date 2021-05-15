"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = exports.EmployeeModel = exports.EmployeeController = void 0;
const model_1 = __importDefault(require("./model"));
exports.EmployeeModel = model_1.default;
const controller_1 = __importDefault(require("./controller"));
exports.EmployeeController = controller_1.default;
const service_1 = __importDefault(require("./service"));
exports.EmployeeService = service_1.default;
