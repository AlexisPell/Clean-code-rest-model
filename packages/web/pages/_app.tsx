// import { StoreProvider } from './../src/mobx/StoreProvider';
import { StoreProvider, RootStore } from './../src/mobx/index';
import 'antd/dist/antd.css';
import './../src/styles/global.css';
import { AnimatePresence, motion } from 'framer-motion';

const _store = new RootStore();

const App = ({ Component, pageProps, router }) => {
  const store = _store ?? new RootStore();
  return (
    <StoreProvider store={store} {...pageProps}>
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial='pageInitial'
          animate='pageAnimate'
          exit='pageExit'
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
            pageExit: {
              backgroundColor: 'white',
              opacity: 0,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </StoreProvider>
  );
};

export default App;
