import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FlipContainerProps } from './types';
import { 
  flipVariants, 
  useReducedMotion, 
  optimizeAnimation, 
  cleanupOptimization,
  getEasingTransition,
  createEffectStyles,
  handleAnimationEvents,
  generatePerformanceMetrics 
} from './helpers';

export const FlipContainer: React.FC<FlipContainerProps> = ({
  children,
  trigger = 'inView',
  delay = 0,
  duration = 0.8,
  easing = 'easeOut',
  disabled = false,
  direction = 'horizontal',
  perspective = 1000,
  backfaceVisible = false,
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
  const animationVariants = variants || flipVariants;
  const customProps = { direction, perspective, backfaceVisible };

  useEffect(() => {
    if (disabled || reducedMotion) {
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
            break;
            
          default:
            await controls.start('visible');
        }

        if (ref.current) {
          cleanupOptimization(ref.current);
        }

        handleAnimationEvents({ onComplete: onAnimationComplete }, 'complete', 
          generatePerformanceMetrics(startTime.current, duration));
          
      } catch (error) {
        console.warn('Error in FlipContainer animation:', error);
        handleAnimationEvents({ onError: console.error }, 'error', error);
      }
    };

    handleAnimation();
  }, [isInView, trigger, controls, disabled, reducedMotion, duration, onAnimationStart, onAnimationComplete]);

  // Configuración de transición con perspective
  const transitionConfig = transition || {
    ...getEasingTransition(easing, duration),
    delay,
  };

  const effectStyles = createEffectStyles();
  const combinedStyles = { 
    perspective: `${perspective}px`,
    transformStyle: 'preserve-3d' as const,
    ...effectStyles, 
    ...style 
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

export default FlipContainer;