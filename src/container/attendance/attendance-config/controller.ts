import { Request, Response } from 'express';
import AttendanceConfigService from './service';
import { sendResponse } from '../../../_common/response';

const attendanceConfigService = new AttendanceConfigService();

// GET All Attendance
const getAttendanceConfig = async (req: Request, res: Response) => {
    let result = await attendanceConfigService.getAttendanceConfig();
    sendResponse(res, result);
};
// CREATE/UPDATE One Attendance
const createUpdateAttendanceConfig = async (req: Request, res: Response) => {
    let result = await attendanceConfigService.createUpdateAttendanceConfig(req.body);

    sendResponse(res, result);
};
// DELETE One Attendance
const deleteAttendanceConfig = async (req: Request, res: Response) => {
    let _id = req.params.id;
    let result: object = await attendanceConfigService.deleteAttendanceConfig(_id);
    sendResponse(res, result);
};
export default { getAttendanceConfig, createUpdateAttendanceConfig, deleteAttendanceConfig };
