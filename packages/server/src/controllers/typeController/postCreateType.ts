import { errorHandler } from './../../utils/errorHandler';

import { IType } from './../../types/types';
import { MyRequest } from './../../types/express';
import { ModelCtor } from 'sequelize/types';
import { NextFunction, Response } from 'express';

export const buildPostCreateType = (Type: ModelCtor<IType>) => async (
  req: MyRequest,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;

  if (!name) {
    return next(errorHandler(400, 'Name was not provided'));
  }

  let types = await Type.findAll();
  types = types.map((t: any) => ({ ...t.dataValues }));

  if (types.some((t) => t.name === name)) {
    return next(errorHandler(403, 'Such type already exists'));
  }

  const type = await Type.create({ name });

  res.json(type);
};
