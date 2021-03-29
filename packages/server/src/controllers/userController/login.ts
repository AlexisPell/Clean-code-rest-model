import bcrypt from 'bcrypt';
import { errorHandler } from './../../utils/errorHandler';

import { NextFunction, Request, Response } from 'express';
import { Model, ModelCtor } from 'sequelize/types';
import { IUser } from './../../types/types';

import { generateJwt } from './../../useCases/user/generateJwt';

export const buildLoginUser = (User: ModelCtor<Model<any, any>>) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(errorHandler(400, 'No provided email or password'));
  }

  const user: IUser & any = await User.findOne({ where: { email } });

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
