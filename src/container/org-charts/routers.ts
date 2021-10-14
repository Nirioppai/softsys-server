import express from 'express';
import OrganizationChartController from './_controller';
import { jwtAuth, checkIfAdmin } from '../../_common/check-token';

const router = express.Router();

router.post('/create', [jwtAuth, checkIfAdmin], OrganizationChartController.createOne);

export = router;
