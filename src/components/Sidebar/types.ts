import { ReactNode } from 'react';

export interface SidebarContextType {
  isOpen: boolean;
  isMobile: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

export interface SidebarProviderProps {
  children: ReactNode;
}

export interface SidebarProps {
  children?: ReactNode;
  className?: string;
  width?: number | string;
  position?: 'left' | 'right';
  variant?: 'permanent' | 'temporary' | 'persistent';
  backdrop?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
}

export interface SidebarHeaderProps {
  children: ReactNode;
  className?: string;
  showCloseButton?: boolean;
  onClose?: () => void;
}

export interface SidebarContentProps {
  children: ReactNode;
  className?: string;
}

export interface SidebarFooterProps {
  children: ReactNode;
  className?: string;
}

export interface SidebarItemProps {
  children: ReactNode;
  icon?: ReactNode;
  isActive?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export interface SidebarTriggerProps {
  children?: ReactNode;
  className?: string;
  'aria-label'?: string;
}

export type SidebarVariant = 'permanent' | 'temporary' | 'persistent';
export type SidebarPosition = 'left' | 'right';