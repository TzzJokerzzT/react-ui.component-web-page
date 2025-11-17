import {
  BasicLibraryLinkExample,
  ActiveLibraryLinkExample,
  NavigationExample,
  CustomNavigationExample,
  RouterContextAndNavigationExample,
  CompleteRouterDemo
} from "../components/Router/routerExamples";

const RouterPage = () => {
  return (
    <div>
      {/* Router System Documentation Header */}
      <section className="mb-16 p-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Router System</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            A comprehensive routing system built on React Router that provides context-based navigation, 
            active link styling, grouped navigation, and flexible routing management for modern React applications.
          </p>
        </div>
      </section>

      {/* Examples Section */}
      <section className="mb-16 p-8 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-8">Examples</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Basic LibraryLink Usage</h3>
              <BasicLibraryLinkExample />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">LibraryLink with Active States</h3>
              <ActiveLibraryLinkExample />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Navigation Component</h3>
              <NavigationExample />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Custom Navigation Rendering</h3>
              <CustomNavigationExample />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Router Context & Navigation Hook</h3>
              <RouterContextAndNavigationExample />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Complete Router Demo</h3>
              <CompleteRouterDemo />
            </div>
          </div>
        </div>
      </section>
      
      {/* Props Reference */}
      <section className="mb-16 p-8 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-8">Props Reference</h2>
          
          {/* LibraryRouterProvider Props */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">LibraryRouterProvider</h3>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-xl overflow-hidden border dark:border-gray-700">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Prop</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Default</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">children</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">ReactNode</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Components to render inside the router provider</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">initialRoutes</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Route[]</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">[]</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Initial routes to register with the router</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">onRouteChange</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">(path: string) =&gt; void</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">undefined</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Callback fired when the current route changes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* LibraryLink Props */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">LibraryLink</h3>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-xl overflow-hidden border dark:border-gray-700">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Prop</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Default</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">to</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Target path to navigate to</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">children</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">ReactNode</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Content to render inside the link</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">''</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">CSS classes to apply to the link</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">activeClassName</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">''</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Additional CSS classes to apply when link is active</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">exact</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">false</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Whether to match the path exactly or use prefix matching</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">replace</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">false</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Whether to replace the current history entry instead of pushing</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">onClick</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">(event: React.MouseEvent) =&gt; void</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">undefined</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Click event handler</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Navigation Props */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Navigation</h3>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-xl overflow-hidden border dark:border-gray-700">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Prop</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Default</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">routes</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">RouteGroup[]</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Array of route groups to render in navigation</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">className</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">''</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">CSS classes to apply to navigation container</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">renderItem</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">(route: Route, isActive: boolean) =&gt; ReactNode</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">undefined</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Custom renderer for navigation items</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Route Interface */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Route Interface</h3>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-xl overflow-hidden border dark:border-gray-700">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Property</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Required</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">path</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Yes</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">URL path for the route</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">element</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">React.ComponentType</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Yes</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Component to render for this route</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">label</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Yes</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Display label for navigation</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">icon</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">React.ReactNode</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">No</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Icon to display in navigation</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">category</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">No</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Category for grouping routes</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">exact</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">No</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Whether route matching should be exact</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* RouteGroup Interface */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">RouteGroup Interface</h3>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-xl overflow-hidden border dark:border-gray-700">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Property</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Required</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="bg-white dark:bg-gray-900">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">label</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Yes</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Display label for the route group</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">routes</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Route[]</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Yes</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Array of routes in this group</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Hooks Documentation */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Hooks</h3>
            
            {/* useLibraryRouter */}
            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-4">useLibraryRouter()</h4>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-xl overflow-hidden border dark:border-gray-700">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Property</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">routes</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Route[]</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Array of registered routes</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">currentPath</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Current pathname</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">navigate</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">(path: string) =&gt; void</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Function to navigate to a path</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">goBack</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">() =&gt; void</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Navigate back in history</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">goForward</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">() =&gt; void</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Navigate forward in history</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">addRoute</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">(route: Route) =&gt; void</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Add or update a route</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">removeRoute</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">(path: string) =&gt; void</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Remove a route by path</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">getRoutesByCategory</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">(category: string) =&gt; Route[]</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Get routes by category</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* useLibraryNavigation */}
            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-4">useLibraryNavigation()</h4>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-xl overflow-hidden border dark:border-gray-700">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Property</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">navigateTo</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">(path: string, replace?: boolean) =&gt; void</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Navigate to a specific path with optional replace</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">goBack</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">() =&gt; void</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Navigate back in browser history</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">goForward</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">() =&gt; void</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Navigate forward in browser history</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">isActive</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">(path: string, exact?: boolean) =&gt; boolean</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Check if a path is currently active</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">currentPath</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Current pathname</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">getCurrentRoute</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">() =&gt; Route | undefined</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Get the current active route</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-900">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">getRouteByPath</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">(path: string) =&gt; Route | undefined</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Get a route by its path</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">routes</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Route[]</td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Array of all registered routes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RouterPage;