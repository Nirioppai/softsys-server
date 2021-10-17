import express from 'express';
import EmployeeEvaluationController from './_controller';
import { jwtAuth, checkIfAdmin, checkAccess } from '../../../_common/check-token';
import { validateEvaluationForm } from './schema';

const router = express.Router();

router.get('/all', [jwtAuth, checkAccess(['Employee-Evaluation:Read']), checkIfAdmin], EmployeeEvaluationController.getAll);

router.get('/:id', [jwtAuth, checkAccess(['Employee-Evaluation:Read']), checkIfAdmin], EmployeeEvaluationController.getOne);

router.post('/create', [jwtAuth, checkAccess(['Employee-Evaluation:Read', 'Employee-Evaluation:Create']), checkIfAdmin, validateEvaluationForm()], EmployeeEvaluationController.createOne);

router.put('/update/:id', [jwtAuth, checkAccess(['Employee-Evaluation:Read', 'Employee-Evaluation:Update']), checkIfAdmin, validateEvaluationForm()], EmployeeEvaluationController.updateOne);

router.delete('/many', [jwtAuth, checkAccess(['Employee-Evaluation:Read', 'Employee-Evaluation:Delete']), checkIfAdmin], EmployeeEvaluationController.deleteMany);

router.delete('/:id', [jwtAuth, checkAccess(['Employee-Evaluation:Read', 'Employee-Evaluation:Delete']), checkIfAdmin], EmployeeEvaluationController.deleteOne);

export = router;
