import mongoose, { Schema } from 'mongoose';
import IAttendance from './_interface';

const AttendanceSchema: Schema = new Schema({
    employee: {
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    },
    //absent, late, present
    attendanceStatus: {
        type: String
    },
    timeIn: {
        type: Number
    },
    timeOut: {
        type: String
    },
    //overtime ,early dismissal
    workStatus: {
        type: String
    },
    date: {
        month: {
            type: String
        },
        day: {
            type: String
        },
        year: {
            type: String
        }
    },
    notes: {
        type: String
    }
});

export default mongoose.model<IAttendance>('Attendance', AttendanceSchema);
