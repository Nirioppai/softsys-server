import { AttendanceModel } from './index';

class AttendanceService {
    constructor() {}

    async getAll() {
        try {
            // GET All attendance
            let allAttendance: any = await AttendanceModel.find();

            return { successs: true, data: allAttendance, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to GET All Attendance', deeplog: error, code: 400 };
        }
    }

    async getOne(_id: string) {
        // Check if attendance exists
        let isExisting = await AttendanceModel.findById({ _id });
        // Return if none
        if (isExisting === null) return { success: false, message: 'Attendance does not exists', code: 400 };

        try {
            // GET One Attendance
            let attendance: any = await AttendanceModel.findById({ _id });

            return { success: true, data: attendance, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to GET One Attendance', deeplog: error, code: 400 };
        }
    }

    async createOne(attendance: any) {
        try {
            // CREATE One Attendance
            let newAttendance: any = new AttendanceModel(attendance);
            newAttendance.save();

            return { success: true, data: newAttendance, message: 'Attendance Created', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to CREATE One Attendance', deeplog: error, code: 400 };
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

    async updateOne(_id: string, attendance: any) {
        // Check if it exists
        let isExisting = await AttendanceModel.findById({ _id });
        // Return if none
        if (isExisting === null) return { success: false, message: 'Attendance does not exist', code: 400 };

        try {
            // UPDATE Details
            await AttendanceModel.findByIdAndUpdate({ _id }, attendance);
            let updatedAttendance: any = await AttendanceModel.findById({ _id });

            return { success: true, data: updatedAttendance, message: 'Attendance Updated', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to UPDATE Attendance', deeplog: error, code: 400 };
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
