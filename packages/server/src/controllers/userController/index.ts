import { buildLoginUser } from './login';
import { buildRegisterUser } from './register';
import { checkAuth } from './checkAuth';

import { User, Basket } from './../../models/models';

const register = buildRegisterUser(User, Basket);
const login = buildLoginUser(User);

export const userController = {
  login,
  register,
  checkAuth,
};
