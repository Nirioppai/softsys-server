import mongoose, { Schema } from 'mongoose';
import IAttendance from './_interface';

const AttendanceSchema: Schema = new Schema({
    employee: {
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    },
    month: {
        type: String
    },
    year: {
        type: String
    },
    monthRecord: [
        new Schema({
            //absent, late, present
            day: {
                type: String
            },
            attendanceStatus: {
                type: String
            },
            timeIn: {
                type: String
            },
            timeOut: {
                type: String
            },
            //overtime ,early dismissal
            workStatus: {
                type: String
            },
            notes: {
                type: String
            }
        })
    ]
});

export default mongoose.model<IAttendance>('Attendance', AttendanceSchema);
