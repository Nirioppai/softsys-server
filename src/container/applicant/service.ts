// Models
import { ApplicantModel } from './index';

/**
 * Module Applicant
 * Applicant CRUD service
 * Handles the GET POST PUT DELETE of applicant accounts
 */
class ApplicantService {
    constructor() {}

    async getAllApplicant() {
        // Check if there is any existing applicant
        let isExisting = await ApplicantModel.find();
        // Return if none
        if (isExisting === null) return { success: true, message: 'There are no existing applicants', code: 200 };

        try {
            // Get All Applicants
            let applicants: any = await ApplicantModel.find();

            return { successs: true, data: applicants, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get All Applicants', deeplog: error, code: 400 };
        }
    }

    async getOneApplicant(_id: any) {
        // Check if there is any existing applicant
        let isExisting = await ApplicantModel.findById({ _id });
        // Return if none
        if (isExisting === null) return { success: true, message: 'Applicant does not exist', code: 200 };

        try {
            // Get One Applicant
            let applicant: any = await ApplicantModel.findById({ _id });

            return { successs: true, data: applicant, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get Applicant', deeplog: error, code: 400 };
        }
    }

    async applicantCreate(applicantInfo: any) {
        // Check if there is any existing applicant
        let isExisting = await ApplicantModel.find({ applicantNumber: applicantInfo.applicantNumber });
        // Return if none
        if (isExisting.length > 0) return { success: false, message: 'Applicant already exists', code: 400 };

        try {
            const applicant: any = new ApplicantModel(applicantInfo);
            await applicant.save();

            return { successs: true, data: applicant, message: 'Applicant Created', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get All Applicants', deeplog: error, code: 400 };
        }
    }
}

export default ApplicantService;
