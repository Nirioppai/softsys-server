import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { messageBuilder, cleaner } from '../../_common/messages';

const employee = Joi.string()
    .required()
    .messages(messageBuilder({ field: 'Employee' }));

const employment = Joi.object()
    .keys({
        classification: Joi.string()
            .required()
            .allow('')
            .messages(messageBuilder({ field: 'Employment Classification' })),
        tenureShip: Joi.string()
            .required()
            .allow('')
            .messages(messageBuilder({ field: 'Employment Tenure Ship' }))
    })
    .required()
    .messages(messageBuilder({ field: 'Employment' }));

const employmentHistory = Joi.object()
    .keys({
        employmentStart: Joi.date()
            .allow('')
            .required()
            .messages(messageBuilder({ field: 'Employment Start' })),
        employmentEnd: Joi.date()
            .allow('')
            .required()
            .messages(messageBuilder({ field: 'Employment End' })),
        contractStart: Joi.date()
            .allow('')
            .required()
            .messages(messageBuilder({ field: 'Contract Start' })),
        contractEnd: Joi.date()
            .allow('')
            .required()
            .messages(messageBuilder({ field: 'Contract End' })),
        probationStart: Joi.date()
            .allow('')
            .required()
            .messages(messageBuilder({ field: 'Probation Start' })),
        probationEnd: Joi.date()
            .allow('')
            .required()
            .messages(messageBuilder({ field: 'Probation End' })),
        regularizationStart: Joi.date()
            .allow('')
            .required()
            .messages(messageBuilder({ field: 'RegularizationStart' })),
        regularizationEnd: Joi.date()
            .allow('')
            .required()
            .messages(messageBuilder({ field: 'Regularization End' }))
    })
    .required()
    .messages(messageBuilder({ field: 'Employment History' }));
const department = Joi.object()
    .keys({
        departmentId: Joi.string()
            .allow('')
            .required()
            .messages(messageBuilder({ field: 'Department ID' })),
        unit: Joi.string()
            .allow('')
            .required()
            .messages(messageBuilder({ field: 'Unit' })),
        departmentName: Joi.string()
            .allow('')
            .required()
            .messages(messageBuilder({ field: 'Department Name' })),
        office: Joi.string()
            .allow('')
            .required()
            .messages(messageBuilder({ field: 'Office' }))
    })
    .required()
    .messages(messageBuilder({ field: 'Department' }));

const governmentIssuedNumbers = Joi.object()
    .keys({
        sss: Joi.string()
            .allow('')
            .required()
            .messages(messageBuilder({ field: 'SSS' })),
        gsis: Joi.string()
            .allow('')
            .required()
            .messages(messageBuilder({ field: 'GSIS' })),
        tin: Joi.string()
            .allow('')
            .required()
            .messages(messageBuilder({ field: 'TIN' })),
        philhealth: Joi.string()
            .allow('')
            .required()
            .messages(messageBuilder({ field: 'PhilHealth' })),
        pagibig: Joi.string()
            .allow('')
            .required()
            .messages(messageBuilder({ field: 'Pag-IBIG' })),
        universalId: Joi.string()
            .allow('')
            .required()
            .messages(messageBuilder({ field: 'Universal ID' })),
        dln: Joi.string()
            .allow('')
            .required()
            .messages(messageBuilder({ field: 'Driver License' })),
        prc: Joi.string()
            .allow('')
            .required()
            .messages(messageBuilder({ field: 'PRC' }))
    })
    .required()
    .messages(messageBuilder({ field: 'Government Issued Numbers' }));
const immediateSuperior = Joi.string()
    .allow('')
    .required()
    .messages(messageBuilder({ field: 'Immediate Superior' }));

const civilStatus = Joi.string()
    .allow('')
    .required()
    .messages(messageBuilder({ field: 'Civil Status' }));

const emailAddresses = Joi.object()
    .keys({
        email1: Joi.string()
            .allow('')
            .email()
            .max(256)
            .required()
            .messages(messageBuilder({ field: 'Primary Email' })),
        email2: Joi.string()
            .allow('')
            .email()
            .max(256)
            .required()
            .messages(messageBuilder({ field: 'Secondary Email' }))
    })
    .required()
    .messages(messageBuilder({ field: 'Email Address' }));

const religion = Joi.string()
    .allow('')
    .required()
    .messages(messageBuilder({ field: 'Religion' }));

const employeeInformationSchema = Joi.object()
    .keys({
        employee,
        employment,
        employmentHistory,
        department,
        governmentIssuedNumbers,
        immediateSuperior,
        civilStatus,
        emailAddresses,
        religion
    })
    .messages(messageBuilder({ field: '' }));

const validation = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = employeeInformationSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const cleanError = cleaner(error);
            return res.status(400).json(cleanError);
        }
        next();
    };
};

export { employeeInformationSchema, validation };
