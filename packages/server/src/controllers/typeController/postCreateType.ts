import { errorHandler } from './../../utils/errorHandler';
import { NextFunction, Request, Response } from 'express';
import { Model, ModelCtor } from 'sequelize/types';

export const buildPostCreateType = (Type: ModelCtor<Model<any, any>>) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;

  let types = await Type.findAll();
  types = types.map((t: any) => ({ ...t.dataValues }));

  if (types.some((t: any) => t.name === name)) {
    return next(errorHandler(403, 'Such type already exists'));
  }

  const type = await Type.create({ name });

  res.json(type);
};
