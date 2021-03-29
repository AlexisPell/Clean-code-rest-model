import { Router } from 'express';

import { userController } from './../controllers/index';

const { checkAuth, login, register } = userController;

const router = Router();

router.post('/registration', register);
router.post('/login', login);
router.get('/auth', checkAuth);

export { router };
