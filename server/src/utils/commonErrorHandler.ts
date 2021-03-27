import { NextFunction, Request, Response } from 'express';

export const commonErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  const errStatus = err.status || 500;
  res.status(errStatus).json({
    error: {
      status: errStatus,
      message: err.message,
    },
  });
};
