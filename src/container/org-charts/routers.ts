import express from 'express';
import OrganizationChartController from './_controller';
import { jwtAuth, checkIfAdmin } from '../../_common/check-token';

const router = express.Router();

router.get('/all', [jwtAuth, checkIfAdmin], OrganizationChartController.getAll);

router.get('/:id', [jwtAuth, checkIfAdmin], OrganizationChartController.getOne);

router.post('/create', [jwtAuth, checkIfAdmin], OrganizationChartController.createOne);

router.put('/update/:id', [jwtAuth, checkIfAdmin], OrganizationChartController.updateOne);

router.delete('/many', [jwtAuth, checkIfAdmin], OrganizationChartController.deleteMany);

router.delete('/:id', [jwtAuth, checkIfAdmin], OrganizationChartController.deleteOne);

export = router;
