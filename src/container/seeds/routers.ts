import express from 'express';
import { adminSeed, seedAll } from './controller';

const router = express.Router();

/**
 *  Auth API is subjected with /api/seeds prefix
 *  Eg. /api/seeds/admin
 */

/**
 *  Route to create/seed admin accounts
 */
router.post('/admin-accounts', adminSeed);

/**
 *  Route to execute all seeded data
 */

router.post('/all', seedAll);

export = router;
