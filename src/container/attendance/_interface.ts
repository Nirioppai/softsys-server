import { Document } from 'mongoose';

export default interface IAttendance extends Document {
    employee: String;
    attendanceStatus: String;
    timeIn: String;
    timeOut: String;
    workStatus: String;
    date: {
        month: String;
        day: String;
        year: String;
    };
    notes: String;
}
