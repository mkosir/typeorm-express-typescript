import { Router } from 'express';

import auth from './auth';
import users from './users';

const router = Router();

router.use('/auth', auth);
router.use('/users', users);

export default router;
