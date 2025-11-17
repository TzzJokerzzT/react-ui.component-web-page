import { useState, useEffect, useMemo, useCallback } from 'react';
import type { 
  AvatarProps, 
  UseAvatarReturn
} from './types';
import { 
  getDefaultInitials, 
  getNameBackgroundColor,
  avatarDefaults 
} from './variants';

/**
 * useAvatar hook for custom Avatar implementations
 * Handles image loading, fallback logic, and initials generation
 */
export const useAvatar = (props: AvatarProps): UseAvatarReturn => {
  const {
    src,
    name,
    showFallback = avatarDefaults.showFallback,
    getInitials = getDefaultInitials,
    ImgComponent = "img",
    imgProps = {},
    isFocusable = avatarDefaults.isFocusable,
    isDisabled = avatarDefaults.isDisabled,
    className = "",
    "data-testid": dataTestId,
    ...baseProps
  } = props;

  // Image loading state
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [hasImgError, setHasImgError] = useState(false);

  // Reset states when src changes
  useEffect(() => {
    if (!src) {
      setIsImgLoaded(false);
      setHasImgError(false);
      return;
    }

    setIsImgLoaded(false);
    setHasImgError(false);

    // Create image element to test loading
    const img = new Image();
    
    img.onload = () => {
      setIsImgLoaded(true);
      setHasImgError(false);
    };
    
    img.onerror = () => {
      setIsImgLoaded(false);
      setHasImgError(true);
    };
    
    img.src = src;

    // Cleanup
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  // Generate initials from name
  const initials = useMemo(() => {
    if (!name) return '';
    return getInitials(name);
  }, [name, getInitials]);

  // Determine if we should show fallback
  const shouldShowFallback = useMemo(() => {
    // Always show fallback if showFallback is true and no src or img failed
    if (showFallback && (!src || hasImgError)) {
      return true;
    }
    
    // Show fallback if there's a name but no src
    if (name && !src) {
      return true;
    }
    
    // Show fallback if image failed to load
    if (src && hasImgError) {
      return true;
    }
    
    return false;
  }, [showFallback, src, hasImgError, name]);

  // Generate background color for name-based avatars
  const nameBackgroundColor = useMemo(() => {
    if (!name || src) return undefined;
    return getNameBackgroundColor(name);
  }, [name, src]);

  // Image props with event handlers
  const finalImgProps = useMemo(() => ({
    ...imgProps,
    src,
    alt: name || 'Avatar',
    onLoad: useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
      setIsImgLoaded(true);
      setHasImgError(false);
      imgProps.onLoad?.(e);
    }, [imgProps]),
    onError: useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
      setIsImgLoaded(false);
      setHasImgError(true);
      imgProps.onError?.(e);
    }, [imgProps]),
  }), [imgProps, src, name]);

  // Base props for the avatar wrapper
  const finalBaseProps = useMemo(() => ({
    ...baseProps,
    className,
    'data-testid': dataTestId,
    'data-hover': undefined, // Will be handled by the component
    'data-focus': undefined, // Will be handled by the component
    'data-focus-visible': undefined, // Will be handled by the component
    tabIndex: isFocusable && !isDisabled ? 0 : undefined,
    role: isFocusable ? 'button' : 'img',
    'aria-label': name || 'Avatar',
    style: {
      ...baseProps.style,
      // Apply name-based background color if applicable
      ...(nameBackgroundColor && shouldShowFallback && name && !src ? {
        backgroundColor: nameBackgroundColor,
      } : {}),
    },
  }), [
    baseProps, 
    className, 
    dataTestId, 
    isFocusable, 
    isDisabled, 
    name, 
    nameBackgroundColor, 
    shouldShowFallback, 
    src
  ]);

  // Fallback props
  const fallbackProps = useMemo(() => ({
    'aria-hidden': true,
    style: {
      // Inherit background color from parent
      backgroundColor: 'inherit',
    },
  }), []);

  return {
    isImgLoaded,
    shouldShowFallback,
    initials,
    imgProps: finalImgProps,
    baseProps: finalBaseProps,
    fallbackProps,
  };
};