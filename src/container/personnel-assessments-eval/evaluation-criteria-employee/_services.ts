// models
import EmployeeEvaluationModel from './model';
import { IEmployeeEvaluationSchema } from './model';

class OrganizationChartService {
    constructor() {}

    async getAll() {
        try {
            const evalForm = await EmployeeEvaluationModel.find({}).populate('evaluationId');
            return { success: true, data: evalForm, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get all employee evaluation form', deepLog: error, code: 400 };
        }
    }

    async getOne(id: string) {
        try {
            const evalForm = await EmployeeEvaluationModel.find({ employeeId: id }).populate('evaluationId');
            return { success: true, data: evalForm, code: 200 };
        } catch (error) {
            return { success: false, message: "Failed to get all employee 's evaluation form", deepLog: error, code: 400 };
        }
    }

    async createOne(data: IEmployeeEvaluationSchema) {
        const isExistingEvaluationForm = await EmployeeEvaluationModel.find({ evaluationId: data.evaluationId });

        if (isExistingEvaluationForm.length > 0) return { success: false, message: 'Evaluation is done for this form', code: 400 };

        try {
            const evalForm = await EmployeeEvaluationModel.create(data);
            return { success: true, data: evalForm, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to create employee evaluation form', deepLog: error, code: 400 };
        }
    }

    async updateOne(data: IEmployeeEvaluationSchema, id: string) {
        const isExistingEvaluationForm = await EmployeeEvaluationModel.findById(id);

        if (!isExistingEvaluationForm) return { success: false, message: 'Evaluation form does not exist', code: 400 };

        try {
            const evalForm = await EmployeeEvaluationModel.findByIdAndUpdate({ _id: id }, data, { returnOriginal: false });
            return { success: true, data: evalForm, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to update employee evaluation form', deepLog: error, code: 400 };
        }
    }

    async deleteOne(id: string) {
        try {
            const evalForm = await EmployeeEvaluationModel.deleteOne({ _id: id });
            return { success: true, data: evalForm, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to delete employee evaluation form', deepLog: error, code: 400 };
        }
    }

    async deleteMany(ids: Array<String>) {
        try {
            const evalForm = await EmployeeEvaluationModel.deleteMany({ _id: { $in: ids } });
            return { success: true, data: evalForm, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to delete many employee evaluation form', deepLog: error, code: 400 };
        }
    }
}

export default OrganizationChartService;
