import { IType } from './../../types/types';
import { MyRequest } from './../../types/express';
import { Response } from 'express';
import { ModelCtor } from 'sequelize/types';

export const buildGetAllTypes = (Type: ModelCtor<IType>) => async (_: MyRequest, res: Response) => {
  const types = await Type.findAll();

  res.json(types);
};
