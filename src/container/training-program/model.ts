import mongoose, { Schema } from 'mongoose';
import ITraining from './_interface';

const ApplicationTrainingSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

export default mongoose.model<ITraining>('Applicant', ApplicationTrainingSchema);
