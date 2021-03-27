import { Router } from 'express';

import { brandController } from './../controllers/index';

const { getAllBrands, postCreateBrand, deleteBrand } = brandController;

const router = Router();

router.get('/', getAllBrands);
router.post('/', postCreateBrand);
router.delete('/', deleteBrand);

export { router };
