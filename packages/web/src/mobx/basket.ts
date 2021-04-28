import { IDevice } from 'src/typings/index';
import { makeAutoObservable } from 'mobx';
import { IRootStore } from './index';
import _ from 'lodash';

type IBasketDevice = IDevice & { numOfDevices: number };
export class BasketStore {
  _basket: IBasketDevice[] = [];

  constructor(rootStore: IRootStore) {
    makeAutoObservable(this);
  }

  setDevicesToBasket = (basket: IDevice[]) => {
    const basketDevices = _(basket)
      .map((device) => ({
        ...device,
        numOfDevices: 1,
      }))
      .value();
    this._basket = basketDevices;
  };
  addOneToCurrentDevice = (deviceId: number) => {
    const newBasketDevices = _(this._basket)
      .map((d) => {
        if (d.id === deviceId) {
          d = { ...d, numOfDevices: d.numOfDevices + 1 };
        }
        return d;
      })
      .value();
    this._basket = newBasketDevices;
  };
  removeOneFromCurrentDevice = (deviceId: number) => {
    const newBasketDevices = _(this._basket)
      .map((d) => {
        if (d.id === deviceId && d.numOfDevices > 1) {
          d = { ...d, numOfDevices: d.numOfDevices - 1 };
        }
        return d;
      })
      .value();
    this._basket = newBasketDevices;
  };
  removeDeviceFromBasket = async (deviceId: number) => {
    this._basket = _(this._basket)
      .remove((d) => d.id !== deviceId)
      .value();
  };

  get basket() {
    return this._basket;
  }
  get totalPrice() {
    let totalPrice = 0;
    _(this._basket).forEach((d) => {
      let positionSum = d.price * d.numOfDevices;
      totalPrice += positionSum;
    });
    return totalPrice;
  }
}
