import express from 'express';
import { adminSeed } from './controller';

const router = express.Router();

/**
 *  Auth API is subjected with /api/seeds prefix
 *  Eg. /api/seeds/admin
 */

/**
 *  Route to get all adminis
 */
router.post('/admin', adminSeed);

export = router;
