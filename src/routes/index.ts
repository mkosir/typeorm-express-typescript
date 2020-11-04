import { Router } from 'express';

import auth from './auth';
import page404 from './pages/404';
import pageRoot from './pages/root';
import users from './users';

const router = Router();

router.use(`/${process.env.API_VERSION}`, auth);
router.use(`/${process.env.API_VERSION}/users`, users);

router.use(pageRoot);
router.use(page404);

export default router;
