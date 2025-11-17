import { Variants, Transition } from 'framer-motion';
import { 
  EasingType, 
  SlideDirection, 
  FlipDirection, 
  AnimationIntensity,
  PerformanceMetrics,
  AnimationEvents 
} from './types';

// Configuración de easing personalizada
export const easingConfig: Record<EasingType, [number, number, number, number]> = {
  linear: [0, 0, 1, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  backIn: [0.6, -0.28, 0.735, 0.045],
  backOut: [0.175, 0.885, 0.32, 1.275],
  backInOut: [0.68, -0.55, 0.265, 1.55],
  bounceIn: [0.6, -0.28, 0.735, 0.045],
  bounceOut: [0.175, 0.885, 0.32, 1.275],
  bounceInOut: [0.68, -0.55, 0.265, 1.55],
  elasticIn: [0.5, -0.25, 0.75, 1.25],
  elasticOut: [0.25, 0.46, 0.45, 0.94],
  elasticInOut: [0.5, -0.25, 0.75, 1.25],
};

// Función para convertir easing type a configuración de transición
export const getEasingTransition = (easing: EasingType, duration: number = 0.5): Transition => {
  return {
    duration,
    ease: easingConfig[easing],
  };
};

// Función para calcular la distancia de slide basada en la dirección
export const getSlideDistance = (direction: SlideDirection, distance: number = 50): { x: number; y: number } => {
  const directions = {
    up: { x: 0, y: -distance },
    down: { x: 0, y: distance },
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    upLeft: { x: -distance, y: -distance },
    upRight: { x: distance, y: -distance },
    downLeft: { x: -distance, y: distance },
    downRight: { x: distance, y: distance },
  };
  return directions[direction];
};

// Función para obtener la rotación de flip
export const getFlipRotation = (direction: FlipDirection): { rotateX?: number; rotateY?: number } => {
  switch (direction) {
    case 'horizontal':
      return { rotateY: 180 };
    case 'vertical':
      return { rotateX: 180 };
    case 'both':
      return { rotateX: 180, rotateY: 180 };
    default:
      return {};
  }
};

// Variantes para FadeContainer
export const fadeVariants: Variants = {
  hidden: (props: { startOpacity: number; blur: boolean; blurAmount: number }) => ({
    opacity: props.startOpacity,
    filter: props.blur ? `blur(${props.blurAmount}px)` : 'blur(0px)',
  }),
  visible: (props: { endOpacity: number }) => ({
    opacity: props.endOpacity,
    filter: 'blur(0px)',
  }),
};

// Variantes para SlideContainer
export const slideVariants: Variants = {
  hidden: (props: { direction: SlideDirection; distance: number; overshoot: boolean }) => {
    const { x, y } = getSlideDistance(props.direction, props.distance);
    return {
      x: props.overshoot ? x * 1.2 : x,
      y: props.overshoot ? y * 1.2 : y,
      opacity: 0,
    };
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
  },
};

// Variantes para ScaleContainer
export const scaleVariants: Variants = {
  hidden: (props: { startScale: number }) => ({
    scale: props.startScale,
    opacity: 0,
  }),
  visible: (props: { endScale: number; bounce: boolean }) => ({
    scale: props.endScale,
    opacity: 1,
    transition: {
      type: props.bounce ? 'spring' : 'tween',
      stiffness: props.bounce ? 300 : 100,
      damping: props.bounce ? 20 : 10,
    },
  }),
};

// Variantes para BounceContainer
export const bounceVariants: Variants = {
  hidden: (props: { startScale: number }) => ({
    scale: props.startScale,
    opacity: 0,
    y: -20,
  }),
  visible: (props: { intensity: AnimationIntensity; bounceCount: number }) => {
    const intensityConfig = {
      low: { stiffness: 200, damping: 15 },
      medium: { stiffness: 300, damping: 12 },
      high: { stiffness: 400, damping: 8 },
    };
    
    return {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        ...intensityConfig[props.intensity],
        bounce: 0.4,
      },
    };
  },
};

// Variantes para FlipContainer
export const flipVariants: Variants = {
  hidden: (props: { direction: FlipDirection; perspective: number; backfaceVisible: boolean }) => ({
    ...getFlipRotation(props.direction),
    opacity: props.backfaceVisible ? 1 : 0,
    transformPerspective: props.perspective,
    backfaceVisibility: props.backfaceVisible ? 'visible' : 'hidden',
  }),
  visible: {
    rotateX: 0,
    rotateY: 0,
    opacity: 1,
  },
};

// Variantes para StaggerContainer
export const staggerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (props: { staggerDelay: number; staggerDirection: string }) => ({
    opacity: 1,
    transition: {
      staggerChildren: props.staggerDelay,
      staggerDirection: props.staggerDirection === 'reverse' ? -1 : 1,
      delayChildren: 0.1,
    },
  }),
};

export const staggerChildVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};

// Variantes para MorphingContainer
export const morphingVariants = (morphStates: any[]): Variants => {
  const variants: Variants = {
    initial: morphStates[0] || {},
  };
  
  morphStates.forEach((state, index) => {
    variants[`morph${index}`] = {
      ...state,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    };
  });
  
  return variants;
};

// Variantes para ParallaxContainer
export const parallaxVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

// Hook personalizado para detectar reducción de movimiento
export const useReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return mediaQuery.matches;
};

// Hook personalizado para intersection observer optimizado
export const useInViewOptimized = (threshold: number = 0.1, rootMargin: string = '0px') => {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setHasBeenInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isInView, hasBeenInView };
};

// Función para optimizar performance de animaciones
export const optimizeAnimation = (element: HTMLElement): void => {
  // Promover a capa de composición
  element.style.willChange = 'transform, opacity';
  element.style.backfaceVisibility = 'hidden';
  element.style.perspective = '1000px';
};

// Función para limpiar optimizaciones después de la animación
export const cleanupOptimization = (element: HTMLElement): void => {
  element.style.willChange = 'auto';
  element.style.backfaceVisibility = 'visible';
  element.style.perspective = 'none';
};

// Debounce function para eventos de scroll
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: number;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => func(...args), wait);
  };
};

// Función para calcular velocidad de parallax
export const calculateParallaxValue = (
  scrollY: number,
  speed: number,
  offset: number = 0
): number => {
  return (scrollY - offset) * speed;
};

// Función para generar métricas de performance
export const generatePerformanceMetrics = (
  startTime: number,
  duration: number
): PerformanceMetrics => {
  const endTime = performance.now();
  return {
    animationDuration: duration,
    frameRate: Math.round(1000 / (endTime - startTime)),
    renderTime: endTime - startTime,
  };
};

// Función para manejar eventos de animación
export const handleAnimationEvents = (
  events: AnimationEvents,
  phase: 'start' | 'update' | 'complete' | 'error',
  data?: any
): void => {
  try {
    switch (phase) {
      case 'start':
        events.onStart?.(data);
        break;
      case 'update':
        events.onUpdate?.(data);
        break;
      case 'complete':
        events.onComplete?.(data);
        break;
      case 'error':
        events.onError?.(data);
        break;
    }
  } catch (error) {
    console.warn('Error handling animation event:', error);
  }
};

// Función para crear efectos adicionales (sombras, glow)
export const createEffectStyles = (effects?: {
  shadow?: boolean;
  shadowColor?: string;
  shadowBlur?: number;
  glow?: boolean;
  glowColor?: string;
  glowIntensity?: number;
}): React.CSSProperties => {
  if (!effects) return {};

  const styles: React.CSSProperties = {};

  if (effects.shadow) {
    const shadowColor = effects.shadowColor || 'rgba(0, 0, 0, 0.2)';
    const shadowBlur = effects.shadowBlur || 10;
    styles.boxShadow = `0 ${shadowBlur}px ${shadowBlur * 2}px ${shadowColor}`;
  }

  if (effects.glow) {
    const glowColor = effects.glowColor || '#3b82f6';
    const glowIntensity = effects.glowIntensity || 1;
    styles.filter = `drop-shadow(0 0 ${10 * glowIntensity}px ${glowColor})`;
  }

  return styles;
};

// Función para normalizar selectores CSS para querySelectorAll
export const normalizeCSSSelector = (selector: string): string => {
  // Si el selector comienza con '>', necesitamos ':scope' para que funcione con querySelectorAll
  if (selector.startsWith('>')) {
    return `:scope ${selector}`;
  }
  return selector;
};

// Imports necesarios para React
import { useState, useEffect, useRef } from 'react';