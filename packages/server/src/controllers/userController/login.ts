import bcrypt from 'bcrypt';
import { errorHandler } from './../../utils/errorHandler';

import { generateJwt } from './../../useCases/user/generateJwt';

import { MyRequest } from './../../types/express';
import { IUser } from './../../types/types';
import { NextFunction, Response } from 'express';
import { ModelCtor } from 'sequelize/types';

export const buildLoginUser = (User: ModelCtor<IUser>) => async (
  req: MyRequest,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(errorHandler(400, 'both email and password are necessary'));
  }

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return next(errorHandler(400, 'User doesnot exist'));
  }

  const checkPassword = bcrypt.compareSync(password, user.password);

  if (!checkPassword) {
    return next(errorHandler(400, 'Credentials are wrong'));
  }

  const token = generateJwt(user.id, user.email, user.role);

  return res.json({ token });
};
