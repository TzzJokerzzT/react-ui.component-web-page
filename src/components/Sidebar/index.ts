// Main components
export { Sidebar } from './Sidebar';
export { SidebarProvider, useSidebar } from './SidebarContext';

// Sub-components
export { SidebarHeader } from './SidebarHeader';
export { SidebarContent } from './SidebarContent';
export { SidebarFooter } from './SidebarFooter';
export { SidebarItem } from './SidebarItem';
export { SidebarTrigger } from './SidebarTrigger';

// Types
export type {
  SidebarProps,
  SidebarContextType,
  SidebarProviderProps,
  SidebarHeaderProps,
  SidebarContentProps,
  SidebarFooterProps,
  SidebarItemProps,
  SidebarTriggerProps,
  SidebarVariant,
  SidebarPosition,
} from './types';