import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { messageBuilder, cleaner } from '../../_common/messages';

const applicationId = Joi.string()
    .required()
    .messages(messageBuilder({ field: 'Applicant ID' }));

const employeeNumber = Joi.string()
    .required()
    .messages(messageBuilder({ field: 'Employee Number' }));
const trainingProgram = Joi.string()
    .required()
    .messages(messageBuilder({ field: 'Training Program' }));

const trainingDate = Joi.string()
    .required()
    .messages(messageBuilder({ field: 'Training Date' }));

const status = Joi.string()
    .required()
    .messages(messageBuilder({ field: 'Status' }));

const personnelInCharge = Joi.string()
    .required()
    .messages(messageBuilder({ field: 'Personnel In Charge' }));

const reason = Joi.string()
    .allow('')
    .required()
    .messages(messageBuilder({ field: 'Reason' }));

const createSchema = Joi.object()
    .keys({
        employeeNumber,
        trainingProgram,
        trainingDate,
        status,
        personnelInCharge
    })
    .messages(messageBuilder({ field: '' }));

const updateSchema = Joi.object()
    .keys({
        trainingProgram,
        trainingDate,
        status,
        personnelInCharge
    })
    .messages(messageBuilder({ field: '' }));

const validateCreate = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = createSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const cleanError = cleaner(error);
            return res.status(400).json(cleanError);
        }
        next();
    };
};

const validateUpdate = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = updateSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const cleanError = cleaner(error);
            return res.status(400).json(cleanError);
        }
        next();
    };
};

export { validateCreate, validateUpdate };
