import { Request, Response } from 'express';
import { Model, ModelCtor } from 'sequelize/types';

export const buildGetAllTypes = (Type: ModelCtor<Model<any, any>>) => async (
  req: Request,
  res: Response
) => {
  const types = await Type.findAll();

  res.json(types);
};
