import { Request, Response } from 'express';
import { Model, ModelCtor } from 'sequelize/types';

export const buildDeleteBrand = (Brand: ModelCtor<Model<any, any>>) => async (
  req: Request,
  res: Response
) => {
  await Brand.destroy({ where: { id: req.body.id } });

  res.json({ deleted: true });
};
