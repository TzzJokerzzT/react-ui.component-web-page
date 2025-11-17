import { tv } from 'tailwind-variants';
import type { TooltipSize, TooltipVariant, TooltipPlacement, TooltipAnimation } from './types';

// Z-index constants
export const TOOLTIP_Z_INDEX = 50;
export const TOOLTIP_ARROW_SIZE = 6;

// Advanced animation configurations with Framer Motion
export const ADVANCED_ANIMATION_CONFIG = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  scale: {
    initial: { opacity: 0, scale: 0.85, transformOrigin: "center" },
    animate: { opacity: 1, scale: 1, transformOrigin: "center" },
    exit: { opacity: 0, scale: 0.85, transformOrigin: "center" },
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      duration: 0.15
    }
  },
  shift: {
    initial: { opacity: 0, y: -8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30
    }
  },
  bounce: {
    initial: { opacity: 0, scale: 0.3, y: -20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: -10 },
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 12,
      bounce: 0.6
    }
  },
  rotate: {
    initial: { opacity: 0, scale: 0.8, rotate: -10 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0.8, rotate: 10 },
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  slide: {
    initial: { opacity: 0, x: -20, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: 20, scale: 0.95 },
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  },
  zoom: {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.3 },
    transition: {
      type: "spring",
      stiffness: 600,
      damping: 20
    }
  },
  flip: {
    initial: { opacity: 0, rotateX: -90, scale: 0.9 },
    animate: { opacity: 1, rotateX: 0, scale: 1 },
    exit: { opacity: 0, rotateX: 90, scale: 0.9 },
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25
    }
  },
  elastic: {
    initial: { opacity: 0, scale: 0.6, y: -30 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: -15 },
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 8,
      bounce: 0.8
    }
  },
  none: {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: { opacity: 1 },
    transition: { duration: 0 }
  },
} as const;

// Legacy animation config for backward compatibility
export const ANIMATION_CONFIG = ADVANCED_ANIMATION_CONFIG;

// Base tooltip content variants
export const tooltipVariants = tv({
  base: [
    'relative',
    'px-2',
    'py-1',
    'rounded-md',
    'text-sm',
    'font-medium',
    'shadow-lg',
    'border',
    'pointer-events-auto',
    'max-w-xs',
    'break-words',
    'z-50',
  ],
  variants: {
    size: {
      xs: 'px-1.5 py-0.5 text-xs max-w-36',
      sm: 'px-2 py-1 text-sm max-w-48',
      md: 'px-3 py-1.5 text-sm max-w-xs',
      lg: 'px-4 py-2 text-base max-w-sm',
    },
    variant: {
      dark: [
        'bg-gray-900',
        'text-white',
        'border-gray-700',
        'shadow-lg',
      ],
      light: [
        'bg-white',
        'text-gray-900',
        'border-gray-200',
        'shadow-lg',
      ],
      primary: [
        'bg-blue-600',
        'text-white',
        'border-blue-500',
        'shadow-lg',
      ],
      success: [
        'bg-green-600',
        'text-white',
        'border-green-500',
        'shadow-lg',
      ],
      warning: [
        'bg-yellow-500',
        'text-yellow-900',
        'border-yellow-400',
        'shadow-lg',
      ],
      error: [
        'bg-red-600',
        'text-white',
        'border-red-500',
        'shadow-lg',
      ],
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'dark',
  },
});

// Arrow variants for tooltip pointer
export const tooltipArrowVariants = tv({
  base: [
    'absolute',
    'border-solid',
    'border-transparent',
  ],
  variants: {
    placement: {
      top: 'bottom-full left-1/2 -translate-x-1/2 border-b-6',
      'top-start': 'bottom-full left-2 border-b-6',
      'top-end': 'bottom-full right-2 border-b-6',
      bottom: 'top-full left-1/2 -translate-x-1/2 border-t-6',
      'bottom-start': 'top-full left-2 border-t-6',
      'bottom-end': 'top-full right-2 border-t-6',
      left: 'right-full top-1/2 -translate-y-1/2 border-r-6',
      'left-start': 'right-full top-2 border-r-6',
      'left-end': 'right-full bottom-2 border-r-6',
      right: 'left-full top-1/2 -translate-y-1/2 border-l-6',
      'right-start': 'left-full top-2 border-l-6',
      'right-end': 'left-full bottom-2 border-l-6',
    },
    variant: {
      dark: '',
      light: '',
      primary: '',
      success: '',
      warning: '',
      error: '',
    },
    size: {
      xs: 'border-[4px]',
      sm: 'border-[5px]',
      md: 'border-[6px]',
      lg: 'border-[7px]',
    },
  },
  compoundVariants: [
    // Top arrows
    {
      placement: ['top', 'top-start', 'top-end'],
      variant: 'dark',
      className: 'border-b-gray-900',
    },
    {
      placement: ['top', 'top-start', 'top-end'],
      variant: 'light',
      className: 'border-b-white',
    },
    {
      placement: ['top', 'top-start', 'top-end'],
      variant: 'primary',
      className: 'border-b-blue-600',
    },
    {
      placement: ['top', 'top-start', 'top-end'],
      variant: 'success',
      className: 'border-b-green-600',
    },
    {
      placement: ['top', 'top-start', 'top-end'],
      variant: 'warning',
      className: 'border-b-yellow-500',
    },
    {
      placement: ['top', 'top-start', 'top-end'],
      variant: 'error',
      className: 'border-b-red-600',
    },
    // Bottom arrows
    {
      placement: ['bottom', 'bottom-start', 'bottom-end'],
      variant: 'dark',
      className: 'border-t-gray-900',
    },
    {
      placement: ['bottom', 'bottom-start', 'bottom-end'],
      variant: 'light',
      className: 'border-t-white',
    },
    {
      placement: ['bottom', 'bottom-start', 'bottom-end'],
      variant: 'primary',
      className: 'border-t-blue-600',
    },
    {
      placement: ['bottom', 'bottom-start', 'bottom-end'],
      variant: 'success',
      className: 'border-t-green-600',
    },
    {
      placement: ['bottom', 'bottom-start', 'bottom-end'],
      variant: 'warning',
      className: 'border-t-yellow-500',
    },
    {
      placement: ['bottom', 'bottom-start', 'bottom-end'],
      variant: 'error',
      className: 'border-t-red-600',
    },
    // Left arrows
    {
      placement: ['left', 'left-start', 'left-end'],
      variant: 'dark',
      className: 'border-r-gray-900',
    },
    {
      placement: ['left', 'left-start', 'left-end'],
      variant: 'light',
      className: 'border-r-white',
    },
    {
      placement: ['left', 'left-start', 'left-end'],
      variant: 'primary',
      className: 'border-r-blue-600',
    },
    {
      placement: ['left', 'left-start', 'left-end'],
      variant: 'success',
      className: 'border-r-green-600',
    },
    {
      placement: ['left', 'left-start', 'left-end'],
      variant: 'warning',
      className: 'border-r-yellow-500',
    },
    {
      placement: ['left', 'left-start', 'left-end'],
      variant: 'error',
      className: 'border-r-red-600',
    },
    // Right arrows
    {
      placement: ['right', 'right-start', 'right-end'],
      variant: 'dark',
      className: 'border-l-gray-900',
    },
    {
      placement: ['right', 'right-start', 'right-end'],
      variant: 'light',
      className: 'border-l-white',
    },
    {
      placement: ['right', 'right-start', 'right-end'],
      variant: 'primary',
      className: 'border-l-blue-600',
    },
    {
      placement: ['right', 'right-start', 'right-end'],
      variant: 'success',
      className: 'border-l-green-600',
    },
    {
      placement: ['right', 'right-start', 'right-end'],
      variant: 'warning',
      className: 'border-l-yellow-500',
    },
    {
      placement: ['right', 'right-start', 'right-end'],
      variant: 'error',
      className: 'border-l-red-600',
    },
  ],
  defaultVariants: {
    placement: 'top',
    variant: 'dark',
    size: 'md',
  },
});

// Portal container variants
export const tooltipPortalVariants = tv({
  base: [
    'fixed',
    'pointer-events-none',
    'z-50',
  ],
  variants: {
    visible: {
      true: 'pointer-events-auto',
      false: 'pointer-events-none',
    },
  },
  defaultVariants: {
    visible: false,
  },
});

// Trigger element variants (for styling trigger when tooltip is active)
export const tooltipTriggerVariants = tv({
  base: [
    'inline-block',
    'cursor-help',
  ],
  variants: {
    active: {
      true: 'relative',
      false: '',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: '',
    },
  },
  defaultVariants: {
    active: false,
    disabled: false,
  },
});

// Utility functions
export const getTooltipOffset = (placement: TooltipPlacement, offset = 8): { x: number; y: number } => {
  const offsetMap: Record<TooltipPlacement, { x: number; y: number }> = {
    top: { x: 0, y: -offset },
    'top-start': { x: 0, y: -offset },
    'top-end': { x: 0, y: -offset },
    bottom: { x: 0, y: offset },
    'bottom-start': { x: 0, y: offset },
    'bottom-end': { x: 0, y: offset },
    left: { x: -offset, y: 0 },
    'left-start': { x: -offset, y: 0 },
    'left-end': { x: -offset, y: 0 },
    right: { x: offset, y: 0 },
    'right-start': { x: offset, y: 0 },
    'right-end': { x: offset, y: 0 },
  };
  
  return offsetMap[placement];
};

export const getOppositeAlignment = (placement: TooltipPlacement): TooltipPlacement => {
  const oppositeMap: Record<TooltipPlacement, TooltipPlacement> = {
    top: 'bottom',
    'top-start': 'bottom-start',
    'top-end': 'bottom-end',
    bottom: 'top',
    'bottom-start': 'top-start',
    'bottom-end': 'top-end',
    left: 'right',
    'left-start': 'right-start',
    'left-end': 'right-end',
    right: 'left',
    'right-start': 'left-start',
    'right-end': 'left-end',
  };
  
  return oppositeMap[placement];
};

// Get animation configuration with directional support
export const getAnimationConfig = (
  animation: TooltipAnimation, 
  placement?: TooltipPlacement,
  customConfig?: any
): any => {
  // Get base animation
  let baseAnimation = { ...ADVANCED_ANIMATION_CONFIG[animation] };
  
  // Use directional animations for shift, slide, and bounce
  if ((animation === 'shift' || animation === 'slide' || animation === 'bounce') && placement) {
    const direction = getPlacementDirection(placement);
    const directionalAnimations = DIRECTIONAL_ANIMATIONS[animation] as any;
    if (directionalAnimations && directionalAnimations[direction]) {
      baseAnimation = { ...directionalAnimations[direction] };
    }
  }
  
  // Apply custom configurations if provided
  if (customConfig) {
    return {
      initial: baseAnimation.initial,
      animate: baseAnimation.animate,
      exit: baseAnimation.exit,
      transition: {
        ...baseAnimation.transition,
        ...customConfig
      }
    };
  }
  
  return baseAnimation;
};

// Get arrow animation configuration
export const getArrowAnimationConfig = (animation: TooltipAnimation) => {
  return ARROW_ANIMATIONS[animation] || ARROW_ANIMATIONS.fade;
};

// Get placement direction (simplified for directional animations)
const getPlacementDirection = (placement: TooltipPlacement): string => {
  if (placement.startsWith('top')) return 'top';
  if (placement.startsWith('bottom')) return 'bottom';
  if (placement.startsWith('left')) return 'left';
  if (placement.startsWith('right')) return 'right';
  return 'top';
};

// Get animation with speed modifications
export const getAnimationWithSpeed = (
  animation: TooltipAnimation, 
  speed: 'slow' | 'normal' | 'fast' | 'instant' = 'normal',
  placement?: TooltipPlacement
) => {
  const baseConfig = getAnimationConfig(animation, placement);
  const speedConfig = ANIMATION_SPEEDS[speed];
  
  return {
    ...baseConfig,
    transition: {
      ...baseConfig.transition,
      ...speedConfig
    }
  };
};

// Get animation with custom easing
export const getAnimationWithEasing = (
  animation: TooltipAnimation,
  easing: keyof typeof ANIMATION_EASINGS,
  placement?: TooltipPlacement
) => {
  const baseConfig = getAnimationConfig(animation, placement);
  const easingConfig = ANIMATION_EASINGS[easing];
  
  return {
    ...baseConfig,
    transition: {
      ...baseConfig.transition,
      ease: easingConfig
    }
  };
};

// Create fully customized animation
export const createCustomAnimation = (config: {
  type?: TooltipAnimation;
  placement?: TooltipPlacement;
  speed?: 'slow' | 'normal' | 'fast' | 'instant';
  easing?: keyof typeof ANIMATION_EASINGS;
  duration?: number;
  delay?: number;
  spring?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
    bounce?: number;
  };
}) => {
  const baseType = config.type || 'fade';
  let animation = getAnimationConfig(baseType, config.placement);
  
  // Apply modifications
  const customTransition: any = { ...animation.transition };
  
  if (config.speed) {
    Object.assign(customTransition, ANIMATION_SPEEDS[config.speed]);
  }
  
  if (config.easing) {
    customTransition.ease = ANIMATION_EASINGS[config.easing];
  }
  
  if (config.duration !== undefined) {
    customTransition.duration = config.duration;
  }
  
  if (config.delay !== undefined) {
    customTransition.delay = config.delay;
  }
  
  if (config.spring && customTransition.type === 'spring') {
    Object.assign(customTransition, config.spring);
  }
  
  return {
    initial: animation.initial,
    animate: animation.animate,
    exit: animation.exit,
    transition: customTransition
  };
};

export const getTooltipClasses = (
  size: TooltipSize,
  variant: TooltipVariant,
  className?: string
): string => {
  const baseClasses = tooltipVariants({ size, variant });
  return className ? `${baseClasses} ${className}` : baseClasses;
};

export const getArrowClasses = (
  placement: TooltipPlacement,
  variant: TooltipVariant,
  size: TooltipSize,
  className?: string
): string => {
  const baseClasses = tooltipArrowVariants({ placement, variant, size });
  return className ? `${baseClasses} ${className}` : baseClasses;
};

// Directional animation variants that adapt based on tooltip placement
export const DIRECTIONAL_ANIMATIONS = {
  shift: {
    top: {
      initial: { opacity: 0, y: 8, scale: 0.98 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: 8, scale: 0.98 },
      transition: { type: "spring", stiffness: 400, damping: 25 }
    },
    'top-start': {
      initial: { opacity: 0, y: 8, x: -4, scale: 0.98 },
      animate: { opacity: 1, y: 0, x: 0, scale: 1 },
      exit: { opacity: 0, y: 8, x: -4, scale: 0.98 },
      transition: { type: "spring", stiffness: 400, damping: 25 }
    },
    'top-end': {
      initial: { opacity: 0, y: 8, x: 4, scale: 0.98 },
      animate: { opacity: 1, y: 0, x: 0, scale: 1 },
      exit: { opacity: 0, y: 8, x: 4, scale: 0.98 },
      transition: { type: "spring", stiffness: 400, damping: 25 }
    },
    bottom: {
      initial: { opacity: 0, y: -8, scale: 0.98 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: -8, scale: 0.98 },
      transition: { type: "spring", stiffness: 400, damping: 25 }
    },
    'bottom-start': {
      initial: { opacity: 0, y: -8, x: -4, scale: 0.98 },
      animate: { opacity: 1, y: 0, x: 0, scale: 1 },
      exit: { opacity: 0, y: -8, x: -4, scale: 0.98 },
      transition: { type: "spring", stiffness: 400, damping: 25 }
    },
    'bottom-end': {
      initial: { opacity: 0, y: -8, x: 4, scale: 0.98 },
      animate: { opacity: 1, y: 0, x: 0, scale: 1 },
      exit: { opacity: 0, y: -8, x: 4, scale: 0.98 },
      transition: { type: "spring", stiffness: 400, damping: 25 }
    },
    left: {
      initial: { opacity: 0, x: 8, scale: 0.98 },
      animate: { opacity: 1, x: 0, scale: 1 },
      exit: { opacity: 0, x: 8, scale: 0.98 },
      transition: { type: "spring", stiffness: 400, damping: 25 }
    },
    'left-start': {
      initial: { opacity: 0, x: 8, y: -4, scale: 0.98 },
      animate: { opacity: 1, x: 0, y: 0, scale: 1 },
      exit: { opacity: 0, x: 8, y: -4, scale: 0.98 },
      transition: { type: "spring", stiffness: 400, damping: 25 }
    },
    'left-end': {
      initial: { opacity: 0, x: 8, y: 4, scale: 0.98 },
      animate: { opacity: 1, x: 0, y: 0, scale: 1 },
      exit: { opacity: 0, x: 8, y: 4, scale: 0.98 },
      transition: { type: "spring", stiffness: 400, damping: 25 }
    },
    right: {
      initial: { opacity: 0, x: -8, scale: 0.98 },
      animate: { opacity: 1, x: 0, scale: 1 },
      exit: { opacity: 0, x: -8, scale: 0.98 },
      transition: { type: "spring", stiffness: 400, damping: 25 }
    },
    'right-start': {
      initial: { opacity: 0, x: -8, y: -4, scale: 0.98 },
      animate: { opacity: 1, x: 0, y: 0, scale: 1 },
      exit: { opacity: 0, x: -8, y: -4, scale: 0.98 },
      transition: { type: "spring", stiffness: 400, damping: 25 }
    },
    'right-end': {
      initial: { opacity: 0, x: -8, y: 4, scale: 0.98 },
      animate: { opacity: 1, x: 0, y: 0, scale: 1 },
      exit: { opacity: 0, x: -8, y: 4, scale: 0.98 },
      transition: { type: "spring", stiffness: 400, damping: 25 }
    },
  },
  slide: {
    top: {
      initial: { opacity: 0, y: 20, x: -10 },
      animate: { opacity: 1, y: 0, x: 0 },
      exit: { opacity: 0, y: 20, x: 10 },
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    bottom: {
      initial: { opacity: 0, y: -20, x: -10 },
      animate: { opacity: 1, y: 0, x: 0 },
      exit: { opacity: 0, y: -20, x: 10 },
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    left: {
      initial: { opacity: 0, x: 20, y: -10 },
      animate: { opacity: 1, x: 0, y: 0 },
      exit: { opacity: 0, x: 20, y: 10 },
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    right: {
      initial: { opacity: 0, x: -20, y: -10 },
      animate: { opacity: 1, x: 0, y: 0 },
      exit: { opacity: 0, x: -20, y: 10 },
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
  },
  bounce: {
    top: {
      initial: { opacity: 0, y: 30, scale: 0.6 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: 15, scale: 0.8 },
      transition: { type: "spring", stiffness: 400, damping: 12, bounce: 0.7 }
    },
    bottom: {
      initial: { opacity: 0, y: -30, scale: 0.6 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: -15, scale: 0.8 },
      transition: { type: "spring", stiffness: 400, damping: 12, bounce: 0.7 }
    },
    left: {
      initial: { opacity: 0, x: 30, scale: 0.6 },
      animate: { opacity: 1, x: 0, scale: 1 },
      exit: { opacity: 0, x: 15, scale: 0.8 },
      transition: { type: "spring", stiffness: 400, damping: 12, bounce: 0.7 }
    },
    right: {
      initial: { opacity: 0, x: -30, scale: 0.6 },
      animate: { opacity: 1, x: 0, scale: 1 },
      exit: { opacity: 0, x: -15, scale: 0.8 },
      transition: { type: "spring", stiffness: 400, damping: 12, bounce: 0.7 }
    },
  },
} as const;

// Arrow animations that sync with tooltip animations
export const ARROW_ANIMATIONS = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, delay: 0.05 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
    transition: { type: "spring", stiffness: 600, damping: 25, delay: 0.05 }
  },
  shift: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
    transition: { type: "spring", stiffness: 500, damping: 30, delay: 0.05 }
  },
  bounce: {
    initial: { opacity: 0, scale: 0.3 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.6 },
    transition: { type: "spring", stiffness: 400, damping: 15, bounce: 0.5, delay: 0.1 }
  },
  rotate: {
    initial: { opacity: 0, scale: 0.5, rotate: -45 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0.5, rotate: 45 },
    transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.05 }
  },
  slide: {
    initial: { opacity: 0, scale: 0.7 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.7 },
    transition: { type: "spring", stiffness: 400, damping: 25, delay: 0.05 }
  },
  zoom: {
    initial: { opacity: 0, scale: 0.2 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.2 },
    transition: { type: "spring", stiffness: 700, damping: 20, delay: 0.05 }
  },
  flip: {
    initial: { opacity: 0, rotateX: -90, scale: 0.8 },
    animate: { opacity: 1, rotateX: 0, scale: 1 },
    exit: { opacity: 0, rotateX: 90, scale: 0.8 },
    transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.05 }
  },
  elastic: {
    initial: { opacity: 0, scale: 0.4 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.7 },
    transition: { type: "spring", stiffness: 200, damping: 8, bounce: 0.8, delay: 0.1 }
  },
  none: {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: { opacity: 1 },
    transition: { duration: 0 }
  },
} as const;

// Animation speed configurations
export const ANIMATION_SPEEDS = {
  instant: { duration: 0.05 },
  fast: { duration: 0.1 },
  normal: { duration: 0.2 },
  slow: { duration: 0.4 },
} as const;

// Animation easing configurations
export const ANIMATION_EASINGS = {
  linear: [0, 0, 1, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  backIn: [0.6, -0.28, 0.735, 0.045],
  backOut: [0.175, 0.885, 0.32, 1.275],
  backInOut: [0.68, -0.55, 0.265, 1.55],
  elasticIn: [0.55, 0.055, 0.675, 0.19],
  elasticOut: [0.25, 0.46, 0.45, 0.94],
  elasticInOut: [0.445, 0.05, 0.55, 0.95],
  bounceIn: [0.47, 0, 0.745, 0.715],
  bounceOut: [0.39, 0.575, 0.565, 1],
  bounceInOut: [0.445, 0.05, 0.55, 0.95],
} as const;

// Animation transition variants for Framer Motion (Legacy - now enhanced)
export const motionVariants = ADVANCED_ANIMATION_CONFIG;

// Default animation durations
export const ANIMATION_DURATION = {
  enter: 0.15,
  exit: 0.1,
} as const;