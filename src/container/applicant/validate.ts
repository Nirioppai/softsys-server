import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { messageBuilder, cleaner } from '../../_common/messages';

const applicantNumber = Joi.string()
    .required()
    .messages(messageBuilder({ field: 'Applicant Number' }));

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

const careerBackground = Joi.array()
    .items(
        Joi.object().keys({
            company: Joi.string()
                .allow('')
                .required()
                .messages(messageBuilder({ field: 'Company' })),
            companyAddress: Joi.string()
                .allow('')
                .required()
                .messages(messageBuilder({ field: 'Company Address' })),
            position: Joi.string()
                .allow('')
                .required()
                .messages(messageBuilder({ field: 'Position' })),
            yearStarted: Joi.string()
                .allow('')
                .required()
                .messages(messageBuilder({ field: 'Year Started' })),
            yearEnded: Joi.string()
                .allow('')
                .required()
                .messages(messageBuilder({ field: 'Year Ended' }))
        })
    )
    .allow('')
    .messages(messageBuilder({ field: 'Career Background' }));

const educationalBackground = Joi.array()
    .items(
        Joi.object().keys({
            school: Joi.string()
                .allow('')
                .required()
                .messages(messageBuilder({ field: 'School' })),
            schoolAddress: Joi.string()
                .allow('')
                .required()
                .messages(messageBuilder({ field: 'School Address' })),
            course: Joi.string()
                .allow('')
                .required()
                .messages(messageBuilder({ field: 'Course' })),
            academicAward: Joi.string()
                .allow('')
                .messages(messageBuilder({ field: 'Academic Award' })),
            yearStarted: Joi.string()
                .allow('')
                .required()
                .messages(messageBuilder({ field: 'Year Started' })),
            yearEnded: Joi.string()
                .allow('')
                .required()
                .messages(messageBuilder({ field: 'Year Ended' }))
        })
    )
    .allow('')
    .messages(messageBuilder({ field: 'Educational Background' }));

const characterReferences = Joi.array()
    .items(
        Joi.object().keys({
            name: Joi.string()
                .allow('')
                .required()
                .messages(messageBuilder({ field: 'Name' })),
            company: Joi.string()
                .allow('')
                .required()
                .messages(messageBuilder({ field: 'Company' })),
            occupation: Joi.string()
                .allow('')
                .required()
                .messages(messageBuilder({ field: 'Occupation' })),
            contact: Joi.object()
                .keys({
                    mobile: Joi.string()
                        .allow('')
                        .required()
                        .messages(messageBuilder({ field: 'Mobile Number' })),
                    email: Joi.string()
                        .allow('')
                        .required()
                        .messages(messageBuilder({ field: 'Email' }))
                })
                .allow('')
                .required()
                .messages(messageBuilder({ field: 'Year Started' }))
        })
    )
    .allow('')
    .messages(messageBuilder({ field: 'Character References' }));

const applicationStatus = Joi.string()
    .allow('')
    .required()
    .messages(messageBuilder({ field: 'Application Status' }));

const desiredPosition = Joi.string()
    .allow('')
    .required()
    .messages(messageBuilder({ field: 'Desired Position' }));

const interviewSchedule = Joi.object()
    .keys({
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
    })
    .required()
    .messages(messageBuilder({ field: 'Interview Schedule' }));

const applicantResult = Joi.string()
    .allow('')
    .required()
    .messages(messageBuilder({ field: 'Applicant Result' }));

const applicantRemarks = Joi.string()
    .allow('')
    .required()
    .messages(messageBuilder({ field: 'Applicant Remarks' }));

const fileAttachments = Joi.array()
    .items(Joi.string())
    .required()
    .messages(messageBuilder({ field: 'File Attachments' }));

const createSchema = Joi.object()
    .keys({
        applicantNumber,
        name,
        dateOfBirth,
        gender,
        contactNumber,
        nationality,
        language,
        characterReferences,
        careerBackground,
        educationalBackground,
        applicationStatus,
        desiredPosition,
        interviewSchedule,
        applicantResult,
        applicantRemarks,
        fileAttachments
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
