import express from 'express';
import EvaluationFormController from './_controller';
import { jwtAuth, checkIfAdmin, checkAccess } from '../../../_common/check-token';
import { validateEvaluationForm } from './schema';

const router = express.Router();

router.get('/all', [jwtAuth, checkAccess(['Evaluation-Form:Read']), checkIfAdmin], EvaluationFormController.getAll);

router.get('/:id', [jwtAuth, checkAccess(['Evaluation-Form:Read']), checkIfAdmin], EvaluationFormController.getOne);

router.post('/create', [jwtAuth, checkAccess(['Evaluation-Form:Read', 'Evaluation-Form:Create']), checkIfAdmin, validateEvaluationForm()], EvaluationFormController.createOne);

router.put('/update/:id', [jwtAuth, checkAccess(['Evaluation-Form:Read', 'Evaluation-Form:Update']), checkIfAdmin, validateEvaluationForm()], EvaluationFormController.updateOne);

router.delete('/many', [jwtAuth, checkAccess(['Evaluation-Form:Read', 'Evaluation-Form:Delete']), checkIfAdmin], EvaluationFormController.deleteMany);

router.delete('/:id', [jwtAuth, checkAccess(['Evaluation-Form:Read', 'Evaluation-Form:Delete']), checkIfAdmin], EvaluationFormController.deleteOne);

export = router;
