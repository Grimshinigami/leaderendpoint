import {Router} from 'express';

const router = Router();

import { insertAllDocuments, searchMcps } from '../controllers/mcp.controller.js';

router.route('/insertalldocuments').post(insertAllDocuments);
router.route('/search').get(searchMcps);

export default router;