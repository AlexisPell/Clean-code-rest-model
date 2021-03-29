import { Router } from 'express';

import { authorized } from './../utils/authMiddleware';

import { ratingController } from './../controllers/index';

const { postRateDevice, getDeviceRate } = ratingController;

const router = Router();

router.get('/', getDeviceRate);
router.post('/', authorized('USER'), postRateDevice);

export { router };
