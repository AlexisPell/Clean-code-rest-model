import { IDevice } from './../../types/types';
import { ModelCtor } from 'sequelize/types';
export async function getAllDevices(
  Device: ModelCtor<IDevice>,
  brandId: number,
  typeId: number,
  limit: number,
  offset: number
) {
  let devices: IDevice[] = [];

  if (!brandId && !typeId) {
    devices = await Device.findAll({ limit, offset });
  }
  if (brandId && !typeId) {
    devices = await Device.findAll({ where: { brandId }, limit, offset });
  }
  if (!brandId && typeId) {
    devices = await Device.findAll({ where: { typeId }, limit, offset });
  }
  if (brandId && typeId) {
    devices = await Device.findAll({ where: { brandId, typeId }, limit, offset });
  }

  return devices;
}
