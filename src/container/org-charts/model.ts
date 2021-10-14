import mongoose, { Schema } from 'mongoose';

const personSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    totalReports: {
        type: Number,
        required: true
    }
});

const childrenSchema = new Schema({
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

export default mongoose.model('organization-chart', organizationChartSchema);
