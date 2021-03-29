import { errorHandler } from './../../utils/errorHandler';
import { NextFunction, Request, Response } from 'express';
import { Model, ModelCtor } from 'sequelize/types';

export const buildPostRateDevice = (Rating: ModelCtor<Model<any, any>>) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = (req as any).user.id;
    let { rate } = req.body;
    let { deviceId } = req.query;

    if (!rate) {
      return next(errorHandler(400, 'Rate was not provided'));
    }

    const rating = await Rating.findOne({ where: { userId, deviceId } });

    if (!rating) {
      await Rating.create({ userId, deviceId, rate });
    } else {
      await rating.update({ rate });
    }

    res.json({
      msg: 'successfully rated',
      rate,
    });
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};
