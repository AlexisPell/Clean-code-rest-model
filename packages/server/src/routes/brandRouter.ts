import { Router } from 'express';

import { authorized } from './../utils/authMiddleware';

import { brandController } from './../controllers/index';

const { getAllBrands, postCreateBrand, deleteBrand } = brandController;

const router = Router() as any;

router.get('/', getAllBrands);
router.post('/', authorized('ADMIN'), postCreateBrand);
router.delete('/', authorized('ADMIN'), deleteBrand);

export { router };
