"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// models
const service_1 = __importDefault(require("./service"));
const employeeService = new service_1.default();
// get all admin accounts
const getAllEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = yield employeeService.getAllEmployees();
        res.status(200).send(result);
    }
    catch (error) {
        return res.status(400).send({ success: false, message: 'Failed to get employee accounts', deepLog: error });
    }
});
exports.default = { getAllEmployee };
