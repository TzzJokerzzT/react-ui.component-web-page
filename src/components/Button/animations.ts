import type { ButtonHoverAnimation, ButtonClickAnimation } from './types';

/**
 * Framer Motion animation variants for Button hover states
 */
export const hoverAnimations: Record<ButtonHoverAnimation, any> = {
  none: {},
  scale: {
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  lift: {
    y: -2,
    scale: 1.02,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  bounce: {
    scale: [1, 1.1, 1.05],
    transition: { 
      duration: 0.4, 
      ease: "easeOut",
      times: [0, 0.6, 1]
    }
  },
  pulse: {
    scale: [1, 1.03, 1],
    transition: { 
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity
    }
  },
  shake: {
    x: [-2, 2, -2, 2, 0],
    transition: { 
      duration: 0.4,
      ease: "easeInOut"
    }
  },
  rotate: {
    rotate: [0, -2, 2, 0],
    transition: { 
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  glow: {
    boxShadow: [
      "0 0 0 0px rgba(59, 130, 246, 0)",
      "0 0 0 4px rgba(59, 130, 246, 0.1)",
      "0 0 20px 8px rgba(59, 130, 246, 0.15)"
    ],
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

/**
 * Framer Motion animation variants for Button click states
 */
export const clickAnimations: Record<ButtonClickAnimation, any> = {
  none: {},
  scale: {
    scale: 0.95,
    transition: { duration: 0.1, ease: "easeInOut" }
  },
  bounce: {
    scale: [1, 0.9, 1.1, 1],
    transition: { 
      duration: 0.4,
      ease: "easeOut",
      times: [0, 0.3, 0.7, 1]
    }
  },
  ripple: {
    scale: [1, 1.05],
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  },
  press: {
    scale: 0.9,
    y: 1,
    transition: { duration: 0.1, ease: "easeInOut" }
  },
  punch: {
    scale: [1, 1.2, 1],
    rotate: [0, -5, 5, 0],
    transition: { 
      duration: 0.4,
      ease: "easeOut",
      times: [0, 0.4, 1]
    }
  },
  wiggle: {
    rotate: [0, -10, 10, -5, 5, 0],
    transition: { 
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

/**
 * Get focus ring color based on button color
 */
export const getFocusRingColor = (color: string): string => {
  const focusColors: Record<string, string> = {
    default: "rgba(107, 114, 128, 0.5)", // gray-500
    primary: "rgba(59, 130, 246, 0.5)",  // blue-500
    secondary: "rgba(147, 51, 234, 0.5)", // purple-500
    success: "rgba(34, 197, 94, 0.5)",   // green-500
    warning: "rgba(234, 179, 8, 0.5)",   // yellow-500
    danger: "rgba(239, 68, 68, 0.5)"     // red-500
  };
  
  return focusColors[color] || focusColors.primary;
};

/**
 * Get glow color for glow hover animation based on button color
 */
export const getGlowColor = (color: string): string => {
  const glowColors: Record<string, string> = {
    default: "107, 114, 128",   // gray-500
    primary: "59, 130, 246",    // blue-500
    secondary: "147, 51, 234",  // purple-500
    success: "34, 197, 94",     // green-500
    warning: "234, 179, 8",     // yellow-500
    danger: "239, 68, 68"       // red-500
  };
  
  return glowColors[color] || glowColors.primary;
};

/**
 * Create color-aware glow animation
 */
export const createGlowAnimation = (color: string) => {
  const rgb = getGlowColor(color);
  
  return {
    boxShadow: [
      `0 0 0 0px rgba(${rgb}, 0)`,
      `0 0 0 4px rgba(${rgb}, 0.1)`,
      `0 0 20px 8px rgba(${rgb}, 0.15)`
    ],
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  };
};

/**
 * Base animation props for all buttons
 */
export const baseAnimation = {
  initial: { scale: 1 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring" as const, stiffness: 300, damping: 20 }
};