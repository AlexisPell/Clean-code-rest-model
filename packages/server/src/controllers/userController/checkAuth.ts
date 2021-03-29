import { NextFunction, Request, Response } from 'express';
import { errorHandler } from './../../utils/errorHandler';

export const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.query;

  if (!id) {
    return next(errorHandler(404, 'Didnt specify the user'));
  }

  res.json({ msg: id });
};
