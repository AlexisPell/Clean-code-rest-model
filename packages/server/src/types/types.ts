import { Model } from 'sequelize';
export interface IUser {
  id: number;
  email: string;
  password: string;
  role: string;
}

export interface IBasket {
  id: number;
  userId: number;
  basketDeviceId: number;
}

// export interface BasketDevice {}

export interface IDevice {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  // deviceInfoId: number // as "info"
}

export interface IDeviceInfo {
  id: number;
  title: string;
  description: string;
  // deviceId: number // as "info"
  info: number;
}

export interface IType {
  id: number;
  name: string;
  // brandId: number;
  deviceId: number;
}

export interface IBrand {
  id: number;
  name: string;
  // typeId: number;
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
