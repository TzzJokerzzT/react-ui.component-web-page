import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, useAnimation } from 'framer-motion';
import { ParallaxContainerProps } from './types';
import { 
  parallaxVariants,
  useReducedMotion, 
  optimizeAnimation, 
  cleanupOptimization,
  getEasingTransition,
  createEffectStyles,
  handleAnimationEvents,
  generatePerformanceMetrics
} from './helpers';

export const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  trigger = 'inView',
  delay = 0,
  duration = 1,
  easing = 'easeInOut',
  disabled = false,
  speed = 0.5,
  direction = 'vertical',
  offset = 0,
  enableOnMobile = false,
  variants,
  transition,
  className = '',
  style = {},
  onAnimationStart,
  onAnimationComplete,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reducedMotion = useReducedMotion();
  
  const [isMobile, setIsMobile] = useState(false);
  const startTime = useRef<number>(0);

  // Scroll progress tracking
  const { scrollY } = useScroll();
  
  // Configuración personalizada o usar las variantes por defecto
  const animationVariants = variants || parallaxVariants;

  // Detectar dispositivos móviles
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Calcular transformaciones de parallax
  const yTransform = useTransform(scrollY, [0, 1000], [0, -speed * 100]);
  const xTransform = useTransform(scrollY, [0, 1000], [0, -speed * 100]);
  
  // Aplicar spring para suavizar el movimiento
  const smoothY = useSpring(yTransform, { 
    stiffness: 100, 
    damping: 30, 
    mass: 1 
  });
  const smoothX = useSpring(xTransform, { 
    stiffness: 100, 
    damping: 30, 
    mass: 1 
  });

  // Determinar si el parallax debe estar activo
  const isParallaxActive = !disabled && !reducedMotion && (enableOnMobile || !isMobile);

  useEffect(() => {
    if (disabled || reducedMotion || (isMobile && !enableOnMobile)) {
      controls.set('visible');
      return;
    }

    const handleAnimation = async () => {
      try {
        startTime.current = performance.now();
        
        if (ref.current) {
          optimizeAnimation(ref.current);
        }

        switch (trigger) {
          case 'immediate':
            handleAnimationEvents({ onStart: onAnimationStart }, 'start', 
              generatePerformanceMetrics(startTime.current, duration));
            await controls.start('visible');
            break;
            
          case 'inView':
            if (isInView) {
              handleAnimationEvents({ onStart: onAnimationStart }, 'start', 
                generatePerformanceMetrics(startTime.current, duration));
              await controls.start('visible');
            }
            break;
            
          case 'manual':
            await controls.start('hidden');
            break;
            
          default:
            await controls.start('visible');
        }

        handleAnimationEvents({ onComplete: onAnimationComplete }, 'complete', 
          generatePerformanceMetrics(startTime.current, duration));
          
      } catch (error) {
        console.warn('Error in ParallaxContainer animation:', error);
        handleAnimationEvents({ onError: console.error }, 'error', error);
      }
    };

    handleAnimation();
  }, [isInView, trigger, controls, disabled, reducedMotion, isMobile, enableOnMobile, duration, onAnimationStart, onAnimationComplete]);

  // Configuración de transición
  const transitionConfig = transition || {
    ...getEasingTransition(easing, duration),
    delay,
  };

  const effectStyles = createEffectStyles();
  const combinedStyles = { 
    ...effectStyles, 
    ...style 
  };

  // Configuración de transformación basada en la dirección
  const getTransformValue = () => {
    if (!isParallaxActive) return {};
    
    switch (direction) {
      case 'horizontal':
        return { x: smoothX };
      case 'both':
        return { x: smoothX, y: smoothY };
      case 'vertical':
      default:
        return { y: smoothY };
    }
  };

  // Handlers para triggers interactivos
  const handleMouseEnter = () => {
    if (trigger === 'hover' && !disabled && !reducedMotion) {
      controls.start('visible');
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover' && !disabled && !reducedMotion) {
      controls.start('hidden');
    }
  };

  const handleFocus = () => {
    if (trigger === 'focus' && !disabled && !reducedMotion) {
      controls.start('visible');
    }
  };

  const handleBlur = () => {
    if (trigger === 'focus' && !disabled && !reducedMotion) {
      controls.start('hidden');
    }
  };

  // Cleanup al desmontar
  useEffect(() => {
    return () => {
      if (ref.current) {
        cleanupOptimization(ref.current);
      }
    };
  }, []);

  // Filtrar props que pueden causar conflictos
  const {
    onDrag,
    onDragEnd,
    onDragStart,
    ...filteredProps
  } = props;

  return (
    <motion.div
      ref={ref}
      variants={animationVariants}
      initial={disabled || reducedMotion ? 'visible' : 'hidden'}
      animate={controls}
      transition={transitionConfig}
      style={{
        ...combinedStyles,
        ...getTransformValue(),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={className}
      {...filteredProps}
    >
      {children}
    </motion.div>
  );
};

// Hook personalizado para controlar el parallax externamente
export const useParallaxContainer = (options?: {
  speed?: number;
  direction?: 'vertical' | 'horizontal' | 'both';
  enableOnMobile?: boolean;
}) => {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const reducedMotion = useReducedMotion();
  
  const { 
    speed = 0.5, 
    direction = 'vertical', 
    enableOnMobile = false 
  } = options || {};

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const isActive = !reducedMotion && (enableOnMobile || !isMobile);
  
  const yTransform = useTransform(scrollY, [0, 1000], [0, -speed * 100]);
  const xTransform = useTransform(scrollY, [0, 1000], [0, -speed * 100]);
  
  const smoothY = useSpring(yTransform, { 
    stiffness: 100, 
    damping: 30, 
    mass: 1 
  });
  const smoothX = useSpring(xTransform, { 
    stiffness: 100, 
    damping: 30, 
    mass: 1 
  });

  const getTransformValue = () => {
    if (!isActive) return {};
    
    switch (direction) {
      case 'horizontal':
        return { x: smoothX };
      case 'both':
        return { x: smoothX, y: smoothY };
      case 'vertical':
      default:
        return { y: smoothY };
    }
  };

  return {
    isActive,
    isMobile,
    scrollY,
    transformValue: getTransformValue(),
    smoothY,
    smoothX,
  };
};

export default ParallaxContainer;