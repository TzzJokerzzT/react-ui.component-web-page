import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { GlitchTextProps } from './types';
import { generateGlitchChars, getGlitchVariants, prefersReducedMotion } from './helpers';

/**
 * GlitchText Component
 * 
 * Creates a glitch effect on text with customizable intensity levels,
 * colors, and corruption effects. Supports continuous animation and
 * various trigger modes.
 * 
 * @example
 * <GlitchText 
 *   text="GLITCH EFFECT"
 *   intensity="high"
 *   continuous={true}
 *   colors={['#ff0000', '#00ff00', '#0000ff']}
 *   corruptData={true}
 * />
 */
export const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className = '',
  trigger = 'inView',
  intensity = 'medium',
  duration = 0.5,
  continuous = false,
  colors = ['#ff0000', '#00ff00', '#0000ff'],
  corruptData = false,
  glitchChars: customGlitchChars,
  layers = 3,
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
  const [corruptedText, setCorruptedText] = useState(text);
  
  const ref = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const corruptionIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  
  const reducedMotion = prefersReducedMotion();
  
  // Determine if animation should be active
  const shouldAnimate = !disabled && !reducedMotion && (
    trigger === 'immediate' ||
    (trigger === 'inView' && isInView) ||
    (trigger === 'manual' && isActive)
  );

  // Generate glitch characters
  const glitchChars = customGlitchChars || generateGlitchChars(20);

  // Generate animation variants based on intensity
  const variants = getGlitchVariants(intensity);

  // Text corruption effect
  const corruptText = (originalText: string, corruptionLevel: number = 0.3) => {
    return originalText
      .split('')
      .map(char => {
        if (Math.random() < corruptionLevel) {
          return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }
        return char;
      })
      .join('');
  };

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

  // Data corruption effect
  useEffect(() => {
    if (corruptData && shouldAnimate) {
      const corruptionSpeed = intensity === 'extreme' ? 50 : 
                              intensity === 'high' ? 100 : 
                              intensity === 'medium' ? 200 : 300;

      corruptionIntervalRef.current = setInterval(() => {
        setCorruptedText(corruptText(text, 0.2));
        
        // Occasionally restore original text
        if (Math.random() < 0.3) {
          setTimeout(() => setCorruptedText(text), 50);
        }
      }, corruptionSpeed);

      return () => {
        if (corruptionIntervalRef.current) {
          clearInterval(corruptionIntervalRef.current);
        }
      };
    } else {
      setCorruptedText(text);
      if (corruptionIntervalRef.current) {
        clearInterval(corruptionIntervalRef.current);
      }
    }
  }, [corruptData, shouldAnimate, text, intensity, glitchChars]);

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
      setCorruptedText(text);
    }
  }, [trigger, isActive, text]);

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
    if (!continuous) {
      setIsAnimating(false);
      setAnimationComplete(true);
      if (onComplete) {
        onComplete();
      }
    }
  };

  // If disabled or reduced motion, show normal text
  if (disabled || reducedMotion) {
    return (
      <span
        ref={ref}
        className={`glitch-text ${className}`}
        data-testid={testId}
      >
        {text}
      </span>
    );
  }

  // CSS styles for glitch effect layers
  const glitchStyles: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
  };

  // Generate color layers based on intensity
  const getLayerStyles = (layerIndex: number): React.CSSProperties => {
    const color = colors[layerIndex % colors.length];
    const offset = (layerIndex + 1) * (intensity === 'extreme' ? 3 : 
                                       intensity === 'high' ? 2 : 
                                       intensity === 'medium' ? 1 : 0.5);
    
    return {
      position: 'absolute',
      top: 0,
      left: 0,
      color,
      clipPath: `inset(${layerIndex * 20}% 0 ${(layers - layerIndex - 1) * 20}% 0)`,
      transform: `translateX(${layerIndex % 2 === 0 ? offset : -offset}px)`,
      opacity: 0.8,
      mixBlendMode: 'multiply' as const,
      animation: shouldAnimate ? `glitchShift${layerIndex} ${duration}s linear ${delay}s ${continuous ? 'infinite' : '1'}` : undefined
    };
  };

  return (
    <>
      {/* CSS keyframes for each layer */}
      <style>{`
        ${Array.from({ length: layers }, (_, i) => `
          @keyframes glitchShift${i} {
            0%, 100% { transform: translateX(0); }
            10% { transform: translateX(${(i + 1) * 2}px) translateY(${i}px); }
            20% { transform: translateX(${-(i + 1) * 2}px) translateY(${-i}px); }
            30% { transform: translateX(${(i + 1) * 3}px) translateY(${i * 2}px); }
            40% { transform: translateX(${-(i + 1) * 3}px) translateY(${-i * 2}px); }
            50% { transform: translateX(${(i + 1)}px) translateY(${-i}px); }
            60% { transform: translateX(${-(i + 1)}px) translateY(${i}px); }
            70% { transform: translateX(${(i + 1) * 2}px) translateY(${-i * 2}px); }
            80% { transform: translateX(${-(i + 1) * 2}px) translateY(${i * 2}px); }
            90% { transform: translateX(${(i + 1)}px) translateY(${i}px); }
          }
        `).join('')}
      `}</style>

      <motion.span
        ref={ref}
        className={`glitch-text glitch-text--${intensity} ${className}`}
        style={glitchStyles}
        variants={variants as any}
        initial="hidden"
        animate={shouldAnimate ? "visible" : "hidden"}
        onMouseEnter={trigger === 'hover' ? handleMouseEnter : undefined}
        onFocus={trigger === 'focus' ? handleFocus : undefined}
        tabIndex={trigger === 'focus' ? 0 : undefined}
        onAnimationComplete={handleAnimationComplete}
        data-testid={testId}
      >
        {/* Main text */}
        <span style={{ position: 'relative', zIndex: layers + 1 }}>
          {corruptedText}
        </span>
        
        {/* Color layers for glitch effect */}
        {Array.from({ length: layers }, (_, i) => (
          <span
            key={`layer-${i}`}
            style={getLayerStyles(i)}
            aria-hidden="true"
          >
            {corruptedText}
          </span>
        ))}
      </motion.span>
    </>
  );
};