import { ReactNode, HTMLAttributes } from 'react';
import { Variants, Transition } from 'framer-motion';

// Tipos de triggers para las animaciones
export type TriggerType = 'inView' | 'hover' | 'focus' | 'manual' | 'immediate';

// Direcciones para animaciones de slide
export type SlideDirection = 'up' | 'down' | 'left' | 'right' | 'upLeft' | 'upRight' | 'downLeft' | 'downRight';

// Direcciones para animaciones de flip
export type FlipDirection = 'horizontal' | 'vertical' | 'both';

// Intensidades de animación
export type AnimationIntensity = 'low' | 'medium' | 'high';

// Tipos de easing personalizados
export type EasingType = 'linear' | 'easeIn' | 'easeOut' | 'easeInOut' | 'backIn' | 'backOut' | 'backInOut' | 'bounceIn' | 'bounceOut' | 'bounceInOut' | 'elasticIn' | 'elasticOut' | 'elasticInOut';

// Props base para todos los contenedores animados
export interface BaseAnimatedContainerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children: ReactNode;
  trigger?: TriggerType;
  delay?: number;
  duration?: number;
  easing?: EasingType;
  disabled?: boolean;
  variants?: Variants;
  transition?: Transition;
  className?: string;
  style?: React.CSSProperties;
  onAnimationStart?: () => void;
  onAnimationComplete?: () => void;
}

// Props específicas para FadeContainer
export interface FadeContainerProps extends BaseAnimatedContainerProps {
  startOpacity?: number;
  endOpacity?: number;
  blur?: boolean;
  blurAmount?: number;
}

// Props específicas para SlideContainer
export interface SlideContainerProps extends BaseAnimatedContainerProps {
  direction?: SlideDirection;
  distance?: number;
  overshoot?: boolean;
}

// Props específicas para ScaleContainer
export interface ScaleContainerProps extends BaseAnimatedContainerProps {
  startScale?: number;
  endScale?: number;
  scaleOrigin?: string;
  bounce?: boolean;
}

// Props específicas para BounceContainer
export interface BounceContainerProps extends BaseAnimatedContainerProps {
  intensity?: AnimationIntensity;
  bounceCount?: number;
  startScale?: number;
}

// Props específicas para FlipContainer
export interface FlipContainerProps extends BaseAnimatedContainerProps {
  direction?: FlipDirection;
  perspective?: number;
  backfaceVisible?: boolean;
}

// Props específicas para StaggerContainer
export interface StaggerContainerProps extends BaseAnimatedContainerProps {
  staggerDelay?: number;
  staggerDirection?: 'normal' | 'reverse' | 'alternate';
  childSelector?: string;
}

// Props específicas para MorphingContainer
export interface MorphingContainerProps extends BaseAnimatedContainerProps {
  morphStates?: Array<{
    width?: string | number;
    height?: string | number;
    borderRadius?: string | number;
    backgroundColor?: string;
    transform?: string;
  }>;
  morphInterval?: number;
  autoMorph?: boolean;
}

// Props específicas para ParallaxContainer
export interface ParallaxContainerProps extends BaseAnimatedContainerProps {
  speed?: number;
  direction?: 'vertical' | 'horizontal' | 'both';
  offset?: number;
  enableOnMobile?: boolean;
}

// Tipos para configuraciones de viewport
export interface ViewportConfig {
  once?: boolean;
  margin?: string;
  amount?: number | 'some' | 'all';
}

// Tipos para configuraciones de scroll
export interface ScrollConfig {
  target?: React.RefObject<HTMLElement>;
  offset?: [string, string];
  smooth?: boolean;
}

// Tipos para efectos adicionales
export interface EffectConfig {
  shadow?: boolean;
  shadowColor?: string;
  shadowBlur?: number;
  glow?: boolean;
  glowColor?: string;
  glowIntensity?: number;
}

// Estados de animación
export type AnimationState = 'idle' | 'animating' | 'completed' | 'paused';

// Hook para estado de animación
export interface UseAnimationStateReturn {
  state: AnimationState;
  isAnimating: boolean;
  isCompleted: boolean;
  play: () => void;
  pause: () => void;
  reset: () => void;
}

// Configuración global para contenedores animados
export interface AnimatedContainerConfig {
  respectReducedMotion?: boolean;
  defaultDuration?: number;
  defaultEasing?: EasingType;
  defaultTrigger?: TriggerType;
  debugMode?: boolean;
}

// Métricas de performance
export interface PerformanceMetrics {
  animationDuration: number;
  frameRate: number;
  memoryUsage?: number;
  renderTime: number;
}

// Eventos de animación
export interface AnimationEvents {
  onStart?: (metrics: PerformanceMetrics) => void;
  onUpdate?: (progress: number) => void;
  onComplete?: (metrics: PerformanceMetrics) => void;
  onError?: (error: Error) => void;
}

// Props extendidas con eventos
export interface ExtendedAnimatedContainerProps extends BaseAnimatedContainerProps {
  events?: AnimationEvents;
  performanceTracking?: boolean;
  viewport?: ViewportConfig;
  scroll?: ScrollConfig;
  effects?: EffectConfig;
}