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
Object.defineProperty(exports, "__esModule", { value: true });
// models
const index_1 = require("./index");
/**
 * Module Admin
 * Admin CRUD service
 * Handles the GET POST PUT DELETE of admin accounts
 */
class AdminService {
    constructor() { }
    getAllAdmins() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const admins = yield index_1.AdminModel.find();
                return { success: true, data: admins, code: 200 };
            }
            catch (error) {
                return { success: false, message: 'Failed to get admin account', deepLog: error, code: 400 };
            }
        });
    }
}
exports.default = AdminService;
