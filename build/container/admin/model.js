"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const AdminSchema = new mongoose_1.Schema({
    adminId: {
        type: String,
        required: true
    },
    name: {
        firstName: { type: String },
        middleName: { type: String },
        lastName: { type: String },
        title: { type: String },
        suffix: { type: String }
    },
    gender: {
        type: String,
        default: ''
    },
    dateOfBirth: {
        month: { type: String },
        day: { type: String },
        year: { type: String }
    },
    contactNumber: {
        mobileNumber: [{ type: String }],
        landLineNumber: [{ type: String }]
    },
    homeAddress: {
        homeNumOrLotNum: { type: String, default: '' },
        streetName: { type: String, default: '' },
        districtOrTown: { type: String, default: '' },
        zipCode: { type: String, default: '' },
        province: { type: String, default: '' },
        country: { type: String, default: '' }
    },
    currentAddress: {
        homeNumOrLotNum: { type: String, default: '' },
        streetName: { type: String, default: '' },
        districtOrTown: { type: String, default: '' },
        zipCode: { type: String, default: '' },
        province: { type: String, default: '' },
        country: { type: String, default: '' }
    },
    permanentAddress: {
        homeNumOrLotNum: { type: String, default: '' },
        streetName: { type: String, default: '' },
        districtOrTown: { type: String, default: '' },
        zipCode: { type: String, default: '' },
        province: { type: String, default: '' },
        country: { type: String, default: '' }
    },
    role: {
        type: String,
        default: ''
    },
    permissions: [{ type: String }],
    type: {
        type: String,
        default: 'admin'
    },
    nationality: {
        type: String,
        default: ''
    },
    isActive: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.default.model('Admin', AdminSchema);
