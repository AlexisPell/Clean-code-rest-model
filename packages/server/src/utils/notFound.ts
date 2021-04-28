import { NextFunction, Request, Response } from 'express';

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const err: any = new Error('Not found');
  err.status = 404;
  next(err);
};
