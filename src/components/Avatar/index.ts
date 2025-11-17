/**
 * Avatar component exports
 * Complete avatar system with groups, fallbacks, and animations
 */

// Main components
export { Avatar } from './Avatar';
export { AvatarGroup, AvatarGroupProvider, useAvatarGroupContext } from './AvatarGroup';
export { AvatarIcon } from './AvatarIcon';

// Hooks
export { useAvatar } from './useAvatar';
export { useAvatarGroup } from './useAvatarGroup';

// Types
export type {
  AvatarProps,
  AvatarGroupProps,
  AvatarGroupContextValue,
  UseAvatarReturn,
  UseAvatarGroupReturn,
  AvatarSize,
  AvatarColor,
  AvatarRadius,
  AvatarSlots,
  AvatarGroupSlots,
  AvatarIconProps,
  GetInitialsFunction,
} from './types';

// Variants and utilities
export {
  avatarVariants,
  avatarGroupVariants,
  avatarGroupCountVariants,
  avatarIconVariants,
  avatarDefaults,
  avatarGroupDefaults,
  getAvatarClasses,
  getAvatarGroupClasses,
  getAvatarGroupCountClasses,
  getDefaultInitials,
  getNameBackgroundColor,
} from './variants';

// Variant prop types
export type {
  AvatarVariantProps,
  AvatarGroupVariantProps,
  AvatarGroupCountVariantProps,
} from './variants';