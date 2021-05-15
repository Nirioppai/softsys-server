"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeInformationService = exports.EmployeeInformationModel = exports.EmployeeInformationController = void 0;
const model_1 = __importDefault(require("./model"));
exports.EmployeeInformationModel = model_1.default;
const controller_1 = __importDefault(require("./controller"));
exports.EmployeeInformationController = controller_1.default;
const service_1 = __importDefault(require("./service"));
exports.EmployeeInformationService = service_1.default;
