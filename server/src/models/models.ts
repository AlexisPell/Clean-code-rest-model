import { DataTypes } from 'sequelize';

import { sequelize } from './../db';

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

const Basket = sequelize.define('basket', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketDevice = sequelize.define('basket-device', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Device = sequelize.define('device', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  img: { type: DataTypes.STRING, allowNull: false },
});

const Type = sequelize.define('type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Brand = sequelize.define('brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Rating = sequelize.define('rating', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
});

const DeviceInfo = sequelize.define('device_info', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

const TypeBrand = sequelize.define('type_brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

// // connections
// User.hasOne(Basket);
// Basket.belongsTo(User);

// User.hasMany(Rating);
// Rating.belongsTo(User);

// Type.hasMany(Device);
// Device.belongsTo(Type);

// Brand.hasMany(Device);
// Device.belongsTo(Brand);

// Device.hasMany(Rating);
// Rating.belongsTo(Device);

// Device.hasMany(DeviceInfo);
// DeviceInfo.belongsTo(Device);

// // many-to-many of basket and device through basketDevice
// Basket.hasMany(BasketDevice);
// BasketDevice.belongsTo(Basket);
// Device.hasMany(BasketDevice);
// BasketDevice.belongsTo(Device);

// // many-to-many of type and brand without one-many-many-one
// Type.belongsToMany(Brand, { through: TypeBrand });
// Brand.belongsToMany(Type, { through: TypeBrand });

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
