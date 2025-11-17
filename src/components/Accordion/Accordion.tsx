import React, { createContext, useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useAccordion } from './useAccordion';
import { AccordionItem } from './AccordionItem';
import { 
  getAccordionWrapper,
  accordionDefaults 
} from './variants';
import {
  mergeAnimationConfig,
  generateStaggerConfig
} from './animations';
import type {
  AccordionProps,
  AccordionContextValue,
  AccordionItemConfig,
  AccordionSelectionMode,
  AccordionIndicatorPlacement,
  AccordionItemPlacement
} from './types';

// Accordion Context
const AccordionContext = createContext<AccordionContextValue | null>(null);

/**
 * Hook to use accordion context
 */
export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordionContext must be used within an Accordion component');
  }
  return context;
};

/**
 * Main Accordion component that provides accordion functionality with HeroUI styling
 */
export const Accordion: React.FC<AccordionProps> = ({
  items,
  children,
  selectionMode = accordionDefaults.selectionMode as AccordionSelectionMode,
  defaultExpandedKeys,
  expandedKeys,
  onExpandedChange,
  onSelectionChange,
  size = accordionDefaults.size,
  color = accordionDefaults.color,
  variant = accordionDefaults.variant,
  radius = accordionDefaults.radius,
  isDisabled = false,
  showDivider = accordionDefaults.showDivider,
  disableAnimation = accordionDefaults.disableAnimation,
  disableIndicatorAnimation = accordionDefaults.disableIndicatorAnimation,
  keepContentMounted = accordionDefaults.keepContentMounted,
  animationConfig,
  indicatorPlacement = accordionDefaults.indicatorPlacement as AccordionIndicatorPlacement,
  itemPlacement = accordionDefaults.itemPlacement as AccordionItemPlacement,
  isCompact = accordionDefaults.isCompact,
  className = "",
  style,
  'aria-label': ariaLabel = 'Accordion',
  'data-testid': dataTestId,
  ...rest
}) => {
  // Use accordion hook for state management
  const accordion = useAccordion({
    selectionMode,
    defaultExpandedKeys,
    expandedKeys,
    onExpandedChange,
    onSelectionChange,
    isDisabled
  });

  // Create context value
  const contextValue: AccordionContextValue = useMemo(() => ({
    expandedKeys: accordion.expandedKeys,
    toggle: accordion.toggle,
    selectionMode,
    size,
    color,
    variant,
    radius,
    isDisabled,
    showDivider,
    disableAnimation,
    disableIndicatorAnimation,
    keepContentMounted,
    indicatorPlacement,
    itemPlacement,
    isCompact,
    animationConfig
  }), [
    accordion.expandedKeys,
    accordion.toggle,
    selectionMode,
    size,
    color,
    variant,
    radius,
    isDisabled,
    showDivider,
    disableAnimation,
    disableIndicatorAnimation,
    keepContentMounted,
    indicatorPlacement,
    itemPlacement,
    isCompact,
    animationConfig
  ]);

  // Get wrapper classes
  const wrapperClasses = getAccordionWrapper(
    variant,
    radius,
    isCompact,
    className
  );

  // Merge animation config with defaults
  const finalAnimationConfig = useMemo(() => {
    return mergeAnimationConfig(animationConfig, 'spring');
  }, [animationConfig]);

  // Render items from items prop or children
  const renderItems = () => {
    if (items && items.length > 0) {
      // Render from items configuration with stagger animation
      return items.map((item: AccordionItemConfig, index: number) => {
        const staggerConfig = generateStaggerConfig(finalAnimationConfig, index);
        
        return (
          <motion.div
            key={item.key}
            {...(disableAnimation ? {} : staggerConfig)}
          >
            <AccordionItem
              itemKey={item.key}
              title={item.title}
              isDisabled={item.isDisabled}
              className={item.className}
              style={item.style}
              ariaLabel={item.ariaLabel}
            >
              {item.content}
            </AccordionItem>
          </motion.div>
        );
      });
    }

    // Render children components with stagger if they are AccordionItem components
    if (children && !disableAnimation) {
      const childrenArray = React.Children.toArray(children);
      return childrenArray.map((child, index) => {
        const staggerConfig = generateStaggerConfig(finalAnimationConfig, index);
        
        return (
          <motion.div
            key={index}
            {...staggerConfig}
          >
            {child}
          </motion.div>
        );
      });
    }

    // Fallback: render children without animation
    return children;
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <motion.div
        className={wrapperClasses}
        style={style}
        aria-label={ariaLabel}
        data-testid={dataTestId}
        role="tablist"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 280,
          damping: 25
          // Idéntica configuración para uniformidad completa
        }}
        {...rest}
      >
        {renderItems()}
      </motion.div>
    </AccordionContext.Provider>
  );
};

// Forward reference for easier usage
Accordion.displayName = 'Accordion';