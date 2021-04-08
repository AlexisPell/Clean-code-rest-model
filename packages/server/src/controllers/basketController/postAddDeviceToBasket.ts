import { errorHandler } from './../../utils/errorHandler';

import { IBasketDevice, IBasket } from './../../types/types';
import { MyRequest } from './../../types/express';
import { NextFunction, Response } from 'express';
import { ModelCtor } from 'sequelize/types';

export const buildPostAddDeviceToBasket = (
  Basket: ModelCtor<IBasket>,
  BasketDevice: ModelCtor<IBasketDevice>
) => async (req: MyRequest, res: Response, next: NextFunction) => {
  try {
    const basket = await Basket.findOne({ where: { userId: req.user.id } });
    const { deviceId } = req.query;

    if (!deviceId) {
      return next(errorHandler(400, "No 'deviceId' url query defined"));
    }
    if (!basket) {
      return next(errorHandler(400, 'No basket found'));
    }

    const basketDevice = await BasketDevice.findOne({
      where: { basketId: basket.id, deviceId },
    });

    if (!basketDevice) {
      await BasketDevice.create({ basketId: basket.id, deviceId });
    }

    res.json({
      msg: 'successfully added device to basket',
    });
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};
