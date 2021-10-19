import express from 'express';
import RankingController from './_controllets';
import { jwtAuth, checkIfAdmin, checkAccess } from '../../../_common/check-token';
import { validateRankingList } from './schema';

const router = express.Router();

router.get('/all', [jwtAuth, checkAccess(['Ranking:Read']), checkIfAdmin], RankingController.getAll);

router.get('/:id', [jwtAuth, checkAccess(['Ranking:Read']), checkIfAdmin], RankingController.getOne);

router.post('/create', [jwtAuth, checkAccess(['Ranking:Read', 'Ranking:Create']), checkIfAdmin, validateRankingList()], RankingController.createOne);

router.put('/update/:id', [jwtAuth, checkAccess(['Ranking:Read', 'Ranking:Update']), checkIfAdmin, validateRankingList()], RankingController.updateOne);

router.delete('/many', [jwtAuth, checkAccess(['Ranking:Read', 'Ranking:Delete']), checkIfAdmin], RankingController.deleteMany);

router.delete('/:id', [jwtAuth, checkAccess(['Ranking:Read', 'Ranking:Delete']), checkIfAdmin], RankingController.deleteOne);

export = router;
