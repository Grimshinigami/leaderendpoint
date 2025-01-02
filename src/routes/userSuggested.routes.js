import { Router } from "express";

const router = Router();

import { insertSuggested, searchUserSuggested } from "../controllers/userSuggested.controller.js";

router.route('/insertalldocuments').post(insertSuggested);
router.route('/search').get(searchUserSuggested);

export default router;