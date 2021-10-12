import { Document } from 'mongoose';

export default interface IApplicant extends Document {
    applicantNumber: String;
    name: {
        firstName: String;
        middleName: String;
        lastName: String;
        suffix: String;
    };
    gender: String;
    dateOfBirth: String;
    contactNumber: {
        mobileNumber: Array<String>;
        landLineNumber: Array<String>;
        emailAddress: Array<String>;
    };
    address: {
        homeNumOrLotNum: String;
        streetName: String;
        districtOrTown: String;
        zipCode: String;
        province: String;
        country: String;
    };
    nationality: String;
    language: [{ type: String }];
}
