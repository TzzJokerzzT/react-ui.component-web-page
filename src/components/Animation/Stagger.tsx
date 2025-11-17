import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { StaggerProps } from './types';
import { defaultTransitions } from './helpers';

/**
 * Stagger Animation Component
 * 
 * Animates multiple children with a staggered delay effect
 */
export const Stagger: React.FC<StaggerProps> = ({
  children,
  className = '',
  staggerDelay = 0.1,
  animationType = 'fadeIn',
  direction = 'up',
  duration = 0.3,
  threshold = 0.1,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  // Create container variants with custom stagger delay
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: staggerDelay,
      }
    }
  };

  // Create item variants based on animation type
  const getItemVariants = () => {
    const distance = 50;
    
    switch (animationType) {
      case 'slideIn':
        return {
          initial: (() => {
            switch (direction) {
              case 'up':
                return { y: distance, opacity: 0 };
              case 'down':
                return { y: -distance, opacity: 0 };
              case 'left':
                return { x: distance, opacity: 0 };
              case 'right':
                return { x: -distance, opacity: 0 };
              default:
                return { y: distance, opacity: 0 };
            }
          })(),
          animate: { x: 0, y: 0, opacity: 1 }
        };
      case 'scaleIn':
        return {
          initial: { scale: 0, opacity: 0 },
          animate: { scale: 1, opacity: 1 }
        };
      case 'fadeIn':
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 }
        };
    }
  };

  const itemVariants = getItemVariants();

  const transition = {
    ...defaultTransitions.smooth,
    duration,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          transition={transition}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};