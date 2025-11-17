import React from 'react';
import { motion } from 'framer-motion';
import type { SpinnerProps } from './types';
import { 
  spinnerContainerVariants, 
  spinnerLabelVariants,
  getSpinnerDuration,
  motionVariants,
  ringSpinnerVariants,
  pulseSpinnerVariants,
  bounceSpinnerVariants,
  bounceDotVariants,
  waveSpinnerVariants,
  waveBarVariants,
} from './variants';

const Spinner: React.FC<SpinnerProps> = ({
  type = 'rotating',
  size = 'md',
  color = 'primary',
  speed = 'normal',
  visible = true,
  label,
  overlay = false,
  overlayOpacity = 0.8,
  overlayColor = 'bg-white',
  animationConfig,
  className,
  'aria-label': ariaLabel = 'Loading',
  'data-testid': dataTestId = 'spinner',
  style,
  ...props
}) => {
  const duration = getSpinnerDuration(speed);
  
  // Simple rotating spinner (default)
  const RotatingSpinner = () => (
    <motion.div
      className={ringSpinnerVariants({ size, color })}
      animate={motionVariants.rotate.animate}
      transition={{
        duration,
        repeat: Infinity,

        ...animationConfig,
      }}
    />
  );

  // Pulse spinner
  const PulseSpinner = () => (
    <motion.div
      className={pulseSpinnerVariants({ size, color })}
      animate={motionVariants.pulse.animate}
      transition={{
        duration,
        repeat: Infinity,
        ...animationConfig,
      }}
    />
  );

  // Bounce spinner (3 dots)
  const BounceSpinner = () => (
    <div className={bounceSpinnerVariants({ size })}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={bounceDotVariants({ size, color })}
          animate={motionVariants.bounce.animate}
          transition={{
            duration,
            repeat: Infinity,
            delay: index * 0.1,
            ...animationConfig,
          }}
        />
      ))}
    </div>
  );

  // Wave spinner (5 bars)
  const WaveSpinner = () => (
    <div className={waveSpinnerVariants({ size })}>
      {[0, 1, 2, 3, 4].map((index) => (
        <motion.div
          key={index}
          className={waveBarVariants({ size, color })}
          animate={motionVariants.wave.animate}
          transition={{
            duration,
            repeat: Infinity,
            delay: index * 0.1,
            ...animationConfig,
          }}
        />
      ))}
    </div>
  );

  // Get the appropriate spinner component
  const getSpinnerComponent = () => {
    switch (type) {
      case 'rotating':
      case 'ring':
        return <RotatingSpinner />;
      case 'pulse':
        return <PulseSpinner />;
      case 'bounce':
      case 'dots':
        return <BounceSpinner />;
      case 'wave':
      case 'bars':
        return <WaveSpinner />;
      default:
        return <RotatingSpinner />;
    }
  };

  const containerClasses = spinnerContainerVariants({ 
    overlay,
    position: 'center',
    fullScreen: overlay 
  });

  const mergedClassName = className ? `${containerClasses} ${className}` : containerClasses;

  const containerStyle = {
    ...style,
    ...(overlay && overlayOpacity !== undefined && {
      backgroundColor: `rgba(255, 255, 255, ${overlayOpacity})`,
    }),
  };

  if (!visible) {
    return null;
  }

  return (
    <motion.div
      className={mergedClassName}
      style={containerStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      role="status"
      aria-live="polite"
      data-testid={dataTestId}
      {...props}
    >
      {getSpinnerComponent()}
      
      {label && (
        <motion.div
          className={spinnerLabelVariants({ 
            position: 'center',
            color: color === 'neutral' ? 'neutral' : color 
          })}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.2 }}
        >
          {label}
        </motion.div>
      )}
    </motion.div>
  );
};

// Display name for debugging
Spinner.displayName = 'Spinner';

export default Spinner;