// Models
import { ApplicantModel } from './index';
import { ApplicantInfoModel } from '../applicantInformation/index';
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
            let items: any = [];
            // Get All Applicants
            let applicants: any = await ApplicantModel.find();

            for (let i = 0; i < applicants.length; i++) {
                let applicant: any = await ApplicantModel.find({ applicantNumber: applicants[i].applicantNumber });
                let info: any = await ApplicantInfoModel.find({ applicantNumber: applicants[i].applicantNumber }, { applicantNumber: 0 });
                let item: any = { applicant, info };
                items.push(item);
            }

            return { successs: true, data: items, code: 200 };
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
        // Check if there is any existing applicant
        let isExisting = await ApplicantModel.find({ applicantNumber: applicantInfo.applicantNumber });
        // Return if none
        if (isExisting.length > 0) return { success: false, message: 'Applicant already exists', code: 400 };
        // Check if there is any existing applicant info
        let exists = await ApplicantInfoModel.find({ applicantNumber: applicantInfo.applicantNumber });
        // Return if none
        if (exists.length > 0) return { success: false, message: 'Applicant Information already exists', code: 400 };

        try {
            const applicant: any = new ApplicantModel(applicantInfo);
            const info: any = new ApplicantInfoModel(applicantInfo);
            await applicant.save();
            await info.save();

            return { successs: true, message: 'Applicant Created', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get All Applicants', deeplog: error, code: 400 };
        }
    }

    async applicantDeleteOne(_id: string) {
        // Check if there is any existing applicant
        let isExisting = await ApplicantModel.findById(_id);
        // Return if none
        if (isExisting === null) return { success: false, message: 'Applicant does not exists', code: 400 };

        try {
            const applicant: any = await ApplicantModel.findById(_id);

            await ApplicantModel.findByIdAndDelete({_id});
            await ApplicantInfoModel.findOneAndDelete({ applicantNumber: applicant.applicantNumber });

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

            await ApplicantModel.findByIdAndUpdate({_id}, applicantInfo );
            await ApplicantInfoModel.findOneAndUpdate({ applicantNumber: applicant.applicantNumber }, applicantInfo);

            return { successs: true, message: 'Applicant Updated', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to Update Applicant', deeplog: error, code: 400 };
        }
    }

}

export default ApplicantService;
