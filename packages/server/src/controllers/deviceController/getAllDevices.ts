import { Request, Response } from 'express';
import { Model, ModelCtor } from 'sequelize/types';

export const buildGetAllDevices = (Device: ModelCtor<Model<any, any>>) => async (
  req: Request,
  res: Response
) => {
  let { brandId, typeId, limit, page }: any = req.query;

  page = page || 1;
  limit = page * limit || 9;

  let offset = page * limit - limit;

  let devices: any[] = [];
  if (!brandId && !typeId) {
    devices = await Device.findAll({ limit, offset });
  }
  if (brandId && !typeId) {
    devices = await Device.findAll({ where: { brandId }, limit, offset });
  }
  if (!brandId && typeId) {
    devices = await Device.findAll({ where: { typeId }, limit, offset });
  }
  if (brandId && typeId) {
    devices = await Device.findAll({ where: { brandId, typeId }, limit, offset });
  }

  res.json(devices);
};
