import { StoreProvider, RootStore } from './../src/mobx/index';
import 'antd/dist/antd.css';
import './../src/styles/global.css';
import { AnimatePresence, motion } from 'framer-motion';
import { appAnimations } from 'src/styles/animationProps';

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
          variants={appAnimations}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </StoreProvider>
  );
};

export default App;
