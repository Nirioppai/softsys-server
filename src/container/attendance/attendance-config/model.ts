import mongoose, { Schema } from 'mongoose';
import IAttendanceConfig from './_interface';

const AttendanceConfigSchema: Schema = new Schema({
    officeHours: {
        startTime: {
            type: String
        },
        endTime: {
            type: String
        }
    },
    lunchBreak: {
        startTime: {
            type: String
        },
        endTime: {
            type: String
        }
    },
    calculationSettings: {},
    holidays: [
        new Schema({
            day: { type: String },
            month: { type: String },
            year: { type: String }
        })
    ]
});

export default mongoose.model<IAttendanceConfig>('AttendanceConfig', AttendanceConfigSchema);
