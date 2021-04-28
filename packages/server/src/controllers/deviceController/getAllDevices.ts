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

  const devices = await getAllDevices(Device, brandId, typeId, limit, page);

  res.json(devices);
};
