import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BounceProps } from './types';
import { bounceVariants, defaultTransitions } from './helpers';

/**
 * Bounce Animation Component
 * 
 * Creates a bouncing animation effect with customizable amplitude and frequency
 */
export const Bounce: React.FC<BounceProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  disabled = false,
  trigger = 'inView',
  once = true,
  threshold = 0.1,
  amplitude = 20,
  frequency = 1,
  damping = 0.8,
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
    ...defaultTransitions.bounce,
    duration,
    delay,
    damping,
  };

  const customProps = { amplitude, frequency };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={bounceVariants}
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