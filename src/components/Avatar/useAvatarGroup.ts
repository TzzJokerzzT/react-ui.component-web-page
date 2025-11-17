import { useMemo, Children } from 'react';
import type { 
  AvatarGroupProps, 
  UseAvatarGroupReturn, 
  AvatarGroupContextValue 
} from './types';
import { avatarGroupDefaults } from './variants';

/**
 * useAvatarGroup hook for custom AvatarGroup implementations
 * Handles child counting, context creation, and overflow logic
 */
export const useAvatarGroup = (props: AvatarGroupProps): UseAvatarGroupReturn => {
  const {
    max = avatarGroupDefaults.max,
    total,
    size,
    color,
    radius,
    isGrid = avatarGroupDefaults.isGrid,
    isDisabled = avatarGroupDefaults.isDisabled,
    isBordered = avatarGroupDefaults.isBordered,
    renderCount,
    children,
    className = "",
    "data-testid": dataTestId,
    ...baseProps
  } = props;

  // Count children
  const childrenCount = useMemo(() => {
    return Children.count(children);
  }, [children]);

  // Calculate remaining count
  const remainingCount = useMemo(() => {
    // If total is provided, use it for calculation
    if (typeof total === 'number') {
      return Math.max(0, total - max);
    }
    
    // Otherwise, use actual children count
    return Math.max(0, childrenCount - max);
  }, [total, max, childrenCount]);

  // Determine if we should show count indicator
  const shouldShowCount = useMemo(() => {
    // Show count if total is provided and exceeds max
    if (typeof total === 'number') {
      return total > max;
    }
    
    // Show count if children exceed max
    return childrenCount > max;
  }, [total, max, childrenCount]);

  // Create context value for child avatars
  const context: AvatarGroupContextValue = useMemo(() => ({
    size,
    color,
    radius,
    isDisabled,
    isBordered,
    max,
    total,
    isGrid,
    renderCount,
  }), [size, color, radius, isDisabled, isBordered, max, total, isGrid, renderCount]);

  // Base props for the wrapper
  const finalBaseProps = useMemo(() => ({
    ...baseProps,
    className,
    'data-testid': dataTestId,
    role: 'group',
    'aria-label': `Avatar group${total ? ` of ${total} users` : ''}`,
  }), [baseProps, className, dataTestId, total]);

  // Count props for the count indicator
  const countProps = useMemo(() => ({
    'aria-label': `${remainingCount} more users`,
    role: 'img',
  }), [remainingCount]);

  return {
    context,
    remainingCount,
    shouldShowCount,
    baseProps: finalBaseProps,
    countProps,
  };
};