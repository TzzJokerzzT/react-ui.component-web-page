// Animation Components
export { FadeIn } from './FadeIn';
export { SlideIn } from './SlideIn';
export { ScaleIn } from './ScaleIn';
export { RotateIn } from './RotateIn';
export { Bounce } from './Bounce';
export { Stagger } from './Stagger';

// Pages and Examples
export { default as AnimationPage } from './AnimationPage';
export { AnimationExamples, default as AnimationExamplesDefault } from './AnimationExamples';

// Types
export type {
  BaseAnimationProps,
  SlideDirection,
  RotateDirection,
  AnimationType,
  EasingType,
  FadeInProps,
  SlideInProps,
  ScaleInProps,
  RotateInProps,
  BounceProps,
  StaggerProps,
  TransitionConfig,
  AnimationVariants
} from './types';

// Helpers and Presets
export {
  defaultTransitions,
  fadeInVariants,
  slideInVariants,
  scaleInVariants,
  rotateInVariants,
  bounceVariants,
  staggerContainerVariants,
  staggerItemVariants,
  getSlideDistance,
  getRotationDegrees,
  animationPresets
} from './helpers';