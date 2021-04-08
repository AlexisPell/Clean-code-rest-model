import { IUser, Maybe } from './../../typings/index';
import { makeAutoObservable } from 'mobx';

type IUserState = {
  _isAuthorized: boolean;
  _user: Partial<IUser>;
};
const userState: IUserState = {
  _isAuthorized: false,
  _user: {},
};

export const buildUserStore = () =>
  makeAutoObservable({
    ...userState,
    ...userActions(),
    ...userGetters(),
  });

function userActions() {
  const setIsAuth = (authStatus: boolean) => {
    userState._isAuthorized = authStatus;
  };
  const setUser = (user: Partial<IUser>) => {
    userState._user = user;
  };
  return {
    setIsAuth,
    setUser,
  };
}

function userGetters() {
  return {
    get user() {
      return userState._user;
    },
    get isAuthorized() {
      return userState._isAuthorized;
    },
  };
}
