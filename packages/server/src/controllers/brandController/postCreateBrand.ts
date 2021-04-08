import { errorHandler } from './../../utils/errorHandler';

import { MyRequest } from './../../types/express';
import { IBrand } from './../../types/types';
import { NextFunction, Response } from 'express';
import { ModelCtor } from 'sequelize/types';

export const buildPostCreateBrand = (Brand: ModelCtor<IBrand>) => async (
  req: MyRequest,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;

  if (!name) {
    return next(errorHandler(400, 'Name was not provided'));
  }

  let types = await Brand.findAll();
  types = types.map((t: any) => ({ ...t.dataValues }));

  if (types.some((t) => t.name === name)) {
    return next(errorHandler(403, 'Such brand already exists'));
  }

  const type = await Brand.create({ name });

  res.json(type);
};
