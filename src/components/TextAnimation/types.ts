// Text Animation TypeScript definitions

/**
 * Animation trigger types for text animations
 */
export type TextTrigger = 'inView' | 'hover' | 'focus' | 'manual' | 'immediate';

/**
 * Text reveal modes
 */
export type RevealMode = 'letter' | 'word' | 'line';

/**
 * Typewriter cursor styles
 */
export type CursorStyle = 'block' | 'line' | 'underscore' | 'none';

/**
 * Animation directions for text reveals
 */
export type TextDirection = 'left' | 'right' | 'up' | 'down' | 'center';

/**
 * Easing types for text animations
 */
export type TextEasing = 
  | 'linear' 
  | 'easeIn' 
  | 'easeOut' 
  | 'easeInOut'
  | 'backIn'
  | 'backOut'
  | 'backInOut'
  | 'bounceIn'
  | 'bounceOut'
  | 'bounceInOut';

/**
 * Gradient animation directions
 */
export type GradientDirection = 'horizontal' | 'vertical' | 'diagonal' | 'radial';

/**
 * Glitch intensity levels
 */
export type GlitchIntensity = 'low' | 'medium' | 'high' | 'extreme';

/**
 * Base props shared by all text animation components
 */
export interface BaseTextProps {
  /** Text content to animate */
  text: string;
  /** Additional CSS classes */
  className?: string;
  /** Animation trigger type */
  trigger?: TextTrigger;
  /** Whether to repeat the animation */
  repeat?: boolean;
  /** Delay before animation starts (in seconds) */
  delay?: number;
  /** Whether animation is disabled */
  disabled?: boolean;
  /** Manual trigger control when trigger is 'manual' */
  isActive?: boolean;
  /** Callback when animation completes */
  onComplete?: () => void;
  /** Callback when animation starts */
  onStart?: () => void;
  /** Test ID for testing */
  'data-testid'?: string;
}

/**
 * TypeWriter component props
 */
export interface TypeWriterProps extends BaseTextProps {
  /** Typing speed in characters per second */
  speed?: number;
  /** Cursor style */
  cursor?: CursorStyle;
  /** Cursor color */
  cursorColor?: string;
  /** Whether to show blinking cursor */
  showCursor?: boolean;
  /** Whether to delete text after typing */
  deleteAfter?: boolean;
  /** Deletion speed in characters per second */
  deleteSpeed?: number;
  /** Pause duration before deletion (in seconds) */
  pauseBeforeDelete?: number;
  /** Multiple texts to cycle through */
  texts?: string[];
  /** Loop through texts infinitely */
  loop?: boolean;
}

/**
 * RevealText component props  
 */
export interface RevealTextProps extends BaseTextProps {
  /** How to reveal the text */
  mode?: RevealMode;
  /** Animation duration per unit (letter/word) */
  duration?: number;
  /** Stagger delay between units */
  staggerDelay?: number;
  /** Direction of reveal animation */
  direction?: TextDirection;
  /** Initial opacity of hidden text */
  initialOpacity?: number;
  /** Animation easing */
  easing?: TextEasing;
  /** Reveal with blur effect */
  withBlur?: boolean;
  /** Reveal with scale effect */
  withScale?: boolean;
  /** Reveal with rotation effect */
  withRotation?: boolean;
}

/**
 * CounterText component props
 */
export interface CounterTextProps extends Omit<BaseTextProps, 'text'> {
  /** Starting number */
  from: number;
  /** Ending number */
  to: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Number of decimal places */
  decimals?: number;
  /** Number format (e.g., currency, percentage) */
  format?: 'number' | 'currency' | 'percentage';
  /** Currency symbol for currency format */
  currency?: string;
  /** Locale for number formatting */
  locale?: string;
  /** Custom formatter function */
  formatter?: (value: number) => string;
  /** Animation easing */
  easing?: TextEasing;
  /** Prefix text */
  prefix?: string;
  /** Suffix text */
  suffix?: string;
}

/**
 * GradientText component props
 */
export interface GradientTextProps extends BaseTextProps {
  /** Gradient colors array */
  colors: string[];
  /** Gradient animation direction */
  direction?: GradientDirection;
  /** Animation duration in seconds */
  duration?: number;
  /** Animation speed multiplier */
  speed?: number;
  /** Whether to animate continuously */
  animate?: boolean;
  /** Background size for gradient animation */
  backgroundSize?: string;
  /** Custom gradient stops */
  stops?: number[];
}

/**
 * MorphingText component props
 */
export interface MorphingTextProps extends Omit<BaseTextProps, 'text'> {
  /** Array of texts to morph between */
  texts: string[];
  /** Duration to show each text */
  displayDuration?: number;
  /** Morphing animation duration */
  morphDuration?: number;
  /** Whether to loop through texts */
  loop?: boolean;
  /** Morphing animation easing */
  easing?: TextEasing;
  /** Character morphing style */
  morphStyle?: 'fade' | 'slide' | 'scramble';
}

/**
 * GlitchText component props
 */
export interface GlitchTextProps extends BaseTextProps {
  /** Glitch effect intensity */
  intensity?: GlitchIntensity;
  /** Animation duration in seconds */
  duration?: number;
  /** Whether to animate continuously */
  continuous?: boolean;
  /** Glitch colors array */
  colors?: string[];
  /** Whether to include data corruption effect */
  corruptData?: boolean;
  /** Custom glitch characters */
  glitchChars?: string;
  /** Number of glitch layers */
  layers?: number;
}

/**
 * Animation preset configurations
 */
export interface TextAnimationPreset {
  duration: number;
  easing: TextEasing;
  staggerDelay?: number;
  [key: string]: any;
}

/**
 * Collection of animation presets
 */
export interface TextAnimationPresets {
  quick: TextAnimationPreset;
  smooth: TextAnimationPreset;
  slow: TextAnimationPreset;
  bouncy: TextAnimationPreset;
  elegant: TextAnimationPreset;
  dramatic: TextAnimationPreset;
  playful: TextAnimationPreset;
}

/**
 * Text animation variants for Framer Motion
 */
export interface TextAnimationVariants {
  hidden: Record<string, any>;
  visible: Record<string, any>;
  exit?: Record<string, any>;
}

/**
 * Character animation data
 */
export interface CharacterAnimation {
  char: string;
  index: number;
  delay: number;
  duration: number;
  variants: TextAnimationVariants;
}

/**
 * Word animation data
 */
export interface WordAnimation {
  word: string;
  index: number;
  delay: number;
  duration: number;
  characters: CharacterAnimation[];
}

/**
 * Text parsing result
 */
export interface ParsedText {
  words: WordAnimation[];
  characters: CharacterAnimation[];
  lines: string[];
}