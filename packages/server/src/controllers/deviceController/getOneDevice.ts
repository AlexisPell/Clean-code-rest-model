import { MyRequest } from './../../types/express';
import { IDevice, IDeviceInfo } from './../../types/types';
import { errorHandler } from './../../utils/errorHandler';

import { NextFunction, Response } from 'express';
import { ModelCtor } from 'sequelize/types';

export const buildGetOneDevice = (
  Device: ModelCtor<IDevice>,
  DeviceInfo: ModelCtor<IDeviceInfo>
) => async (req: MyRequest, res: Response, next: NextFunction) => {
  const device = await Device.findOne({
    where: { id: req.params.id },
    include: [{ model: DeviceInfo, as: 'info' }],
  });

  if (!device) {
    return next(errorHandler(400, 'No device found, sorry'));
  }

  res.json(device);
};
