import express from 'express';
import RankingController from './_controllets';
import { jwtAuth, checkIfAdmin, checkAccess } from '../../../_common/check-token';
import { validateEvaluationForm } from './schema';

const router = express.Router();

router.get('/all', [jwtAuth, checkAccess(['Evaluation-Form:Read']), checkIfAdmin], RankingController.getAll);

router.get('/:id', [jwtAuth, checkAccess(['Evaluation-Form:Read']), checkIfAdmin], RankingController.getOne);

router.post('/create', [jwtAuth, checkAccess(['Evaluation-Form:Read', 'Evaluation-Form:Create']), checkIfAdmin, validateEvaluationForm()], RankingController.createOne);

router.put('/update/:id', [jwtAuth, checkAccess(['Evaluation-Form:Read', 'Evaluation-Form:Update']), checkIfAdmin, validateEvaluationForm()], RankingController.updateOne);

router.delete('/many', [jwtAuth, checkAccess(['Evaluation-Form:Read', 'Evaluation-Form:Delete']), checkIfAdmin], RankingController.deleteMany);

router.delete('/:id', [jwtAuth, checkAccess(['Evaluation-Form:Read', 'Evaluation-Form:Delete']), checkIfAdmin], RankingController.deleteOne);

export = router;
