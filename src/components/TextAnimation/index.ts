// Text Animation Components
export { TypeWriter } from './TypeWriter';
export { RevealText } from './RevealText';
export { CounterText } from './CounterText';
export { GradientText } from './GradientText';
export { MorphingText } from './MorphingText';
export { GlitchText } from './GlitchText';

// Examples and Showcase
export { TextAnimationExamples } from './TextAnimationExamples';

// Types
export type {
  // Base types
  BaseTextProps,
  TextTrigger,
  TextDirection,
  TextEasing,
  RevealMode,
  GradientDirection,
  GlitchIntensity,
  CursorStyle,

  // Component props
  TypeWriterProps,
  RevealTextProps,
  CounterTextProps,
  GradientTextProps,
  MorphingTextProps,
  GlitchTextProps,

  // Animation types
  TextAnimationVariants,
  CharacterAnimation,
  WordAnimation, 
  ParsedText,
  TextAnimationPreset,
  TextAnimationPresets
} from './types';

// Helper functions
export {
  // Text parsing and processing
  parseTextForAnimation,
  generateMorphSteps,
  generateGlitchChars,

  // Animation utilities
  getCharacterVariants,
  getGlitchVariants,
  getEasingArray,

  // Formatting utilities
  formatNumber,
  generateGradientKeyframes,
  generateTextAnimationCSS,

  // Performance and accessibility
  prefersReducedMotion,
  calculateOptimalDelay,
  debounce
} from './helpers';