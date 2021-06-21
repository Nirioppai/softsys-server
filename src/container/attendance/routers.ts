import express from 'express';
import { AttendanceController } from './index';
import { jwtAuth, checkIfAdmin, checkAccess } from '../../_common/check-token';

const router = express.Router();
router.use(jwtAuth);

router.route('/many').delete(AttendanceController.deleteMany).post(AttendanceController.createMany);

router.route('/:id').get(AttendanceController.getOne).put(AttendanceController.updateOne).delete(AttendanceController.deleteOne);

router.route('/').post(AttendanceController.createOne).get(AttendanceController.getAll);

export = router;
