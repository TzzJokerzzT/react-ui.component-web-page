import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { RevealTextProps } from './types';
import { parseTextForAnimation, prefersReducedMotion, getEasingArray } from './helpers';

/**
 * RevealText Component
 * 
 * Reveals text character by character, word by word, or line by line
 * with customizable animation effects and directions.
 * 
 * @example
 * <RevealText 
 *   text="Texto que se revela gradualmente"
 *   mode="letter"
 *   direction="up"
 *   staggerDelay={0.05}
 * />
 */
export const RevealText: React.FC<RevealTextProps> = ({
  text,
  className = '',
  trigger = 'inView',
  mode = 'letter',
  duration = 0.6,
  staggerDelay = 0.05,
  direction = 'up',
  initialOpacity = 0,
  easing = 'easeOut',
  withBlur = false,
  withScale = false,
  withRotation = false,
  repeat = false,
  delay = 0,
  disabled = false,
  isActive = false,
  onComplete,
  onStart,
  'data-testid': testId
}) => {
  const [isInView, setIsInView] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  const reducedMotion = prefersReducedMotion();
  const parsedText = parseTextForAnimation(text, mode, staggerDelay, duration);
  
  // Determine if animation should be active
  const shouldAnimate = !disabled && !reducedMotion && (
    trigger === 'immediate' ||
    (trigger === 'inView' && isInView) ||
    (trigger === 'manual' && isActive)
  );

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

  // Generate variants based on direction and effects
  const getAnimationVariants = () => {
    let translateX = 0;
    let translateY = 0;

    switch (direction) {
      case 'up':
        translateY = 20;
        break;
      case 'down':
        translateY = -20;
        break;
      case 'left':
        translateX = 20;
        break;
      case 'right':
        translateX = -20;
        break;
    }

    const hidden: any = {
      opacity: initialOpacity,
      x: translateX,
      y: translateY,
    };

    const visible: any = {
      opacity: 1,
      x: 0,
      y: 0,
    };

    // Add effects
    if (withBlur) {
      hidden.filter = 'blur(10px)';
      visible.filter = 'blur(0px)';
    }

    if (withScale) {
      hidden.scale = 0.5;
      visible.scale = 1;
    }

    if (withRotation) {
      hidden.rotate = direction === 'left' ? -45 : direction === 'right' ? 45 : -15;
      visible.rotate = 0;
    }

    return { hidden, visible };
  };

  const variants = getAnimationVariants();

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

  // Animation complete handler
  const handleAnimationComplete = () => {
    setIsAnimating(false);
    setAnimationComplete(true);
    if (onComplete) {
      onComplete();
    }
  };

  // If disabled or reduced motion, show full text immediately
  if (disabled || reducedMotion) {
    return (
      <div
        ref={ref}
        className={`reveal-text ${className}`}
        data-testid={testId}
      >
        {text}
      </div>
    );
  }

  // Render by mode
  const renderByMode = () => {
    if (mode === 'word') {
      return (
        <div
          ref={ref}
          className={`reveal-text reveal-text--words ${className}`}
          onMouseEnter={trigger === 'hover' ? handleMouseEnter : undefined}
          onFocus={trigger === 'focus' ? handleFocus : undefined}
          tabIndex={trigger === 'focus' ? 0 : undefined}
          data-testid={testId}
          style={{ display: 'inline-block' }}
        >
          {parsedText.words.map((wordData, wordIndex) => (
            <motion.span
              key={`word-${wordIndex}`}
              variants={variants}
              initial="hidden"
              animate={isAnimating ? "visible" : "hidden"}
              transition={{
                duration,
                delay: wordData.delay + delay,
                ease: getEasingArray(easing) as any
              }}
              onAnimationComplete={
                wordIndex === parsedText.words.length - 1 
                  ? handleAnimationComplete 
                  : undefined
              }
              style={{ 
                display: 'inline-block', 
                marginRight: wordIndex < parsedText.words.length - 1 ? '0.25em' : '0' 
              }}
            >
              {wordData.word}
            </motion.span>
          ))}
        </div>
      );
    }

    if (mode === 'line') {
      return (
        <div
          ref={ref}
          className={`reveal-text reveal-text--lines ${className}`}
          onMouseEnter={trigger === 'hover' ? handleMouseEnter : undefined}
          onFocus={trigger === 'focus' ? handleFocus : undefined}
          tabIndex={trigger === 'focus' ? 0 : undefined}
          data-testid={testId}
        >
          {parsedText.lines.map((line, lineIndex) => (
            <motion.div
              key={`line-${lineIndex}`}
              variants={variants}
              initial="hidden"
              animate={isAnimating ? "visible" : "hidden"}
               transition={{
                 duration,
                 delay: (lineIndex * staggerDelay) + delay,
                 ease: getEasingArray(easing) as any
               }}
              onAnimationComplete={
                lineIndex === parsedText.lines.length - 1 
                  ? handleAnimationComplete 
                  : undefined
              }
            >
              {line}
            </motion.div>
          ))}
        </div>
      );
    }

    // Default: letter mode
    return (
      <div
        ref={ref}
        className={`reveal-text reveal-text--letters ${className}`}
        onMouseEnter={trigger === 'hover' ? handleMouseEnter : undefined}
        onFocus={trigger === 'focus' ? handleFocus : undefined}
        tabIndex={trigger === 'focus' ? 0 : undefined}
        data-testid={testId}
        style={{ display: 'inline-block' }}
      >
        {parsedText.characters.map((charData, charIndex) => (
          <motion.span
            key={`char-${charIndex}`}
            variants={variants}
            initial="hidden"
            animate={isAnimating ? "visible" : "hidden"}
             transition={{
               duration,
               delay: charData.delay + delay,
               ease: getEasingArray(easing) as any
             }}
            onAnimationComplete={
              charIndex === parsedText.characters.length - 1 
                ? handleAnimationComplete 
                : undefined
            }
            style={{ 
              display: 'inline-block',
              whiteSpace: charData.char === ' ' ? 'pre' : 'normal'
            }}
          >
            {charData.char}
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <AnimatePresence mode="wait">
      {renderByMode()}
    </AnimatePresence>
  );
};