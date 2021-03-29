import { Router } from 'express';

import { authorized } from './../utils/authMiddleware';

import { userController } from './../controllers/index';

const { checkAuth, login, register } = userController;

const router = Router();

router.post('/registration', register);
router.post('/login', login);
router.get('/auth', authorized(), checkAuth);

export { router };
