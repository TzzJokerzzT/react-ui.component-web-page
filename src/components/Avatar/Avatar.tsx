import React, { forwardRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useAvatar } from './useAvatar';
import { AvatarIcon } from './AvatarIcon';
import type { AvatarProps } from './types';
import { 
  getAvatarClasses,
  avatarImageVariants,
  avatarFallbackVariants,
  avatarNameVariants,
  avatarDefaults 
} from './variants';
import { twMerge } from 'tailwind-merge';

/**
 * Avatar component following HeroUI design system
 * Displays user profile picture, initials, or fallback icon
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(({
  src,
  name,
  icon,
  fallback,
  color = avatarDefaults.color,
  size = avatarDefaults.size,
  radius = avatarDefaults.radius,
  isBordered = avatarDefaults.isBordered,
  isDisabled = avatarDefaults.isDisabled,
  isFocusable = avatarDefaults.isFocusable,
  showFallback = avatarDefaults.showFallback,
  ImgComponent = "img",
  imgProps = {},
  getInitials,
  classNames = {},
  as: Component = "div",
  ...props
}, ref) => {
  // Use avatar hook for logic
  const {
    isImgLoaded,
    shouldShowFallback,
    initials,
    imgProps: finalImgProps,
    baseProps,
    fallbackProps,
  } = useAvatar({
    src,
    name,
    showFallback,
    getInitials,
    ImgComponent,
    imgProps,
    isFocusable,
    isDisabled,
    ...props,
  });

  // Generate classes
  const baseClasses = useMemo(() => {
    const classes = getAvatarClasses({
      color,
      size,
      radius,
      isBordered,
      isDisabled,
      isFocusable,
    });
    return twMerge(classes, classNames.base);
  }, [color, size, radius, isBordered, isDisabled, isFocusable, classNames.base]);

  const imageClasses = useMemo(() => {
    const classes = avatarImageVariants();
    return twMerge(classes, classNames.img);
  }, [classNames.img]);

  const fallbackClasses = useMemo(() => {
    const classes = avatarFallbackVariants();
    return twMerge(classes, classNames.fallback);
  }, [classNames.fallback]);

  const nameClasses = useMemo(() => {
    const classes = avatarNameVariants();
    return twMerge(classes, classNames.name);
  }, [classNames.name]);

  const iconClasses = useMemo(() => {
    return twMerge("w-1/2 h-1/2", classNames.icon);
  }, [classNames.icon]);

  // Render image if src is provided and loaded
  const renderImage = () => {
    if (!src || !isImgLoaded) return null;
    
    return React.createElement(ImgComponent, {
      ...finalImgProps,
      className: imageClasses,
    });
  };

  // Render fallback content (initials, icon, or custom fallback)
  const renderFallback = () => {
    if (!shouldShowFallback) return null;

    return (
      <div {...fallbackProps} className={fallbackClasses}>
        {/* Custom fallback has highest priority */}
        {fallback}
        
        {/* Name initials have second priority */}
        {!fallback && name && (
          <span className={nameClasses} aria-label={`${name} initials`}>
            {initials}
          </span>
        )}
        
        {/* Custom icon has third priority */}
        {!fallback && !name && icon && (
          <span className={iconClasses} aria-hidden="true">
            {icon}
          </span>
        )}
        
        {/* Default icon has lowest priority */}
        {!fallback && !name && !icon && (
          <AvatarIcon className={iconClasses} />
        )}
      </div>
    );
  };

  // Animation variants for smooth transitions
  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const fallbackVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <Component
      ref={ref}
      {...baseProps}
      className={baseClasses}
    >
      {/* Image with fade-in animation */}
      {src && (
        <motion.div
          className="absolute inset-0"
          variants={imageVariants}
          initial="hidden"
          animate={isImgLoaded ? "visible" : "hidden"}
        >
          {renderImage()}
        </motion.div>
      )}
      
      {/* Fallback content with fade-in animation */}
      <motion.div
        className="absolute inset-0"
        variants={fallbackVariants}
        initial="hidden"
        animate={shouldShowFallback ? "visible" : "hidden"}
      >
        {renderFallback()}
      </motion.div>
    </Component>
  );
});

Avatar.displayName = 'Avatar';