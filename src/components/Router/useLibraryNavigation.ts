import { useCallback } from 'react';
import { useLibraryRouter } from './RouterContext';
import { Route } from './types';

export const useLibraryNavigation = () => {
  const { navigate, goBack, goForward, currentPath, routes } = useLibraryRouter();

  const navigateTo = useCallback((path: string, replace?: boolean) => {
    if (replace) {
      window.history.replaceState(null, '', path);
    } else {
      navigate(path);
    }
  }, [navigate]);

  const isActive = useCallback((path: string, exact = false) => {
    return exact 
      ? currentPath === path
      : currentPath.startsWith(path);
  }, [currentPath]);

  const getCurrentRoute = useCallback((): Route | undefined => {
    return routes.find(route => {
      return route.exact 
        ? currentPath === route.path
        : currentPath.startsWith(route.path);
    });
  }, [routes, currentPath]);

  const getRouteByPath = useCallback((path: string): Route | undefined => {
    return routes.find(route => route.path === path);
  }, [routes]);

  return {
    navigateTo,
    goBack,
    goForward,
    isActive,
    currentPath,
    getCurrentRoute,
    getRouteByPath,
    routes,
  };
};