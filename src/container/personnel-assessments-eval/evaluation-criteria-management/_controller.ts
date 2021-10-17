import { Request, Response } from 'express';
// models
import PersonnelAssessmentAdminServices from './_services';
// utilities
import { sendResponse } from '../../../_common/response';

const personnelAssessmentAdminService = new PersonnelAssessmentAdminServices();

const getAll = async (req: Request, res: Response) => {
    let result: object = await personnelAssessmentAdminService.getAllEvaluationForm();
    sendResponse(res, result);
};

const getOne = async (req: Request, res: Response) => {
    let result: object = await personnelAssessmentAdminService.getOneEvaluationForm(req.params.id);
    sendResponse(res, result);
};

// create one org chart
const createOne = async (req: Request, res: Response) => {
    let result: object = await personnelAssessmentAdminService.createOneEvaluationForm(req.body);
    sendResponse(res, result);
};

const updateOne = async (req: Request, res: Response) => {
    let results: object = await personnelAssessmentAdminService.updateOneEvaluationForm(req.body, req.params.id);
    sendResponse(res, results);
};

const deleteOne = async (req: Request, res: Response) => {
    let results: object = await personnelAssessmentAdminService.deleteOneEvaluationForm(req.params.id);
    sendResponse(res, results);
};

const deleteMany = async (req: Request, res: Response) => {
    let results: object = await personnelAssessmentAdminService.deleteManyEvaluationForm(req.body.ids);
    sendResponse(res, results);
};

export default { createOne, getAll, getOne, updateOne, deleteMany, deleteOne };
