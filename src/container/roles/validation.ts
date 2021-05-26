import { Request, Response, NextFunction } from 'express';
import Joi, { build } from 'joi';
import { messageBuilder, cleaner } from '../../_common/messages';
import { permissions } from '../authentication/validation';

const name = Joi.string()
    .required()
    .messages(messageBuilder({ field: 'Name' }));

const description = Joi.string()
    .required()
    .messages(messageBuilder({ field: 'Description' }));

const createRole = Joi.object()
    .keys({
        name,
        description,
        permissions
    })
    .messages(messageBuilder({ field: '' }));

const deleteManyRole = Joi.object()
    .keys({
        // since permissions is an array of string
        // we will use this type to set it as the type or the roles
        roles: permissions.messages(messageBuilder({ field: 'Roles' }))
    })
    .messages(messageBuilder({ field: 'Roles' }));

const validateCreate = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = createRole.validate(req.body, { abortEarly: false });
        if (error) {
            const cleanError = cleaner(error);
            return res.status(400).json(cleanError);
        }
        next();
    };
};

const validateDeleteMany = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = deleteManyRole.validate(req.body, { abortEarly: false });
        if (error) {
            const cleanError = cleaner(error);
            return res.status(400).json(cleanError);
        }
        next();
    };
};

export { validateCreate, validateDeleteMany };
