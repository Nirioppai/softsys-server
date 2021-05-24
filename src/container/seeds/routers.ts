import express from 'express';
import { adminSeed, employeeSeed, permissionSeed, seedAll, superAdminSeed } from './controller';

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
 *  Route to create/seed employee accounts
 */
router.post('/employee-accounts', employeeSeed);
/**
 *  Route to create/seed permissions
 */
router.post('/permissions', permissionSeed);
/**
 *  Route to create/seed super admin
 */
router.post('/super-admin', superAdminSeed);

/**
 *  Route to execute all seeded data
 */

router.post('/all', seedAll);

export = router;
