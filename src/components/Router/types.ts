export interface Route {
  path: string;
  element: React.ComponentType;
  label: string;
  icon?: React.ReactNode;
  category?: string;
  exact?: boolean;
}

export interface RouteGroup {
  label: string;
  routes: Route[];
}

export interface RouterContextType {
  routes: Route[];
  currentPath: string;
  navigate: (path: string) => void;
  goBack: () => void;
  goForward: () => void;
  addRoute: (route: Route) => void;
  removeRoute: (path: string) => void;
  getRoutesByCategory: (category: string) => Route[];
}

export interface LibraryRouterProps {
  children: React.ReactNode;
  basePath?: string;
  routes?: Route[];
  onRouteChange?: (path: string) => void;
}

export interface LibraryLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
  replace?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export interface NavigationProps {
  routes: RouteGroup[];
  className?: string;
  renderItem?: (route: Route, isActive: boolean) => React.ReactNode;
}

export type NavigationMode = 'push' | 'replace';
export type RouterEventType = 'navigate' | 'back' | 'forward';