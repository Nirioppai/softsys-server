import mongoose, { Schema } from 'mongoose';
import IEmployee from './_interface';

const EmployeeSchema: Schema = new Schema(
    {
        employeeId: {
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
            default: 'employee'
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
        },
        employeeInformation: {
            type: Schema.Types.ObjectId,
            ref: 'EmployeeInformation'
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IEmployee>('Employee', EmployeeSchema);
