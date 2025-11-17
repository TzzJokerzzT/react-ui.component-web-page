import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { RotateInProps } from './types';
import { rotateInVariants, defaultTransitions } from './helpers';

/**
 * RotateIn Animation Component
 * 
 * Animates elements rotating into view with customizable direction and rotation degrees
 */
export const RotateIn: React.FC<RotateInProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  disabled = false,
  trigger = 'inView',
  once = true,
  threshold = 0.1,
  direction = 'clockwise',
  degrees = 180,
  transformOrigin = 'center',
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

  const customProps = { direction, degrees };

  const motionStyle = {
    ...style,
    transformOrigin,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={motionStyle}
      variants={rotateInVariants}
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