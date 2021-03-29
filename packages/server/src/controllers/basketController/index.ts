import { buildGetBasketWithDevices } from './getBasketWithDevices';
import { buildPostAddDeviceToBasket } from './postAddDeviceToBasket';
import { buildDeleteDeviceFromBasket } from './deleteDeviceFromBasket';

import { Basket, User, BasketDevice, Device } from './../../models/models';

const getBasketByUser = buildGetBasketWithDevices(Basket, BasketDevice, Device);
const postAddDeviceToBasket = buildPostAddDeviceToBasket(Basket, BasketDevice);
const deleteDeviceFromBasket = buildDeleteDeviceFromBasket(Basket, BasketDevice);

export const basketController = {
  getBasketByUser,
  postAddDeviceToBasket,
  deleteDeviceFromBasket,
};
