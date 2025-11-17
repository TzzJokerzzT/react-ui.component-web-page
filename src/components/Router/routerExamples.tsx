import React from 'react';
import { LibraryRouterProvider, LibraryLink, Navigation, useLibraryRouter } from './index';
import { RouteGroup, Route } from './types';
import { useLibraryNavigation } from './useLibraryNavigation';

// Simple components for route examples
const HomePage = () => <div>Home Page Content</div>;
const DashboardPage = () => <div>Dashboard Page Content</div>;
const ProfilePage = () => <div>Profile Page Content</div>;
const DocsPage = () => <div>Documentation Page Content</div>;
const ProductsPage = () => <div>Products Page Content</div>;
const SettingsPage = () => <div>Settings Page Content</div>;
const FavoritesPage = () => <div>Favorites Page Content</div>;
const StarredPage = () => <div>Starred Page Content</div>;

// Example 1: Basic LibraryLink Usage
export const BasicLibraryLinkExample: React.FC = () => {
  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <h4 className="font-semibold text-gray-900 dark:text-white">Basic LibraryLink</h4>
      <div className="space-y-2">
        <LibraryLink 
          to="/home" 
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Go to Home
        </LibraryLink>
        <LibraryLink 
          to="/about" 
          className="text-green-600 hover:text-green-800 underline"
          replace
        >
          About Page (Replace History)
        </LibraryLink>
      </div>
    </div>
  );
};

// Example 2: LibraryLink with Active States
export const ActiveLibraryLinkExample: React.FC = () => {
  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <h4 className="font-semibold text-gray-900 dark:text-white">LibraryLink with Active States</h4>
      <div className="space-y-2">
        <LibraryLink 
          to="/dashboard" 
          className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
          activeClassName="bg-blue-500 text-white hover:bg-blue-600"
          exact
        >
          Dashboard (Exact Match)
        </LibraryLink>
        <LibraryLink 
          to="/settings" 
          className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
          activeClassName="bg-blue-500 text-white hover:bg-blue-600"
        >
          Settings (Prefix Match)
        </LibraryLink>
        <LibraryLink 
          to="/settings/profile" 
          className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 ml-4"
          activeClassName="bg-blue-500 text-white hover:bg-blue-600"
        >
          Profile Settings
        </LibraryLink>
      </div>
    </div>
  );
};

// Example 3: Navigation Component with Route Groups
export const NavigationExample: React.FC = () => {
  const routeGroups: RouteGroup[] = [
    {
      label: "Main",
      routes: [
        { path: "/", label: "Home", element: HomePage, icon: <span>🏠</span>, exact: true },
        { path: "/dashboard", label: "Dashboard", element: DashboardPage, icon: <span>📊</span> },
        { path: "/profile", label: "Profile", element: ProfilePage, icon: <span>👤</span> }
      ]
    },
    {
      label: "Content",
      routes: [
        { path: "/docs", label: "Documentation", element: DocsPage, icon: <span>📚</span> },
        { path: "/products", label: "Products", element: ProductsPage, icon: <span>🛍️</span> }
      ]
    },
    {
      label: "System",
      routes: [
        { path: "/settings", label: "Settings", element: SettingsPage, icon: <span>⚙️</span> }
      ]
    }
  ];

  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <h4 className="font-semibold text-gray-900 dark:text-white">Navigation Component</h4>
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
        <Navigation 
          routes={routeGroups}
          className="space-y-2"
        />
      </div>
    </div>
  );
};

// Example 4: Custom Navigation Rendering
export const CustomNavigationExample: React.FC = () => {
  const routeGroups: RouteGroup[] = [
    {
      label: "Favorites",
      routes: [
        { path: "/favorites", label: "My Favorites", element: FavoritesPage, icon: <span>❤️</span> },
        { path: "/starred", label: "Starred Items", element: StarredPage, icon: <span>⭐</span> }
      ]
    }
  ];

  const customRenderItem = (route: Route, isActive: boolean) => (
    <LibraryLink
      key={route.path}
      to={route.path}
      className={`flex items-center gap-2 p-3 rounded-xl transition-all ${
        isActive
          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
          : 'bg-white hover:bg-gray-50 text-gray-700 border hover:shadow-md'
      }`}
    >
      {route.icon}
      <span className="font-medium">{route.label}</span>
      {isActive && <span className="ml-auto text-xs opacity-75">Active</span>}
    </LibraryLink>
  );

  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <h4 className="font-semibold text-gray-900 dark:text-white">Custom Navigation Rendering</h4>
      <div className="space-y-2">
        <Navigation 
          routes={routeGroups}
          renderItem={customRenderItem}
        />
      </div>
    </div>
  );
};

// Example 5: Using Router Context and Navigation Hook
const RouterContextExample: React.FC = () => {
  const { currentPath, navigate } = useLibraryRouter();
  const { navigateTo, goBack, goForward } = useLibraryNavigation();

  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <h4 className="font-semibold text-gray-900 dark:text-white">Router Context & Navigation Hook</h4>
      
      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Current Path: <code className="bg-white dark:bg-gray-700 px-2 py-1 rounded">{currentPath}</code>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => navigateTo('/home')}
          className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Navigate to Home
        </button>
        <button
          onClick={() => navigateTo('/about')}
          className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Navigate to About
        </button>
        <button
          onClick={() => navigate('/custom')}
          className="px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
        >
          Set Custom Path
        </button>
        <button
          onClick={goBack}
          className="px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Go Back
        </button>
      </div>

      <div className="flex gap-2">
        <button
          onClick={goForward}
          className="px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Go Forward
        </button>
        <div className="flex-1 text-sm text-gray-600 dark:text-gray-400 self-center">
          History navigation available via browser controls
        </div>
      </div>
    </div>
  );
};

// Wrapper component that provides router context
export const RouterContextAndNavigationExample: React.FC = () => {
  return (
    <LibraryRouterProvider>
      <RouterContextExample />
    </LibraryRouterProvider>
  );
};

// Example 6: Complete Router Setup Demo  
export const CompleteRouterDemo: React.FC = () => {
  const demoRoutes: RouteGroup[] = [
    {
      label: "Demo Pages",
      routes: [
        { path: "/demo", label: "Demo Home", element: HomePage, icon: <span>🏠</span>, exact: true },
        { path: "/demo/features", label: "Features", element: DashboardPage, icon: <span>⭐</span> },
        { path: "/demo/settings", label: "Settings", element: SettingsPage, icon: <span>⚙️</span> }
      ]
    }
  ];

  return (
    <LibraryRouterProvider>
      <div className="space-y-4 p-4 border rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white">Complete Router Demo</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Navigation Sidebar */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Navigation</h5>
            <Navigation routes={demoRoutes} />
          </div>

          {/* Content Area */}
          <div className="md:col-span-2 bg-white dark:bg-gray-900 p-4 rounded-lg border">
            <DemoContent />
          </div>
        </div>
      </div>
    </LibraryRouterProvider>
  );
};

// Demo content component that responds to route changes
const DemoContent: React.FC = () => {
  const { currentPath } = useLibraryRouter();

  const getContent = () => {
    switch (currentPath) {
      case '/demo':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-2">Demo Home</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Welcome to the router demo! Use the navigation on the left to explore different sections.
            </p>
          </div>
        );
      case '/demo/features':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
              <li>Context-based routing</li>
              <li>Active link styling</li>
              <li>Grouped navigation</li>
              <li>Custom rendering</li>
              <li>History management</li>
            </ul>
          </div>
        );
      case '/demo/settings':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-2">Settings</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Configure your routing preferences and behavior here.
            </p>
          </div>
        );
      default:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Current Route</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Path: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{currentPath}</code>
            </p>
          </div>
        );
    }
  };

  return (
    <div>
      <div className="mb-4 text-xs text-gray-500 dark:text-gray-400">
        Current Route: <code>{currentPath}</code>
      </div>
      {getContent()}
    </div>
  );
};