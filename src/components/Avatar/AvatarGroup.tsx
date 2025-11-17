import React, { createContext, useContext, forwardRef, useMemo, Children } from 'react';
import { motion } from 'framer-motion';
import { useAvatarGroup } from './useAvatarGroup';
import type { 
  AvatarGroupProps, 
  AvatarGroupContextValue
} from './types';
import { 
  getAvatarGroupClasses,
  getAvatarGroupCountClasses,
  avatarGroupDefaults 
} from './variants';
import { twMerge } from 'tailwind-merge';

// Avatar Group Context
const AvatarGroupContext = createContext<AvatarGroupContextValue | null>(null);

/**
 * Hook to use Avatar Group context
 */
export const useAvatarGroupContext = () => {
  return useContext(AvatarGroupContext);
};

/**
 * Avatar Group Provider component
 */
export const AvatarGroupProvider: React.FC<{
  value: AvatarGroupContextValue;
  children: React.ReactNode;
}> = ({ value, children }) => {
  return (
    <AvatarGroupContext.Provider value={value}>
      {children}
    </AvatarGroupContext.Provider>
  );
};

/**
 * AvatarGroup component following HeroUI design system
 * Groups multiple avatars with overflow handling and consistent styling
 */
export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(({
  max = avatarGroupDefaults.max,
  total,
  size,
  color,
  radius,
  isGrid = avatarGroupDefaults.isGrid,
  isDisabled = avatarGroupDefaults.isDisabled,
  isBordered = avatarGroupDefaults.isBordered,
  renderCount,
  classNames = {},
  children,
  ...props
}, ref) => {
  // Use avatar group hook for logic
  const {
    context,
    remainingCount,
    shouldShowCount,
    baseProps,
    countProps,
  } = useAvatarGroup({
    max,
    total,
    size,
    color,
    radius,
    isGrid,
    isDisabled,
    isBordered,
    renderCount,
    children,
    ...props,
  });

  // Generate classes
  const baseClasses = useMemo(() => {
    const classes = getAvatarGroupClasses({ isGrid });
    return twMerge(classes, classNames.base);
  }, [isGrid, classNames.base]);

  const countClasses = useMemo(() => {
    const classes = getAvatarGroupCountClasses({ 
      size, 
      radius, 
      isGrid 
    });
    return twMerge(classes, classNames.count);
  }, [size, radius, isGrid, classNames.count]);

  // Process children to apply group context and limit display
  const processedChildren = useMemo(() => {
    if (!children) return null;

    const childrenArray = Children.toArray(children);
    const visibleChildren = childrenArray.slice(0, max);

    return visibleChildren.map((child, index) => {
      // Apply stagger animation in grid mode
      if (isGrid) {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.05,
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            {child}
          </motion.div>
        );
      }

      // In non-grid mode, apply negative margin for overlap (except first child)
      return (
        <motion.div
          key={index}
          className={index > 0 ? "-ml-2" : ""}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: index * 0.05,
            duration: 0.2,
            ease: [0.4, 0, 0.2, 1]
          }}
          style={{ zIndex: visibleChildren.length - index }}
        >
          {child}
        </motion.div>
      );
    });
  }, [children, max, isGrid]);

  // Render count indicator
  const renderCountIndicator = () => {
    if (!shouldShowCount) return null;

    // Use custom render function if provided
    if (renderCount) {
      const customCount = renderCount(remainingCount);
      return (
        <motion.div
          className={countClasses}
          aria-label={countProps['aria-label']}
          role={countProps.role}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: max * 0.05,
            duration: 0.2,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          {customCount}
        </motion.div>
      );
    }

    // Default count indicator
    return (
      <motion.div
        className={countClasses}
        aria-label={countProps['aria-label']}
        role={countProps.role}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: max * 0.05,
          duration: 0.2,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        +{remainingCount}
      </motion.div>
    );
  };

  return (
    <AvatarGroupProvider value={context}>
      <div
        ref={ref}
        {...baseProps}
        className={baseClasses}
      >
        {processedChildren}
        {renderCountIndicator()}
      </div>
    </AvatarGroupProvider>
  );
});

AvatarGroup.displayName = 'AvatarGroup';