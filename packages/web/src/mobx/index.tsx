import React, { createContext, useContext } from 'react';
import { enableStaticRendering } from 'mobx-react-lite';

import { UserStore } from './user';
import { DeviceStore } from './device';

export { RootStore, StoreProvider, useStore };
export type IRootStore = InstanceType<typeof RootStore>;

enableStaticRendering(typeof window === 'undefined');

class RootStore {
  userStore: UserStore;
  deviceStore: DeviceStore;
  constructor() {
    this.userStore = new UserStore(this);
    this.deviceStore = new DeviceStore(this);
  }
}

const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('Looks like connection to StoreProvider was lost');
  }
  return context;
};

const StoreContext = createContext(new RootStore());
const StoreProvider: React.FC<{ store: IRootStore }> = ({ store, children }) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
