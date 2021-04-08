import { getAllDevices } from './../../useCases/device/getAllDevices';

import { MyRequest } from './../../types/express';
import { IDevice } from './../../types/types';
import { Response } from 'express';
import { ModelCtor } from 'sequelize/types';

export const buildGetAllDevices = (Device: ModelCtor<IDevice>) => async (
  req: MyRequest,
  res: Response
) => {
  let { brandId, typeId, limit, page }: any = req.query;

  page = page || 1;
  limit = page * limit || 9;

  let offset = page * limit - limit;

  const devices = await getAllDevices(Device, brandId, typeId, limit, offset);

  res.json(devices);
};
