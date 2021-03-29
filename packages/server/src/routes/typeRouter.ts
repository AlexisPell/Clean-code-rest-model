import { Router } from 'express';

import { authorized } from './../utils/authMiddleware';

import { typeController } from './../controllers/index';

const { getAllTypes, postCreateType, deleteType } = typeController;

const router = Router();

router.get('/', getAllTypes);
router.post('/', authorized('ADMIN'), postCreateType);
router.delete('/', authorized('ADMIN'), deleteType);

export { router };
