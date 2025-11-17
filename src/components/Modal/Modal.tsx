import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  forwardRef,
} from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { modal } from './variants';
import type {
  ModalProps,
  ModalContentProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
  ModalContextType,
} from './types';

// Context for sharing state between modal components
const ModalContext = createContext<ModalContextType | null>(null);

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Modal components must be used within a Modal');
  }
  return context;
};

// Close button icon
const CloseIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="1em"
  >
    <path d="m18 6-12 12M6 6l12 12"></path>
  </svg>
);

// Hook for body scroll lock
const useBodyScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (!isLocked) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]);
};

// Hook for focus management
const useFocusManagement = (isOpen: boolean, modalRef: React.RefObject<HTMLDivElement | null>) => {
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Store the currently focused element
      previousActiveElement.current = document.activeElement as HTMLElement;
      
      // Focus the modal after a brief delay to ensure it's rendered
      setTimeout(() => {
        if (modalRef.current) {
          const focusableElements = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length > 0) {
            (focusableElements[0] as HTMLElement).focus();
          } else {
            modalRef.current.focus();
          }
        }
      }, 100);
    } else {
      // Restore focus to the previously focused element
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    }
  }, [isOpen, modalRef]);
};

  // Draggable functionality
  const useDraggable = (
    isDraggable: boolean,
    allowOverflow: boolean,
    isOpen: boolean
  ) => {
    const [isDragging, setIsDragging] = useState(false);
    const constraintsRef = useRef<HTMLDivElement>(null);

    // Reset dragging state when modal opens/closes
    useEffect(() => {
      if (!isOpen) {
        setIsDragging(false);
      }
    }, [isOpen]);

    const dragProps = isDraggable
      ? {
          drag: true as const,
          dragMomentum: false,
          dragElastic: 0.1,
          dragConstraints: allowOverflow 
            ? false as const
            : constraintsRef,
          onDragStart: () => setIsDragging(true),
          onDragEnd: () => setIsDragging(false),
          whileDrag: { 
            scale: 1.02,
            transition: { duration: 0.1 } 
          },
        }
      : {};

    return { dragProps, isDragging, constraintsRef };
  };

// Main Modal component
export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      size = 'md',
      radius = 'lg',
      shadow = 'lg',
      backdrop = 'opaque',
      scrollBehavior = 'normal',
      placement = 'auto',
      isOpen: controlledIsOpen,
      defaultOpen = false,
      isDismissable = true,
      isKeyboardDismissDisabled = false,
      shouldBlockScroll = true,
      hideCloseButton = false,
      closeButton,
      motionProps,
      portalContainer = document.body,
      disableAnimation = false,
      isDraggable = false,
      allowOverflow = false,
      classNames,
      className,
      onOpenChange,
      onClose,
      ...props
    },
    ref
  ) => {
    const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);
    const modalRef = useRef<HTMLDivElement>(null);
    
    const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

    const handleOpenChange = (open: boolean) => {
      if (controlledIsOpen === undefined) {
        setInternalIsOpen(open);
      }
      onOpenChange?.(open);
      if (!open) {
        onClose?.();
      }
    };

    const handleClose = () => {
      handleOpenChange(false);
    };

    // Handle escape key
    useEffect(() => {
      if (!isOpen || isKeyboardDismissDisabled) return;

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          handleClose();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, isKeyboardDismissDisabled]);

    // Handle backdrop click
    const handleBackdropClick = (event: React.MouseEvent) => {
      if (!isDismissable) return;
      // Only close if clicking directly on the backdrop (not on modal content)
      if (event.target === event.currentTarget) {
        handleClose();
      }
    };

    // Hooks
    useBodyScrollLock(isOpen && shouldBlockScroll);
    useFocusManagement(isOpen, modalRef);
    const { dragProps, isDragging, constraintsRef } = useDraggable(isDraggable, allowOverflow, isOpen);

    const {
      wrapper,
      base,
      backdrop: backdropClass,
    } = modal({
      size,
      radius,
      shadow,
      backdrop,
      scrollBehavior,
      placement,
      disableAnimation,
      isDraggable,
    });

    const contextValue: ModalContextType = {
      isOpen,
      size,
      radius,
      shadow,
      backdrop,
      scrollBehavior,
      placement,
      isDismissable,
      isKeyboardDismissDisabled,
      shouldBlockScroll,
      hideCloseButton,
      disableAnimation,
      isDraggable,
      allowOverflow,
      classNames,
      onClose: handleClose,
      onOpenChange: handleOpenChange,
    };

    // Default motion props with smooth animations
    const defaultMotionProps = {
      initial: { opacity: 0, scale: 0.9, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.9, y: 20 },
      transition: {
        duration: disableAnimation ? 0 : 0.3,
        ease: 'easeOut' as const,
      },
    };

    const modalContent = (
      <AnimatePresence>
        {isOpen && (
          <ModalContext.Provider value={contextValue}>
            {/* Backdrop with drag constraints wrapper */}
            <motion.div
              ref={constraintsRef}
              className={backdropClass({ className: classNames?.backdrop })}
              onClick={handleBackdropClick}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: disableAnimation ? 0 : 0.2,
                ease: 'easeOut',
              }}
            >
              {/* Modal Container */}
              <div 
                className={wrapper({ className: classNames?.wrapper })}
                onClick={(e) => e.stopPropagation()} // Prevent backdrop click when clicking modal area
              >
                <motion.div
                  ref={ref || modalRef}
                  className={base({ className: classNames?.base || className })}
                  data-open={isOpen}
                  data-dismissable={isDismissable}
                  role="dialog"
                  aria-modal="true"
                  tabIndex={-1}
                  {...(motionProps || defaultMotionProps)}
                  {...dragProps}
                  style={{
                    cursor: isDragging ? 'grabbing' : isDraggable ? 'grab' : 'default',
                  }}
                  {...props}
                >
                  {/* Close button - always functional regardless of isDismissable */}
                  {!hideCloseButton && (
                    <button
                      type="button"
                      className={modal().closeButton({ className: classNames?.closeButton })}
                      onClick={handleClose}
                      aria-label="Close modal"
                    >
                      {closeButton || <CloseIcon />}
                    </button>
                  )}
                  {children}
                </motion.div>
              </div>
            </motion.div>
          </ModalContext.Provider>
        )}
      </AnimatePresence>
    );

    return createPortal(modalContent, portalContainer);
  }
);

Modal.displayName = 'Modal';

// ModalContent component
export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    );
  }
);

ModalContent.displayName = 'ModalContent';

// ModalHeader component
export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, className, ...props }, ref) => {
    const { classNames, isDraggable } = useModalContext();
    const { header } = modal();

    return (
      <div
        ref={ref}
        className={header({ 
          className: classNames?.header || className,
        })}
        data-framer-drag-handle={isDraggable ? "" : undefined}
        style={{
          cursor: isDraggable ? 'move' : 'default',
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ModalHeader.displayName = 'ModalHeader';

// ModalBody component
export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ children, className, ...props }, ref) => {
    const { classNames } = useModalContext();
    const { body } = modal();

    return (
      <div
        ref={ref}
        className={body({ className: classNames?.body || className })}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ModalBody.displayName = 'ModalBody';

// ModalFooter component
export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, className, ...props }, ref) => {
    const { classNames } = useModalContext();
    const { footer } = modal();

    return (
      <div
        ref={ref}
        className={footer({ className: classNames?.footer || className })}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ModalFooter.displayName = 'ModalFooter';