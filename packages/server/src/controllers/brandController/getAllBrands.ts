import { IBrand } from './../../types/types';
import { MyRequest } from './../../types/express';
import { Response } from 'express';
import { ModelCtor } from 'sequelize/types';

export const buildGetAllBrands = (Brand: ModelCtor<IBrand>) => async (
  _: MyRequest,
  res: Response
) => {
  const brands = await Brand.findAll();

  res.json(brands);
};
