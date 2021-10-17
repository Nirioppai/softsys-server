import mongoose, { Schema, Document } from 'mongoose';

export type evaluationItemSchema = {
    category: string;
    criteria: string;
    weightage: number;
};

export interface IEvaluationFormSchema extends Document {
    evaluationName: String;
    evaluationItems: evaluationItemSchema[];
}

const evaluationItemModelSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    criteria: {
        type: String,
        required: true
    },
    weightage: {
        type: Number,
        required: true
    }
});

const EvaluationModelSchema: Schema = new Schema({
    evaluationName: {
        type: String,
        required: true
    },
    evaluationItems: [evaluationItemModelSchema]
});

export default mongoose.model<IEvaluationFormSchema>('evaluation', EvaluationModelSchema);
