import { Request, Response } from 'express';
// models
import EmployeeService from './service';
// utilities
import { sendResponse } from '../../_common/response';

const employeeService = new EmployeeService();
// get all employee
const getAll = async (req: Request, res: Response) => {
    let result: object = await employeeService.getAll();
    sendResponse(res, result);
};
// get employee
const getOne = async (req: Request, res: Response) => {
    let result: object = await employeeService.getOne(req.params.id);
    sendResponse(res, result);
};
// update employee
const updateOne = async (req: Request, res: Response) => {
    let result: object = await employeeService.updateOne(req.params.id, req.body);
    sendResponse(res, result);
};
// delete employee
const deleteOne = async (req: Request, res: Response) => {
    const _id: string = req.params.id;
    let result: object = await employeeService.deleteOne(_id);
    sendResponse(res, result);
};

// delete Many employee
const deleteMany = async (req: Request, res: Response) => {
    let body = req.body.items;
    let result: object = await employeeService.deleteMany(body);
    sendResponse(res, result);
};
export default { getAll, getOne, updateOne, deleteOne, deleteMany };
