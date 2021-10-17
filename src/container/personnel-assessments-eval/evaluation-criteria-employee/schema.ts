import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { messageBuilder, cleaner } from '../../../_common/messages';

const createEmployeeEvaluationSchema = Joi.object()
    .keys({
        employeeId: Joi.string()
            .required()
            .messages(messageBuilder({ field: 'Employee number' })),
        evaluationId: Joi.string()
            .required()
            .messages(messageBuilder({ field: 'Evaluation ID' })),
        scores: Joi.array()
            .items({
                evaluationItemId: Joi.string()
                    .required()
                    .messages(messageBuilder({ field: 'Evaluation item ID' })),
                score: Joi.number()
                    .required()
                    .messages(messageBuilder({ field: 'Score' }))
            })
            .messages(messageBuilder({ field: 'Evaluation Items' })),
        merits: Joi.array().items(Joi.string())
    })
    .messages(messageBuilder({ field: '' }));

const validateEvaluationForm = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = createEmployeeEvaluationSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const cleanError = cleaner(error);
            return res.status(400).json(cleanError);
        }
        next();
    };
};

export { validateEvaluationForm };
