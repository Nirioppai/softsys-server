import mongoose, { Schema } from 'mongoose';
import IApplication from './_interface';

const ApplicationSchema: Schema = new Schema({
    applicationId: {
        type: String,
        required: true
    },
    employeeDetails: {
        employeeNumber: { type: String },
        fullName: { type: String }
    },
    trainingProgram: {
        type: String,
        required: true
    },
    trainingDate: {
        type: String
    },
    status: { type: String },
    personnelInCharge: {
        type: String,
        required: true
    },
    reason: {
        type: String
    }
});

export default mongoose.model<IApplication>('Application', ApplicationSchema);
