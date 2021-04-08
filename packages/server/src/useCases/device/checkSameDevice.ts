import { IDevice } from './../../types/types';
import { ModelCtor } from 'sequelize/types';
export async function checkSameDevice(
  Device: ModelCtor<IDevice>,
  deviceName: string,
  errorHandler: (...args: any) => any,
  next: (...args: any) => any
) {
  let devices = await Device.findAll();
  devices = devices.map((d: any) => ({ ...d.dataValues }));

  if (devices.some((d: any) => d.name === deviceName)) {
    return next(errorHandler(403, 'Such device already exists'));
  }
}
