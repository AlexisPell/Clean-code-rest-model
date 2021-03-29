import bcrypt from 'bcrypt';

import { NextFunction, Request, Response } from 'express';
import { Model, ModelCtor } from 'sequelize/types';
import { IUser } from './../../types/types';

import { errorHandler } from './../../utils/errorHandler';
import { generateJwt } from './../../useCases/user/generateJwt';

export const buildRegisterUser = (
  User: ModelCtor<Model<any, any>>,
  Basket: ModelCtor<Model<any, any>>
) => async (req: Request, res: Response, next: NextFunction) => {
  const { email, password, role } = req.body;

  if (!email || !password) {
    return next(errorHandler(400, 'No provided email or password'));
  }

  const duplicatedUser = await User.findOne({ where: { email } });
  if (duplicatedUser) {
    return next(errorHandler(400, 'User already registered'));
  }

  const hashPassword = await bcrypt.hash(password, 5);

  const user: IUser & any = await User.create({ email, password: hashPassword, role });

  await Basket.create({ userId: user.id });

  const token = generateJwt(user.id, user.email, user.role);

  return res.json({ token });
};
