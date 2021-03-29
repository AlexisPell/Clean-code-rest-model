import { Router } from 'express';

import { router as userRouter } from './userRouter';
import { router as typeRouter } from './typeRouter';
import { router as brandRouter } from './brandRouter';
import { router as deviceRouter } from './deviceRouter';
import { router as basketRouter } from './basketRouter';
import { router as ratingRouter } from './ratingRouter';

const router = Router();

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);
router.use('/basket', basketRouter);
router.use('/rate', ratingRouter);

export { router };
