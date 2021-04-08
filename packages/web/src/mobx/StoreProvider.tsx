import { createContext, useContext } from 'react';
import { RootStore, IRootStore } from './rootStore';
// import { configure } from 'mobx';

// configure({
//   useProxies: 'never',
// });

let store;
export const StoreContext = createContext(null);

export function useStore(): IRootStore {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within StoreProvider');
  }

  return context;
}

export function StoreProvider({ children, initialState: initialData }) {
  const store = initializeStore(initialData);

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

function initializeStore(initialData = null) {
  const _store = store ?? new RootStore();

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
  if (initialData) {
    _store.hydrate(initialData);
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
}
