// Main container components
export { FadeContainer } from './FadeContainer';
export { SlideContainer } from './SlideContainer';
export { ScaleContainer } from './ScaleContainer';
export { BounceContainer } from './BounceContainer';
export { FlipContainer } from './FlipContainer';
export { StaggerContainer } from './StaggerContainer';
export { MorphingContainer } from './MorphingContainer';
export { ParallaxContainer } from './ParallaxContainer';

// Custom hooks
export { useMorphingContainer } from './MorphingContainer';
export { useParallaxContainer } from './ParallaxContainer';

// Types
export type {
  BaseAnimatedContainerProps,
  FadeContainerProps,
  SlideContainerProps,
  ScaleContainerProps,
  BounceContainerProps,
  FlipContainerProps,
  StaggerContainerProps,
  MorphingContainerProps,
  ParallaxContainerProps,
  TriggerType,
  SlideDirection,
  FlipDirection,
  AnimationIntensity,
  EasingType,
  ViewportConfig,
  ScrollConfig,
  EffectConfig,
  AnimatedContainerConfig,
} from './types';

// Helper functions
export {
  fadeVariants,
  slideVariants,
  scaleVariants,
  bounceVariants,
  flipVariants,
  staggerContainerVariants,
  staggerChildVariants,
  morphingVariants,
  parallaxVariants,
  useReducedMotion,
  optimizeAnimation,
  cleanupOptimization,
  getEasingTransition,
  createEffectStyles,
  handleAnimationEvents,
  generatePerformanceMetrics,
  easingConfig,
  getSlideDistance,
  getFlipRotation,
  calculateParallaxValue,
  useInViewOptimized,
  debounce,
} from './helpers';