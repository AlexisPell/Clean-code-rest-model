import { errorHandler } from './../../utils/errorHandler';
import { NextFunction, Request, Response } from 'express';
import { Model, ModelCtor } from 'sequelize/types';

import _ from 'lodash';

export const buildGetBasketWithDevices = (
  Basket: ModelCtor<Model<any, any>>,
  BasketDevice: ModelCtor<Model<any, any>>,
  Device: ModelCtor<Model<any, any>>
) => async (req: Request, res: Response, next: NextFunction) => {
  const basket = await Basket.findOne({ where: { userId: (req as any).user.id } });

  const basketDevices = await BasketDevice.findAll({ where: { basketId: (basket as any).id } });

  const deviceIds = _(basketDevices)
    .map((d: any) => d.dataValues.deviceId)
    .value();

  const devices = await Device.findAll({ where: { id: deviceIds as any } });

  res.json(devices);
};
