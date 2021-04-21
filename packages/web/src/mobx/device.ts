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

  // // actions // //
  // Devices
  setDevices = (devices: IDevice[]) => {
    this._devices = devices;
  };
  setFullDevice = (device: IDevice) => {
    this._device = device;
  };
  removeDevice = (deviceId: IDevice['id']) => {
    this._devices = this._devices.filter((d) => d.id !== deviceId);
  };
  // Brands
  setBrands = (brands: IBrand[]) => {
    this._brands = brands;
  };
  findBrand = (brandId: IBrand['id']) => {
    this._brand = _(this.brands).find((b) => b.id === brandId);
  };
  addBrand = (brand: IBrand) => {
    this._brands = [...this._brands, brand];
  };
  removeBrand = (brandId: IBrand['id']) => {
    this._brands = this._brands.filter((b) => b.id !== brandId);
  };
  // Types
  setTypes = (types: IType[]) => {
    this._types = types;
  };
  findType = (typeId: IType['id']) => {
    this._type = _(this.types).find((t) => t.id === typeId);
  };
  addType = (type: IType) => {
    this._types = [...this._types, type];
  };
  removeType = (typeId: IType['id']) => {
    this._types = this._types.filter((t) => t.id !== typeId);
  };

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
