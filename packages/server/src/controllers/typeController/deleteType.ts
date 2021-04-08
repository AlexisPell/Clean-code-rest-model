import { IType } from './../../types/types';
import { MyRequest } from './../../types/express';
import { Response } from 'express';
import { ModelCtor } from 'sequelize/types';

export const buildDeleteType = (Type: ModelCtor<IType>) => async (
  req: MyRequest,
  res: Response
) => {
  await Type.destroy({ where: { id: req.body.id } });

  res.json({ deleted: true });
};
