export type Maybe<T> = T | void;

export interface IUser {
  id: number;
  email: string;
  password: string;
  role: 'USER' | 'ADMIN';
  rateId: number;
}

export interface IBasket {
  id: number;
  userId: number;
  basketDeviceId: number;
}

export interface IBasketDevice {
  id: number;
  basketId: number;
  deviceId: number;
}

export interface IDevice {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  info: IDeviceInfo[]; // as "info" deviceInfoId
  basketDeviceId: number;
}

export interface IDeviceInfo {
  id: number;
  title: string;
  description: string;
  deviceId: number; // as "info"
}

export interface IType {
  id: number;
  name: string;
  brandId: number;
  deviceId: number;
}

export interface IBrand {
  id: number;
  name: string;
  typeId: number;
  deviceId: number;
}

export interface IRating {
  id: number;
  rate: number;
  userId: number;
  deviceId: number;
}

export interface ITypeBrand {
  id: number;
  typeId: number;
  brandId: number;
}
