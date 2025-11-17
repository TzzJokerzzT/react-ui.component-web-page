import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { BounceContainerProps } from './types';
import { 
  bounceVariants, 
  useReducedMotion, 
  optimizeAnimation, 
  cleanupOptimization,
  createEffectStyles,
  handleAnimationEvents,
  generatePerformanceMetrics 
} from './helpers';

export const BounceContainer: React.FC<BounceContainerProps> = ({
  children,
  trigger = 'inView',
  delay = 0,
  duration = 0.8,
  easing = 'easeOut',
  disabled = false,
  intensity = 'medium',
  bounceCount = 1,
  startScale = 0.3,
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
  const animationVariants = variants || bounceVariants;
  const customProps = { intensity, bounceCount, startScale };

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
        console.warn('Error in BounceContainer animation:', error);
        handleAnimationEvents({ onError: console.error }, 'error', error);
      }
    };

    handleAnimation();
  }, [isInView, trigger, controls, disabled, reducedMotion, duration, onAnimationStart, onAnimationComplete]);

  // Configuración de transición con bounce personalizado
  const intensityConfig = {
    low: { stiffness: 200, damping: 15, bounce: 0.2 },
    medium: { stiffness: 300, damping: 12, bounce: 0.4 },
    high: { stiffness: 400, damping: 8, bounce: 0.6 },
  };

  const transitionConfig = transition || {
    type: 'spring',
    ...intensityConfig[intensity],
    delay,
    duration,
  };

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

export default BounceContainer;