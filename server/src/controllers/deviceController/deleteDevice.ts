import { Request, Response } from 'express';
import { Model, ModelCtor } from 'sequelize/types';
import fs from 'fs';
import path from 'path';

export const buildDeleteDevice = (Device: ModelCtor<Model<any, any>>) => async (
  req: Request,
  res: Response
) => {
  const device: any = await Device.findOne({ where: { id: req.params.id } });

  if (device) {
    fs.unlink(path.resolve(__dirname, '..', '..', 'public', device?.img), () => {});
    await Device.destroy({ where: { id: req.params.id } });
  }

  res.json({ deleted: true });
};
