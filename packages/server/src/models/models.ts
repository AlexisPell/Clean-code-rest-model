import { DataTypes } from 'sequelize';

import { sequelize } from './../db';

import {
  IUser,
  IBasket,
  IBasketDevice,
  IDevice,
  IDeviceInfo,
  IBrand,
  IType,
  ITypeBrand,
  IRating,
} from './../types/types';

const { INTEGER, STRING } = DataTypes;

const User = sequelize.define<IUser>('user', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: STRING, unique: true },
  password: { type: STRING },
  role: { type: STRING, defaultValue: 'USER' },
});

const Basket = sequelize.define<IBasket>('basket', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketDevice = sequelize.define<IBasketDevice>('basket-device', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
});

const Device = sequelize.define<IDevice>('device', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: STRING, unique: true, allowNull: false },
  price: { type: INTEGER, allowNull: false },
  rating: { type: INTEGER, defaultValue: 0 },
  img: { type: STRING, allowNull: false },
});

const DeviceInfo = sequelize.define<IDeviceInfo>('device_info', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: STRING, allowNull: false },
  description: { type: STRING, allowNull: false },
});

const Type = sequelize.define<IType>('type', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: STRING, unique: true, allowNull: false },
});

const Brand = sequelize.define<IBrand>('brand', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: STRING, unique: true, allowNull: false },
});

const Rating = sequelize.define<IRating>('rating', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: INTEGER, allowNull: false },
});

const TypeBrand = sequelize.define<ITypeBrand>('type_brand', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasOne(Basket, { constraints: false });
Basket.belongsTo(User, { constraints: false });

User.hasMany(Rating, { constraints: false });
Rating.belongsTo(User, { constraints: false });

Basket.hasMany(BasketDevice, { constraints: false });
BasketDevice.belongsTo(Basket, { constraints: false });

Type.hasMany(Device, { constraints: false });
Device.belongsTo(Type, { constraints: false });

Brand.hasMany(Device, { constraints: false });
Device.belongsTo(Brand, { constraints: false });

Device.hasMany(Rating, { constraints: false });
Rating.belongsTo(Device, { constraints: false });

Device.hasMany(BasketDevice, { constraints: false });
BasketDevice.belongsTo(Device, { constraints: false });

Device.hasMany(DeviceInfo, { as: 'info', constraints: false });
DeviceInfo.belongsTo(Device, { constraints: false });

Type.belongsToMany(Brand, { through: TypeBrand });
Brand.belongsToMany(Type, { through: TypeBrand });

export default {
  User,
  Basket,
  BasketDevice,
  Device,
  Type,
  Brand,
  Rating,
  DeviceInfo,
  TypeBrand,
};
export { User, Basket, BasketDevice, Device, Type, Brand, Rating, DeviceInfo, TypeBrand };
