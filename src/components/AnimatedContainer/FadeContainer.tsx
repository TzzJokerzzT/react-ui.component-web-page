import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FadeContainerProps } from './types';
import { 
  fadeVariants, 
  useReducedMotion, 
  optimizeAnimation, 
  cleanupOptimization,
  getEasingTransition,
  createEffectStyles,
  handleAnimationEvents,
  generatePerformanceMetrics 
} from './helpers';

export const FadeContainer: React.FC<FadeContainerProps> = ({
  children,
  trigger = 'inView',
  delay = 0,
  duration = 0.6,
  easing = 'easeOut',
  disabled = false,
  startOpacity = 0,
  endOpacity = 1,
  blur = false,
  blurAmount = 5,
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
  
  const startTime = useRef<number>(0);

  // Configuración personalizada o usar las variantes por defecto
  const animationVariants = variants || fadeVariants;
  const customProps = { startOpacity, endOpacity, blur, blurAmount };

  useEffect(() => {
    if (disabled || reducedMotion) {
      // Si las animaciones están deshabilitadas, mostrar directamente
      controls.set('visible');
      return;
    }

    const handleAnimation = async () => {
      try {
        startTime.current = performance.now();
        
        // Optimizar elemento para animación
        if (ref.current) {
          optimizeAnimation(ref.current);
        }

        // Manejar diferentes triggers
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
            // La animación se controla externamente
            break;
            
          default:
            await controls.start('visible');
        }

        // Limpiar optimizaciones después de la animación
        if (ref.current) {
          cleanupOptimization(ref.current);
        }

        handleAnimationEvents({ onComplete: onAnimationComplete }, 'complete', 
          generatePerformanceMetrics(startTime.current, duration));
          
      } catch (error) {
        console.warn('Error in FadeContainer animation:', error);
        handleAnimationEvents({ onError: console.error }, 'error', error);
      }
    };

    handleAnimation();
  }, [isInView, trigger, controls, disabled, reducedMotion, duration, onAnimationStart, onAnimationComplete]);

  // Configuración de transición
  const transitionConfig = transition || {
    ...getEasingTransition(easing, duration),
    delay,
  };

  // Estilos adicionales
  const effectStyles = createEffectStyles();
  const combinedStyles = { ...effectStyles, ...style };

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

  // Filtrar props que pueden causar conflictos con motion
  const {
    onDrag,
    onDragEnd,
    onDragStart,
    ...filteredProps
  } = props;

  return (
    <motion.div
      ref={ref}
      custom={customProps}
      variants={animationVariants}
      initial={disabled || reducedMotion ? 'visible' : 'hidden'}
      animate={controls}
      transition={transitionConfig}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={className}
      style={combinedStyles}
      {...filteredProps}
    >
      {children}
    </motion.div>
  );
};

export default FadeContainer;