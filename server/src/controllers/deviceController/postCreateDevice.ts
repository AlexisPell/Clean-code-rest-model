import { IDevice, IDeviceInfo } from './../../types/types';
import { v4 } from 'uuid';
import path from 'path';

import { errorHandler } from './../../utils/errorHandler';
import { NextFunction, Request, Response } from 'express';
import { Model, ModelCtor } from 'sequelize/types';

export const buildPostCreateDevice = (
  Device: ModelCtor<Model<any, any>>,
  DeviceInfo: ModelCtor<Model<any, any>>
) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { name, price, brandId, typeId, info } = req.body;
    const { img }: string | any = req.files;

    checkSameDevice(Device, name, errorHandler, next);

    let fileName = `${v4()}.jpg`;
    await img!.mv(path.resolve(__dirname, '..', '..', 'public', fileName));

    const device: IDevice = await (Device as any).create({
      name,
      price,
      brandId,
      typeId,
      img: fileName,
    });

    if (info) {
      info = JSON.parse(info);
      info.forEach((i: IDeviceInfo) => {
        DeviceInfo.create({
          title: i.title,
          description: i.description,
          deviceId: device.id,
        });
      });
    }

    res.json(device);
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};

async function checkSameDevice(Device: any, deviceName: string, errorHandler: any, next: any) {
  let devices = await Device.findAll();
  console.log('🚀 ~ file: postCreateDevice.ts ~ line 37 ~ checkSameDevice ~ devices', devices);
  devices = devices.map((d: any) => ({ ...d.dataValues }));

  if (devices.some((d: any) => d.name === deviceName)) {
    return next(errorHandler(403, 'Such device already exists'));
  }
}
