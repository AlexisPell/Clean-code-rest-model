import { User, Basket } from './../../models/models';

import { buildLoginUser } from './login';
import { buildRegisterUser } from './register';
import { checkAuth } from './checkAuth';

const register = buildRegisterUser(User, Basket);
const login = buildLoginUser(User);

export const userController = {
  login,
  register,
  checkAuth,
};
