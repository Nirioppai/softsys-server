import { Request, Response } from 'express';
// models
import EmployeeEvaluationServices from './_services';
// utilities
import { sendResponse } from '../../../_common/response';

const employeeEvaluationService = new EmployeeEvaluationServices();

const getAll = async (req: Request, res: Response) => {
    let result: object = await employeeEvaluationService.getAllEvaluationForm();
    sendResponse(res, result);
};

const getOne = async (req: Request, res: Response) => {
    let result: object = await employeeEvaluationService.getOneEvaluationForm(req.params.id);
    sendResponse(res, result);
};

// create one org chart
const createOne = async (req: Request, res: Response) => {
    let result: object = await employeeEvaluationService.createOneEvaluationForm(req.body);
    sendResponse(res, result);
};

const updateOne = async (req: Request, res: Response) => {
    let results: object = await employeeEvaluationService.updateOneEvaluationForm(req.body, req.params.id);
    sendResponse(res, results);
};

const deleteOne = async (req: Request, res: Response) => {
    let results: object = await employeeEvaluationService.deleteOneEvaluationForm(req.params.id);
    sendResponse(res, results);
};

const deleteMany = async (req: Request, res: Response) => {
    let results: object = await employeeEvaluationService.deleteManyEvaluationForm(req.body.ids);
    sendResponse(res, results);
};

export default { createOne, getAll, getOne, updateOne, deleteMany, deleteOne };
