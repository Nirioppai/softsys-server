import { Document } from 'mongoose';

export default interface IAttendance extends Document {
    employee: String;
    month: String;
    year: String;
    monthRecord: {
        attendanceStatus: String;
        timeIn: String;
        timeOut: String;
        workStatus: String;
        day: String;
        notes: String;
    }[];
}
