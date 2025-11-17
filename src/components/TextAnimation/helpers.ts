import type { 
  TextAnimationPresets,
  TextAnimationVariants,
  TextEasing,
  ParsedText,
  CharacterAnimation,
  WordAnimation,
  RevealMode,
  TextDirection
} from './types';

/**
 * Animation presets for different text animation styles
 */
export const textAnimationPresets: TextAnimationPresets = {
  quick: {
    duration: 0.3,
    easing: 'easeOut',
    staggerDelay: 0.02
  },
  smooth: {
    duration: 0.6,
    easing: 'easeInOut',
    staggerDelay: 0.05
  },
  slow: {
    duration: 1.2,
    easing: 'easeOut',
    staggerDelay: 0.08
  },
  bouncy: {
    duration: 0.8,
    easing: 'bounceOut',
    staggerDelay: 0.04
  },
  elegant: {
    duration: 0.9,
    easing: 'easeInOut',
    staggerDelay: 0.06
  },
  dramatic: {
    duration: 1.5,
    easing: 'backOut',
    staggerDelay: 0.1
  },
  playful: {
    duration: 0.5,
    easing: 'bounceInOut',
    staggerDelay: 0.03
  }
};

/**
 * Convert easing string to Framer Motion easing array
 */
export const getEasingArray = (easing: TextEasing): number[] | string => {
  const easingMap: Record<TextEasing, number[] | string> = {
    linear: 'linear',
    easeIn: [0.4, 0, 1, 1],
    easeOut: [0, 0, 0.2, 1],
    easeInOut: [0.4, 0, 0.2, 1],
    backIn: [0.6, -0.05, 0.01, 0.99],
    backOut: [0.12, 0, 0.39, 0],
    backInOut: [0.37, 0, 0.63, 1],
    bounceIn: [0.6, -0.28, 0.735, 0.045],
    bounceOut: [0.175, 0.885, 0.32, 1.275],
    bounceInOut: [0.68, -0.55, 0.265, 1.55]
  };
  return easingMap[easing];
};

/**
 * Parse text into words and characters for animation
 */
export const parseTextForAnimation = (
  text: string,
  mode: RevealMode,
  staggerDelay: number = 0.05,
  duration: number = 0.6
): ParsedText => {
  const words = text.split(' ');
  const allCharacters: CharacterAnimation[] = [];
  const wordAnimations: WordAnimation[] = [];
  const lines = text.split('\n');

  let globalCharIndex = 0;

  words.forEach((word, wordIndex) => {
    const characters: CharacterAnimation[] = [];
    
    word.split('').forEach((char) => {
      const characterDelay = mode === 'letter' 
        ? globalCharIndex * staggerDelay
        : mode === 'word'
        ? wordIndex * staggerDelay
        : 0;

      const characterAnimation: CharacterAnimation = {
        char,
        index: globalCharIndex,
        delay: characterDelay,
        duration,
        variants: getCharacterVariants('up')
      };

      characters.push(characterAnimation);
      allCharacters.push(characterAnimation);
      globalCharIndex++;
    });

    // Add space character
    if (wordIndex < words.length - 1) {
      const spaceAnimation: CharacterAnimation = {
        char: ' ',
        index: globalCharIndex,
        delay: mode === 'letter' ? globalCharIndex * staggerDelay : wordIndex * staggerDelay,
        duration,
        variants: getCharacterVariants('up')
      };
      characters.push(spaceAnimation);
      allCharacters.push(spaceAnimation);
      globalCharIndex++;
    }

    const wordDelay = mode === 'word' ? wordIndex * staggerDelay : 0;
    
    wordAnimations.push({
      word,
      index: wordIndex,
      delay: wordDelay,
      duration,
      characters
    });
  });

  return {
    words: wordAnimations,
    characters: allCharacters,
    lines
  };
};

/**
 * Generate character animation variants based on direction
 */
export const getCharacterVariants = (direction: TextDirection): TextAnimationVariants => {
  const baseVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1
    }
  };

  switch (direction) {
    case 'up':
      return {
        hidden: { ...baseVariants.hidden, y: 20 },
        visible: { ...baseVariants.visible, y: 0 }
      };
    case 'down':
      return {
        hidden: { ...baseVariants.hidden, y: -20 },
        visible: { ...baseVariants.visible, y: 0 }
      };
    case 'left':
      return {
        hidden: { ...baseVariants.hidden, x: 20 },
        visible: { ...baseVariants.visible, x: 0 }
      };
    case 'right':
      return {
        hidden: { ...baseVariants.hidden, x: -20 },
        visible: { ...baseVariants.visible, x: 0 }
      };
    case 'center':
    default:
      return baseVariants;
  }
};

/**
 * Generate word animation variants
 */
export const getWordVariants = (direction: TextDirection): TextAnimationVariants => {
  return {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
      scale: 0.8,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: 'blur(0px)'
    }
  };
};

/**
 * Generate typewriter variants
 */
export const typewriterVariants: TextAnimationVariants = {
  hidden: { 
    width: 0,
    opacity: 1
  },
  visible: {
    width: 'auto',
    opacity: 1,
    transition: {
      duration: 0.01,
      ease: 'linear'
    }
  }
};

/**
 * Generate counter animation variants
 */
export const counterVariants: TextAnimationVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5
  },
  visible: {
    opacity: 1,
    scale: 1
  }
};

/**
 * Format number with locale and options
 */
export const formatNumber = (
  value: number,
  format: 'number' | 'currency' | 'percentage',
  decimals: number = 0,
  locale: string = 'es-ES',
  currency: string = 'EUR'
): string => {
  const options: Intl.NumberFormatOptions = {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  };

  switch (format) {
    case 'currency':
      options.style = 'currency';
      options.currency = currency;
      break;
    case 'percentage':
      options.style = 'percent';
      break;
    case 'number':
    default:
      options.style = 'decimal';
      break;
  }

  return new Intl.NumberFormat(locale, options).format(value);
};

/**
 * Generate random glitch characters
 */
export const generateGlitchChars = (length: number = 10): string => {
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';
  const numbers = '0123456789';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const special = '█▓▒░▄▀▐▌';
  
  const allChars = chars + numbers + letters + special;
  
  return Array.from({ length }, () => 
    allChars[Math.floor(Math.random() * allChars.length)]
  ).join('');
};

/**
 * Generate glitch animation variants
 */
export const getGlitchVariants = (intensity: 'low' | 'medium' | 'high' | 'extreme'): TextAnimationVariants => {
  const intensityMap = {
    low: { scale: 0.02, duration: 0.1 },
    medium: { scale: 0.05, duration: 0.15 },
    high: { scale: 0.1, duration: 0.2 },
    extreme: { scale: 0.2, duration: 0.3 }
  };
  
  const { scale, duration } = intensityMap[intensity];
  
  return {
    hidden: {
      opacity: 1,
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1
    },
    visible: {
      opacity: [1, 0.8, 1],
      x: [0, -scale * 20, scale * 20, 0],
      y: [0, scale * 10, -scale * 10, 0],
      scaleX: [1, 1 + scale, 1 - scale, 1],
      scaleY: [1, 1 - scale, 1 + scale, 1],
      transition: {
        duration,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'linear'
      }
    }
  };
};

/**
 * Generate gradient keyframes for text animation
 */
export const generateGradientKeyframes = (colors: string[], direction: 'horizontal' | 'vertical' | 'diagonal' | 'radial'): string => {
  const colorStops = colors.join(', ');
  
  switch (direction) {
    case 'horizontal':
      return `linear-gradient(90deg, ${colorStops})`;
    case 'vertical':
      return `linear-gradient(180deg, ${colorStops})`;
    case 'diagonal':
      return `linear-gradient(45deg, ${colorStops})`;
    case 'radial':
      return `radial-gradient(circle, ${colorStops})`;
    default:
      return `linear-gradient(90deg, ${colorStops})`;
  }
};

/**
 * Calculate optimal animation delay based on text length
 */
export const calculateOptimalDelay = (textLength: number, mode: RevealMode): number => {
  const baseDelay = mode === 'letter' ? 0.05 : mode === 'word' ? 0.1 : 0.2;
  
  // Adjust delay based on text length for better pacing
  if (textLength > 100) return baseDelay * 0.5;
  if (textLength > 50) return baseDelay * 0.75;
  if (textLength < 10) return baseDelay * 1.5;
  
  return baseDelay;
};

/**
 * Generate morphing animation steps
 */
export const generateMorphSteps = (fromText: string, toText: string): string[] => {
  const maxLength = Math.max(fromText.length, toText.length);
  const steps: string[] = [];
  const totalSteps = 10;
  
  for (let step = 0; step <= totalSteps; step++) {
    const progress = step / totalSteps;
    let morphed = '';
    
    for (let i = 0; i < maxLength; i++) {
      const fromChar = fromText[i] || ' ';
      const toChar = toText[i] || ' ';
      
      if (Math.random() < progress) {
        morphed += toChar;
      } else {
        morphed += fromChar;
      }
    }
    
    steps.push(morphed);
  }
  
  return steps;
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Debounce function for performance optimization
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Generate CSS custom properties for text animations
 */
export const generateTextAnimationCSS = (
  colors: string[],
  duration: number = 2,
  direction: 'horizontal' | 'vertical' | 'diagonal' | 'radial' = 'horizontal'
): Record<string, string> => {
  const gradient = generateGradientKeyframes(colors, direction);
  
  return {
    '--text-gradient': gradient,
    '--animation-duration': `${duration}s`,
    '--background-size': direction === 'horizontal' ? '200% 100%' : '100% 200%'
  };
};