import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SlideInProps } from './types';
import { slideInVariants, defaultTransitions } from './helpers';

/**
 * SlideIn Animation Component
 * 
 * Animates elements sliding in from different directions (up, down, left, right)
 */
export const SlideIn: React.FC<SlideInProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.3,
  disabled = false,
  trigger = 'inView',
  once = true,
  threshold = 0.1,
  direction = 'up',
  distance = 50,
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
        return 'animate';
      default:
        return 'animate';
    }
  };

  const transition = {
    ...defaultTransitions.smooth,
    duration,
    delay,
  };

  const customProps = { direction, distance };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={slideInVariants}
      initial="initial"
      animate={getAnimationState()}
      exit="exit"
      custom={customProps}
      transition={transition}
      whileHover={trigger === 'hover' ? 'animate' : undefined}
      whileTap={trigger === 'tap' ? 'animate' : undefined}
    >
      {children}
    </motion.div>
  );
};