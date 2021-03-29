import { NextFunction, Response, Request } from 'express';
import { generateJwt } from './../../useCases/user/generateJwt';

export const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
  const { id, email, role } = (req as any).user;

  const token = generateJwt(id, email, role);

  res.json({ token });
};
