import mongoose, { Schema } from 'mongoose';

const childrenSchema = new Schema({
    id: {
        type: Number,
        required: false
    },
    label: {
        type: String,
        required: true
    }
});

const organizationChartSchema: Schema = new Schema({
    id: {
        type: Number,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    children: [childrenSchema]
});

childrenSchema.add({ children: [organizationChartSchema] });

export default mongoose.model('organization-chart', organizationChartSchema);
