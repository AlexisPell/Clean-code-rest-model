import { useEffect } from 'react';
import { useStore, StoreProvider } from './../src/mobx/StoreProvider';
import 'antd/dist/antd.css';
import './../src/styles/global.css';

const App = ({ Component, pageProps, ...rest }) => {
  // const { userStore } = useStore();
  // console.log('_APP STORE: ', userStore);
  // useEffect(() => {}, []);

  return (
    <StoreProvider {...pageProps}>
      <Component {...pageProps} />
    </StoreProvider>
  );
};

export default App;
