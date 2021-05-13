import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { messageBuilder, cleaner } from '../../_common/messages';

const name = Joi.object().keys({
    firstName: Joi.string()
        .allow('')
        .required()
        .messages(messageBuilder({ field: 'First name' })),
    middleName: Joi.string()
        .allow('')
        .required()
        .messages(messageBuilder({ field: 'Middle name' })),
    lastName: Joi.string()
        .allow('')
        .required()
        .required()
        .messages(messageBuilder({ field: 'Last name' })),
    suffix: Joi.string()
        .allow('')
        .required()
        .messages(messageBuilder({ field: 'Suffix' })),
    title: Joi.string()
        .allow('')
        .required()
        .messages(messageBuilder({ field: 'Title' }))
});

const authSchema = Joi.object().keys({
    name
});

const validate = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = authSchema.validate(req.body, { abortEarly: false });
        const cleanError = cleaner(error);
        if (error) return res.status(400).json(cleanError);
        next();
    };
};

export { authSchema, validate };
