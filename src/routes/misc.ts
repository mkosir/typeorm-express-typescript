import { Router } from 'express';

import { changeLanguage } from '../controllers/misc';

const router = Router();

router.post('/change-language', changeLanguage);

export default router;
