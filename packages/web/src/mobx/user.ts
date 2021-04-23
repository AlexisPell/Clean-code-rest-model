import { makeAutoObservable } from 'mobx';
import { IUser } from 'src/typings';
import { IRootStore } from './index';
import jwtDecode from 'jwt-decode';

export class UserStore {
  _isAuthorized = false;
  _user: Partial<IUser> = null;

  constructor(rootStore: IRootStore) {
    makeAutoObservable(this);
  }

  setIsAuth = (authStatus: boolean) => {
    this._isAuthorized = authStatus;
  };
  setUser = (user: Partial<IUser>) => {
    this._user = user;
  };
  checkUserToken = (): Partial<{ user: Partial<IUser>; isAdmin: boolean }> | null => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const user: Partial<IUser> = jwtDecode(token);
    this._isAuthorized = true;
    this._user = user;
    return { user, isAdmin: user.role === 'ADMIN' };
  };
  logout = () => {
    localStorage.removeItem('token');
    this._isAuthorized = false;
    this._user = null;
  };

  get user() {
    return this._user;
  }
  get isAuthorized() {
    return this._isAuthorized;
  }
}
