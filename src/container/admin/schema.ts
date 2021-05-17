import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { messageBuilder, cleaner } from '../../_common/messages';
import { contactNumber, adminId, nationality, address, role, permissions } from '../authentication/schema';

const updateSchema = Joi.object()
    .keys({
        contactNumber,
        adminId,
        nationality,
        homeAddress: address.messages(messageBuilder({ field: 'Home Address' })),
        currentAddress: address.messages(messageBuilder({ field: 'Current Address' })),
        permanentAddress: address.messages(messageBuilder({ field: 'Permanent Address' })),
        role,
        permissions
    })
    .messages(messageBuilder({ field: '' }));

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

export { validateUpdate };
