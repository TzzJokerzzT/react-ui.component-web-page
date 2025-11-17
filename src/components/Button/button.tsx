import React, { useState } from "react";
import { motion } from "framer-motion";
import type {
  ButtonContentProps,
  ButtonGroupProps,
  ButtonIconProps,
  ButtonProps,
  ButtonTextProps,
} from "./types";
import {
  getButtonDisabled,
  getButtonFullWidth,
  getButtonGroupSpacing,
  getButtonInteractive,
  getButtonLoading,
  getButtonRadius,
  getButtonSize,
  getButtonVariant,
} from "./helper";
import { 
  hoverAnimations, 
  clickAnimations, 
  baseAnimation,
  createGlowAnimation
} from "./animations";

/**
 * Enhanced Button component with Framer Motion animations
 * Supports multiple variants, colors, sizes, and interactive states
 * @param props - Button component properties
 * @returns JSX element representing a styled button
 */
export const Button = ({
  children,
  className = "",
  ariaLabel,
  color = "primary",
  disabled = false,
  isLoading = false,
  onClick,
  type = "button",
  size = "md",
  variant = "solid",
  radius = "md",
  startIcon,
  endIcon,
  fullWidth = false,
  disableAnimation = false,
  hoverAnimation = "scale",
  clickAnimation = "scale",
  "data-testid": dataTestId,
}: ButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const baseClasses =
    "inline-flex items-center justify-center font-medium border";
  const sizeClasses = getButtonSize[size];
  const radiusClasses = getButtonRadius[radius];
  const variantClasses = getButtonVariant(color, variant);
  const loadingClasses = getButtonLoading(isLoading);
  const disabledClasses = getButtonDisabled(disabled);
  const fullWidthClasses = getButtonFullWidth(fullWidth);
  const interactiveClasses = getButtonInteractive(
    disabled,
    isLoading,
    disableAnimation,
    color
  );

  const combinedClasses = [
    baseClasses,
    sizeClasses,
    radiusClasses,
    variantClasses,
    loadingClasses,
    disabledClasses,
    fullWidthClasses,
    interactiveClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Get animation variants
  const hoverVariant = disableAnimation ? {} : (
    hoverAnimation === "glow" 
      ? createGlowAnimation(color)
      : hoverAnimations[hoverAnimation]
  );
  
  const clickVariant = disableAnimation ? {} : clickAnimations[clickAnimation];

  const handleClick = () => {
    if (disabled || isLoading) return;
    
    // Trigger click animation
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
    
    onClick?.();
  };

  return (
    <motion.button
      aria-label={ariaLabel}
      disabled={disabled || isLoading}
      className={combinedClasses}
      onClick={handleClick}
      type={type}
      data-testid={dataTestId}
      {...baseAnimation}
      whileHover={disabled || isLoading ? {} : hoverVariant}
      animate={isClicked ? clickVariant : {}}
    >
      {startIcon && <ButtonIcon position="start">{startIcon}</ButtonIcon>}
      <ButtonContent>{children}</ButtonContent>
      {endIcon && <ButtonIcon position="end">{endIcon}</ButtonIcon>}
      {isLoading && (
        <motion.div 
          className="ml-2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="rounded-full h-4 w-4 border-b-2 border-current"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}
    </motion.button>
  );
};

/**
 * ButtonGroup component for grouping multiple buttons
 * @param props - ButtonGroup component properties
 * @returns JSX element representing a group of buttons
 */
export const ButtonGroup = ({
  children,
  className = "",
  size = "md",
  color = "primary",
  variant = "solid",
  radius = "md",
  isAttached = false,
  disabled = false,
  disableAnimation = false,
  "data-testid": dataTestId,
}: ButtonGroupProps) => {
  const spacingClasses = getButtonGroupSpacing(isAttached);

  const combinedClasses = [spacingClasses, className].filter(Boolean).join(" ");

  // Clone children to pass down props
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement<ButtonProps>(child) && child.type === Button) {
      return React.cloneElement(child, {
        size: child.props.size || size,
        color: child.props.color || color,
        variant: child.props.variant || variant,
        radius: child.props.radius || radius,
        disabled: child.props.disabled || disabled,
        disableAnimation: child.props.disableAnimation ?? disableAnimation,
      } as Partial<ButtonProps>);
    }
    return child;
  });

  return (
    <div className={combinedClasses} data-testid={dataTestId}>
      {enhancedChildren}
    </div>
  );
};

/**
 * ButtonContent component for button text content
 * @param props - ButtonContent component properties
 * @returns JSX element representing button content
 */
export const ButtonContent = ({
  children,
  className = "",
  "data-testid": dataTestId,
}: ButtonContentProps) => {
  return (
    <span className={`${className}`} data-testid={dataTestId}>
      {children}
    </span>
  );
};

/**
 * ButtonIcon component for button icons
 * @param props - ButtonIcon component properties
 * @returns JSX element representing button icon
 */
export const ButtonIcon = ({
  children,
  className = "",
  position = "start",
  "data-testid": dataTestId,
}: ButtonIconProps) => {
  const positionClasses = position === "start" ? "mr-2" : "ml-2";

  return (
    <span
      className={`inline-flex items-center ${positionClasses} ${className}`}
      data-testid={dataTestId}
    >
      {children}
    </span>
  );
};

/**
 * ButtonText component for button text
 * @param props - ButtonText component properties
 * @returns JSX element representing button text
 */
export const ButtonText = ({
  children,
  className = "",
  "data-testid": dataTestId,
}: ButtonTextProps) => {
  return (
    <span className={`${className}`} data-testid={dataTestId}>
      {children}
    </span>
  );
};
