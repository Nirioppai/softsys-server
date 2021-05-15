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
exports.seedAll = exports.permissionSeed = exports.employeeSeed = exports.adminSeed = void 0;
// services and utilities
const adminSeed_1 = __importDefault(require("./adminSeed"));
const employeeSeed_1 = __importDefault(require("./employeeSeed"));
const permissionSeed_1 = __importDefault(require("./permissionSeed"));
// register a user in
const adminSeed = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield adminSeed_1.default();
    res.status(200).send(result);
});
exports.adminSeed = adminSeed;
const employeeSeed = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield employeeSeed_1.default();
    res.status(200).send(result);
});
exports.employeeSeed = employeeSeed;
const permissionSeed = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield permissionSeed_1.default();
    res.status(200).send(result);
});
exports.permissionSeed = permissionSeed;
const seedAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield adminSeed_1.default();
    yield employeeSeed_1.default();
    yield permissionSeed_1.default();
    res.status(200).send({ success: true, message: 'All data has been successfully seeded . . . ' });
});
exports.seedAll = seedAll;
