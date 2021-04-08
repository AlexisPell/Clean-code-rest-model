import _ from 'lodash';
import { errorHandler } from './../../utils/errorHandler';

import { IBasket, IBasketDevice, IDevice } from './../../types/types';
import { MyRequest } from './../../types/express';
import { NextFunction, Response } from 'express';
import { ModelCtor } from 'sequelize/types';

export const buildGetBasketWithDevices = (
  Basket: ModelCtor<IBasket>,
  BasketDevice: ModelCtor<IBasketDevice>,
  Device: ModelCtor<IDevice>
) => async (req: MyRequest, res: Response, next: NextFunction) => {
  const basket = await Basket.findOne({ where: { userId: req.user.id } });

  if (!basket) {
    return next(errorHandler(400, 'No basket found'));
  }

  const basketDevices = await BasketDevice.findAll({ where: { basketId: basket.id } });

  const deviceIds = _(basketDevices)
    .map((d: any) => d.dataValues.deviceId)
    .value();

  const devices = await Device.findAll({ where: { id: deviceIds } });

  res.json(devices);
};
