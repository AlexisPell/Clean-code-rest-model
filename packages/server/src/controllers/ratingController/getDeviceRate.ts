import { errorHandler } from './../../utils/errorHandler';
import { NextFunction, Request, Response } from 'express';
import { Model, ModelCtor } from 'sequelize/types';

import _ from 'lodash';

export const buildGetDeviceRate = (Rating: ModelCtor<Model<any, any>>) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let { deviceId } = req.query;

    const rating = await Rating.findAll({ where: { deviceId } });

    const rates = _(rating)
      .map((r: any) => r.dataValues.rate)
      .value();

    const ratesSum = rates.reduce((prev, curr) => (prev += curr), 0);
    const medianRate = ratesSum / rates.length;

    res.json({
      rating: medianRate,
    });
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};
