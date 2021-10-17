// models
import EvaluationModel from './model';
import { IEvaluationFormSchema } from './model';

class OrganizationChartService {
    constructor() {}

    async getAllEvaluationForm() {
        try {
            const evalForm = await EvaluationModel.find({});
            return { success: true, data: evalForm, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get all evaluation form', deepLog: error, code: 400 };
        }
    }

    async getOneEvaluationForm(id: string) {
        try {
            const evalForm = await EvaluationModel.findById(id);
            return { success: true, data: evalForm, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get evaluation form', deepLog: error, code: 400 };
        }
    }

    async createOneEvaluationForm(data: IEvaluationFormSchema) {
        const isExistingEvaluationForm = await EvaluationModel.find({ evaluationName: data.evaluationName });

        if (isExistingEvaluationForm.length > 0) return { success: false, message: 'Evaluation form name already exist', code: 400 };

        try {
            const evalForm = await EvaluationModel.create(data);
            return { success: true, data: evalForm, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to create evaluation form', deepLog: error, code: 400 };
        }
    }

    async updateOneEvaluationForm(data: IEvaluationFormSchema, id: string) {
        const isExistingEvaluationForm = await EvaluationModel.findById(id);

        if (!isExistingEvaluationForm) return { success: false, message: 'Evaluation form does not exist', code: 400 };

        try {
            const evalForm = await EvaluationModel.findByIdAndUpdate({ _id: id }, data, { returnOriginal: false });
            return { success: true, data: evalForm, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to update evaluation form', deepLog: error, code: 400 };
        }
    }

    async deleteOneEvaluationForm(id: string) {
        try {
            const evalForm = await EvaluationModel.deleteOne({ _id: id });
            return { success: true, data: evalForm, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to delete evaluation form', deepLog: error, code: 400 };
        }
    }

    async deleteManyEvaluationForm(ids: Array<String>) {
        try {
            const evalForm = await EvaluationModel.deleteMany({ _id: { $in: ids } });
            return { success: true, data: evalForm, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to delete many evaluation form', deepLog: error, code: 400 };
        }
    }
}

export default OrganizationChartService;
