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
// dependencies
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const dotenv_1 = __importDefault(require("dotenv"));
// models and services
const index_1 = require("../admin/index");
const index_2 = require("../employee/index");
dotenv_1.default.config();
/**
 * Module Auth
 * Authentication/Authorization service
 * Handles the authentication, registration and authorization of users
 * Changing passwords, restricting/providing access
 */
class AuthService {
    constructor() {
        this.model = index_2.EmployeeModel;
    }
    /**
     * Set current model
     * @param {string} type Model type
     */
    setModel(role) {
        if (role === 'admin') {
            this.model = index_1.AdminModel;
        }
        else if (role === 'employee') {
            this.model = index_2.EmployeeModel;
        }
    }
    register(userInfo, role) {
        return __awaiter(this, void 0, void 0, function* () {
            this.setModel(role);
            // find for duplicate account
            let isExisting = '';
            if (role === 'admin') {
                isExisting = yield this.model.find({ adminId: userInfo.adminId });
            }
            else if (role === 'employee') {
                isExisting = yield this.model.find({ employeeId: userInfo.employeeId });
            }
            // return if there is a duplicate
            if (isExisting.length > 0)
                return { success: false, message: 'Account already exist', code: 400 };
            // set a default password
            userInfo.password = yield bcryptjs_1.default.hash(process.env.DEFAULT_PASSWORD || 'DEVSCRUM', 10);
            try {
                const newUser = new this.model(userInfo);
                yield newUser.save();
                return { success: true, data: userInfo, code: 201, message: 'Account Created Successfully' };
            }
            catch (error) {
                return { success: false, message: 'Failed to create a new account', deepLog: error, code: 400 };
            }
        });
    }
    login(userInfo, role) {
        return __awaiter(this, void 0, void 0, function* () {
            // Find if account exists
            let isExisting = '';
            if (role === 'admin') {
                isExisting = yield this.model.find({ adminId: userInfo.adminId });
            }
            else if (role === 'employee') {
                isExisting = yield this.model.find({ employeeId: userInfo.employeeId });
            }
            // Return if does not exists
            if (isExisting.length === 0)
                return { success: false, message: 'User does not exist', code: 400 };
            // Compare Password
            let user;
            let isMatch = null;
            if (role === 'admin') {
                user = yield this.model.findOne({ adminId: userInfo.adminId });
                isMatch = yield bcryptjs_1.default.compare(userInfo.password, user.password);
            }
            else if (role === 'employee') {
                user = yield this.model.findOne({ employeeId: userInfo.employeeId });
                isMatch = yield bcryptjs_1.default.compare(userInfo.password, user.password);
            }
            // Return if password was wrong
            if (!isMatch)
                return { success: false, message: 'Invalid Credentials', code: 400 };
            try {
                let userObject;
                if (role === 'admin') {
                    userObject = {
                        _id: user._id,
                        adminId: user.adminId,
                        type: user.type,
                        role: user.role,
                        permissions: user.permissions
                    };
                }
                else if (role === 'employee') {
                    userObject = {
                        _id: user._id,
                        employeeId: user.employeeId,
                        type: user.type,
                        role: user.role,
                        permissions: user.permissions
                    };
                }
                else {
                    userObject = [{}];
                }
                const token = jsonwebtoken_1.default.sign(userObject, process.env.JWT_ACCESS_SECRET || 'hello world', { expiresIn: process.env.JWT_ACCESS_DURATION });
                return { success: true, data: `Bearer ${token}`, code: 201, message: 'Login Success' };
            }
            catch (error) {
                return { success: false, message: 'Failed to Login', deepLog: error, code: 400 };
            }
        });
    }
}
exports.default = AuthService;
