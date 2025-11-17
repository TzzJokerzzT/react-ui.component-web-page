import type { AccordionAnimationConfig, AccordionAnimationPreset } from './types';
import type { Variants } from 'framer-motion';

/**
 * Predefined animation presets for accordion components
 */
export const accordionAnimationPresets: Record<AccordionAnimationPreset, AccordionAnimationConfig> = {
  spring: {
    preset: 'spring',
    spring: {
      stiffness: 280,
      damping: 25,
      duration: 0.4
    },
    staggerDelay: 0.1,
    enableStagger: true
  },
  tween: {
    preset: 'tween',
    spring: {
      stiffness: 180,
      damping: 22,
      duration: 0.5
    },
    staggerDelay: 0.08,
    enableStagger: true
  },
  smooth: {
    preset: 'smooth',
    spring: {
      stiffness: 240,
      damping: 28,
      duration: 0.45
    },
    staggerDelay: 0.12,
    enableStagger: true
  },
  bouncy: {
    preset: 'bouncy',
    spring: {
      stiffness: 400,
      damping: 18,
      duration: 0.6
    },
    staggerDelay: 0.15,
    enableStagger: true
  },
  slow: {
    preset: 'slow',
    spring: {
      stiffness: 150,
      damping: 30,
      duration: 0.7
    },
    staggerDelay: 0.2,
    enableStagger: true
  }
};

/**
 * Default animation configuration
 */
export const defaultAnimationConfig: AccordionAnimationConfig = accordionAnimationPresets.spring;

/**
 * Merge user config with preset defaults
 */
export const mergeAnimationConfig = (
  userConfig?: AccordionAnimationConfig,
  preset?: AccordionAnimationPreset
): AccordionAnimationConfig => {
  const baseConfig = preset ? accordionAnimationPresets[preset] : defaultAnimationConfig;
  
  if (!userConfig) {
    return baseConfig;
  }

  return {
    ...baseConfig,
    ...userConfig,
    spring: {
      ...baseConfig.spring,
      ...userConfig.spring
    }
  };
};

/**
 * Generate accordion container animation variants based on config
 * FIXED: Uses scaleY instead of height for perfectly uniform animations
 */
export const generateAccordionVariants = (config: AccordionAnimationConfig): Variants => {
  const { spring } = config;
  
  // Single transition config used by ALL states for perfect uniformity
  const transition = {
    type: "spring" as const,
    stiffness: spring?.stiffness || 280,
    damping: spring?.damping || 25
  };
  
  return {
    initial: {
      opacity: 0,
      scaleY: 0,
      transformOrigin: "top"
    },
    closed: {
      opacity: 0,
      scaleY: 0,
      transformOrigin: "top",
      transition
    },
    open: {
      opacity: 1,
      scaleY: 1,
      transformOrigin: "top",
      transition
    },
    exit: {
      opacity: 0,
      scaleY: 0,
      transformOrigin: "top",
      transition
    }
  };
};

/**
 * Generate content animation variants - PERFECTLY synchronized with container
 * Uses IDENTICAL transition config for perfect uniformity
 */
export const generateContentVariants = (config: AccordionAnimationConfig): Variants => {
  const { spring } = config;
  
  // IDENTICAL transition config as container - this ensures perfect synchronization
  const transition = {
    type: "spring" as const,
    stiffness: spring?.stiffness || 280,
    damping: spring?.damping || 25
  };
  
  return {
    initial: {
      opacity: 0,
      y: -4
    },
    closed: {
      opacity: 0,
      y: -4,
      transition
    },
    open: {
      opacity: 1,
      y: 0,
      transition // EXACT same timing as container height animation
    },
    exit: {
      opacity: 0,
      y: -4,
      transition
    }
  };
};

/**
 * Generate chevron animation variants based on config
 */
export const generateChevronVariants = (config: AccordionAnimationConfig): Variants => {
  const { spring } = config;
  
  // UNIFIED TRANSITION: Exactamente la misma configuración que el contenido
  const transition = {
    type: "spring" as const,
    stiffness: spring?.stiffness || 280,
    damping: spring?.damping || 25
    // NO duration, NO modificadores - perfecta uniformidad
  };
  
  return {
    collapsed: {
      rotate: 0,
      scale: 1,
      transition
    },
    expanded: {
      rotate: 180,
      scale: 1.05,
      transition // Idéntico timing al contenido principal
    }
  };
};

/**
 * Generate stagger configuration for multiple accordion items
 */
export const generateStaggerConfig = (config: AccordionAnimationConfig, itemIndex: number = 0) => {
  if (!config.enableStagger) {
    return {};
  }

  return {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0
    },
    transition: {
      delay: itemIndex * (config.staggerDelay || 0.1),
      duration: config.spring?.duration ? config.spring.duration * 0.5 : 0.3,
      ease: "easeOut" as const
    }
  };
};

/**
 * Get hover animation config based on preset
 */
export const getHoverAnimationConfig = (preset: AccordionAnimationPreset) => {
  // UNIFIED TRANSITION: Mismos valores para máxima uniformidad
  const unifiedTransition = { type: "spring" as const, stiffness: 280, damping: 25 };
  
  const presetConfigs = {
    spring: {
      scale: 1.002,
      transition: unifiedTransition
    },
    tween: {
      scale: 1.001,
      transition: unifiedTransition // Uso spring unificado en lugar de duration
    },
    smooth: {
      scale: 1.002,
      transition: unifiedTransition // Uso spring unificado en lugar de duration
    },
    bouncy: {
      scale: 1.005,
      transition: unifiedTransition // Mismo spring unificado
    },
    slow: {
      scale: 1.001,
      transition: unifiedTransition // Mismo spring unificado
    }
  };

  return presetConfigs[preset] || presetConfigs.spring;
};

/**
 * Get tap animation config based on preset
 */
export const getTapAnimationConfig = (preset: AccordionAnimationPreset) => {
  // UNIFIED TRANSITION: Mismos valores para máxima uniformidad
  const unifiedTransition = { type: "spring" as const, stiffness: 280, damping: 25 };
  
  const presetConfigs = {
    spring: {
      scale: 0.998,
      transition: unifiedTransition
    },
    tween: {
      scale: 0.999,
      transition: unifiedTransition // Uso spring unificado en lugar de duration
    },
    smooth: {
      scale: 0.998,
      transition: unifiedTransition // Uso spring unificado en lugar de duration
    },
    bouncy: {
      scale: 0.995,
      transition: unifiedTransition // Mismo spring unificado
    },
    slow: {
      scale: 0.999,
      transition: unifiedTransition // Mismo spring unificado
    }
  };

  return presetConfigs[preset] || presetConfigs.spring;
};