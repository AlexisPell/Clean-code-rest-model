import { Router } from 'express';

import { authorized } from './../utils/authMiddleware';

import { deviceController } from './../controllers/index';

const { getAllDevices, getOneDevice, postCreateDevice, deleteDevice } = deviceController;

const router = Router() as any;

router.get('/', getAllDevices);
router.get('/:id', getOneDevice);
router.post('/', authorized('USER'), postCreateDevice);
router.delete('/', authorized('ADMIN'), deleteDevice);

export { router };
