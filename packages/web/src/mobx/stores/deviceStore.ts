import { IType, IBrand, IDevice } from 'src/typings/index';
import { makeAutoObservable } from 'mobx';

type IDeviceState = {
  _types: IType[];
  _brands: IBrand[];
  _devices: IDevice[];
};
const deviceState: IDeviceState = {
  _types: null,
  _brands: null,
  _devices: null,
};

export const buildDeviceStore = () =>
  makeAutoObservable({
    ...deviceState,
    ...deviceActions(),
    ...deviceGetters(),
  });

function deviceActions() {
  const setTypes = (types: IType[]) => {
    console.log('🚀 ~ file: deviceStore.ts ~ line 24 ~ setTypes ~ types', types);
    deviceState._types = types;
  };
  const setBrands = (brands: IBrand[]) => {
    deviceState._brands = brands;
  };
  const setDevices = (devices: IDevice[]) => {
    deviceState._devices = devices;
  };
  return {
    setTypes,
    setBrands,
    setDevices,
  };
}

function deviceGetters() {
  return {
    get types() {
      return deviceState._types;
    },
    get brands() {
      return deviceState._brands;
    },
    get devices() {
      return deviceState._devices;
    },
  };
}
