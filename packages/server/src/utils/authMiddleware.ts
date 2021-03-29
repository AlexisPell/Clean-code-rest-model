import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

type IRole = 'USER' | 'ADMIN';

const routeInfo = (message: string) => ({
  error: {
    status: 401,
    message,
  },
});

export const authorized = (role?: IRole) => (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer token
    if (!token) {
      return res.status(401).json(routeInfo('Unauthorized'));
    }

    const decoded = jwt.verify(token, (process as any).env.SECRET_KEY);
    if (role && ((decoded as any).role !== role || (decoded as any).role !== 'ADMIN')) {
      return res.status(403).json(routeInfo('No access to this route'));
    }

    (req as any).user = decoded;
    return next();
  } catch (e) {
    console.log('authMiddleware error: ', e);
    return res.status(401).json(routeInfo('Unauthorized'));
  }
};
