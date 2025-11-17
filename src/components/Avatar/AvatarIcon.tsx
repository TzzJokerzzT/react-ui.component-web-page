import React from 'react';
import type { AvatarIconProps } from './types';
import { avatarIconVariants } from './variants';

/**
 * Default Avatar Icon component
 * Used as fallback when no image or name is provided
 */
export const AvatarIcon: React.FC<AvatarIconProps> = ({
  size = 24,
  className = "",
  ...props
}) => {
  const iconClasses = avatarIconVariants({ className });

  return (
    <svg
      className={iconClasses}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* User icon path - standard user silhouette */}
      <path
        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        fill="currentColor"
      />
    </svg>
  );
};

AvatarIcon.displayName = 'AvatarIcon';