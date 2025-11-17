import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { TypeWriterProps } from './types';
import { prefersReducedMotion } from './helpers';

/**
 * TypeWriter Component
 * 
 * Creates a typewriter effect where text appears character by character,
 * with optional cursor, deletion, and multiple text cycling.
 * 
 * @example
 * <TypeWriter 
 *   text="Hola mundo"
 *   speed={2}
 *   showCursor={true}
 *   cursor="line"
 * />
 */
export const TypeWriter: React.FC<TypeWriterProps> = ({
  text,
  texts,
  className = '',
  trigger = 'inView',
  speed = 2,
  cursor = 'line',
  cursorColor = 'currentColor',
  showCursor = true,
  deleteAfter = false,
  deleteSpeed = 3,
  pauseBeforeDelete = 1,
  loop = false,
  repeat = false,
  delay = 0,
  disabled = false,
  isActive = false,
  onComplete,
  onStart,
  'data-testid': testId
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursorBlink, setShowCursorBlink] = useState(true);
  const [isInView, setIsInView] = useState(false);
  
  const ref = useRef<HTMLSpanElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  const reducedMotion = prefersReducedMotion();
  const allTexts = texts || [text];
  const currentText = allTexts[currentTextIndex] || text;
  
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

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Main animation effect
  useEffect(() => {
    if (!shouldAnimate) {
      if (disabled || reducedMotion) {
        setDisplayText(currentText);
      }
      return;
    }

    const startAnimation = () => {
      if (onStart) {
        onStart();
      }
      
      setIsTyping(true);
      setShowCursorBlink(false);
      
      // Delay before starting
      timeoutRef.current = setTimeout(() => {
        typeText();
      }, delay * 1000);
    };

    const typeText = () => {
      let charIndex = 0;
      const targetText = currentText;
      
      const typeInterval = setInterval(() => {
        if (charIndex <= targetText.length) {
          setDisplayText(targetText.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          setShowCursorBlink(true);
          
          if (onComplete) {
            onComplete();
          }
          
          // Handle deletion or text cycling
          if (deleteAfter || (texts && texts.length > 1)) {
            timeoutRef.current = setTimeout(() => {
              if (deleteAfter) {
                deleteText();
              } else if (texts && texts.length > 1) {
                if (loop || currentTextIndex < texts.length - 1) {
                  deleteText();
                }
              }
            }, pauseBeforeDelete * 1000);
          }
        }
      }, 1000 / speed);
      
      return () => clearInterval(typeInterval);
    };

    const deleteText = () => {
      setIsDeleting(true);
      setShowCursorBlink(false);
      
      const deleteInterval = setInterval(() => {
        setDisplayText(current => {
          if (current.length > 0) {
            return current.slice(0, -1);
          } else {
            clearInterval(deleteInterval);
            setIsDeleting(false);
            setShowCursorBlink(true);
            
            // Move to next text if cycling
            if (texts && texts.length > 1) {
              if (loop) {
                setCurrentTextIndex((prev) => (prev + 1) % texts.length);
              } else if (currentTextIndex < texts.length - 1) {
                setCurrentTextIndex(prev => prev + 1);
              }
              
              // Start typing next text after a brief pause
              timeoutRef.current = setTimeout(() => {
                typeText();
              }, 300);
            }
            
            return '';
          }
        });
      }, 1000 / deleteSpeed);
      
      return () => clearInterval(deleteInterval);
    };

    startAnimation();
  }, [shouldAnimate, currentText, currentTextIndex, speed, deleteSpeed, delay, deleteAfter, loop, texts, onStart, onComplete, pauseBeforeDelete]);

  // Reset when trigger changes
  useEffect(() => {
    if (trigger === 'manual' && !isActive) {
      setDisplayText('');
      setCurrentTextIndex(0);
      setIsTyping(false);
      setIsDeleting(false);
    }
  }, [trigger, isActive]);

  // Cursor styles
  const getCursorStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      color: cursorColor,
      animation: showCursorBlink ? 'blink 1s infinite' : 'none'
    };

    switch (cursor) {
      case 'block':
        return {
          ...baseStyle,
          backgroundColor: cursorColor,
          color: 'transparent',
          marginLeft: '2px',
          width: '0.6em',
          display: 'inline-block'
        };
      case 'underscore':
        return {
          ...baseStyle,
          borderBottom: `2px solid ${cursorColor}`,
          marginLeft: '1px',
          paddingBottom: '2px'
        };
      case 'line':
      default:
        return {
          ...baseStyle,
          borderLeft: `2px solid ${cursorColor}`,
          marginLeft: '2px',
          paddingLeft: '1px'
        };
    }
  };

  // Handle hover trigger
  const handleMouseEnter = () => {
    if (trigger === 'hover' && !isTyping && !isDeleting) {
      setDisplayText('');
      setCurrentTextIndex(0);
    }
  };

  // Handle focus trigger
  const handleFocus = () => {
    if (trigger === 'focus' && !isTyping && !isDeleting) {
      setDisplayText('');
      setCurrentTextIndex(0);
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `
      }} />
      <motion.span
        ref={ref}
        className={`typewriter ${className}`}
        onMouseEnter={trigger === 'hover' ? handleMouseEnter : undefined}
        onFocus={trigger === 'focus' ? handleFocus : undefined}
        tabIndex={trigger === 'focus' ? 0 : undefined}
        data-testid={testId}
        style={{
          display: 'inline-block',
          minHeight: '1em',
          fontFamily: 'monospace'
        }}
      >
        {displayText}
        {showCursor && cursor !== 'none' && (
          <span 
            className="typewriter-cursor"
            style={getCursorStyle()}
            aria-hidden="true"
          >
            {cursor === 'block' ? '█' : ''}
          </span>
        )}
      </motion.span>
    </>
  );
};