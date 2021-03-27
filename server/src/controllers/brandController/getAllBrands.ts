import { Request, Response } from 'express';
import { Model, ModelCtor } from 'sequelize/types';

export const buildGetAllBrands = (Brand: ModelCtor<Model<any, any>>) => async (
  req: Request,
  res: Response
) => {
  const brands = await Brand.findAll();

  res.json(brands);
};
