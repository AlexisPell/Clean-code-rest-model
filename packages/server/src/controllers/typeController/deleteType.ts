import { Request, Response } from 'express';
import { Model, ModelCtor } from 'sequelize/types';

export const buildDeleteType = (Type: ModelCtor<Model<any, any>>) => async (
  req: Request,
  res: Response
) => {
  await Type.destroy({ where: { id: req.body.id } });

  res.json({ deleted: true });
};
