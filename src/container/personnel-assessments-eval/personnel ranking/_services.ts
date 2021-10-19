// models
import PersonnelRankingModel from './model';
import { IPersonnelRankingSchema } from './model';

class OrganizationChartService {
    constructor() {}

    async getAll() {
        try {
            const evalForm = await PersonnelRankingModel.find({});
            return { success: true, data: evalForm, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get all ranking lists', deepLog: error, code: 400 };
        }
    }

    async getOne(id: string) {
        try {
            const evalForm = await PersonnelRankingModel.findById(id);
            return { success: true, data: evalForm, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get ranking list', deepLog: error, code: 400 };
        }
    }

    async createOne(data: IPersonnelRankingSchema) {
        const isExistingEvaluationForm = await PersonnelRankingModel.find({ rankingName: data.rankingName });

        if (isExistingEvaluationForm.length > 0) return { success: false, message: 'Ranking name already exist', code: 400 };

        try {
            const evalForm = await PersonnelRankingModel.create(data);
            return { success: true, data: evalForm, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to create ranking list', deepLog: error, code: 400 };
        }
    }

    async updateOne(data: IPersonnelRankingSchema, id: string) {
        const isExistingEvaluationForm = await PersonnelRankingModel.findById(id);

        if (!isExistingEvaluationForm) return { success: false, message: 'Ranking does not exist', code: 400 };

        try {
            const evalForm = await PersonnelRankingModel.findByIdAndUpdate({ _id: id }, data, { returnOriginal: false });
            return { success: true, data: evalForm, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to update ranking list', deepLog: error, code: 400 };
        }
    }

    async deleteOne(id: string) {
        try {
            const evalForm = await PersonnelRankingModel.deleteOne({ _id: id });
            return { success: true, data: evalForm, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to delete ranking list', deepLog: error, code: 400 };
        }
    }

    async deleteMany(ids: Array<String>) {
        try {
            const evalForm = await PersonnelRankingModel.deleteMany({ _id: { $in: ids } });
            return { success: true, data: evalForm, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to delete many ranking list', deepLog: error, code: 400 };
        }
    }
}

export default OrganizationChartService;
