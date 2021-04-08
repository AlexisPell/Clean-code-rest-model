import { Router } from 'express';

import { authorized } from './../utils/authMiddleware';

import { userController } from './../controllers/index';

const { checkAuth, login, register } = userController;

const router = Router() as any;

router.post('/registration', register);
router.post('/login', login);
router.get('/auth', authorized('USER'), checkAuth);

export { router };
