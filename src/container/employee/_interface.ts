import { Document } from 'mongoose';
export default interface IEmployee extends Document {
    employeeId: String;
    name: {
        firstName: String;
        middleName: String;
        lastName: String;
        title: String;
        suffix: String;
    };
    gender: String;
    dateOfBirth: String,
    contactNumber: {
        mobileNumber: Array<String>;
        landLineNumber: Array<String>;
    };
    homeAddress: {
        homeNumOrLotNum: String;
        streetName: String;
        districtOrTown: String;
        zipCode: String;
        province: String;
        country: String;
    };
    currentAddress: {
        homeNumOrLotNum: String;
        streetName: String;
        districtOrTown: String;
        zipCode: String;
        province: String;
        country: String;
    };
    permanentAddress: {
        homeNumOrLotNum: String;
        streetName: String;
        districtOrTown: String;
        zipCode: String;
        province: String;
        country: String;
    };
    role: String;
    permissions: Array<Object>;
    type: String;
    nationality: String;
    isActive: Boolean;
    password: String;
}
