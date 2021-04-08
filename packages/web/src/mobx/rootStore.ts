import { enableStaticRendering } from 'mobx-react-lite';

import { buildUserStore } from './stores/userStore';
import { buildDeviceStore } from './stores/deviceStore';

enableStaticRendering(typeof window === 'undefined');

export type IRootStore = InstanceType<typeof RootStore>;
export class RootStore {
  userStore = buildUserStore();
  deviceStore = buildDeviceStore();
}
