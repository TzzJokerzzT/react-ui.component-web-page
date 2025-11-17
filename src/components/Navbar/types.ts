import { ReactNode } from 'react';

export type NavbarPosition = 'static' | 'sticky';
export type NavbarMaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
export type NavbarJustify = 'start' | 'center' | 'end';

export interface NavbarSlots {
  base?: string;
  wrapper?: string;
  brand?: string;
  content?: string;
  item?: string;
  toggle?: string;
  toggleIcon?: string;
  menu?: string;
  menuItem?: string;
}

export interface NavbarProps {
  children?: ReactNode;
  height?: string | number;
  position?: NavbarPosition;
  maxWidth?: NavbarMaxWidth;
  parentRef?: React.RefObject<HTMLElement>;
  isBordered?: boolean;
  isBlurred?: boolean;
  isMenuOpen?: boolean;
  isMenuDefaultOpen?: boolean;
  shouldHideOnScroll?: boolean;
  disableScrollHandler?: boolean;
  disableAnimation?: boolean;
  classNames?: Partial<NavbarSlots>;
  className?: string;
  onMenuOpenChange?: (isOpen: boolean) => void;
  onScrollPositionChange?: (position: number) => void;
}

export interface NavbarContentProps {
  children?: ReactNode;
  justify?: NavbarJustify;
  className?: string;
}

export interface NavbarItemProps {
  children?: ReactNode;
  isActive?: boolean;
  className?: string;
}

export interface NavbarBrandProps {
  children?: ReactNode;
  className?: string;
}

export interface NavbarMenuToggleProps {
  icon?: ReactNode | ((isOpen: boolean | undefined) => ReactNode);
  isSelected?: boolean;
  defaultSelected?: boolean;
  srOnlyText?: string;
  className?: string;
  onChange?: (isOpen: boolean) => void;
}

export interface NavbarMenuProps {
  children?: ReactNode;
  portalContainer?: HTMLElement;
  className?: string;
}

export interface NavbarMenuItemProps {
  children?: ReactNode;
  isActive?: boolean;
  className?: string;
}

// Context types
export interface NavbarContextType {
  isMenuOpen: boolean;
  position: NavbarPosition;
  maxWidth: NavbarMaxWidth;
  height: string | number;
  isBordered: boolean;
  isBlurred: boolean;
  shouldHideOnScroll: boolean;
  disableAnimation: boolean;
  classNames?: Partial<NavbarSlots>;
  onMenuOpenChange: (isOpen: boolean) => void;
  onScrollPositionChange?: (position: number) => void;
}