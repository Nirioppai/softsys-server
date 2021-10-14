import { Request, Response } from 'express';
// models
import OrganizationChartServices from './_services';
// utilities
import { sendResponse } from '../../_common/response';

const employeeService = new OrganizationChartServices();

const getAll = async (req: Request, res: Response) => {
    let result: object = await employeeService.getAllOrgChart();
    sendResponse(res, result);
};

const getOne = async (req: Request, res: Response) => {
    let result: object = await employeeService.getOneOrgChart(req.params.id);
    sendResponse(res, result);
};

// create one org chart
const createOne = async (req: Request, res: Response) => {
    let result: object = await employeeService.createOneOrgchart(req.body);
    sendResponse(res, result);
};

const updateOne = async (req: Request, res: Response) => {
    let results: object = await employeeService.updateOneOrgchart(req.body, req.params.id);
    sendResponse(res, results);
};

const deleteOne = async (req: Request, res: Response) => {
    let results: object = await employeeService.deleteOneOrgchart(req.params.id);
    sendResponse(res, results);
};

const deleteMany = async (req: Request, res: Response) => {
    let results: object = await employeeService.deleteManyOrgchart(req.body.ids);
    sendResponse(res, results);
};

export default { createOne, getAll, getOne, updateOne, deleteMany, deleteOne };
