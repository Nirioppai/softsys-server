// models
import OrganizationChartModel from './model';

class OrganizationChartService {
    constructor() {}

    async getAllOrgChart() {
        try {
            const orgChart = await OrganizationChartModel.find({});
            return { success: true, data: orgChart, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get organization charts', deepLog: error, code: 400 };
        }
    }

    async getOneOrgChart(id: string) {
        try {
            const orgChart = await OrganizationChartModel.findById(id);
            return { success: true, data: orgChart, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to get organization charts', deepLog: error, code: 400 };
        }
    }

    async createOneOrgchart(data: any) {
        try {
            const orgChart = await OrganizationChartModel.create(data);
            return { success: true, data: orgChart, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to create organization charts', deepLog: error, code: 400 };
        }
    }

    async updateOneOrgchart(data: any, id: string) {
        try {
            const orgChart = await OrganizationChartModel.findByIdAndUpdate({ _id: id }, data, { returnOriginal: false });
            return { success: true, data: orgChart, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to update organization charts', deepLog: error, code: 400 };
        }
    }

    async deleteOneOrgchart(id: string) {
        try {
            const orgChart = await OrganizationChartModel.deleteOne({ _id: id });
            return { success: true, data: orgChart, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to delete organization charts', deepLog: error, code: 400 };
        }
    }

    async deleteManyOrgchart(ids: Array<String>) {
        try {
            const orgChart = await OrganizationChartModel.deleteMany({ _id: { $in: ids } });
            return { success: true, data: orgChart, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to delete many organization charts', deepLog: error, code: 400 };
        }
    }
}

export default OrganizationChartService;
