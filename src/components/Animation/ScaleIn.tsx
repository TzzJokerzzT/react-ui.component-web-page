import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ScaleInProps } from './types';
import { scaleInVariants, defaultTransitions } from './helpers';

/**
 * ScaleIn Animation Component
 * 
 * Animates elements scaling from small to full size with optional hover/tap effects
 */
export const ScaleIn: React.FC<ScaleInProps> = ({
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
    ...defaultTransitions.bounce,
    duration,
    delay,
  };

  const customProps = { from, to };

  const motionStyle = {
    ...style,
    transformOrigin,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={motionStyle}
      variants={scaleInVariants}
      initial="initial"
      animate={getAnimationState()}
      exit="exit"
      custom={customProps}
      transition={transition}
      whileHover={trigger === 'hover' ? 'hover' : undefined}
      whileTap={trigger === 'tap' ? 'tap' : undefined}
    >
      {children}
    </motion.div>
  );
};