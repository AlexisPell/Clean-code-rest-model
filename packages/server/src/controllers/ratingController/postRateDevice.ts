import { errorHandler } from './../../utils/errorHandler';

import { IRating } from './../../types/types';
import { MyRequest } from './../../types/express';
import { NextFunction, Response } from 'express';
import { ModelCtor } from 'sequelize/types';

export const buildPostRateDevice = (Rating: ModelCtor<IRating>) => async (
  req: MyRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.user.id;
    let { rate } = req.body;
    let { deviceId } = req.query;

    if (!rate) {
      return next(errorHandler(400, 'Rate was not provided'));
    }
    if (!deviceId) {
      return next(errorHandler(400, 'deviceId url query was not provided'));
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
