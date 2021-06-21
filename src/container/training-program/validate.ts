import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { messageBuilder, cleaner } from '../../_common/messages';

const name = Joi.string()
    .required()
    .messages(messageBuilder({ field: 'Name' }));

const description = Joi.string()
    .required()
    .messages(messageBuilder({ field: 'Description' }));

const createSchema = Joi.object()
    .keys({
        name,
        description
    })
    .messages(messageBuilder({ field: '' }));

const updateSchema = Joi.object()
    .keys({
        name,
        description
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
