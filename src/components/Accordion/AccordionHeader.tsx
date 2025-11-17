import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useAccordionContext } from './Accordion';
import { 
  getAccordionHeaderVariant,
  getAccordionSize,
  getAccordionIndicatorVariant
} from './variants';
import {
  mergeAnimationConfig,
  generateChevronVariants,
  getHoverAnimationConfig,
  getTapAnimationConfig
} from './animations';
import type { AccordionHeaderProps, AccordionIndicatorProps } from './types';

// Animated chevron down icon component
const ChevronDownIcon: React.FC<{ 
  className?: string; 
  isExpanded?: boolean;
  disableAnimation?: boolean;
  animationConfig?: any;
}> = ({ 
  className = "",
  isExpanded = false,
  disableAnimation = false,
  animationConfig
}) => {
  const chevronVariants = useMemo(() => {
    if (!animationConfig) return {};
    return generateChevronVariants(animationConfig);
  }, [animationConfig]);

  if (disableAnimation) {
    return (
      <svg
        className={`${className} ${isExpanded ? 'rotate-180' : ''} transition-transform duration-200`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }

  return (
    <motion.svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={chevronVariants}
    >
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
        animate={{
          pathLength: 1,
          opacity: 1
        }}
        initial={{
          pathLength: 0.8,
          opacity: 0.8
        }}
        transition={{
          type: "spring",
          stiffness: animationConfig?.spring?.stiffness || 280,
          damping: animationConfig?.spring?.damping || 25
          // NO DELAY - perfecta sincronización
        }}
      />
    </motion.svg>
  );
};

/**
 * Accordion indicator component (chevron icon) with framer-motion animations
 */
export const AccordionIndicator: React.FC<AccordionIndicatorProps> = ({
  isExpanded,
  isDisabled = false,
  className = "",
  children,
  "data-testid": dataTestId
}) => {
  const { 
    color, 
    size, 
    disableIndicatorAnimation,
    animationConfig
  } = useAccordionContext();

  // Merge animation config with defaults
  const finalAnimationConfig = useMemo(() => {
    return mergeAnimationConfig(animationConfig, 'spring');
  }, [animationConfig]);

  const hoverConfig = useMemo(() => {
    return getHoverAnimationConfig(finalAnimationConfig.preset || 'spring');
  }, [finalAnimationConfig.preset]);

  const tapConfig = useMemo(() => {
    return getTapAnimationConfig(finalAnimationConfig.preset || 'spring');
  }, [finalAnimationConfig.preset]);

  const sizeClasses = getAccordionSize[size];
  const indicatorClasses = getAccordionIndicatorVariant(color, isExpanded, isDisabled);
  
  // Remove CSS animation classes since we're using framer-motion
  const finalClasses = `${indicatorClasses} ${sizeClasses.indicator} ${className}`.trim();

  if (disableIndicatorAnimation) {
    return (
      <span 
        className={finalClasses}
        data-testid={dataTestId}
        aria-hidden="true"
      >
        {children || <ChevronDownIcon className="w-full h-full" />}
      </span>
    );
  }

  return (
    <motion.span 
      className={finalClasses}
      data-testid={dataTestId}
      aria-hidden="true"
      whileHover={hoverConfig}
      whileTap={tapConfig}
    >
      {children || (
        <ChevronDownIcon 
          className="w-full h-full" 
          isExpanded={isExpanded}
          disableAnimation={disableIndicatorAnimation}
          animationConfig={finalAnimationConfig}
        />
      )}
    </motion.span>
  );
};

/**
 * Accordion header component with click handling and accessibility
 */
export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
  isExpanded,
  isDisabled = false,
  onClick,
  className = "",
  ariaLabel,
  "data-testid": dataTestId
}) => {
  const { 
    color, 
    variant, 
    size,
    indicatorPlacement,
    animationConfig
  } = useAccordionContext();

  // Merge animation config with defaults
  const finalAnimationConfig = useMemo(() => {
    return mergeAnimationConfig(animationConfig, 'spring');
  }, [animationConfig]);

  const headerHoverConfig = useMemo(() => {
    return getHoverAnimationConfig(finalAnimationConfig.preset || 'spring');
  }, [finalAnimationConfig.preset]);

  const headerTapConfig = useMemo(() => {
    return getTapAnimationConfig(finalAnimationConfig.preset || 'spring');
  }, [finalAnimationConfig.preset]);

  const sizeClasses = getAccordionSize[size];
  const headerClasses = getAccordionHeaderVariant(color, variant, isExpanded, isDisabled);
  
  const finalClasses = `${headerClasses} ${sizeClasses.header} ${className}`.trim();

  const handleClick = () => {
    if (!isDisabled && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isDisabled && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick?.();
    }
  };

  return (
    <motion.button
      type="button"
      className={finalClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={isDisabled}
      aria-expanded={isExpanded}
      aria-label={ariaLabel}
      data-testid={dataTestId}
      role="tab"
      tabIndex={isDisabled ? -1 : 0}
      whileHover={!isDisabled ? headerHoverConfig : undefined}
      whileTap={!isDisabled ? headerTapConfig : undefined}
    >
      {indicatorPlacement === 'start' && (
        <AccordionIndicator 
          isExpanded={isExpanded} 
          isDisabled={isDisabled}
        />
      )}
      
      <motion.span 
        className="flex-1 text-left"
        animate={{
          opacity: isDisabled ? 0.5 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 25
          // Misma configuración que el acordeón principal
        }}
      >
        {children}
      </motion.span>
      
      {indicatorPlacement === 'end' && (
        <AccordionIndicator 
          isExpanded={isExpanded} 
          isDisabled={isDisabled}
        />
      )}
    </motion.button>
  );
};

AccordionHeader.displayName = 'AccordionHeader';
AccordionIndicator.displayName = 'AccordionIndicator';