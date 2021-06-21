// Models
import { ApplicantModel } from '../applicant';
import { TrainingProgramModel } from './index';
// Utilities
import faker from 'faker';
import { ApplicantInfoModel } from '../applicantInformation';

/**
 * Module Training Application
 * Training Application CRUD service
 * Handles the GET POST PUT DELETE of training application
 */
class TrainingProgramService {
    constructor() {}

    async getAll() {
        // Check if any training program exists
        let isExisting = await TrainingProgramModel.find();
        // Return if none
        if (isExisting === null) return { success: true, message: 'No Training Program has been created', code: 200 };

        try {
            // GET All training programs
            let trainingPrograms: any = await TrainingProgramModel.find();

            return { successs: true, data: trainingPrograms, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to GET All Training Programs', deeplog: error, code: 400 };
        }
    }

    async getOne(_id: string) {
        // Check if training program exists
        let isExisting = await TrainingProgramModel.findById({ _id });
        // Return if none
        if (isExisting === null) return { success: false, message: 'Training Program does not exists', code: 400 };

        try {
            // GET One training program
            let trainingProgram: any = await TrainingProgramModel.findById({ _id });

            return { success: true, data: trainingProgram, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to GET One Training Program', deeplog: error, code: 400 };
        }
    }

    async createOne(trainingProgram: any) {
        try {
            // CREATE One Training Program
            let newTrainingProgram: any = new TrainingProgramModel(trainingProgram);
            newTrainingProgram.save();

            return { success: true, data: newTrainingProgram, message: 'Training Program Created', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to CREATE One Training Program', deeplog: error, code: 400 };
        }
    }

    async createMany(trainingPrograms: any) {
        // Add Code Validation after Training Program Module is created
        try {
            // CREATE Many Application

            let newTrainingPrograms = TrainingProgramModel.insertMany(trainingPrograms);

            return { success: true, data: newTrainingPrograms, message: 'Training Programs Created', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to CREATE Many Training Programs', deeplog: error, code: 400 };
        }
    }

    async updateOne(_id: string, trainingProgram: any) {
        // Check if it exists
        let isExisting = await TrainingProgramModel.findById({ _id });
        // Return if none
        if (isExisting === null) return { success: false, message: 'Training Program does not exist', code: 400 };

        try {
            // UPDATE Details
            await TrainingProgramModel.findByIdAndUpdate({ _id }, trainingProgram);
            let updatedTrainingProgram: any = await TrainingProgramModel.findById({ _id });

            return { success: true, data: updatedTrainingProgram, message: 'Training Program Updated', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to UPDATE Training Program', deeplog: error, code: 400 };
        }
    }

    async deleteOne(_id: string) {
        // Check if it exists
        let isExisting = await TrainingProgramModel.findById({ _id });
        // Return if none
        if (isExisting === null) return { success: false, message: 'Training Program does not exist', code: 400 };

        try {
            // DELETE Training Program
            await TrainingProgramModel.findByIdAndDelete({ _id });

            return { success: true, message: 'Training Program Deleted', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to DELETE One Training Program', deeplog: error, code: 400 };
        }
    }

    async deleteMany(idsToBeDeleted: Array<String>) {
        try {
            await TrainingProgramModel.deleteMany({ _id: { $in: idsToBeDeleted } });
            return { success: true, message: 'Training Programs Deleted', code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to DELETE Training Applications', deeplog: error, code: 400 };
        }
    }
}

export default TrainingProgramService;
