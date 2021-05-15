"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = exports.authService = exports.validateLogin = exports.validateRegister = exports.registerSchema = exports.authRoutes = void 0;
const routers_1 = __importDefault(require("./routers"));
exports.authRoutes = routers_1.default;
const service_1 = __importDefault(require("./service"));
exports.authService = service_1.default;
const controller_1 = __importDefault(require("./controller"));
exports.authController = controller_1.default;
const schema_1 = require("./schema");
Object.defineProperty(exports, "registerSchema", { enumerable: true, get: function () { return schema_1.registerSchema; } });
Object.defineProperty(exports, "validateRegister", { enumerable: true, get: function () { return schema_1.validateRegister; } });
Object.defineProperty(exports, "validateLogin", { enumerable: true, get: function () { return schema_1.validateLogin; } });
