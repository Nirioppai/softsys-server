import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { messageBuilder, cleaner } from '../../_common/messages';

const applicantNumber = Joi.string()
    .required()
    .messages(messageBuilder({ field: 'Applicant Number' }));

const applicantInfoId = Joi.string()
    .allow('')
    .required()
    .messages(messageBuilder({ field: 'Applicant Information ID' }));

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
        .messages(messageBuilder({ field: 'Suffix' }))
});

const gender = Joi.string()
    .allow('')
    .required()
    .messages(messageBuilder({ field: 'Gender' }));

const dateOfBirth = Joi.object().keys({
    month: Joi.string()
        .allow('')
        .required()
        .messages(messageBuilder({ field: 'Month' })),
    day: Joi.string()
        .allow('')
        .required()
        .messages(messageBuilder({ field: 'Day' })),
    year: Joi.string()
        .allow('')
        .required()
        .messages(messageBuilder({ field: 'Year' }))
});

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
            .messages(messageBuilder({ field: 'Landline Number' })),
        emailAddress: Joi.array()
            .items(Joi.string(), Joi.number())
            .required()
            .allow('')
            .messages(messageBuilder({ field: 'Email Address' }))
    })
    .required()
    .messages(messageBuilder({ field: 'Contact Number' }));

const nationality = Joi.string()
    .allow('')
    .required()
    .messages(messageBuilder({ field: 'Nationality' }));

const language = Joi.array()
    .required()
    .messages(messageBuilder({ field: 'Password' }));

const createSchema = Joi.object()
    .keys({
        applicantNumber,
        applicantInfoId,
        name,
        gender,
        contactNumber,
        nationality,
        language
    })
    .messages(messageBuilder({ field: '' }));

const validateApplicant = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = createSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const cleanError = cleaner(error);
            return res.status(400).json(cleanError);
        }
        next();
    };
};

export { validateApplicant };
