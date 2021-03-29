import { Router } from 'express';

import { deviceController } from './../controllers/index';

const { getAllDevices, getOneDevice, postCreateDevice, deleteDevice } = deviceController;

const router = Router();

router.post('/', postCreateDevice);
router.get('/', getAllDevices);
router.get('/:id', getOneDevice);
router.delete('/:id', deleteDevice);

export { router };
