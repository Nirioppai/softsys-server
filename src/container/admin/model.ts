import mongoose, { Schema } from 'mongoose';
import IAdmin from './_interface';

const AdminSchema: Schema = new Schema(
    {
        adminId: {
            type: String
        },
        name: {
            firstName: { type: String },
            middleName: { type: String },
            lastName: { type: String },
            title: { type: String },
            suffix: { type: String }
        },
        gender: {
            type: { type: String },
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
            type: { type: String },
            default: ''
        },
        permissions: [{ type: String }],
        type: {
            type: String,
            default: 'admin'
        },
        nationality: {
            type: { type: String },
            default: ''
        },
        isActive: {
            type: { type: Boolean },
            default: false
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IAdmin>('Admin', AdminSchema);
