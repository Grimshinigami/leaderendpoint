import {Router} from 'express';

const router = Router();

import { insertAllDocuments, searchMlas } from '../controllers/mla.controller.js';

router.route('/insertalldocuments').post(insertAllDocuments);
router.route('/search').get(searchMlas);

export default router;