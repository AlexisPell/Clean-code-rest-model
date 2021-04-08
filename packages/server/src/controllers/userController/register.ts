import bcrypt from 'bcrypt';

import { errorHandler } from './../../utils/errorHandler';
import { generateJwt } from './../../useCases/user/generateJwt';

import { MyRequest } from './../../types/express';
import { IUser, IBasket } from './../../types/types';
import { NextFunction, Response } from 'express';
import { ModelCtor } from 'sequelize/types';

export const buildRegisterUser = (User: ModelCtor<IUser>, Basket: ModelCtor<IBasket>) => async (
  req: MyRequest,
  res: Response,
  next: NextFunction
) => {
  const { email, password, role } = req.body;

  if (!email || !password) {
    return next(errorHandler(400, 'No provided email or password'));
  }

  const duplicatedUser = await User.findOne({ where: { email } });
  if (duplicatedUser) {
    return next(errorHandler(400, 'User already registered'));
  }

  const hashPassword = await bcrypt.hash(password, 5);

  const user = await User.create({ email, password: hashPassword, role });

  await Basket.create({ userId: user.id });

  const token = generateJwt(user.id, user.email, user.role);

  return res.json({ token });
};
