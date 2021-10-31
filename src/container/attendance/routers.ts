import express from 'express';
import { AttendanceController } from './index';
import { jwtAuth } from '../../_common/check-token';
import { AttendanceConfigController } from './attendance-config';

const router = express.Router();
router.use(jwtAuth);

router.route('/many').delete(AttendanceController.deleteMany).post(AttendanceController.createMany);

router.route('/:id').delete(AttendanceController.deleteOne);

router.route('/').post(AttendanceController.createOne).get(AttendanceController.getAll);

//attendance config APIs
router.route('/config/:id').delete(AttendanceConfigController.deleteAttendanceConfig);

router.route('/config/').post(AttendanceConfigController.createUpdateAttendanceConfig).get(AttendanceConfigController.getAttendanceConfig);

export = router;
