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

    async createOneOrgchart(data: any) {
        try {
            const orgChart = await OrganizationChartModel.create(data);
            return { success: true, data: orgChart, code: 200 };
        } catch (error) {
            return { success: false, message: 'Failed to create organization charts', deepLog: error, code: 400 };
        }
    }
}

export default OrganizationChartService;
