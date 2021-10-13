import mongoose, { Schema } from 'mongoose';
import IApplicant from './_interface';

const ApplicantSchema: Schema = new Schema({
    applicantNumber: {
        type: String,
        required: true
    },
    name: {
        firstName: { type: String },
        middleName: { type: String },
        lastName: { type: String },
        suffix: { type: String }
    },
    gender: {
        type: String
    },
    dateOfBirth: { type: String },
    contactNumber: {
        mobileNumber: [{ type: String }],
        landLineNumber: [{ type: String }],
        emailAddress: [{ type: String }]
    },
    address: {
        homeNumOrLotNum: { type: String },
        streetName: { type: String },
        districtOrTown: { type: String },
        zipCode: { type: String },
        province: { type: String },
        country: { type: String }
    },
    nationality: { type: String },
    language: [{ type: String }]
});

export default mongoose.model<IApplicant>('Applicant', ApplicantSchema);
