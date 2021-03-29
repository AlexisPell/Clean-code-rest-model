import { Router } from 'express';

import { router as userRouter } from './userRouter';
import { router as typeRouter } from './typeRouter';
import { router as brandRouter } from './brandRouter';
import { router as deviceRouter } from './deviceRouter';

const router = Router();

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);

export { router };
