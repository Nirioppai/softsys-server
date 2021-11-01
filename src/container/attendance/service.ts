import { AttendanceModel } from './index';

class AttendanceService {
    constructor() {}

    async getAllForAO(month: string, year: string, employee?: string) {
        try {
            // GET All attendance via month and year
            let allAttendance: any;
            if (employee) {
                allAttendance = await AttendanceModel.findOne({ month, year, employee });
            } else {
                allAttendance = await AttendanceModel.find({ month, year });
            }

            return { successs: true, data: allAttendance, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to GET All Attendance for Attendance Overview', deeplog: error, code: 400 };
        }
    }
    async getAllForDM(day: string, month: string, year: string, employee?: string) {
        try {
            // GET All attendance
            let allAttendance: any;
            const results: any = [];
            if (employee) {
                allAttendance = await AttendanceModel.find({ month, year, employee });
            } else {
                allAttendance = await AttendanceModel.find({ month, year });
            }

            allAttendance.forEach((item: any) => {
                item.monthRecord.every((item2: any) => {
                    if (item2.day === day) {
                        results.push({
                            employee: item.employee,
                            month,
                            year,
                            ...item2
                        });
                        return false;
                    } else {
                        return true;
                    }
                });
            });
            return { successs: true, data: results, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to GET All Attendance for Daily Management', deeplog: error, code: 400 };
        }
    }

    async createOneForAO(data: any) {
        try {
            // CREATE or UPDATE One Attendance for Attendance Overview
            const { month, year, employee } = data;
            let isExisting = await AttendanceModel.findOne({ month, year, employee });
            let results: any;
            if (isExisting === null) {
                results = new AttendanceModel(data);
                results.save();
            } else {
                // UPDATE Details
                results = await AttendanceModel.findOneAndUpdate({ month, year, employee }, data, {
                    returnOriginal: false
                });
            }
            return { success: true, data: results, message: 'Attendance for AO Created/Updated', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to CREATE/UPDATE One Attendance for AO', deeplog: error, code: 400 };
        }
    }

    //if not exisiting create, else update
    async createOneForDM(data: any) {
        try {
            const { month, year, employee, ...newAttendance } = data;
            // CREATE One Attendance for Daily Management
            const attendanceData: any = await AttendanceModel.findOne({ month, year, employee });
            const monthRecord = attendanceData.monthRecord;
            const dayIdx = monthRecord.findindex((obj: any) => obj.day === newAttendance.day);
            if (dayIdx != -1) {
                monthRecord[dayIdx] = newAttendance;
            } else {
                monthRecord.push(newAttendance);
            }

            return { success: true, data: newAttendance, message: 'Attendance for DM Created/Updated', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to CREATE/UPDATE One Attendance for DM', deeplog: error, code: 400 };
        }
    }

    async createMany(manyAttendance: any) {
        try {
            // CREATE Many Attendance
            let newManyAttendance = AttendanceModel.insertMany(manyAttendance);

            return { success: true, data: newManyAttendance, message: 'Many Attendance Created', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to CREATE Many Attendance', deeplog: error, code: 400 };
        }
    }

    async deleteOne(_id: string) {
        // Check if it exists
        let isExisting = await AttendanceModel.findById({ _id });
        // Return if none
        if (isExisting === null) return { success: false, message: 'Attendance does not exist', code: 400 };

        try {
            // DELETE Attendance
            await AttendanceModel.findByIdAndDelete({ _id });

            return { success: true, message: 'Attendance Deleted', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to DELETE One Attendance', deeplog: error, code: 400 };
        }
    }

    async deleteMany(idsToBeDeleted: Array<String>) {
        try {
            await AttendanceModel.deleteMany({ _id: { $in: idsToBeDeleted } });
            return { success: true, message: 'Many Attendance Deleted', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to DELETE Many Attendance', deeplog: error, code: 400 };
        }
    }
}

export default AttendanceService;
