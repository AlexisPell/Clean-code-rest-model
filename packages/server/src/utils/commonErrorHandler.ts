import { NextFunction, Request, Response } from 'express';

export const commonErrorHandler = (err: any, _: Request, res: Response, __: NextFunction) => {
  const errStatus = err.status || 500;
  res.status(errStatus).json({
    error: {
      status: errStatus,
      message: err.message,
    },
  });
};
