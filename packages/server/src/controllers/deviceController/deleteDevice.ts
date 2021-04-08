import { IDevice } from './../../types/types';
import { MyRequest } from './../../types/express';
import { Response } from 'express';
import { ModelCtor } from 'sequelize/types';
import fs from 'fs';
import path from 'path';

export const buildDeleteDevice = (Device: ModelCtor<IDevice>) => async (
  req: MyRequest,
  res: Response
) => {
  const device = await Device.findOne({ where: { id: req.params.id } });

  if (device) {
    fs.unlink(path.resolve(__dirname, '..', '..', 'public', device?.img), () => {});
    await Device.destroy({ where: { id: req.params.id } });
  }

  res.json({ deleted: true });
};
