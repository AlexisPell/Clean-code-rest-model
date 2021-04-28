import { IDevice } from './../../types/types';
import { ModelCtor } from 'sequelize/types';
export async function getAllDevices(
  Device: ModelCtor<IDevice>,
  brandId: number,
  typeId: number,
  limit: number,
  // offset: number
  page: number
) {
  page = page || 1;
  limit = limit || 9;

  let offset = page * limit - limit;

  let devices = {};

  if (!brandId && !typeId) {
    devices = await Device.findAndCountAll({ limit, offset });
  }
  if (brandId && !typeId) {
    devices = await Device.findAndCountAll({ where: { brandId }, limit, offset });
  }
  if (!brandId && typeId) {
    devices = await Device.findAndCountAll({ where: { typeId }, limit, offset });
  }
  if (brandId && typeId) {
    devices = await Device.findAndCountAll({ where: { brandId, typeId }, limit, offset });
  }

  return devices;
}
