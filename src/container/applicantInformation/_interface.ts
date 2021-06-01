import { Document } from 'mongoose';

export default interface IApplicantInformation extends Document {
    skills: [{ type: String }];
    achievements: [{ type: String }];
    careerHighlights: [{ type: String }];
    careerBackground: [
        {
            company: String;
            companyAddress: String;
            position: String;
            yearStarted: String;
            yearEnded: String;
        }
    ];
    educationalBackground: [
        {
            school: String;
            schoolAddress: String;
            course: String;
            academicAward: [{ type: String }];
            yearStarted: String;
            yearEnded: String;
        }
    ];
    characterReferences: [
        {
            name: String;
            company: String;
            occupation: String;
            contact: {
                mobile: String;
                email: String;
            };
        }
    ];
    applicationStatus: String;
    desiredPosition: String;
    interviewSchedule: {
        date: {
            month: String;
            day: String;
            year: String;
        };
        time: String;
    };
    interviewerId: String;
    applicationResult: String;
    applicationRemarks: String;
    fileAttachments: [{ type: String }];
}
