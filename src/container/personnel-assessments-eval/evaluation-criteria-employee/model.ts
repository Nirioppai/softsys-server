import mongoose, { Schema, Document } from 'mongoose';

export type EmployeeEvaluationItemScoreSchema = {
    evaluationItemId: string;
    score: number;
};

export interface IEmployeeEvaluationSchema extends Document {
    employeeId: String;
    evaluationId: String;
    scores: EmployeeEvaluationItemScoreSchema[];
    evaluationItems: String[];
}

const employeeEvaluationScoreSchema = new Schema({
    evaluationItemId: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
});

const EmployeeEvaluationModelSchema: Schema = new Schema({
    employeeId: {
        type: String,
        required: true
    },
    evaluationId: {
        type: Schema.Types.ObjectId,
        ref: 'evaluation'
    },
    scores: [employeeEvaluationScoreSchema],
    merits: [
        {
            type: String
        }
    ]
});

export default mongoose.model<IEmployeeEvaluationSchema>('employee-evaluation', EmployeeEvaluationModelSchema);
