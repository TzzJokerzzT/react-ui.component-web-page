import React, { createContext, useContext, useCallback, useMemo, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Route, RouterContextType } from './types';

const RouterContext = createContext<RouterContextType | null>(null);

export const useLibraryRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useLibraryRouter must be used within a LibraryRouterProvider');
  }
  return context;
};

interface LibraryRouterProviderProps {
  children: React.ReactNode;
  initialRoutes?: Route[];
  onRouteChange?: (path: string) => void;
}

export const LibraryRouterProvider: React.FC<LibraryRouterProviderProps> = ({
  children,
  initialRoutes = [],
  onRouteChange,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [routes, setRoutes] = useState<Route[]>(initialRoutes);

  const currentPath = location.pathname;

  // Notify route changes
  useEffect(() => {
    onRouteChange?.(currentPath);
  }, [currentPath, onRouteChange]);

  const handleNavigate = useCallback((path: string) => {
    navigate(path);
  }, [navigate]);

  const goBack = useCallback(() => {
    window.history.back();
  }, []);

  const goForward = useCallback(() => {
    window.history.forward();
  }, []);

  const addRoute = useCallback((route: Route) => {
    setRoutes(prev => {
      const exists = prev.some(r => r.path === route.path);
      if (exists) {
        return prev.map(r => r.path === route.path ? route : r);
      }
      return [...prev, route];
    });
  }, []);

  const removeRoute = useCallback((path: string) => {
    setRoutes(prev => prev.filter(r => r.path !== path));
  }, []);

  const getRoutesByCategory = useCallback((category: string) => {
    return routes.filter(route => route.category === category);
  }, [routes]);

  const contextValue = useMemo((): RouterContextType => ({
    routes,
    currentPath,
    navigate: handleNavigate,
    goBack,
    goForward,
    addRoute,
    removeRoute,
    getRoutesByCategory,
  }), [
    routes,
    currentPath,
    handleNavigate,
    goBack,
    goForward,
    addRoute,
    removeRoute,
    getRoutesByCategory,
  ]);

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  );
};