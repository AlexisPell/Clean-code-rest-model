import { Router } from 'express';

import { typeController } from './../controllers/index';

const { getAllTypes, postCreateType, deleteType } = typeController;

const router = Router();

router.get('/', getAllTypes);
router.post('/', postCreateType);
router.delete('/', deleteType);

export { router };
