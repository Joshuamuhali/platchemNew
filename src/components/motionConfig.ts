import { AnimatePresence, motion, Variants } from 'framer-motion';

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export const panelVariants: Variants = {
  hidden: (direction: 'left' | 'right') => ({
    x: direction === 'left' ? '100%' : '-100%',
    opacity: 0
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30
    }
  }
};

export const buttonVariants: Variants = {
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};

export const iconVariants: Variants = {
  float: {
    y: ['0%', '5%', '0%'],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2
    }
  }
};
