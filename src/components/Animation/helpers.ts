import { Variants } from 'framer-motion';
import { 
  SlideDirection, 
  RotateDirection
} from './types';

// Default transition configurations
export const defaultTransitions = {
  spring: {
    type: 'spring' as const,
    damping: 20,
    stiffness: 300,
    mass: 1
  },
  smooth: {
    type: 'tween' as const,
    duration: 0.3,
    ease: 'easeOut' as const
  },
  bounce: {
    type: 'spring' as const,
    damping: 10,
    stiffness: 400,
    mass: 1
  },
  slow: {
    type: 'tween' as const,
    duration: 0.8,
    ease: 'easeInOut' as const
  }
};

// FadeIn variants
export const fadeInVariants: Variants = {
  initial: (from = 0) => ({
    opacity: from,
  }),
  animate: (to = 1) => ({
    opacity: to,
  }),
  exit: {
    opacity: 0,
  }
};

// SlideIn variants
export const slideInVariants: Variants = {
  initial: ({ direction = 'up', distance = 50 }) => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 };
      case 'down':
        return { y: -distance, opacity: 0 };
      case 'left':
        return { x: distance, opacity: 0 };
      case 'right':
        return { x: -distance, opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  exit: ({ direction = 'up', distance = 50 }) => {
    switch (direction) {
      case 'up':
        return { y: -distance, opacity: 0 };
      case 'down':
        return { y: distance, opacity: 0 };
      case 'left':
        return { x: -distance, opacity: 0 };
      case 'right':
        return { x: distance, opacity: 0 };
      default:
        return { y: -distance, opacity: 0 };
    }
  }
};

// ScaleIn variants
export const scaleInVariants: Variants = {
  initial: (from = 0) => ({
    scale: from,
    opacity: 0,
  }),
  animate: (to = 1) => ({
    scale: to,
    opacity: 1,
  }),
  exit: {
    scale: 0,
    opacity: 0,
  },
  hover: {
    scale: 1.05,
  },
  tap: {
    scale: 0.95,
  }
};

// RotateIn variants
export const rotateInVariants: Variants = {
  initial: ({ direction = 'clockwise', degrees = 180 }) => ({
    rotate: direction === 'clockwise' ? -degrees : degrees,
    opacity: 0,
  }),
  animate: {
    rotate: 0,
    opacity: 1,
  },
  exit: ({ direction = 'clockwise', degrees = 180 }) => ({
    rotate: direction === 'clockwise' ? degrees : -degrees,
    opacity: 0,
  })
};

// Bounce variants
export const bounceVariants: Variants = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: ({ amplitude = 20, frequency = 2 }) => ({
    y: [0, -amplitude, 0, -amplitude * 0.5, 0],
    opacity: 1,
    transition: {
      duration: 0.6,
      times: [0, 0.2, 0.4, 0.6, 1],
      repeat: frequency - 1,
    }
  }),
  exit: {
    y: 0,
    opacity: 0,
  }
};

// Stagger variants
export const staggerContainerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

export const staggerItemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};

// Helper functions
export const getSlideDistance = (direction: SlideDirection, distance: number) => {
  switch (direction) {
    case 'up':
      return { y: distance };
    case 'down':
      return { y: -distance };
    case 'left':
      return { x: distance };
    case 'right':
      return { x: -distance };
    default:
      return { y: distance };
  }
};

export const getRotationDegrees = (direction: RotateDirection, degrees: number) => {
  return direction === 'clockwise' ? -degrees : degrees;
};

// Animation presets for common use cases
export const animationPresets = {
  fadeInSlow: {
    variants: fadeInVariants,
    transition: defaultTransitions.slow,
    initial: 'initial',
    animate: 'animate'
  },
  slideInUp: {
    variants: slideInVariants,
    transition: defaultTransitions.smooth,
    initial: 'initial',
    animate: 'animate',
    custom: { direction: 'up' as SlideDirection, distance: 50 }
  },
  scaleInBounce: {
    variants: scaleInVariants,
    transition: defaultTransitions.bounce,
    initial: 'initial',
    animate: 'animate'
  },
  rotateInSlow: {
    variants: rotateInVariants,
    transition: defaultTransitions.slow,
    initial: 'initial',
    animate: 'animate',
    custom: { direction: 'clockwise' as RotateDirection, degrees: 360 }
  }
};