import { Model } from 'sequelize';

export interface IUser extends Model {
  id: number;
  email: string;
  password: string;
  role: 'USER' | 'ADMIN';
  rateId: number;
}

export interface IBasket extends Model {
  id: number;
  userId: number;
  basketDeviceId: number;
}

export interface IBasketDevice extends Model {
  id: number;
  basketId: number;
  deviceId: number;
}

export interface IDevice extends Model {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  info: IDeviceInfo; // as "info" deviceInfoId
  basketDeviceId: number;
}

export interface IDeviceInfo extends Model {
  id: number;
  title: string;
  description: string;
  deviceId: number; // as "info"
}

export interface IType extends Model {
  id: number;
  name: string;
  brandId: number;
  deviceId: number;
}

export interface IBrand extends Model {
  id: number;
  name: string;
  typeId: number;
  deviceId: number;
}

export interface IRating extends Model {
  id: number;
  rate: number;
  userId: number;
  deviceId: number;
}

export interface ITypeBrand extends Model {
  id: number;
  typeId: number;
  brandId: number;
}
