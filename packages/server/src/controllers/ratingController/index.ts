import { buildPostRateDevice } from './postRateDevice';
import { buildGetDeviceRate } from './getDeviceRate';

import { Rating } from './../../models/models';

const postRateDevice = buildPostRateDevice(Rating);
const getDeviceRate = buildGetDeviceRate(Rating);

export const ratingController = {
  postRateDevice,
  getDeviceRate,
};
