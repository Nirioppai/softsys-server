import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { messageBuilder, cleaner } from '../../_common/messages';

const skills = Joi.array()
    .items(Joi.string())
    .allow('')
    .messages(messageBuilder({ field: 'Skills' }));

const achievements = Joi.array()
    .items(Joi.string())
    .allow('')
    .messages(messageBuilder({ field: 'Achievements' }));

const careerHighlights = Joi.array()
    .items(Joi.string())
    .allow('')
    .messages(messageBuilder({ field: 'Career Highlights' }));

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

const createInfoSchema = Joi.object()
    .keys({
        skills,
        achievements,
        careerHighlights,
        careerBackground,
        educationalBackground,
        characterReferences,
        applicationStatus,
        desiredPosition,
        interviewSchedule,
        applicantResult,
        applicantRemarks,
        fileAttachments
    })
    .messages(messageBuilder({ field: '' }));

const validateApplicantInfo = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = createInfoSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const cleanError = cleaner(error);
            return res.status(400).json(cleanError);
        }
        next();
    };
};

export { validateApplicantInfo };
