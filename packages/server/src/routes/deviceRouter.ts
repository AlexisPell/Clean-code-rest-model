import { Router } from 'express';

import { authorized } from './../utils/authMiddleware';

import { deviceController } from './../controllers/index';

const { getAllDevices, getOneDevice, postCreateDevice, deleteDevice } = deviceController;

const router = Router() as any;

router.post('/', postCreateDevice);
router.get('/', getAllDevices);
router.get('/:id', authorized('USER'), getOneDevice);
router.delete('/:id', authorized('ADMIN'), deleteDevice);

export { router };
