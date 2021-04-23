import { MyRequest } from './../../types/express';
import path from 'path';
import { v4 } from 'uuid';

import { errorHandler } from './../../utils/errorHandler';
import { checkSameDevice } from './../../useCases/device/checkSameDevice';

import { IDevice, IDeviceInfo } from './../../types/types';
import { NextFunction, Response } from 'express';
import { ModelCtor } from 'sequelize/types';

interface IRequestBody {
  name: string;
  price: string;
  brandId: number;
  typeId: number;
  img: any;
  info: string;
}

export const buildPostCreateDevice = (
  Device: ModelCtor<IDevice>,
  DeviceInfo: ModelCtor<IDeviceInfo>
) => async (req: MyRequest, res: Response, next: NextFunction) => {
  try {
    let { name, price, brandId, typeId, info }: IRequestBody = req.body;
    console.log('🚀 ~ file: postCreateDevice.ts ~ line 27 ~ )=> ~ req.files', req.files);
    console.log('🚀 ~ file: postCreateDevice.ts ~ line 27 ~ )=> ~ req.body', req.body);
    const { img }: string | any = req.files;
    console.log('🚀 ~ file: postCreateDevice.ts ~ line 28 ~ )=> ~ img', img);

    checkSameDevice(Device, name, errorHandler, next);

    let fileName = `${v4()}.jpg`;
    await img!.mv(path.resolve(__dirname, '..', '..', 'public', fileName));

    const device: IDevice = await Device.create({
      name,
      price,
      brandId,
      typeId,
      img: fileName,
    });

    if (info) {
      let parsedInfo = JSON.parse(info);
      console.log('🚀 ~ file: postCreateDevice.ts ~ line 44 ~ )=> ~ parsedInfo', parsedInfo);
      // sync creating without await
      parsedInfo.forEach((i: IDeviceInfo) => {
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
