import { IDevice } from 'src/typings/index';
import { makeAutoObservable } from 'mobx';
import { IRootStore } from './index';

export class BasketStore {
  _basket: IDevice[] = [];

  constructor(rootStore: IRootStore) {
    makeAutoObservable(this);
  }

  setDevicesToBasket = (basket: IDevice[]) => {
    this._basket = basket;
  };

  get basket() {
    return this._basket;
  }
}
