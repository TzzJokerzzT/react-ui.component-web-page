import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { MorphingContainerProps } from './types';
import { 
  morphingVariants,
  useReducedMotion, 
  optimizeAnimation, 
  cleanupOptimization,
  getEasingTransition,
  createEffectStyles,
  handleAnimationEvents,
  generatePerformanceMetrics 
} from './helpers';

export const MorphingContainer: React.FC<MorphingContainerProps> = ({
  children,
  trigger = 'inView',
  delay = 0,
  duration = 1,
  easing = 'easeInOut',
  disabled = false,
  morphStates = [
    { width: '200px', height: '200px', borderRadius: '0px', backgroundColor: '#3b82f6' },
    { width: '300px', height: '150px', borderRadius: '20px', backgroundColor: '#ef4444' },
    { width: '250px', height: '250px', borderRadius: '50%', backgroundColor: '#10b981' },
  ],
  morphInterval = 3000,
  autoMorph = true,
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
  
  const [currentMorphIndex, setCurrentMorphIndex] = useState(0);
  const startTime = useRef<number>(0);
  const morphTimer = useRef<number | undefined>(undefined);

  // Configuración personalizada o usar las variantes por defecto
  const animationVariants = variants || morphingVariants(morphStates);

  useEffect(() => {
    if (disabled || reducedMotion) {
      controls.set('initial');
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
            await controls.start('initial');
            startMorphing();
            break;
            
          case 'inView':
            if (isInView) {
              handleAnimationEvents({ onStart: onAnimationStart }, 'start', 
                generatePerformanceMetrics(startTime.current, duration));
              await controls.start('initial');
              startMorphing();
            }
            break;
            
          case 'manual':
            await controls.start('initial');
            break;
            
          default:
            await controls.start('initial');
            startMorphing();
        }

        handleAnimationEvents({ onComplete: onAnimationComplete }, 'complete', 
          generatePerformanceMetrics(startTime.current, duration));
          
      } catch (error) {
        console.warn('Error in MorphingContainer animation:', error);
        handleAnimationEvents({ onError: console.error }, 'error', error);
      }
    };

    handleAnimation();

    return () => {
      if (morphTimer.current) {
        clearInterval(morphTimer.current);
      }
    };
  }, [isInView, trigger, controls, disabled, reducedMotion, duration, onAnimationStart, onAnimationComplete]);

  // Función para iniciar el morphing automático
  const startMorphing = () => {
    if (!autoMorph || morphStates.length <= 1) return;

    morphTimer.current = window.setInterval(() => {
      setCurrentMorphIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % morphStates.length;
        controls.start(`morph${nextIndex}`);
        return nextIndex;
      });
    }, morphInterval);
  };

  // Función para morphear manualmente a un estado específico
  const morphToState = (index: number) => {
    if (index >= 0 && index < morphStates.length) {
      setCurrentMorphIndex(index);
      controls.start(`morph${index}`);
    }
  };

  // Configuración de transición
  const transitionConfig = transition || {
    ...getEasingTransition(easing, duration),
    delay,
  };

  const effectStyles = createEffectStyles();
  const combinedStyles = { 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...effectStyles, 
    ...style 
  };

  // Handlers para triggers interactivos
  const handleMouseEnter = () => {
    if (trigger === 'hover' && !disabled && !reducedMotion) {
      const nextIndex = (currentMorphIndex + 1) % morphStates.length;
      morphToState(nextIndex);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover' && !disabled && !reducedMotion) {
      morphToState(0);
    }
  };

  const handleFocus = () => {
    if (trigger === 'focus' && !disabled && !reducedMotion) {
      const nextIndex = (currentMorphIndex + 1) % morphStates.length;
      morphToState(nextIndex);
    }
  };

  const handleBlur = () => {
    if (trigger === 'focus' && !disabled && !reducedMotion) {
      morphToState(0);
    }
  };

  // Cleanup al desmontar
  useEffect(() => {
    return () => {
      if (ref.current) {
        cleanupOptimization(ref.current);
      }
      if (morphTimer.current) {
        clearInterval(morphTimer.current);
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
      initial={disabled || reducedMotion ? 'initial' : 'initial'}
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

// Hook personalizado para controlar el morphing externamente
export const useMorphingContainer = (morphStates: any[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  const morphToNext = () => {
    const nextIndex = (currentIndex + 1) % morphStates.length;
    setCurrentIndex(nextIndex);
    controls.start(`morph${nextIndex}`);
  };

  const morphToPrevious = () => {
    const prevIndex = currentIndex === 0 ? morphStates.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    controls.start(`morph${prevIndex}`);
  };

  const morphToIndex = (index: number) => {
    if (index >= 0 && index < morphStates.length) {
      setCurrentIndex(index);
      controls.start(`morph${index}`);
    }
  };

  return {
    currentIndex,
    controls,
    morphToNext,
    morphToPrevious,
    morphToIndex,
  };
};

export default MorphingContainer;