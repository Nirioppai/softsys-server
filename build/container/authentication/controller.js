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
// services and utilities
const service_1 = __importDefault(require("./service"));
const authService = new service_1.default();
// logs a user in
function login(role) {
    return (req, res) => __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        const result = yield authService.login(body, role);
        if (!result.success) {
            res.status(result.code).send(result.message);
        }
        res.status(200).send(result);
    });
}
// register a user in
function register(role) {
    return function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const result = yield authService.register(body, role);
            if (!result.success) {
                return res.status(result.code).send(result);
            }
            res.status(200).send(result);
        });
    };
}
exports.default = { login, register };
