import { ReactNode } from 'react';
import type { MotionProps } from 'framer-motion';

export type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full';
export type ModalRadius = 'none' | 'sm' | 'md' | 'lg';
export type ModalShadow = 'none' | 'sm' | 'md' | 'lg';
export type ModalBackdrop = 'transparent' | 'opaque' | 'blur';
export type ModalScrollBehavior = 'normal' | 'inside' | 'outside';
export type ModalPlacement = 'auto' | 'top' | 'top-center' | 'center' | 'bottom' | 'bottom-center';

export interface ModalSlots {
  wrapper?: string;
  base?: string;
  backdrop?: string;
  header?: string;
  body?: string;
  footer?: string;
  closeButton?: string;
}

export interface ModalProps {
  children?: ReactNode;
  size?: ModalSize;
  radius?: ModalRadius;
  shadow?: ModalShadow;
  backdrop?: ModalBackdrop;
  scrollBehavior?: ModalScrollBehavior;
  placement?: ModalPlacement;
  isOpen?: boolean;
  defaultOpen?: boolean;
  isDismissable?: boolean;
  isKeyboardDismissDisabled?: boolean;
  shouldBlockScroll?: boolean;
  hideCloseButton?: boolean;
  closeButton?: ReactNode;
  motionProps?: MotionProps;
  portalContainer?: HTMLElement;
  disableAnimation?: boolean;
  classNames?: Partial<ModalSlots>;
  className?: string;
  onOpenChange?: (isOpen: boolean) => void;
  onClose?: () => void;
  // Draggable props
  isDraggable?: boolean;
  allowOverflow?: boolean;
}

export interface ModalContentProps {
  children?: ReactNode;
  className?: string;
}

export interface ModalHeaderProps {
  children?: ReactNode;
  className?: string;
}

export interface ModalBodyProps {
  children?: ReactNode;
  className?: string;
}

export interface ModalFooterProps {
  children?: ReactNode;
  className?: string;
}

export interface UseModalProps {
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  onClose?: () => void;
}

export interface UseModalReturn {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onOpenChange: (isOpen: boolean) => void;
}

// Context types
export interface ModalContextType {
  isOpen: boolean;
  size: ModalSize;
  radius: ModalRadius;
  shadow: ModalShadow;
  backdrop: ModalBackdrop;
  scrollBehavior: ModalScrollBehavior;
  placement: ModalPlacement;
  isDismissable: boolean;
  isKeyboardDismissDisabled: boolean;
  shouldBlockScroll: boolean;
  hideCloseButton: boolean;
  disableAnimation: boolean;
  isDraggable: boolean;
  allowOverflow: boolean;
  classNames?: Partial<ModalSlots>;
  onClose: () => void;
  onOpenChange: (isOpen: boolean) => void;
}