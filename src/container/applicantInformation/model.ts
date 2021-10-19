import mongoose, { Schema } from 'mongoose';
import IApplicantInfo from './_interface';

const ApplicantInfoSchema: Schema = new Schema({
    applicantNumber: { type: Schema.Types.ObjectId, ref: 'Applicant' },
    skills: [{ type: String }],
    achievements: [{ type: String }],
    careerHighlights: [{ type: String }],
    careerBackground: [
        {
            company: { type: String },
            companyAddress: { type: String },
            position: { type: String },
            yearStarted: { type: String },
            yearEnded: { type: String }
        }
    ],
    educationalBackground: [
        {
            school: { type: String },
            schoolAddress: { type: String },
            course: { type: String },
            academicAward: [{ type: String }],
            yearStarted: { type: String },
            yearEnded: { type: String }
        }
    ],
    characterReferences: [
        {
            name: { type: String },
            company: { type: String },
            occupation: { type: String },
            contact: {
                mobile: { type: String },
                email: { type: String }
            }
        }
    ],
    applicationStatus: { type: String },
    desiredPosition: { type: String },
    interviewSchedule: {
        type: String
    },
    interviewerId: { type: String },
    applicationResult: { type: String },
    applicationRemarks: { type: String },
    fileAttachments: [{ type: String }]
});

export default mongoose.model<IApplicantInfo>('ApplicantInfo', ApplicantInfoSchema);
