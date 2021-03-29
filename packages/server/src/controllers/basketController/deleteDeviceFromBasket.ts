import { errorHandler } from './../../utils/errorHandler';
import { NextFunction, Request, Response } from 'express';
import { Model, ModelCtor } from 'sequelize/types';

export const buildDeleteDeviceFromBasket = (
  Basket: ModelCtor<Model<any, any>>,
  BasketDevice: ModelCtor<Model<any, any>>
) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user.id;
    const basket = await Basket.findOne({ where: { userId } });

    const { deviceId } = req.query;
    await BasketDevice.destroy({ where: { basketId: (basket as any).id, deviceId } });

    res.json({ msg: 'successfully removed device from basket' });
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};
