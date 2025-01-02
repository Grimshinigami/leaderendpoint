import {Router} from 'express';

const router = Router();

import { insertAllDocuments, searchMps } from '../controllers/mps.controller.js';

router.route('/insertalldocs').post(insertAllDocuments);
router.route('/search').get(searchMps);

export default router;
