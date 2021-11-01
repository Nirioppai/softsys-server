import { AttendanceConfigModel } from './index';

class AttendanceConfigService {
    constructor() {}

    async getAttendanceConfig() {
        try {
            // GET All attendance via month and year
            const attendanceConfig: any = await AttendanceConfigModel.find();

            return { successs: true, data: attendanceConfig, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to GET Attendance Config', deeplog: error, code: 400 };
        }
    }

    async createUpdateAttendanceConfig(data: any) {
        try {
            // CREATE or UPDATE One Attendance Config
            let isExisting = await AttendanceConfigModel.find();
            let results: any;
            if (isExisting === null) {
                results = new AttendanceConfigModel(data);
                results.save();
            } else {
                // UPDATE Details
                results = await AttendanceConfigModel.findOneAndUpdate({ _id: data._id }, data, {
                    returnOriginal: false
                });
            }
            return { success: true, data: results, message: 'Attendance Config Created/Updated', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to CREATE/UPDATE Attendance Config', deeplog: error, code: 400 };
        }
    }

    async deleteAttendanceConfig(_id: string) {
        try {
            // DELETE Attendance
            await AttendanceConfigModel.findByIdAndDelete({ _id });

            return { success: true, message: 'Attendance Config Deleted', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to DELETE Attendance Config', deeplog: error, code: 400 };
        }
    }
}

export default AttendanceConfigService;
