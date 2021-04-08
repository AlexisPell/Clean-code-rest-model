import { errorHandler } from './../../utils/errorHandler';

import { IBasket, IBasketDevice } from './../../types/types';
import { MyRequest } from './../../types/express';
import { NextFunction, Response } from 'express';
import { ModelCtor } from 'sequelize/types';

export const buildDeleteDeviceFromBasket = (
  Basket: ModelCtor<IBasket>,
  BasketDevice: ModelCtor<IBasketDevice>
) => async (req: MyRequest, res: Response, next: NextFunction) => {
  try {
    const { deviceId } = req.query;
    const userId = req.user.id;

    if (!deviceId) {
      return next(errorHandler(400, 'No deviceId url query defined'));
    }

    const basket = await Basket.findOne({ where: { userId } });

    if (!basket) {
      return next(errorHandler(400, 'No basket found'));
    }

    await BasketDevice.destroy({ where: { basketId: basket.id, deviceId } });

    res.json({ msg: 'successfully removed device from basket' });
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};
