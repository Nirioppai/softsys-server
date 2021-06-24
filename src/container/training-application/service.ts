// Models
import { ApplicationModel } from './index';
import { TrainingProgramModel } from '../training-program/index';
// Utilities
import faker from 'faker';

/**
 * Module Training Application
 * Training Application CRUD service
 * Handles the GET POST PUT DELETE of training application
 */
class ApplicantService {
    constructor() {}

    async applicationGetAll() {
        // Check if any application exists
        let isExisting = await ApplicationModel.find();
        // Return if none
        if (isExisting === null) return { success: true, message: 'No Application has been created', code: 200 };

        try {
            // GET All Applications
            let applications: any = await ApplicationModel.find();

            return { successs: true, data: applications, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to GET All Training Applications', deeplog: error, code: 400 };
        }
    }

    async applicationGetOne(_id: string) {
        // Check if application exists
        let isExisting = await ApplicationModel.findById({ _id });
        // Return if none
        if (isExisting === null) return { success: false, message: 'Application does not exists', code: 400 };

        try {
            // GET One Applicant
            let application: any = await ApplicationModel.findById({ _id });

            return { success: true, data: application, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to GET One Training Application', deeplog: error, code: 400 };
        }
    }

    async applicationCreateOne(applicationInfo: any) {
        // Add Code Validation after Training Program Module is created
        // Check if Training Program is existing
        // let isExisting = await TrainingProgramModel.find({ name: applicationInfo.trainingProgram });
        // Return if none
        // if (isExisting.length === 0) return { success: false, message: 'Training Program does not exist', code: 400 };
        // Randomly Generate ID
        let applicationId: number = faker.datatype.number(999999);
        // Append ID to ApplicantInfo
        let item: any = { applicationId, ...applicationInfo };

        try {
            // CREATE One Application
            let application: any = new ApplicationModel(item);
            application.save();

            return { success: true, data: application, message: 'Application Created', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to CREATE One Training Application', deeplog: error, code: 400 };
        }
    }

    async applicationCreateMany(applicationInfo: any) {
        try {
            // Declare Empty Array
            let applications: any = [];
            // CREATE Many Application
            for (let i = 0; i < applicationInfo.length; i++) {
                // Add Code Validation after Training Program Module is created
                // Check if Training Program is existing
                // let isExisting = await TrainingProgramModel.find({ name: applicationInfo[i].trainingProgram });
                // Return if none
                // if (isExisting.length === 0) return { success: false, message: 'Training Program does not exist', code: 400 };
                // Randomly Generate ID
                let applicationId: number = faker.datatype.number(999999);
                // Append ID to ApplicantInfo
                let item: any = { applicationId, ...applicationInfo[i] };
                let application: any = await new ApplicationModel(item);
                application.save();
                applications.push(application);
            }

            return { success: true, data: applications, message: 'Applications Created', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to CREATE One Training Application', deeplog: error, code: 400 };
        }
    }

    async applicationUpdate(_id: string, applicationInfo: any) {
        // Add Code Validation after Training Program Module is created
        // Check if Training Program is existing
        // let isExisting = await TrainingProgramModel.find({ name: applicationInfo.trainingProgram });
        // Return if none
        // if (isExisting.length === 0) return { success: false, message: 'Training Program does not exist', code: 400 };
        // Check if it exists
        let isExisting = await ApplicationModel.findById({ _id });
        // Return if none
        if (isExisting === null) return { success: false, message: 'Application does not exist', code: 400 };

        try {
            // UPDATE Details
            await ApplicationModel.findByIdAndUpdate({ _id }, applicationInfo);
            let application: any = await ApplicationModel.findById({ _id });

            return { success: true, data: application, message: 'Application Updated', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to UPDATE Training Application', deeplog: error, code: 400 };
        }
    }

    async applicationDeleteOne(_id: string) {
        // Check if it exists
        let isExisting = await ApplicationModel.findById({ _id });
        // Return if none
        if (isExisting === null) return { success: false, message: 'Application does not exist', code: 400 };

        try {
            // DELETE Application
            await ApplicationModel.findByIdAndDelete({ _id });

            return { success: true, message: 'Application Deleted', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to DELETE One Training Application', deeplog: error, code: 400 };
        }
    }

    async applicationDeleteMany(items: Array<String>) {
        try {
            for (let i = 0; i < items.length; i++) {
                // Check if it exists
                let isExisting = await ApplicationModel.findById({ _id: items[i] });
                // Return if none
                if (isExisting === null) return { success: false, message: 'Application does not exist', code: 400 };

                // DELETE Applications
                await ApplicationModel.findByIdAndDelete({ _id: items[i] });
            }

            return { success: true, message: 'Applications Deleted', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to DELETE Training Applications', deeplog: error, code: 400 };
        }
    }
}

export default ApplicantService;
