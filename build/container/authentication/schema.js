"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLogin = exports.validateRegister = exports.registerSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const messages_1 = require("../../_common/messages");
const adminId = joi_1.default.string()
    .required()
    .allow('')
    .messages(messages_1.messageBuilder({ field: 'Admin ID' }));
const employeeId = joi_1.default.string()
    .required()
    .allow('')
    .messages(messages_1.messageBuilder({ field: 'Employee ID' }));
const contactNumber = joi_1.default.object()
    .keys({
    mobileNumber: joi_1.default.array()
        .items(joi_1.default.string())
        .required()
        .allow('')
        .messages(messages_1.messageBuilder({ field: 'Mobile Number' })),
    landLineNumber: joi_1.default.array()
        .items(joi_1.default.string(), joi_1.default.number())
        .required()
        .allow('')
        .messages(messages_1.messageBuilder({ field: 'Landline Number' }))
})
    .required()
    .messages(messages_1.messageBuilder({ field: 'Contact Number' }));
const name = joi_1.default.object().keys({
    firstName: joi_1.default.string()
        .allow('')
        .required()
        .messages(messages_1.messageBuilder({ field: 'First name' })),
    middleName: joi_1.default.string()
        .allow('')
        .required()
        .messages(messages_1.messageBuilder({ field: 'Middle name' })),
    lastName: joi_1.default.string()
        .allow('')
        .required()
        .messages(messages_1.messageBuilder({ field: 'Last name' })),
    suffix: joi_1.default.string()
        .allow('')
        .required()
        .messages(messages_1.messageBuilder({ field: 'Suffix' })),
    title: joi_1.default.string()
        .allow('')
        .required()
        .messages(messages_1.messageBuilder({ field: 'Title' }))
});
const role = joi_1.default.string()
    .allow('')
    .required()
    .messages(messages_1.messageBuilder({ field: 'Role' }));
const permission = joi_1.default.array()
    .items(joi_1.default.string())
    .required()
    .messages(messages_1.messageBuilder({ field: 'Permission' }));
const address = joi_1.default.object()
    .keys({
    homeNumOrLotNum: joi_1.default.string()
        .required()
        .allow('')
        .messages(messages_1.messageBuilder({ field: 'Home number / Lot Number' })),
    streetName: joi_1.default.string()
        .required()
        .allow('')
        .messages(messages_1.messageBuilder({ field: 'Street Name' })),
    districtOrTown: joi_1.default.string()
        .required()
        .allow('')
        .messages(messages_1.messageBuilder({ field: 'District / Town' })),
    zipCode: joi_1.default.string()
        .required()
        .allow('')
        .min(4)
        .max(4)
        .messages(messages_1.messageBuilder({ field: 'Zip Code' })),
    province: joi_1.default.string()
        .required()
        .allow('')
        .messages(messages_1.messageBuilder({ field: 'Province' })),
    country: joi_1.default.string()
        .required()
        .allow('')
        .messages(messages_1.messageBuilder({ field: 'Country' }))
})
    .required();
const password = joi_1.default.string()
    .required()
    .messages(messages_1.messageBuilder({ field: 'Password' }));
const registerSchema = joi_1.default.object()
    .keys({
    contactNumber,
    adminId,
    name,
    homeAddress: address.messages(messages_1.messageBuilder({ field: 'Home Address' })),
    currentAddress: address.messages(messages_1.messageBuilder({ field: 'Current Address' })),
    permanentAddress: address.messages(messages_1.messageBuilder({ field: 'Permanent Address' })),
    role,
    permission
})
    .messages(messages_1.messageBuilder({ field: '' }));
exports.registerSchema = registerSchema;
const adminLoginSchema = joi_1.default.object()
    .keys({
    adminId,
    password
})
    .messages(messages_1.messageBuilder({ field: '' }));
const employeeLoginSchema = joi_1.default.object()
    .keys({
    employeeId,
    password
})
    .messages(messages_1.messageBuilder({ field: '' }));
const validateRegister = () => {
    return (req, res, next) => {
        const { error } = registerSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const cleanError = messages_1.cleaner(error);
            return res.status(400).json(cleanError);
        }
        next();
    };
};
exports.validateRegister = validateRegister;
const validateLogin = (role) => {
    return (req, res, next) => {
        let schema;
        if (role === 'admin') {
            schema = adminLoginSchema;
        }
        else if (role === 'employee') {
            schema = employeeLoginSchema;
        }
        else {
            schema = null;
        }
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const cleanError = messages_1.cleaner(error);
            return res.status(400).json(cleanError);
        }
        next();
    };
};
exports.validateLogin = validateLogin;
