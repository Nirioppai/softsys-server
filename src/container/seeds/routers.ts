import express from 'express';
import { adminSeed, permissionSeed, seedAll } from './controller';

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
 *  Route to create/seed permissions
 */
router.post('/permission', permissionSeed);

/**
 *  Route to execute all seeded data
 */

router.post('/all', seedAll);

export = router;
