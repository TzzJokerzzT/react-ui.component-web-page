import { useState, forwardRef } from "react";
import type { UserProps, AvatarProps } from "./types";
import {
  getUserBaseClasses,
  getUserWrapperClasses,
  getUserNameClasses,
  getUserDescriptionClasses,
  getAvatarBaseClasses,
  getAvatarImageClasses,
  getInitials,
} from "./helper";

/**
 * Avatar component for use within User
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(({
  src,
  alt,
  name = "",
  size = "md",
  className = "",
  isSquared = false,
  color = "default",
  isDisabled = false,
  fallback,
  ...props
}, ref) => {
  const [hasError, setHasError] = useState(false);

  const avatarClasses = getAvatarBaseClasses(size, color, isSquared, isDisabled);
  const combinedAvatarClasses = [avatarClasses, className]
    .filter(Boolean)
    .join(" ");

  const handleImageError = () => {
    setHasError(true);
  };

  const renderContent = () => {
    // If there's a custom fallback, use it
    if (fallback) {
      return fallback;
    }

    // If there's a src and no error, show image
    if (src && !hasError) {
      return (
        <img
          src={src}
          alt={alt || name}
          className={getAvatarImageClasses()}
          onError={handleImageError}
        />
      );
    }

    // Show initials if name is provided
    if (name) {
      return <span>{getInitials(name)}</span>;
    }

    // Default fallback icon
    return (
      <svg 
        className="w-full h-full p-1" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path 
          fillRule="evenodd" 
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
          clipRule="evenodd" 
        />
      </svg>
    );
  };

  return (
    <div 
      ref={ref}
      className={combinedAvatarClasses}
      {...props}
    >
      {renderContent()}
    </div>
  );
});

Avatar.displayName = "Avatar";

/**
 * User component - Display user information with avatar and name
 * 
 * Features:
 * - Avatar with image, initials, or fallback icon
 * - Name and description text
 * - Focusable interaction support
 * - Customizable styling through classNames
 * - Responsive design
 * 
 * @param props - User component properties
 * @returns JSX element representing a user display
 */
export const User = forwardRef<HTMLDivElement, UserProps>(({
  name,
  description,
  isFocusable = false,
  avatarProps = {},
  className = "",
  classNames,
  onClick,
  "data-testid": dataTestId,
  ...props
}, ref) => {
  // Get combined classes
  const baseClasses = getUserBaseClasses(isFocusable);
  const combinedBaseClasses = [baseClasses, classNames?.base, className]
    .filter(Boolean)
    .join(" ");

  const wrapperClasses = getUserWrapperClasses();
  const combinedWrapperClasses = [wrapperClasses, classNames?.wrapper]
    .filter(Boolean)
    .join(" ");

  const nameClasses = getUserNameClasses();
  const combinedNameClasses = [nameClasses, classNames?.name]
    .filter(Boolean)
    .join(" ");

  const descriptionClasses = getUserDescriptionClasses();
  const combinedDescriptionClasses = [descriptionClasses, classNames?.description]
    .filter(Boolean)
    .join(" ");

  // Handle click events
  const handleClick = () => {
    if (isFocusable && onClick) {
      onClick();
    }
  };

  // Handle keyboard events for accessibility
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (isFocusable && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      ref={ref}
      className={combinedBaseClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={isFocusable ? 0 : undefined}
      role={isFocusable ? "button" : undefined}
      data-testid={dataTestId}
      {...props}
    >
      {/* Avatar */}
      <Avatar 
        {...avatarProps}
        name={avatarProps.name || name}
        data-testid={dataTestId ? `${dataTestId}-avatar` : undefined}
      />
      
      {/* Text Content */}
      {(name || description) && (
        <div className={combinedWrapperClasses}>
          {name && (
            <span 
              className={combinedNameClasses}
              data-testid={dataTestId ? `${dataTestId}-name` : undefined}
            >
              {name}
            </span>
          )}
          {description && (
            <span 
              className={combinedDescriptionClasses}
              data-testid={dataTestId ? `${dataTestId}-description` : undefined}
            >
              {description}
            </span>
          )}
        </div>
      )}
    </div>
  );
});

User.displayName = "User";