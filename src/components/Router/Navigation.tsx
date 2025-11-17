import React from 'react';
import { NavigationProps, Route } from './types';
import { LibraryLink } from './LibraryLink';
import { useLibraryRouter } from './RouterContext';

export const Navigation: React.FC<NavigationProps> = ({
  routes,
  className = '',
  renderItem,
}) => {
  const { currentPath } = useLibraryRouter();

  const defaultRenderItem = (route: Route, isActive: boolean) => (
    <LibraryLink
      key={route.path}
      to={route.path}
      className={`flex items-center gap-3 px-3 py-2 mx-2 my-1 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 dark:focus:ring-offset-gray-800 ${
        isActive
          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100 border-l-4 border-blue-500 pl-2 ml-2'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
      }`}
    >
      {route.icon && (
        <span className="flex-shrink-0">
          {route.icon}
        </span>
      )}
      <span className="flex-1 truncate">
        {route.label}
      </span>
    </LibraryLink>
  );

  return (
    <nav className={className}>
      {routes.map((group) => (
        <div key={group.label} className="pb-2">
          <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            {group.label}
          </h3>
          <div className="space-y-1">
            {group.routes.map((route) => {
              const isActive = route.exact 
                ? currentPath === route.path
                : currentPath.startsWith(route.path);
              
              return renderItem 
                ? renderItem(route, isActive)
                : defaultRenderItem(route, isActive);
            })}
          </div>
        </div>
      ))}
    </nav>
  );
};