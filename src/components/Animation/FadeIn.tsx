import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FadeInProps } from './types';
import { fadeInVariants, defaultTransitions } from './helpers';

/**
 * FadeIn Animation Component
 * 
 * Animates opacity from transparent to opaque with customizable timing and triggers
 */
export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.3,
  disabled = false,
  trigger = 'inView',
  once = true,
  threshold = 0.1,
  from = 0,
  to = 1,
  style,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  // If animations are disabled, render children directly
  if (disabled) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  // Determine animation state based on trigger
  const getAnimationState = () => {
    switch (trigger) {
      case 'inView':
        return isInView ? 'animate' : 'initial';
      case 'manual':
        return 'initial';
      case 'hover':
      case 'tap':
        return 'animate'; // These are handled by whileHover/whileTap
      default:
        return 'animate';
    }
  };

  const transition = {
    ...defaultTransitions.smooth,
    duration,
    delay,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={fadeInVariants}
      initial="initial"
      animate={getAnimationState()}
      exit="exit"
      custom={{ from, to }}
      transition={transition}
      whileHover={trigger === 'hover' ? 'animate' : undefined}
      whileTap={trigger === 'tap' ? 'animate' : undefined}
    >
      {children}
    </motion.div>
  );
};