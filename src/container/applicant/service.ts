// Models
import { ApplicantModel } from './index';
import { ApplicantInfoModel } from '../applicantInformation/index';
import { generateApplicantNumber } from '../../_common/generateApplicantNumber';
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
            const data = await ApplicantInfoModel.find({}).populate('applicantNumber');
            return { successs: true, data: data, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get All Applicants', deeplog: error, code: 400 };
        }
    }

    async getOneApplicant(_id: any) {
        // Check if there is any existing applicant
        let isExisting = await ApplicantModel.findById(_id);
        // Return if none
        if (isExisting === null) return { success: true, message: 'Applicant does not exist', code: 200 };

        try {
            // Get One Applicant
            let applicant: any = await ApplicantModel.findById(_id);
            let info: any = await ApplicantInfoModel.find({ applicantNumber: applicant.applicantNumber }, { applicantNumber: 0 });
            let items: any = { applicant, info };

            return { successs: true, data: items, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get Applicant', deeplog: error, code: 400 };
        }
    }

    async applicantCreate(applicantInfo: any) {
        const applicantNumber = generateApplicantNumber();

        applicantInfo.applicantNumber = applicantNumber;

        // Check if there is any existing applicant
        let isExisting = await ApplicantModel.find({ applicantNumber: applicantInfo.applicantNumber });
        // Return if none
        if (isExisting.length > 0) return { success: false, message: 'Applicant already exists', code: 400 };

        try {
            const applicant: any = new ApplicantModel(applicantInfo);
            const info: any = new ApplicantInfoModel({ ...applicantInfo, applicantNumber: applicant._id });
            await applicant.save();
            await info.save();

            return { successs: true, message: 'Applicant Created', code: 200, data: applicant };
        } catch (error) {
            return { success: false, message: 'Failed to CREATE Applicant', deeplog: error, code: 400 };
        }
    }

    async applicantDeleteOne(_id: string) {
        // Check if there is any existing applicant
        let isExisting = await ApplicantModel.findById(_id);
        // Return if none
        if (isExisting === null) return { success: false, message: 'Applicant does not exists', code: 400 };

        try {
            const applicant: any = await ApplicantModel.findById(_id);

            await ApplicantModel.findByIdAndDelete({ _id });
            await ApplicantInfoModel.findOneAndDelete({ applicantNumber: applicant._id });

            return { successs: true, message: 'Applicant Deleted', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to DELETE Applicant', deeplog: error, code: 400 };
        }
    }

    async applicantDeleteMany(applicants: Array<String>) {
        for (let i = 0; i < applicants.length; i++) {
            // Check if there is any existing applicant
            let isExisting = await ApplicantModel.findById(applicants[i]);
            // Return if none
            if (isExisting === null) return { success: false, message: 'Applicant does not exists', code: 400 };
        }

        try {
            for (let i = 0; i < applicants.length; i++) {
                const applicant: any = await ApplicantModel.findById(applicants[i]);
                console.log(applicant);

                await ApplicantModel.findByIdAndDelete(applicant._id);
                await ApplicantInfoModel.findOneAndDelete({ applicantNumber: applicant.applicantNumber });
            }

            return { successs: true, message: 'Applicants Deleted', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to DELETE Applicants', deeplog: error, code: 400 };
        }
    }

    async applicantUpdateOne(_id: string, applicantInfo: any) {
        // Check if there is any existing applicant
        let isExisting = await ApplicantModel.findById(_id);
        // Return if none
        if (isExisting === null) return { success: false, message: 'Applicant does not exists', code: 400 };

        try {
            const applicant: any = await ApplicantModel.findById(_id);

            await ApplicantModel.findByIdAndUpdate({ _id }, applicantInfo, {
                returnOriginal: false
            });
            await ApplicantInfoModel.findOneAndUpdate({ applicantNumber: applicant.applicantNumber }, applicantInfo, {
                returnOriginal: false
            });

            return { successs: true, message: 'Applicant Updated', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to Update Applicant', deeplog: error, code: 400 };
        }
    }
}

export default ApplicantService;
