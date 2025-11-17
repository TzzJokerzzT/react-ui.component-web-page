import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { GradientTextProps } from './types';
import { generateGradientKeyframes, generateTextAnimationCSS, prefersReducedMotion } from './helpers';

/**
 * GradientText Component
 * 
 * Displays text with animated color gradients that can move in different directions.
 * Supports continuous animation and various gradient styles.
 * 
 * @example
 * <GradientText 
 *   text="Texto con gradiente animado"
 *   colors={['#ff0000', '#00ff00', '#0000ff']}
 *   direction="horizontal"
 *   animate={true}
 *   duration={3}
 * />
 */
export const GradientText: React.FC<GradientTextProps> = ({
  text,
  className = '',
  trigger = 'immediate',
  colors,
  direction = 'horizontal',
  duration = 3,
  speed = 1,
  animate = true,
  backgroundSize,
  stops,
  repeat = true,
  delay = 0,
  disabled = false,
  isActive = false,
  onStart,
  onComplete,
  'data-testid': testId
}) => {
  const [isInView, setIsInView] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  const ref = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  const reducedMotion = prefersReducedMotion();
  
  // Determine if animation should be active
  const shouldAnimate = !disabled && !reducedMotion && animate && (
    trigger === 'immediate' ||
    (trigger === 'inView' && isInView) ||
    (trigger === 'manual' && isActive)
  );

  // Generate gradient with custom stops if provided
  const generateGradientWithStops = () => {
    if (!stops || stops.length !== colors.length) {
      return generateGradientKeyframes(colors, direction);
    }

    const colorStopsWithPositions = colors.map((color, index) => 
      `${color} ${stops[index]}%`
    ).join(', ');

    switch (direction) {
      case 'horizontal':
        return `linear-gradient(90deg, ${colorStopsWithPositions})`;
      case 'vertical':
        return `linear-gradient(180deg, ${colorStopsWithPositions})`;
      case 'diagonal':
        return `linear-gradient(45deg, ${colorStopsWithPositions})`;
      case 'radial':
        return `radial-gradient(circle, ${colorStopsWithPositions})`;
      default:
        return `linear-gradient(90deg, ${colorStopsWithPositions})`;
    }
  };

  // Generate CSS properties
  const cssProps = generateTextAnimationCSS(colors, duration * speed, direction);
  const gradient = generateGradientWithStops();
  
  // Custom background size or use generated one
  const bgSize = backgroundSize || cssProps['--background-size'] || 
    (direction === 'horizontal' ? '200% 100%' : '100% 200%');

  // Intersection Observer setup
  useEffect(() => {
    if (trigger !== 'inView' || !ref.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (!repeat && observerRef.current) {
            observerRef.current.disconnect();
          }
        } else if (repeat) {
          setIsInView(false);
          setAnimationComplete(false);
        }
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(ref.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [trigger, repeat]);

  // Animation trigger effect
  useEffect(() => {
    if (shouldAnimate && !animationComplete) {
      setIsAnimating(true);
      if (onStart) {
        onStart();
      }
    } else if (!shouldAnimate) {
      setIsAnimating(false);
    }
  }, [shouldAnimate, animationComplete, onStart]);

  // Reset when trigger changes
  useEffect(() => {
    if (trigger === 'manual' && !isActive) {
      setAnimationComplete(false);
      setIsAnimating(false);
    }
  }, [trigger, isActive]);

  // Handle hover trigger
  const handleMouseEnter = () => {
    if (trigger === 'hover' && !isAnimating) {
      setAnimationComplete(false);
      setIsAnimating(true);
    }
  };

  // Handle focus trigger  
  const handleFocus = () => {
    if (trigger === 'focus' && !isAnimating) {
      setAnimationComplete(false);
      setIsAnimating(true);
    }
  };

  // Animation complete handler (for non-continuous animations)
  const handleAnimationComplete = () => {
    if (!repeat) {
      setIsAnimating(false);
      setAnimationComplete(true);
      if (onComplete) {
        onComplete();
      }
    }
  };

  // Animation styles
  const animationStyles: React.CSSProperties = {
    background: gradient,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    backgroundSize: bgSize,
    ...(shouldAnimate && {
      animation: `gradientMove ${duration / speed}s linear ${delay}s ${repeat ? 'infinite' : '1'} ${
        direction === 'horizontal' ? 'alternate' : 'normal'
      }`
    })
  };

  // If disabled or reduced motion, show static gradient
  if (disabled || reducedMotion) {
    return (
      <span
        ref={ref}
        className={`gradient-text ${className}`}
        style={{
          background: gradient,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent'
        }}
        data-testid={testId}
      >
        {text}
      </span>
    );
  }

  return (
    <>
      {/* CSS keyframes for gradient animation */}
      <style>{`
        @keyframes gradientMove {
          0% {
            background-position: ${direction === 'horizontal' ? '0% 50%' : '50% 0%'};
          }
          50% {
            background-position: ${direction === 'horizontal' ? '100% 50%' : '50% 100%'};
          }
          100% {
            background-position: ${direction === 'horizontal' ? '0% 50%' : '50% 0%'};
          }
        }
      `}</style>
      
      <motion.span
        ref={ref}
        className={`gradient-text ${className}`}
        style={animationStyles}
        onMouseEnter={trigger === 'hover' ? handleMouseEnter : undefined}
        onFocus={trigger === 'focus' ? handleFocus : undefined}
        tabIndex={trigger === 'focus' ? 0 : undefined}
        onAnimationEnd={handleAnimationComplete}
        data-testid={testId}
      >
        {text}
      </motion.span>
    </>
  );
};