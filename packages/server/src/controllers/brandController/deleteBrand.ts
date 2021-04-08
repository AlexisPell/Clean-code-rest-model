import { IBrand } from './../../types/types';
import { MyRequest } from './../../types/express';
import { Request, Response } from 'express';
import { ModelCtor } from 'sequelize/types';

export const buildDeleteBrand = (Brand: ModelCtor<IBrand>) => async (
  req: MyRequest,
  res: Response
) => {
  await Brand.destroy({ where: { id: req.body.id } });

  res.json({ deleted: true });
};
