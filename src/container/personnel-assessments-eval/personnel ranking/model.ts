import mongoose, { Schema, Document } from 'mongoose';

export interface IPersonnelRankingSchema extends Document {
    rankingName: string;
    employees: [
        {
            employeeId: String;
            averageScore: String;
            merits: String[];
        }
    ];
}

const PersonnelRankingSchema: Schema = new Schema({
    employeeId: {
        type: Schema.Types.ObjectId,
        required: 'Employee'
    },
    averageScore: {
        type: Number,
        requried: true
    },
    merits: [String]
});

const PersonnelRankingModelSchema: Schema = new Schema({
    rankingName: {
        type: String,
        required: true
    },
    employees: [PersonnelRankingSchema]
});

export default mongoose.model<IPersonnelRankingSchema>('personnel-ranking', PersonnelRankingModelSchema);
