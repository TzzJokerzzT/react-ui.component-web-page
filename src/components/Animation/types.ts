import { ReactNode } from 'react';

// Base animation props
export interface BaseAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  disabled?: boolean;
  trigger?: 'hover' | 'tap' | 'inView' | 'manual';
  once?: boolean;
  threshold?: number;
  style?: React.CSSProperties;
}

// Direction types
export type SlideDirection = 'up' | 'down' | 'left' | 'right';
export type RotateDirection = 'clockwise' | 'counterclockwise';

// Animation variants
export type AnimationType = 
  | 'fadeIn'
  | 'slideIn'
  | 'scaleIn'
  | 'rotateIn'
  | 'bounce'
  | 'stagger';

// Easing types
export type EasingType = 
  | 'linear'
  | 'easeIn'
  | 'easeOut'
  | 'easeInOut'
  | 'circIn'
  | 'circOut'
  | 'circInOut'
  | 'backIn'
  | 'backOut'
  | 'backInOut'
  | 'anticipate';

// Component-specific props
export interface FadeInProps extends BaseAnimationProps {
  from?: number;
  to?: number;
}

export interface SlideInProps extends BaseAnimationProps {
  direction?: SlideDirection;
  distance?: number;
}

export interface ScaleInProps extends BaseAnimationProps {
  from?: number;
  to?: number;
  transformOrigin?: string;
}

export interface RotateInProps extends BaseAnimationProps {
  direction?: RotateDirection;
  degrees?: number;
  transformOrigin?: string;
}

export interface BounceProps extends BaseAnimationProps {
  amplitude?: number;
  frequency?: number;
  damping?: number;
}

export interface StaggerProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  animationType?: AnimationType;
  direction?: SlideDirection;
  duration?: number;
  threshold?: number;
}

// Transition configurations
export interface TransitionConfig {
  type?: 'spring' | 'tween' | 'keyframes' | 'inertia';
  duration?: number;
  delay?: number;
  ease?: EasingType | number[];
  damping?: number;
  stiffness?: number;
  mass?: number;
  bounce?: number;
}

// Animation variants for reusability
export interface AnimationVariants {
  initial: any;
  animate: any;
  exit?: any;
  hover?: any;
  tap?: any;
}