import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { messageBuilder, cleaner } from '../../../_common/messages';

const createRankingListSchema = Joi.object()
    .keys({
        rankingName: Joi.string()
            .required()
            .messages(messageBuilder({ field: 'Employee ID' })),
        employees: Joi.array()
            .items({
                employeeId: Joi.string()
                    .required()
                    .messages(messageBuilder({ field: 'Category' })),
                averageScore: Joi.number()
                    .required()
                    .messages(messageBuilder({ field: 'Ranking Score' })),
                merits: Joi.array().items(Joi.string())
            })
            .messages(messageBuilder({ field: 'Ranking List' }))
    })
    .messages(messageBuilder({ field: '' }));

const validateRankingList = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = createRankingListSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const cleanError = cleaner(error);
            return res.status(400).json(cleanError);
        }
        next();
    };
};

export { validateRankingList };
