import _ from 'lodash';
import { errorHandler } from './../../utils/errorHandler';

import { MyRequest } from './../../types/express';
import { IRating } from './../../types/types';
import { NextFunction, Response } from 'express';
import { ModelCtor } from 'sequelize/types';

export const buildGetDeviceRate = (Rating: ModelCtor<IRating>) => async (
  req: MyRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    let { deviceId } = req.query;

    if (!deviceId) {
      return next(errorHandler(400, 'No deviceId provided'));
    }

    const rating = await Rating.findAll({ where: { deviceId } });

    const rates = _(rating)
      .map((r: any) => r.dataValues.rate)
      .value();

    const ratesSum = rates.reduce((prev, curr) => (prev += curr), 0);
    const medianRate = ratesSum / rates.length;

    res.json({
      rate: medianRate,
    });
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};
