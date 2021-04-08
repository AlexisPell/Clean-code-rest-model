import { Router } from 'express';

import { authorized } from './../utils/authMiddleware';

import { basketController } from './../controllers/index';

const { getBasketByUser, postAddDeviceToBasket, deleteDeviceFromBasket } = basketController;

const router = Router() as any;

router.get('/', authorized('USER'), getBasketByUser);
router.post('/', authorized('USER'), postAddDeviceToBasket);
router.delete('/', authorized('USER'), deleteDeviceFromBasket);

export { router };
