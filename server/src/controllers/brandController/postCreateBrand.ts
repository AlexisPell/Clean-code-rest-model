import { errorHandler } from './../../utils/errorHandler';
import { NextFunction, Request, Response } from 'express';
import { Model, ModelCtor } from 'sequelize/types';

export const buildPostCreateBrand = (Brand: ModelCtor<Model<any, any>>) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;

  let types = await Brand.findAll();
  types = types.map((t: any) => ({ ...t.dataValues }));

  if (types.some((t: any) => t.name === name)) {
    return next(errorHandler(403, 'Such brand already exists'));
  }

  const type = await Brand.create({ name });

  res.json(type);
};
