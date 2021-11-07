import { AttendanceModel } from '../attendance/index';
import faker from 'faker';
import dotenv from 'dotenv';
import { EmployeeModel } from '../employee';
import { AttendanceConfigModel } from '../attendance/attendance-config';

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

    let employees = await EmployeeModel.find();
    let monthRecord = [];
    let attendanceStatusExamples = ['Present', 'Late', 'Absent'];
    let workStatusExamples = ['Overtime', 'Early dismissal', 'Normal'];
    for (let i = 1; i <= 30; i++) {
        monthRecord.push({
            day: `${i}`,
            attendanceStatus:
                attendanceStatusExamples[
                    faker.datatype.number({
                        min: 0,
                        max: 2
                    })
                ],
            workStatus:
                workStatusExamples[
                    faker.datatype.number({
                        min: 0,
                        max: 2
                    })
                ],
            timeIn: '08:00',
            timeOut: '18:00'
        });
    }
    let listOfMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // create 10 attendance
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 10; j++) {
            const attendance = new AttendanceModel({
                employee: employees[j]._id,
                month: listOfMonths[i],
                year: '2021',
                monthRecord
            });
            // push generated data to the holder
            manyAttendance.push(attendance);
        }
    }
    const attendanceConfig = {
        officeHours: {
            startTime: '08:00',
            endTime: '17:00'
        },
        lunchBreak: {
            startTime: '12:00',
            endTime: '13:00'
        },
        calculationSettings: {
            attendanceStatus: 'officeHours',
            workStatus: 'normal'
        },
        holidays: [
            {
                day: '1',
                month: 'january',
                year: '2021',
                description: ''
            },
            {
                day: '14',
                month: 'february',
                year: '2021',
                description: ''
            }
        ]
    };
    // insert many attendance to database
    console.log('Seeding many attendance ...');
    await AttendanceModel.insertMany(manyAttendance);
    console.log('Attendances seeded.');

    // insert attendance config
    console.log('Seeding attendance config ...');
    await AttendanceConfigModel.create(attendanceConfig);
    console.log('Attendance config seeded.');
};

export default AttendanceSeed;
