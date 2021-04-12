import { makeAutoObservable } from 'mobx';
import { IDevice, IBrand, IType } from 'src/typings';
import { IRootStore } from './index';

export class DeviceStore {
  _devices: Partial<IDevice>[] = null;
  _brands: Partial<IBrand>[] = null;
  _types: Partial<IType>[] = null;

  constructor(rootStore: IRootStore) {
    makeAutoObservable(this);
  }

  setDevices = (devices: IDevice[]) => {
    this._devices = devices;
  };
  setBrands = (brands: IBrand[]) => {
    this._brands = brands;
  };
  setTypes = (types: IType[]) => {
    this._types = types;
  };

  get devices() {
    return this._devices;
  }
  get brands() {
    return this._brands;
  }
  get types() {
    return this._types;
  }
}
