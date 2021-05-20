import { Request, Response } from 'express';
// models
import EmployeeInformationService from './service';
// utilities
import { sendResponse } from '../../_common/response';

const employeeInformationService = new EmployeeInformationService();
// get all employee information
const getAllEmployeeInformation = async (req: Request, res: Response) => {
    let result: object = await employeeInformationService.getAllEmployeeInformations();
    sendResponse(res, result);
};
// get employee information
const getEmployeeInformation = async (req: Request, res: Response) => {
    let result: object = await employeeInformationService.getEmployeeInformations(req.params.id);
    sendResponse(res, result);
};
// add employee information
const addEmployeeInformation = async (req: Request, res: Response) => {
    let result: object = await employeeInformationService.addEmployeeInformations(req.body, req.body.employee);
    sendResponse(res, result);
};
// update employee information
const updateEmployeeInformation = async (req: Request, res: Response) => {
    let result: object = await employeeInformationService.updateEmployeeInformations(req.params.id, req.body, req.body.employee);
    sendResponse(res, result);
};
// delete employee information
const deleteEmployeeInformation = async (req: Request, res: Response) => {
    let result: object = await employeeInformationService.deleteEmployeeInformations(req.params.id);
    sendResponse(res, result);
};

export default { getAllEmployeeInformation, addEmployeeInformation, getEmployeeInformation, updateEmployeeInformation, deleteEmployeeInformation };
