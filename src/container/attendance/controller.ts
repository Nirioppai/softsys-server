import { Request, Response } from 'express';
import AttendanceService from './service';
import { sendResponse } from '../../_common/response';

const attendanceService = new AttendanceService();
// GET One Attendance
const getOne = async (req: Request, res: Response) => {
    let _id = req.params.id;
    let result: object = await attendanceService.getOne(_id);
    sendResponse(res, result);
};
// GET All Attendance
const getAll = async (req: Request, res: Response) => {
    let result: object = await attendanceService.getAll();
    sendResponse(res, result);
};
// CREATE One Attendance
const createOne = async (req: Request, res: Response) => {
    let body = req.body;
    let result: object = await attendanceService.createOne(body);
    sendResponse(res, result);
};
// CREATE Many Attendance
const createMany = async (req: Request, res: Response) => {
    let body = req.body.items;
    let result: object = await attendanceService.createMany(body);
    sendResponse(res, result);
};
// UPDATE Attendance
const updateOne = async (req: Request, res: Response) => {
    let _id = req.params.id;
    let body = req.body;
    let result: object = await attendanceService.updateOne(_id, body);
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

export default { getAll, getOne, createOne, createMany, updateOne, deleteOne, deleteMany };
