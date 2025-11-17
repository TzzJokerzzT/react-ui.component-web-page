import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { StaggerContainerProps } from './types';
import { 
  staggerContainerVariants,
  staggerChildVariants,
  useReducedMotion, 
  optimizeAnimation, 
  cleanupOptimization,
  getEasingTransition,
  createEffectStyles,
  handleAnimationEvents,
  generatePerformanceMetrics,
  normalizeCSSSelector 
} from './helpers';

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  trigger = 'inView',
  delay = 0,
  duration = 0.6,
  easing = 'easeOut',
  disabled = false,
  staggerDelay = 0.1,
  staggerDirection = 'normal',
  childSelector = '> *',
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
  const containerVariants = variants || staggerContainerVariants;
  const customProps = { staggerDelay, staggerDirection };

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
          
          // Aplicar variantes a los elementos hijos
          const childElements = ref.current.querySelectorAll(normalizeCSSSelector(childSelector));
          childElements.forEach((child) => {
            if (child instanceof HTMLElement) {
              optimizeAnimation(child);
            }
          });
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
          
          // Limpiar optimizaciones de los elementos hijos
          const childElements = ref.current.querySelectorAll(normalizeCSSSelector(childSelector));
          childElements.forEach((child) => {
            if (child instanceof HTMLElement) {
              cleanupOptimization(child);
            }
          });
        }

        handleAnimationEvents({ onComplete: onAnimationComplete }, 'complete', 
          generatePerformanceMetrics(startTime.current, duration));
          
      } catch (error) {
        console.warn('Error in StaggerContainer animation:', error);
        handleAnimationEvents({ onError: console.error }, 'error', error);
      }
    };

    handleAnimation();
  }, [isInView, trigger, controls, disabled, reducedMotion, duration, onAnimationStart, onAnimationComplete, childSelector]);

  // Configuración de transición
  const transitionConfig = transition || {
    ...getEasingTransition(easing, duration),
    delay,
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

  // Función para clonar children con variantes de stagger
  const renderChildrenWithStagger = () => {
    return React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) return child;
      
      // Envolver todos los children en motion.div para consistencia
      return (
        <motion.div
          key={index}
          variants={staggerChildVariants}
          style={{ display: 'contents' }}
        >
          {child}
        </motion.div>
      );
    });
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
      variants={containerVariants}
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
      {renderChildrenWithStagger()}
    </motion.div>
  );
};

export default StaggerContainer;