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
    calculationSettings: {
        attendanceStatus: {
            type: String
        },
        workStatus: {
            type: String
        }
    },
    holidays: [
        new Schema({
            day: { type: String },
            month: { type: String },
            year: { type: String },
            description: { type: String }
        })
    ]
});

export default mongoose.model<IAttendanceConfig>('attendance-config', AttendanceConfigSchema);
