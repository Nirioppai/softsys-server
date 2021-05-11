const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    adminId: {
        type: String
    },
    name: {
        firstName: String,
        middleName: String,
        lastName: String,
        title: String,
        suffix: String,
    },
    gender: {
        type: String,
        default: ''
    },
    dateOfBirth: {
        month: String,
        day: String,
        year: String
    },
    contactNumber: {
        mobileNumber: [{
            type: String
        }],
        landLineNumber: [{
            type: String
        }]
    },
    homeAddress: {
        homeNumOrLotNum: String,
        streetName: String,
        districtOrTown: String,
        zipCode: String,
        province: String,
        country: String
    },
    currentAddress: {
        homeNumOrLotNum: String,
        streetName: String,
        districtOrTown: String,
        zipCode: String,
        province: String,
        country: String
    },
    permanentAddress: {
        homeNumOrLotNum: String,
        streetName: String,
        districtOrTown: String,
        zipCode: String,
        province: String,
        country: String
    },
    role: {
        type: String,
        default: ''
    },
    permissions: [{
        type: String
    }],
    type: {
        type: String,
        default: "admin"
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
});

module.exports = Admin = mongoose.model("admin", AdminSchema);
