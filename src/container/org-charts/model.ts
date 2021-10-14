import mongoose, { Schema } from 'mongoose';

const personSchema = new Schema({
    id: {
        type: Number,
        required: false
    },
    avatar: {
        type: String,
        required: false
    },
    department: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    totalReports: {
        type: Number,
        required: false
    }
});

const childrenSchema = new Schema({
    id: {
        type: Number,
        required: false
    },
    person: personSchema,
    hasChild: {
        type: Boolean,
        default: false
    },
    hasParent: {
        type: Boolean,
        default: false
    },
    isHighlight: {
        type: Boolean,
        default: false
    }
});

const organizationChartSchema: Schema = new Schema({
    id: {
        type: Number,
        required: true
    },
    person: personSchema,
    hasChild: {
        type: Boolean,
        default: false
    },
    hasParent: {
        type: Boolean,
        default: false
    },
    isHighlight: {
        type: Boolean,
        default: false
    },
    children: [childrenSchema]
});

childrenSchema.add({ children: [organizationChartSchema] });

export default mongoose.model('organization-chart', organizationChartSchema);
