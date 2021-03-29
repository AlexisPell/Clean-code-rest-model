export async function checkSameDevice(
  Device: any,
  deviceName: string,
  errorHandler: any,
  next: any
) {
  let devices = await Device.findAll();
  console.log('🚀 ~ file: postCreateDevice.ts ~ line 37 ~ checkSameDevice ~ devices', devices);
  devices = devices.map((d: any) => ({ ...d.dataValues }));

  if (devices.some((d: any) => d.name === deviceName)) {
    return next(errorHandler(403, 'Such device already exists'));
  }
}
