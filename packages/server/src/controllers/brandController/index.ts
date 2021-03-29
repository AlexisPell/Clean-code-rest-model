import { buildPostCreateBrand } from './postCreateBrand';
import { buildGetAllBrands } from './getAllBrands';
import { buildDeleteBrand } from './deleteBrand';

import { Brand } from './../../models/models';

const postCreateBrand = buildPostCreateBrand(Brand);
const getAllBrands = buildGetAllBrands(Brand);
const deleteBrand = buildDeleteBrand(Brand);

export const brandController = {
  postCreateBrand,
  getAllBrands,
  deleteBrand,
};
