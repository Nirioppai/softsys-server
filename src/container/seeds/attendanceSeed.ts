import { AttendanceModel } from '../attendance/index';
import faker from 'faker';
import dotenv from 'dotenv';

dotenv.config();

const AttendanceSeed = async () => {
    // delete previous attendance on the data base
    await AttendanceModel.deleteMany({});
    console.log('Deleting previous all attendance ....');

    /**
     *  Hold on all values in an array
     *  @TYPES Array of Objects
     */
    let manyAttendance = [];

    // create 10 attendance
    for (let i = 0; i < 10; i++) {
        const attendance = new AttendanceModel({
            employee: '2021-' + faker.datatype.number(9999),
            attendanceStatus: 'Present',
            timeIn: 'sadsadsad',
            timeOut: 'sadsadsad',
            workStatus: 'sadsadsad',
            date: {
                month: 'sadasdas',
                day: 'sadasdas',
                year: 'sadasdas'
            }
        });

        // push generated data to the holder
        manyAttendance.push(attendance);
    }

    // insert many attendance to database
    await AttendanceModel.insertMany(manyAttendance);
    console.log('Seeding many attendance ...');
};

export default AttendanceSeed;
