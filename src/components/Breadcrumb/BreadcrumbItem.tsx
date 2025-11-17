import React, { forwardRef, useCallback, useMemo } from 'react';
import { useBreadcrumbContext } from './Breadcrumb';
import { breadcrumb } from './variants';
//import { BreadcrumbSeparator } from './BreadcrumbSeparator';
import type { BreadcrumbItemProps } from './types';

// Hook personalizado para la lógica del BreadcrumbItem
export const useBreadcrumbItem = (props: BreadcrumbItemProps) => {
  const context = useBreadcrumbContext();
  
  const {
    children,
    href,
    isDisabled: isDisabledProp,
    isCurrent = false,
    startContent,
    endContent,
    className,
    itemClassName,
    linkClassName,
    size: sizeProp,
    color: colorProp,
    variant: variantProp,
    onPress,
    ...otherProps
  } = props;

  // Usar valores del contexto como fallback
  const size = sizeProp || context.size || 'md';
  const color = colorProp || context.color || 'default';
  const variant = variantProp || context.variant || 'flat';
  const isDisabled = isDisabledProp || context.isDisabled || false;

  // Generar clases usando tailwind-variants
  const slots = useMemo(() => 
    breadcrumb({
      size,
      color,
      variant,
      isDisabled,
    }), 
    [size, color, variant, isDisabled]
  );

  // Manejar click
  const handlePress = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDisabled || isCurrent) {
      event.preventDefault();
      return;
    }
    
    if (onPress) {
      onPress(event);
    }
  }, [isDisabled, isCurrent, onPress]);

  // Determinar si debe renderizarse como enlace
  const shouldRenderAsLink = !!(href && !isDisabled && !isCurrent);

  return {
    children,
    href,
    isDisabled,
    isCurrent,
    startContent,
    endContent,
    className,
    itemClassName,
    linkClassName,
    slots,
    handlePress,
    shouldRenderAsLink,
    otherProps,
  };
};

// Componente BreadcrumbItem
export const BreadcrumbItem = forwardRef<HTMLAnchorElement, BreadcrumbItemProps>((props, ref) => {
  const {
    children,
    href,
    isDisabled,
    isCurrent,
    startContent,
    endContent,
    linkClassName,
    slots,
    handlePress,
    shouldRenderAsLink,
    otherProps,
  } = useBreadcrumbItem(props);

  const linkContent = (
    <>
      {startContent}
      <span>{children}</span>
      {endContent}
    </>
  );

  const linkProps = {
    ref,
    className: slots.link({ className: linkClassName }),
    'data-current': isCurrent,
    'data-disabled': isDisabled,
    'aria-current': isCurrent ? ('page' as const) : undefined,
    'aria-disabled': isDisabled,
    tabIndex: isDisabled ? -1 : 0,
    onClick: handlePress,
    ...otherProps,
  };

  if (shouldRenderAsLink) {
    return (
      <>
        <a href={href} {...linkProps}>
          {linkContent}
        </a>
        {/* Separator will be handled by parent Breadcrumb component */}
      </>
    );
  }

  // Renderizar como span si no es un enlace
  return (
    <>
      <span {...linkProps} role="link">
        {linkContent}
      </span>
      {/* Separator will be handled by parent Breadcrumb component */}
    </>
  );
});

BreadcrumbItem.displayName = 'BreadcrumbItem';

export default BreadcrumbItem;