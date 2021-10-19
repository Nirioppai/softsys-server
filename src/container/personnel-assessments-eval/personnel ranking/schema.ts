import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { messageBuilder, cleaner } from '../../../_common/messages';

const createEvaluationSchema = Joi.object()
    .keys({
        evaluationName: Joi.string()
            .required()
            .messages(messageBuilder({ field: 'Evaluation name' })),
        evaluationItems: Joi.array()
            .items({
                category: Joi.string()
                    .required()
                    .messages(messageBuilder({ field: 'Category' })),
                criteria: Joi.string()
                    .required()
                    .messages(messageBuilder({ field: 'Criteria' })),
                weightage: Joi.number()
                    .required()
                    .messages(messageBuilder({ field: 'Weightage' }))
            })
            .messages(messageBuilder({ field: 'Evaluation Items' }))
    })
    .messages(messageBuilder({ field: '' }));

const validateEvaluationForm = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = createEvaluationSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const cleanError = cleaner(error);
            return res.status(400).json(cleanError);
        }
        next();
    };
};

export { validateEvaluationForm };
