import { Document } from 'mongoose';

export default interface IApplication extends Document {
    applicationId: String;
    employeeDetails: {
        employeeNumber: String;
        fullName: String;
    };
    trainingProgram: String;
    trainingDate: String;
    status: String;
    personelInCharge: String;
    reason: String;
}
