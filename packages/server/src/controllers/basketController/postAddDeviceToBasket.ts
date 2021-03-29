import { errorHandler } from './../../utils/errorHandler';
import { NextFunction, Request, Response } from 'express';
import { Model, ModelCtor } from 'sequelize/types';

export const buildPostAddDeviceToBasket = (
  Basket: ModelCtor<Model<any, any>>,
  BasketDevice: ModelCtor<Model<any, any>>
) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const basket = await Basket.findOne({ where: { userId: (req as any).user.id } });
    const { deviceId } = req.query;

    const basketDevice = await BasketDevice.findOne({
      where: { basketId: (basket as any).id, deviceId },
    });

    if (!basketDevice) {
      await BasketDevice.create({ basketId: (basket as any).id, deviceId });
    }

    res.json({
      msg: 'successfully added device to basket',
    });
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};
