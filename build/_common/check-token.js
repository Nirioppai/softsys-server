"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfEmployee = exports.checkIfAdmin = exports.jwtAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtAuth = (req, res, next) => {
    const authHeader = req.get('authorization');
    if (!authHeader) {
        return res.status(403).send({ success: false, message: 'Not authorized' });
    }
    // get the authorization token
    const token = authHeader && authHeader.split(' ')[1];
    // verify the token
    jsonwebtoken_1.default.verify(token, process.env.JWT_ACCESS_SECRET || 'hello world', (err, decoded) => {
        if (err) {
            return res.status(403).send({ success: false, message: 'You are not authorize for this action' });
        }
        const decodedInfo = decoded;
        // append decoded info to the request body for other middleware usages
        req.body = Object.assign(Object.assign({}, req.body), { userInfo: decodedInfo });
        next();
    });
};
exports.jwtAuth = jwtAuth;
const checkIfAdmin = (req, res, next) => {
    // check if the creds accessing the api is of type "admin"
    if (req.body.userInfo.type !== 'admin') {
        return res.status(403).send({ success: false, message: 'You are not authorize for this action' });
    }
    next();
};
exports.checkIfAdmin = checkIfAdmin;
const checkIfEmployee = (req, res, next) => {
    // check if the creds accessing the api is of type "employee"
    if (req.body.userInfo.type !== 'employee') {
        return res.status(403).send({ success: false, message: 'You are not authorize for this action' });
    }
    next();
};
exports.checkIfEmployee = checkIfEmployee;
