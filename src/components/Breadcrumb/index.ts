// Main Breadcrumb Components
export { Breadcrumb, useBreadcrumbContext, useBreadcrumb } from './Breadcrumb';
export { BreadcrumbItem, useBreadcrumbItem } from './BreadcrumbItem';
export { BreadcrumbSeparator, useBreadcrumbSeparator } from './BreadcrumbSeparator';

// Variants and styling utilities
export { 
  breadcrumb, 
  breadcrumbSeparator, 
  breadcrumbAnimations,
  getSeparatorIcon,
  breadcrumbPresets,
  applyPreset,
  type BreadcrumbPreset
} from './variants';

// TypeScript types
export type {
  // Core component props
  BreadcrumbProps,
  BreadcrumbItemProps,
  BreadcrumbSeparatorProps,
  
  // Basic types
  BreadcrumbSize,
  BreadcrumbColor,
  BreadcrumbVariant,
  SeparatorType,
  
  // Context and configuration
  BreadcrumbContextValue,
  BreadcrumbThemeConfig,
  BreadcrumbSlots,
  BreadcrumbClassNames,
  BreadcrumbAnimationProps,
  FullBreadcrumbProps,
  
  // Configuration interfaces
  BreadcrumbSizeConfig,
  BreadcrumbColorConfig,
  BreadcrumbVariantConfig,
  
  // Hook types
  UseBreadcrumbProps,
  UseBreadcrumbReturn,
} from './types';

// Default export for convenience
export { Breadcrumb as default } from './Breadcrumb';