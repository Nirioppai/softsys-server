// Models
import { AnyCnameRecord } from 'dns';
import { ApplicantInfoModel } from './index';

/**
 * Module Applicant Info
 * Applicant Info CRUD service
 * Handles the GET POST PUT DELETE of applicant information
 */
class ApplicantInfoService {
    constructor() {}

    async getAllApplicantInfo() {
        // Check if there is any existing applicant
        let isExisting = await ApplicantInfoModel.find();
        // Return if none
        if (isExisting === null) return { success: true, message: 'There are no existing applicant information', code: 200 };

        try {
            // Get All Applicant Informatio
            let applicants: any = await ApplicantInfoModel.find();

            return { successs: true, data: applicants, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to GET All Applicant Information', deeplog: error, code: 400 };
        }
    }

    async getOneApplicantInfo(_id: any) {
        // Check if there is any existing applicant
        let isExisting = await ApplicantInfoModel.findById({ _id });
        // Return if none
        if (isExisting === null) return { success: true, message: 'Applicant Information does not exist', code: 200 };

        try {
            // Get One Applicant
            let applicantInfo: any = await ApplicantInfoModel.findById({ _id });

            return { successs: true, data: applicantInfo, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to GET Applicant Information', deeplog: error, code: 400 };
        }
    }

    async applicantInfoCreate(applicantInfo: any) {
        // Check if there is any existing applicant
        let isExisting = await ApplicantInfoModel.find({ applicantNumber: applicantInfo.applicantNumber });
        // Return if none
        if (isExisting.length > 0) return { success: false, message: 'Applicant already exists', code: 400 };

        try {
            const applicant: any = new ApplicantInfoModel(applicantInfo);
            await applicant.save();

            return { successs: true, data: applicant, message: 'Applicant Information Saved', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to Create Applicant Information', deeplog: error, code: 400 };
        }
    }
}

export default ApplicantInfoService;
