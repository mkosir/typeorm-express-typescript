import { Router } from 'express';

import { list, show, edit, destroy, search, usersPage, userCreate } from 'controllers/users';
import { checkJwt } from 'middleware/checkJwt';
import { checkRole } from 'middleware/checkRole';
import { validatorEdit } from 'middleware/validation/users';

const router = Router();

router.get('/', [checkJwt, checkRole(['ADMINISTRATOR'])], list);

router.get('/:id([0-9]+)', [checkJwt, checkRole(['ADMINISTRATOR'], true)], show);

router.get('/filter/:search', [checkJwt, checkRole(['ADMINISTRATOR'], true)], search);

router.get('/usersPage', [checkJwt, checkRole(['ADMINISTRATOR'], true)], usersPage);

router.get('/userCreate', [checkJwt, checkRole(['ADMINISTRATOR'], true)], userCreate);

router.patch('/:id([0-9]+)', [checkJwt, checkRole(['ADMINISTRATOR'], true), validatorEdit], edit);

router.delete('/:id([0-9]+)', [checkJwt, checkRole(['ADMINISTRATOR'], true)], destroy);

export default router;
