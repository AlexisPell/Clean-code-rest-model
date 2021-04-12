import { makeAutoObservable } from 'mobx';
import { IUser } from 'src/typings';
import { IRootStore } from './index';

export class UserStore {
  _isAuthorized = false;
  _user: Partial<IUser> = {};

  constructor(rootStore: IRootStore) {
    makeAutoObservable(this);
    rootStore.userStore;
  }

  setIsAuth = (authStatus: boolean) => {
    this._isAuthorized = authStatus;
  };
  setUser = (user: Partial<IUser>) => {
    this._user = user;
  };

  get user() {
    return this._user;
  }
  get isAuthorized() {
    return this._isAuthorized;
  }
}
