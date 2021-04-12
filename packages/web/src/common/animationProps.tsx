export const dropFromTop = {
  animate: { y: 0 },
  initial: { y: '-100vh' },
  transition: { type: 'spring', bounce: 0.15 },
};

export const appearFromRightWithDelay = {
  animate: { x: 0, opacity: 1 },
  initial: { x: '100vw', opacity: 0 },
  transition: { type: 'spring', bounce: 0.1, delay: 0.25 },
};

export const appearFromLeftWithDelay = {
  animate: { x: 0, opacity: 1 },
  initial: { x: '-100vw', opacity: 0 },
  transition: { type: 'spring', bounce: 0.1, delay: 0.25 },
};

export const appearFromRight = {
  animate: { x: 0, opacity: 1 },
  initial: { x: '100vw', opacity: 0 },
  transition: { type: 'spring', bounce: 0.1 },
};

export const appearFromLeft = {
  animate: { x: 0, opacity: 1 },
  initial: { x: '-100vw', opacity: 0 },
  transition: { type: 'spring', bounce: 0.1 },
};

export const fadeIn = {
  animate: { opacity: 1 },
  initial: { opacity: 0 },
  transition: { delay: 1, duration: 1 },
};

export const onHoverBGC = {
  whileHover: {
    backgroundColor: '#000',
    color: '#fff',
  },
  transition: { duration: 0.25 },
};

export const onHoverWhiteColor = {
  whileHover: {
    color: '#fff',
  },
  transition: { duration: 0.25 },
};
