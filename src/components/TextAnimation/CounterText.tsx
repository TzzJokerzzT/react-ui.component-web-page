import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import type { CounterTextProps } from './types';
import { formatNumber, prefersReducedMotion, getEasingArray } from './helpers';

/**
 * CounterText Component
 * 
 * Animates a number from one value to another with formatting options
 * and customizable animation effects.
 * 
 * @example
 * <CounterText 
 *   from={0}
 *   to={1000}
 *   duration={2}
 *   format="currency"
 *   currency="USD"
 *   decimals={2}
 * />
 */
export const CounterText: React.FC<CounterTextProps> = ({
  from,
  to,
  className = '',
  trigger = 'inView',
  duration = 2,
  decimals = 0,
  format = 'number',
  currency = 'EUR',
  locale = 'es-ES',
  formatter,
  easing = 'easeOut',
  prefix = '',
  suffix = '',
  repeat = false,
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
  const animationRef = useRef<any>(null);
  
  const reducedMotion = prefersReducedMotion();
  const motionValue = useMotionValue(from);
  
  // Determine if animation should be active
  const shouldAnimate = !disabled && !reducedMotion && (
    trigger === 'immediate' ||
    (trigger === 'inView' && isInView) ||
    (trigger === 'manual' && isActive)
  );

  // Transform motion value to rounded number for display
  const displayValue = useTransform(motionValue, (value) => {
    const roundedValue = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
    
    if (formatter) {
      return formatter(roundedValue);
    }
    
    return formatNumber(roundedValue, format, decimals, locale, currency);
  });

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

      // Cancel any existing animation
      if (animationRef.current) {
        animationRef.current.cancel();
      }

      // Start animation
      animationRef.current = animate(
        from,
        to,
        {
          duration,
          delay,
          ease: getEasingArray(easing) as any,
          onUpdate: (value) => {
            motionValue.set(value);
          },
          onComplete: () => {
            setIsAnimating(false);
            setAnimationComplete(true);
            if (onComplete) {
              onComplete();
            }
          }
        }
      );

    } else if (!shouldAnimate && animationRef.current) {
      // Reset animation
      animationRef.current.cancel();
      motionValue.set(from);
      setIsAnimating(false);
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.cancel();
      }
    };
  }, [shouldAnimate, animationComplete, from, to, duration, delay, easing, onStart, onComplete, motionValue]);

  // Reset when trigger changes
  useEffect(() => {
    if (trigger === 'manual' && !isActive) {
      setAnimationComplete(false);
      setIsAnimating(false);
      motionValue.set(from);
    }
  }, [trigger, isActive, from, motionValue]);

  // Handle hover trigger
  const handleMouseEnter = () => {
    if (trigger === 'hover' && !isAnimating) {
      setAnimationComplete(false);
    }
  };

  // Handle focus trigger  
  const handleFocus = () => {
    if (trigger === 'focus' && !isAnimating) {
      setAnimationComplete(false);
    }
  };

  // If disabled or reduced motion, show final value immediately
  if (disabled || reducedMotion) {
    const finalValue = formatter 
      ? formatter(to) 
      : formatNumber(to, format, decimals, locale, currency);

    return (
      <span
        ref={ref}
        className={`counter-text ${className}`}
        data-testid={testId}
      >
        {prefix}{finalValue}{suffix}
      </span>
    );
  }

  return (
    <motion.span
      ref={ref}
      className={`counter-text ${className}`}
      onMouseEnter={trigger === 'hover' ? handleMouseEnter : undefined}
      onFocus={trigger === 'focus' ? handleFocus : undefined}
      tabIndex={trigger === 'focus' ? 0 : undefined}
      data-testid={testId}
    >
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </motion.span>
  );
};