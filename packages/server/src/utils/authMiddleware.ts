import { IUser } from './../types/types';
import * as jwt from 'jsonwebtoken';

import { MyRequest } from './../types/express';
import { NextFunction, Response } from 'express';

type IRole = 'USER' | 'ADMIN';

const routeInfo = (message: string) => ({
  error: {
    status: 401,
    message,
  },
});

export const authorized = (role?: IRole) => (req: MyRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer token

    if (!token) {
      return res.status(401).json(routeInfo('Middleware check: unauthorized'));
    }

    const decoded = jwt.verify(token, (process as any).env.SECRET_KEY);

    if (
      role === 'USER' &&
      !((decoded as IUser).role === 'USER' || (decoded as IUser).role === 'ADMIN')
    ) {
      return res.status(401).json(routeInfo('Middleware check: no user access to this route'));
    }

    if (role === 'ADMIN' && (decoded as IUser).role !== 'ADMIN') {
      return res.status(401).json(routeInfo('Middleware check: no admin access to this route'));
    }

    req.user = decoded as IUser;

    return next();
  } catch (e) {
    console.log('authMiddleware error: ', e);
    return res.status(401).json(routeInfo('Unauthorized'));
  }
};
