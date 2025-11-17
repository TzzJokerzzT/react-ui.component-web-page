import { tv } from 'tailwind-variants';
import type { SpinnerSize, SpinnerColor, SpinnerSpeed } from './types';

// Speed configurations (duration in seconds)
export const SPEED_CONFIG = {
  slow: 2.0,
  normal: 1.0,
  fast: 0.6,
} as const;

// Base spinner variants
export const spinnerVariants = tv({
  base: [
    'inline-block',
    'animate-spin',
    'transition-all',
    'duration-200',
    'ease-in-out',
  ],
  variants: {
    size: {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-12 h-12',
    },
    color: {
      primary: 'text-blue-600',
      secondary: 'text-gray-600',
      success: 'text-green-600',
      warning: 'text-yellow-600',
      error: 'text-red-600',
      neutral: 'text-gray-400',
    },
    visible: {
      true: 'opacity-100 scale-100',
      false: 'opacity-0 scale-95 pointer-events-none',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
    visible: true,
  },
});

// Container variants
export const spinnerContainerVariants = tv({
  base: [
    'flex',
    'items-center',
    'justify-center',
    'transition-all',
    'duration-200',
    'ease-in-out',
  ],
  variants: {
    overlay: {
      true: [
        'fixed',
        'inset-0',
        'z-50',
        'bg-white/80',
        'backdrop-blur-sm',
      ],
      false: '',
    },
    position: {
      center: 'flex-col',
      top: 'flex-col',
      bottom: 'flex-col',
      left: 'flex-row',
      right: 'flex-row-reverse',
    },
    fullScreen: {
      true: 'w-screen h-screen',
      false: 'w-full h-full',
    },
  },
  defaultVariants: {
    overlay: false,
    position: 'center',
    fullScreen: false,
  },
});

// Label variants
export const spinnerLabelVariants = tv({
  base: [
    'text-sm',
    'font-medium',
    'transition-opacity',
    'duration-200',
  ],
  variants: {
    position: {
      center: 'mt-2 text-center',
      top: 'mb-2 text-center',
      bottom: 'mt-2 text-center',
      left: 'ml-2',
      right: 'mr-2',
    },
    color: {
      primary: 'text-blue-600',
      secondary: 'text-gray-600',
      success: 'text-green-600',
      warning: 'text-yellow-600',
      error: 'text-red-600',
      neutral: 'text-gray-500',
    },
  },
  defaultVariants: {
    position: 'center',
    color: 'neutral',
  },
});

// Type-specific variants
export const rotatingSpinnerVariants = tv({
  base: [
    'relative',
    'inline-block',
  ],
  variants: {
    size: {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-12 h-12',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const pulseSpinnerVariants = tv({
  base: [
    'rounded-full',
    'transition-all',
  ],
  variants: {
    size: {
      xs: 'w-2 h-2',
      sm: 'w-3 h-3',
      md: 'w-4 h-4',
      lg: 'w-6 h-6',
      xl: 'w-8 h-8',
    },
    color: {
      primary: 'bg-blue-600',
      secondary: 'bg-gray-600',
      success: 'bg-green-600',
      warning: 'bg-yellow-600',
      error: 'bg-red-600',
      neutral: 'bg-gray-400',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

export const bounceSpinnerVariants = tv({
  base: [
    'flex',
    'items-center',
    'justify-center',
  ],
  variants: {
    size: {
      xs: 'gap-1',
      sm: 'gap-1',
      md: 'gap-2',
      lg: 'gap-2',
      xl: 'gap-3',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const bounceDotVariants = tv({
  base: [
    'rounded-full',
  ],
  variants: {
    size: {
      xs: 'w-1 h-1',
      sm: 'w-1.5 h-1.5',
      md: 'w-2 h-2',
      lg: 'w-3 h-3',
      xl: 'w-4 h-4',
    },
    color: {
      primary: 'bg-blue-600',
      secondary: 'bg-gray-600',
      success: 'bg-green-600',
      warning: 'bg-yellow-600',
      error: 'bg-red-600',
      neutral: 'bg-gray-400',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

export const waveSpinnerVariants = tv({
  base: [
    'flex',
    'items-end',
    'justify-center',
  ],
  variants: {
    size: {
      xs: 'gap-0.5 h-3',
      sm: 'gap-0.5 h-4',
      md: 'gap-1 h-6',
      lg: 'gap-1 h-8',
      xl: 'gap-1.5 h-12',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const waveBarVariants = tv({
  base: [
    'rounded-full',
  ],
  variants: {
    size: {
      xs: 'w-0.5',
      sm: 'w-0.5',
      md: 'w-1',
      lg: 'w-1',
      xl: 'w-1.5',
    },
    color: {
      primary: 'bg-blue-600',
      secondary: 'bg-gray-600',
      success: 'bg-green-600',
      warning: 'bg-yellow-600',
      error: 'bg-red-600',
      neutral: 'bg-gray-400',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

export const gridSpinnerVariants = tv({
  base: [
    'grid',
    'gap-1',
  ],
  variants: {
    size: {
      xs: 'w-6 h-6',
      sm: 'w-8 h-8',
      md: 'w-12 h-12',
      lg: 'w-16 h-16',
      xl: 'w-24 h-24',
    },
    gridSize: {
      '2x2': 'grid-cols-2 grid-rows-2',
      '3x3': 'grid-cols-3 grid-rows-3',
      '4x4': 'grid-cols-4 grid-rows-4',
    },
  },
  defaultVariants: {
    size: 'md',
    gridSize: '3x3',
  },
});

export const gridCellVariants = tv({
  base: [
    'rounded-sm',
  ],
  variants: {
    color: {
      primary: 'bg-blue-600',
      secondary: 'bg-gray-600',
      success: 'bg-green-600',
      warning: 'bg-yellow-600',
      error: 'bg-red-600',
      neutral: 'bg-gray-400',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

export const ringSpinnerVariants = tv({
  base: [
    'relative',
    'rounded-full',
    'border-solid',
    'border-transparent',
  ],
  variants: {
    size: {
      xs: 'w-3 h-3 border-[1px]',
      sm: 'w-4 h-4 border-[1px]',
      md: 'w-6 h-6 border-2',
      lg: 'w-8 h-8 border-2',
      xl: 'w-12 h-12 border-[3px]',
    },
    color: {
      primary: 'border-t-blue-600 border-r-blue-600/30',
      secondary: 'border-t-gray-600 border-r-gray-600/30',
      success: 'border-t-green-600 border-r-green-600/30',
      warning: 'border-t-yellow-600 border-r-yellow-600/30',
      error: 'border-t-red-600 border-r-red-600/30',
      neutral: 'border-t-gray-400 border-r-gray-400/30',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

export const dotsSpinnerVariants = tv({
  base: [
    'flex',
    'items-center',
    'justify-center',
  ],
  variants: {
    direction: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
      circular: 'relative',
    },
    size: {
      xs: 'gap-1',
      sm: 'gap-1',
      md: 'gap-2',
      lg: 'gap-2',
      xl: 'gap-3',
    },
  },
  defaultVariants: {
    direction: 'horizontal',
    size: 'md',
  },
});

export const barsSpinnerVariants = tv({
  base: [
    'flex',
    'items-end',
    'justify-center',
  ],
  variants: {
    orientation: {
      vertical: 'flex-row items-end',
      horizontal: 'flex-col items-center',
    },
    size: {
      xs: 'gap-0.5',
      sm: 'gap-0.5',
      md: 'gap-1',
      lg: 'gap-1',
      xl: 'gap-1.5',
    },
  },
  defaultVariants: {
    orientation: 'vertical',
    size: 'md',
  },
});

// Utility functions
export const getSpinnerDuration = (speed: SpinnerSpeed): number => {
  return SPEED_CONFIG[speed];
};

export const getSpinnerClasses = (
  size: SpinnerSize,
  color: SpinnerColor,
  visible: boolean = true,
  className?: string
): string => {
  const baseClasses = spinnerVariants({ size, color, visible });
  return className ? `${baseClasses} ${className}` : baseClasses;
};

// Animation variants for Framer Motion
export const motionVariants = {
  rotate: {
    animate: { rotate: 360 },
  },
  pulse: {
    animate: { 
      scale: [1, 1.2, 1] as number[],
      opacity: [0.7, 1, 0.7] as number[],
    },
  },
  bounce: {
    animate: { 
      y: [0, -10, 0] as number[],
    },
  },
  wave: {
    animate: { 
      scaleY: [0.4, 1, 0.4] as number[],
    },
  },
  fade: {
    animate: { 
      opacity: [0.3, 1, 0.3] as number[],
    },
  },
} as const;