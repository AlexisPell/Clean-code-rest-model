import { errorHandler } from './../../utils/errorHandler';
import { NextFunction, Request, Response } from 'express';
import { Model, ModelCtor } from 'sequelize/types';

export const buildGetOneDevice = (
  Device: ModelCtor<Model<any, any>>,
  DeviceInfo: ModelCtor<Model<any, any>>
) => async (req: Request, res: Response, next: NextFunction) => {
  const device = await Device.findOne({
    where: { id: req.params.id },
    include: [{ model: DeviceInfo, as: 'info' }],
  });

  if (!device) {
    return next(errorHandler(400, 'No device found, sorry'));
  }

  res.json(device);
};
