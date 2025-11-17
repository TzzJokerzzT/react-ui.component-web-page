import * as React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { MorphingTextProps } from './types';
import { generateMorphSteps, prefersReducedMotion, getEasingArray } from './helpers';

/**
 * MorphingText Component
 * 
 * Animates between different texts with morphing transitions.
 * Supports multiple morph styles including fade, slide, and scramble effects.
 * 
 * @example
 * <MorphingText 
 *   texts={['Hola', 'Mundo', 'Texto']}
 *   displayDuration={2000}
 *   morphDuration={800}
 *   morphStyle="scramble"
 *   loop={true}
 * />
 */
export const MorphingText: React.FC<MorphingTextProps> = ({
  texts,
  className = '',
  trigger = 'immediate',
  displayDuration = 2000,
  morphDuration = 800,
  loop = true,
  easing = 'easeInOut',
  morphStyle = 'fade',
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(texts[0] || '');

  
  const ref = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const animationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const morphTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const reducedMotion = prefersReducedMotion();
  
  // Determine if animation should be active
  const shouldAnimate = !disabled && !reducedMotion && (
    trigger === 'immediate' ||
    (trigger === 'inView' && isInView) ||
    (trigger === 'manual' && isActive)
  );

  // Clean up timeouts
  const cleanupTimeouts = useCallback(() => {
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
      animationTimeoutRef.current = null;
    }
    if (morphTimeoutRef.current) {
      clearTimeout(morphTimeoutRef.current);
      morphTimeoutRef.current = null;
    }
  }, []);

  // Morph to next text with scramble effect
  const morphToNext = useCallback(() => {
    if (texts.length <= 1) return;

    const currentText = texts[currentIndex];
    const nextIndex = (currentIndex + 1) % texts.length;
    const nextText = texts[nextIndex];

    if (morphStyle === 'scramble') {
      const morphSteps = generateMorphSteps(currentText, nextText);
      let step = 0;
      
      const morphInterval = setInterval(() => {
        if (step < morphSteps.length) {
          setDisplayText(morphSteps[step]);
          step++;
        } else {
          clearInterval(morphInterval);
          setDisplayText(nextText);
          setCurrentIndex(nextIndex);
          
          // Check if we should continue or complete
          if (!loop && nextIndex === 0) {
            setAnimationComplete(true);
            setIsAnimating(false);
            if (onComplete) {
              onComplete();
            }
          } else if (shouldAnimate) {
            // Schedule next morph
            animationTimeoutRef.current = setTimeout(() => {
              morphToNext();
            }, displayDuration);
          }
        }
      }, morphDuration / 10);
      
    } else {
      // For fade and slide, just transition directly
      setDisplayText(nextText);
      setCurrentIndex(nextIndex);
      
      // Check if we should continue or complete
      if (!loop && nextIndex === 0) {
        setAnimationComplete(true);
        setIsAnimating(false);
        if (onComplete) {
          onComplete();
        }
      } else if (shouldAnimate) {
        // Schedule next morph
        animationTimeoutRef.current = setTimeout(() => {
          morphToNext();
        }, displayDuration);
      }
    }
  }, [currentIndex, texts, morphStyle, morphDuration, displayDuration, loop, shouldAnimate, onComplete]);

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
    if (shouldAnimate && !animationComplete && texts.length > 1) {
      setIsAnimating(true);
      if (onStart) {
        onStart();
      }

      // Start morphing after initial delay
      animationTimeoutRef.current = setTimeout(() => {
        morphToNext();
      }, delay + displayDuration);

    } else if (!shouldAnimate) {
      cleanupTimeouts();
      setIsAnimating(false);
      setDisplayText(texts[0] || '');
      setCurrentIndex(0);
    }

    return cleanupTimeouts;
  }, [shouldAnimate, animationComplete, texts.length, delay, displayDuration, morphToNext, onStart, cleanupTimeouts]);

  // Reset when trigger changes
  useEffect(() => {
    if (trigger === 'manual' && !isActive) {
      cleanupTimeouts();
      setAnimationComplete(false);
      setIsAnimating(false);
      setDisplayText(texts[0] || '');
      setCurrentIndex(0);
    }
  }, [trigger, isActive, texts, cleanupTimeouts]);

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

  // Cleanup on unmount
  useEffect(() => {
    return cleanupTimeouts;
  }, [cleanupTimeouts]);

  // If disabled or reduced motion, show first text
  if (disabled || reducedMotion) {
    return (
      <span
        ref={ref}
        className={`morphing-text ${className}`}
        data-testid={testId}
      >
        {texts[0] || ''}
      </span>
    );
  }

  // Animation variants for fade and slide styles
  const getAnimationVariants = () => {
    switch (morphStyle) {
      case 'slide':
        return {
          enter: { x: 50, opacity: 0 },
          center: { x: 0, opacity: 1 },
          exit: { x: -50, opacity: 0 }
        };
      case 'fade':
      default:
        return {
          enter: { opacity: 0 },
          center: { opacity: 1 },
          exit: { opacity: 0 }
        };
    }
  };

  const variants = getAnimationVariants();

  // For scramble style, render as simple span since morphing is handled by text content
  if (morphStyle === 'scramble') {
    return (
      <span
        ref={ref}
        className={`morphing-text morphing-text--scramble ${className}`}
        onMouseEnter={trigger === 'hover' ? handleMouseEnter : undefined}
        onFocus={trigger === 'focus' ? handleFocus : undefined}
        tabIndex={trigger === 'focus' ? 0 : undefined}
        data-testid={testId}
        style={{
          fontVariantNumeric: 'tabular-nums', // Prevents layout shift during morphing
          minWidth: '1ch', // Ensures minimum width
        }}
      >
        {displayText}
      </span>
    );
  }

  // For fade and slide styles, use Framer Motion
  return (
    <span
      ref={ref}
      className={`morphing-text morphing-text--${morphStyle} ${className}`}
      onMouseEnter={trigger === 'hover' ? handleMouseEnter : undefined}
      onFocus={trigger === 'focus' ? handleFocus : undefined}
      tabIndex={trigger === 'focus' ? 0 : undefined}
      data-testid={testId}
      style={{
        display: 'inline-block',
        minWidth: '1ch',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={`${currentIndex}-${displayText}`}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: morphDuration / 1000,
            ease: getEasingArray(easing) as any
          }}
          style={{ display: 'inline-block' }}
        >
          {displayText}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};