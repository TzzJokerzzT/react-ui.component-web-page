import React, { ReactNode, HTMLAttributes, AnchorHTMLAttributes } from 'react';

// Tamaños del breadcrumb
export type BreadcrumbSize = 'sm' | 'md' | 'lg';

// Variantes de color del breadcrumb
export type BreadcrumbColor = 
  | 'default' 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'warning' 
  | 'danger';

// Variantes de estilo del breadcrumb
export type BreadcrumbVariant = 'solid' | 'bordered' | 'light' | 'flat';

// Tipos de separador
export type SeparatorType = 'slash' | 'chevron' | 'arrow' | 'dot' | 'custom';

// Props para el elemento separador
export interface BreadcrumbSeparatorProps {
  type?: SeparatorType;
  customIcon?: ReactNode;
  className?: string;
  size?: BreadcrumbSize;
  color?: BreadcrumbColor;
}

// Props para cada item del breadcrumb
export interface BreadcrumbItemProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  children: ReactNode;
  href?: string;
  isDisabled?: boolean;
  isCurrent?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  className?: string;
  itemClassName?: string;
  linkClassName?: string;
  size?: BreadcrumbSize;
  color?: BreadcrumbColor;
  variant?: BreadcrumbVariant;
  onPress?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

// Props principales del componente Breadcrumb
export interface BreadcrumbProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
  children: ReactNode;
  size?: BreadcrumbSize;
  color?: BreadcrumbColor;
  variant?: BreadcrumbVariant;
  separator?: SeparatorType | ReactNode;
  separatorClassName?: string;
  itemsClassName?: string;
  hideSeparator?: boolean;
  maxItems?: number;
  showRoot?: boolean;
  isDisabled?: boolean;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  renderEllipsis?: (hiddenItems: number) => ReactNode;
  className?: string;
  listProps?: HTMLAttributes<HTMLOListElement>;
}

// Configuración de tema para el breadcrumb
export interface BreadcrumbThemeConfig {
  base?: string;
  list?: string;
  item?: string;
  link?: string;
  separator?: string;
  ellipsis?: string;
}

// Slots del breadcrumb para personalización avanzada
export interface BreadcrumbSlots {
  base?: string;
  list?: string;
  item?: string;
  link?: string;
  separator?: string;
  ellipsis?: string;
}

// Props para el contexto del breadcrumb
export interface BreadcrumbContextValue {
  size?: BreadcrumbSize;
  color?: BreadcrumbColor;
  variant?: BreadcrumbVariant;
  separator?: SeparatorType | ReactNode;
  separatorClassName?: string;
  isDisabled?: boolean;
}

// Tipos para la configuración de variantes de clase
export interface BreadcrumbClassNames {
  base?: string;
  list?: string;
  item?: string;
  link?: string;
  separator?: string;
  ellipsis?: string;
}

// Configuración de estilos por tamaño
export interface BreadcrumbSizeConfig {
  sm: {
    base: string;
    item: string;
    link: string;
    separator: string;
  };
  md: {
    base: string;
    item: string;
    link: string;
    separator: string;
  };
  lg: {
    base: string;
    item: string;
    link: string;
    separator: string;
  };
}

// Configuración de estilos por color
export interface BreadcrumbColorConfig {
  default: string;
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  danger: string;
}

// Configuración de estilos por variante
export interface BreadcrumbVariantConfig {
  solid: string;
  bordered: string;
  light: string;
  flat: string;
}

// Props para el hook de breadcrumb
export interface UseBreadcrumbProps {
  items?: Array<{
    label: ReactNode;
    href?: string;
    isDisabled?: boolean;
    isCurrent?: boolean;
    startContent?: ReactNode;
    endContent?: ReactNode;
  }>;
  maxItems?: number;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  separator?: SeparatorType | ReactNode;
}

// Valor de retorno del hook de breadcrumb
export interface UseBreadcrumbReturn {
  visibleItems: Array<{
    label: ReactNode;
    href?: string;
    isDisabled?: boolean;
    isCurrent?: boolean;
    startContent?: ReactNode;
    endContent?: ReactNode;
    key: string | number;
  }>;
  hasEllipsis: boolean;
  hiddenItemsCount: number;
  isCollapsed: boolean;
}

// Props para animaciones del breadcrumb
export interface BreadcrumbAnimationProps {
  enableAnimation?: boolean;
  animationType?: 'fade' | 'slide' | 'scale';
  animationDuration?: number;
  staggerDelay?: number;
}

// Configuración completa del breadcrumb con todas las opciones
export interface FullBreadcrumbProps extends 
  BreadcrumbProps, 
  BreadcrumbAnimationProps {
  slots?: BreadcrumbSlots;
  classNames?: BreadcrumbClassNames;
  theme?: BreadcrumbThemeConfig;
}

export default BreadcrumbProps;