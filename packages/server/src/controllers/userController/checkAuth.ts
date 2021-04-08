import { generateJwt } from './../../useCases/user/generateJwt';

import { MyRequest } from './../../types/express';
import { Response } from 'express';

export const checkAuth = async (req: MyRequest, res: Response) => {
  const { id, email, role } = req.user;

  const token = generateJwt(id, email, role);

  res.json({ token });
};
