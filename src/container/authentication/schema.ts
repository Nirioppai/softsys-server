import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { messageBuilder, cleaner } from '../../_common/messages';

const adminId = Joi.string()
    .required()
    .allow('')
    .messages(messageBuilder({ field: 'Admin ID' }));

const contactNumber = Joi.object()
    .keys({
        mobileNumber: Joi.array()
            .items(Joi.string())
            .required()
            .allow('')
            .messages(messageBuilder({ field: 'Mobile Number' })),
        landLineNumber: Joi.array()
            .items(Joi.string(), Joi.number())
            .required()
            .allow('')
            .messages(messageBuilder({ field: 'Landline Number' }))
    })
    .required()
    .messages(messageBuilder({ field: 'Contact Number' }));

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

const role = Joi.string()
    .allow('')
    .required()
    .messages(messageBuilder({ field: 'Role' }));

const permission = Joi.array()
    .items(Joi.string())
    .required()
    .messages(messageBuilder({ field: 'Permission' }));

const address = Joi.object()
    .keys({
        homeNumOrLotNum: Joi.string()
            .required()
            .allow('')
            .messages(messageBuilder({ field: 'Home number / Lot Number' })),
        streetName: Joi.string()
            .required()
            .allow('')
            .messages(messageBuilder({ field: 'Street Name' })),
        districtOrTown: Joi.string()
            .required()
            .allow('')
            .messages(messageBuilder({ field: 'District / Town' })),
        zipCode: Joi.string()
            .required()
            .allow('')
            .min(4)
            .max(4)
            .messages(messageBuilder({ field: 'Zip Code' })),
        province: Joi.string()
            .required()
            .allow('')
            .messages(messageBuilder({ field: 'Province' })),
        country: Joi.string()
            .required()
            .allow('')
            .messages(messageBuilder({ field: 'Country' }))
    })
    .required();

const password = Joi.string()
    .required()
    .messages(messageBuilder({ field: 'Password' }));

const adminRegisterSchema = Joi.object()
    .keys({
        contactNumber,
        adminId,
        name,
        homeAddress: address.messages(messageBuilder({ field: 'Home Address' })),
        currentAddress: address.messages(messageBuilder({ field: 'Current Address' })),
        permanentAddress: address.messages(messageBuilder({ field: 'Permanent Address' })),
        role,
        permission
    })
    .messages(messageBuilder({ field: '' }));

const loginSchema = Joi.object()
    .keys({
        adminId,
        password
    })
    .messages(messageBuilder({ field: '' }));

const validateRegister = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = adminRegisterSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const cleanError = cleaner(error);
            return res.status(400).json(cleanError);
        }
        next();
    };
};

const validateLogin = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = loginSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const cleanError = cleaner(error);
            return res.status(400).json(cleanError);
        }
        next();
    };
};

export { adminRegisterSchema, validateRegister, validateLogin };
