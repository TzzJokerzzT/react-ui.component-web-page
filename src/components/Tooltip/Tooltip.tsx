import React, { useCallback, useRef, useState, useEffect, useId, isValidElement } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { 
  TooltipProps, 
  TooltipPlacement, 
  PositionResult
} from './types';
import { 
  tooltipVariants, 
  tooltipArrowVariants, 
  tooltipPortalVariants,
  tooltipTriggerVariants,
  getAnimationConfig,
  getArrowAnimationConfig,
  ANIMATION_DURATION,
  TOOLTIP_Z_INDEX
} from './variants';
import { useOptionalTooltipContext } from './TooltipProvider';

// Positioning utility functions
const calculatePosition = (
  referenceElement: Element,
  tooltipElement: HTMLElement,
  placement: TooltipPlacement,
  offset: { mainAxis: number; crossAxis: number } = { mainAxis: 8, crossAxis: 0 }
): PositionResult => {
  const referenceRect = referenceElement.getBoundingClientRect();
  const tooltipRect = tooltipElement.getBoundingClientRect();
  const viewport = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  let x = 0;
  let y = 0;

  // Calculate base position
  switch (placement.split('-')[0]) {
    case 'top':
      x = referenceRect.left + referenceRect.width / 2 - tooltipRect.width / 2;
      y = referenceRect.top - tooltipRect.height - offset.mainAxis;
      break;
    case 'bottom':
      x = referenceRect.left + referenceRect.width / 2 - tooltipRect.width / 2;
      y = referenceRect.bottom + offset.mainAxis;
      break;
    case 'left':
      x = referenceRect.left - tooltipRect.width - offset.mainAxis;
      y = referenceRect.top + referenceRect.height / 2 - tooltipRect.height / 2;
      break;
    case 'right':
      x = referenceRect.right + offset.mainAxis;
      y = referenceRect.top + referenceRect.height / 2 - tooltipRect.height / 2;
      break;
  }

  // Handle alignment modifiers (-start, -end)
  if (placement.includes('-start')) {
    if (placement.startsWith('top') || placement.startsWith('bottom')) {
      x = referenceRect.left + offset.crossAxis;
    } else {
      y = referenceRect.top + offset.crossAxis;
    }
  } else if (placement.includes('-end')) {
    if (placement.startsWith('top') || placement.startsWith('bottom')) {
      x = referenceRect.right - tooltipRect.width - offset.crossAxis;
    } else {
      y = referenceRect.bottom - tooltipRect.height - offset.crossAxis;
    }
  }

  // Handle viewport boundaries and flipping
  let finalPlacement = placement;
  
  // Check if tooltip goes outside viewport
  if (x < 8) {
    x = 8;
  } else if (x + tooltipRect.width > viewport.width - 8) {
    x = viewport.width - tooltipRect.width - 8;
  }

  if (y < 8) {
    // Flip to bottom if there's more space
    if (placement.startsWith('top') && referenceRect.bottom + tooltipRect.height + offset.mainAxis < viewport.height) {
      finalPlacement = placement.replace('top', 'bottom') as TooltipPlacement;
      y = referenceRect.bottom + offset.mainAxis;
    } else {
      y = 8;
    }
  } else if (y + tooltipRect.height > viewport.height - 8) {
    // Flip to top if there's more space
    if (placement.startsWith('bottom') && referenceRect.top - tooltipRect.height - offset.mainAxis > 0) {
      finalPlacement = placement.replace('bottom', 'top') as TooltipPlacement;
      y = referenceRect.top - tooltipRect.height - offset.mainAxis;
    } else {
      y = viewport.height - tooltipRect.height - 8;
    }
  }

  return { x, y, placement: finalPlacement };
};

// Hook for tooltip positioning and state management
const useTooltip = (props: TooltipProps) => {
  const {
    placement = 'top',
    trigger = 'hover',
    disabled = false,
    open: controlledOpen,
    defaultOpen = false,
    onOpenChange,
    delay,
    offset = { mainAxis: 8, crossAxis: 0 },
  } = props;

  // Get context values if available
  const context = useOptionalTooltipContext();
  
  // Use context defaults or prop defaults
  const effectiveDelay = {
    show: delay?.show ?? (trigger === 'hover' ? context?.delayDuration ?? 700 : 0),
    hide: delay?.hide ?? (trigger === 'hover' ? 150 : 0),
  };

  const normalizedOffset = {
    mainAxis: offset?.mainAxis ?? 8,
    crossAxis: offset?.crossAxis ?? 0,
  };

  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const [referenceElement, setReferenceElement] = useState<Element | null>(null);
  const [tooltipElement, setTooltipElement] = useState<HTMLElement | null>(null);
  const [position, setPosition] = useState<PositionResult>({ x: 0, y: 0, placement });
  
  const showTimeoutRef = useRef<number | undefined>(undefined);
  const hideTimeoutRef = useRef<number | undefined>(undefined);
  const id = useId();

  // Determine if tooltip is controlled or uncontrolled
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

  // Update position when elements or open state changes
  useEffect(() => {
    if (referenceElement && tooltipElement && isOpen) {
      const newPosition = calculatePosition(referenceElement, tooltipElement, placement, normalizedOffset);
      setPosition(newPosition);
    }
  }, [referenceElement, tooltipElement, isOpen, placement, normalizedOffset]);

  // Handle window resize and scroll
  useEffect(() => {
    if (!isOpen || !referenceElement || !tooltipElement) return;

    const updatePosition = () => {
      const newPosition = calculatePosition(referenceElement, tooltipElement, placement, normalizedOffset);
      setPosition(newPosition);
    };

    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [isOpen, referenceElement, tooltipElement, placement, offset]);

  // Open/close handlers
  const openTooltip = useCallback(() => {
    if (disabled) return;
    
    if (hideTimeoutRef.current) {
      window.clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = undefined;
    }

    const showDelay = effectiveDelay.show;
    
    if (showDelay > 0) {
      showTimeoutRef.current = window.setTimeout(() => {
        if (isControlled) {
          onOpenChange?.(true);
        } else {
          setUncontrolledOpen(true);
        }
      }, showDelay);
    } else {
      if (isControlled) {
        onOpenChange?.(true);
      } else {
        setUncontrolledOpen(true);
      }
    }
  }, [disabled, effectiveDelay.show, isControlled, onOpenChange]);

  const closeTooltip = useCallback(() => {
    if (showTimeoutRef.current) {
      window.clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = undefined;
    }

    const hideDelay = effectiveDelay.hide;
    
    if (hideDelay > 0) {
      hideTimeoutRef.current = window.setTimeout(() => {
        if (isControlled) {
          onOpenChange?.(false);
        } else {
          setUncontrolledOpen(false);
        }
      }, hideDelay);
    } else {
      if (isControlled) {
        onOpenChange?.(false);
      } else {
        setUncontrolledOpen(false);
      }
    }
  }, [effectiveDelay.hide, isControlled, onOpenChange]);

  const toggleTooltip = useCallback(() => {
    if (isOpen) {
      closeTooltip();
    } else {
      openTooltip();
    }
  }, [isOpen, openTooltip, closeTooltip]);

  // Cleanup timeouts
  useEffect(() => {
    return () => {
      if (showTimeoutRef.current) {
        window.clearTimeout(showTimeoutRef.current);
      }
      if (hideTimeoutRef.current) {
        window.clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  // Get trigger event handlers based on trigger type
  const getTriggerProps = useCallback(() => {
    const baseAttrs = {
      'aria-describedby': isOpen ? id : undefined,
    };

    if (disabled) {
      return baseAttrs;
    }

    switch (trigger) {
      case 'hover':
        return {
          ...baseAttrs,
          onMouseEnter: openTooltip,
          onMouseLeave: closeTooltip,
        };
      case 'click':
        return {
          ...baseAttrs,
          onClick: toggleTooltip,
        };
      case 'focus':
        return {
          ...baseAttrs,
          onFocus: openTooltip,
          onBlur: closeTooltip,
        };
      case 'manual':
        return baseAttrs;
      default:
        return baseAttrs;
    }
  }, [disabled, trigger, id, isOpen, openTooltip, closeTooltip, toggleTooltip]);

  return {
    isOpen,
    referenceElement,
    setReferenceElement,
    tooltipElement,
    setTooltipElement,
    position,
    id,
    getTriggerProps,
    openTooltip,
    closeTooltip,
    toggleTooltip,
  };
};

// Arrow component
const TooltipArrow: React.FC<{
  variant: TooltipProps['variant'];
  size: TooltipProps['size'];
  placement: TooltipPlacement;
  animation: TooltipProps['animation'];
  className?: string;
}> = ({ variant = 'dark', size = 'md', placement, animation = 'fade', className }) => {
  const arrowVariants = getArrowAnimationConfig(animation);
  
  return (
    <motion.div
      className={tooltipArrowVariants({ 
        placement, 
        variant, 
        size, 
        className 
      })}
      initial={arrowVariants.initial}
      animate={arrowVariants.animate}
      exit={arrowVariants.exit}
      transition={arrowVariants.transition}
    />
  );
};

// Tooltip content component
const TooltipContent: React.FC<{
  content: React.ReactNode;
  variant?: TooltipProps['variant'];
  size?: TooltipProps['size'];
  animation?: TooltipProps['animation'];
  arrow?: TooltipProps['arrow'];
  className?: string;
  style?: React.CSSProperties;
  id: string;
  isOpen: boolean;
  position: PositionResult;
  onRef: (element: HTMLDivElement | null) => void;
}> = ({
  content,
  variant = 'dark',
  size = 'md',
  animation = 'fade',
  arrow = { enabled: true },
  className,
  style,
  id,
  isOpen,
  position,
  onRef,
}) => {
  const getMotionVariants = () => {
    return getAnimationConfig(animation, position.placement);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={onRef}
          id={id}
          role="tooltip"
          className={tooltipVariants({ size, variant, className })}
          style={{ 
            position: 'fixed',
            left: position.x,
            top: position.y,
            ...style 
          }}
          initial={getMotionVariants().initial}
          animate={getMotionVariants().animate}
          exit={getMotionVariants().exit}
          transition={{ 
            duration: ANIMATION_DURATION.enter,
            ease: 'easeOut' 
          }}
        >
          {content}
          {arrow?.enabled && (
            <TooltipArrow
              variant={variant}
              size={size}
              placement={position.placement}
              animation={animation}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Main Tooltip component
export const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    children,
    content,
    disabled = false,
    portal = true,
    portalContainer,
    asChild = false,
    className,
    style,
    variant = 'dark',
    size = 'md',
    animation = 'fade',
    arrow = { enabled: true },
    zIndex = TOOLTIP_Z_INDEX,
    'aria-label': ariaLabel,
  } = props;

  const {
    isOpen,
    setReferenceElement,
    setTooltipElement,
    position,
    id,
    getTriggerProps,
  } = useTooltip(props);

  // Handle trigger element rendering
  const renderTrigger = () => {
    const triggerProps = getTriggerProps();
    
    if (asChild && isValidElement(children)) {
      const childProps = children.props as any;
      const newProps = {
        ...childProps,
        ...triggerProps,
        ref: (element: Element | null) => {
          setReferenceElement(element);
          // Handle existing ref if present
          if (typeof childProps.ref === 'function') {
            childProps.ref(element);
          } else if (childProps.ref?.current !== undefined) {
            childProps.ref.current = element;
          }
        },
        className: tooltipTriggerVariants({ 
          active: isOpen, 
          disabled,
          className: childProps.className 
        }),
      };
      
      return React.createElement(children.type, newProps);
    }

    return (
      <span
        ref={setReferenceElement}
        className={tooltipTriggerVariants({ active: isOpen, disabled, className })}
        style={style}
        aria-label={ariaLabel}
        {...triggerProps}
      >
        {children}
      </span>
    );
  };

  // Handle tooltip content rendering
  const renderTooltip = () => {
    const tooltipContent = (
      <div 
        className={tooltipPortalVariants({ visible: isOpen })}
        style={{ zIndex }}
      >
        <TooltipContent
          content={content}
          variant={variant}
          size={size}
          animation={animation}
          arrow={arrow}
          id={id}
          isOpen={isOpen}
          position={position}
          onRef={setTooltipElement}
        />
      </div>
    );

    // Render in portal or inline
    if (portal) {
      const container = portalContainer || document.body;
      return createPortal(tooltipContent, container);
    }

    return tooltipContent;
  };

  return (
    <>
      {renderTrigger()}
      {renderTooltip()}
    </>
  );
};

// Export default
export default Tooltip;