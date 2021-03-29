import { buildGetAllDevices } from './getAllDevices';
import { buildGetOneDevice } from './getOneDevice';
import { buildPostCreateDevice } from './postCreateDevice';
import { buildDeleteDevice } from './deleteDevice';

import { Device, DeviceInfo } from './../../models/models';

const postCreateDevice = buildPostCreateDevice(Device, DeviceInfo);
const getAllDevices = buildGetAllDevices(Device);
const getOneDevice = buildGetOneDevice(Device, DeviceInfo);
const deleteDevice = buildDeleteDevice(Device);

export const deviceController = {
  postCreateDevice,
  getAllDevices,
  getOneDevice,
  deleteDevice,
};
