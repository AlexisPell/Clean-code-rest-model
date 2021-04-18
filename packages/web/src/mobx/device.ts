import { flow, makeAutoObservable } from 'mobx';
import { IDevice, IBrand, IType } from 'src/typings';
import { IRootStore } from './index';
import _ from 'lodash';

import { fetchDevice } from 'src/api/devices';

export class DeviceStore {
  // state
  _loading: boolean = false;
  _devices: Partial<IDevice>[] = null;
  _brands: Partial<IBrand>[] = null;
  _types: Partial<IType>[] = null;
  _device: Partial<IDevice> = null;
  _brand: Partial<IBrand> = null;
  _type: Partial<IType> = null;

  constructor(rootStore: IRootStore) {
    makeAutoObservable(this);
  }

  // actions
  setDevices = (devices: IDevice[]) => {
    this._devices = devices;
  };
  setBrands = (brands: IBrand[]) => {
    this._brands = brands;
  };
  setTypes = (types: IType[]) => {
    this._types = types;
  };
  setDevice = (deviceId: IDevice['id']) => {
    this._device = _(this.devices).find((d) => d.id === deviceId);
  };
  setBrand = (brandId: IBrand['id']) => {
    this._brand = _(this.brands).find((b) => b.id === brandId);
  };
  setType = (typeId: IType['id']) => {
    this._type = _(this.types).find((t) => t.id === typeId);
  };

  // async
  loadDevice = (deviceId: number) =>
    flow(function* (this: DeviceStore) {
      this._loading = true;
      try {
        const device = yield fetchDevice(deviceId);
        this._device = device;
      } catch (e) {
        console.log('Error setting device to mobx: ', e);
      } finally {
        this._loading = false;
      }
    });

  // getters
  get loading() {
    return this._loading;
  }
  get devices() {
    return this._devices;
  }
  get brands() {
    return this._brands;
  }
  get types() {
    return this._types;
  }
  get device() {
    return this._device;
  }
  get brand() {
    return this._brand;
  }
  get type() {
    return this._type;
  }
}
