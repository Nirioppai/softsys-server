import { Request, Response } from 'express';
import AttendanceService from './service';
import { sendResponse } from '../../_common/response';

const attendanceService = new AttendanceService();

// GET All Attendance
const getAll = async (req: Request, res: Response) => {
    let result;
    if (req.query) {
        const { day, month, year, employee, attendance } = req.query;
        result =
            attendance === 'attendance-overview'
                ? await attendanceService.getAllForAO(month as string, year as string, employee as string)
                : await attendanceService.getAllForDM(day as string, month as string, year as string, employee as string);
    }
    sendResponse(res, result);
};
// CREATE One Attendance
const createOne = async (req: Request, res: Response) => {
    const { attendance, ...body } = req.body;
    let result;
    if (attendance) {
        result = attendance === 'attendance-overview' ? await attendanceService.createOneForAO(body) : await attendanceService.createOneForDM(body);
    }

    sendResponse(res, result);
};
// CREATE Many Attendance
const createMany = async (req: Request, res: Response) => {
    let body = req.body.items;
    let result: object = await attendanceService.createMany(body);
    sendResponse(res, result);
};
// DELETE One Attendance
const deleteOne = async (req: Request, res: Response) => {
    let _id = req.params.id;
    let result: object = await attendanceService.deleteOne(_id);
    sendResponse(res, result);
};
// DELETE Many Attendance
const deleteMany = async (req: Request, res: Response) => {
    let body = req.body.items;
    let result: object = await attendanceService.deleteMany(body);
    sendResponse(res, result);
};

export default { getAll, createOne, createMany, deleteOne, deleteMany };
