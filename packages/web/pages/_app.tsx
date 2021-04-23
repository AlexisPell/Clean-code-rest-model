import { StoreProvider, RootStore } from './../src/mobx/index';
import 'antd/dist/antd.css';
import './../src/styles/global.css';
import { AnimatePresence, motion } from 'framer-motion';
import { appAnimations } from 'src/styles/animationProps';
import ProgressBar from 'nextjs-progressbar';

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
          <ProgressBar color='#000' startPosition={0.3} stopDelayMs={200} height={2.5} />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </StoreProvider>
  );
};

export default App;
