import type { ReactNode } from "react";
import { useLocation } from "react-router";
import { LibraryLink, Navigation } from "../components/Router";
import {
  Sidebar,
  SidebarTrigger,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "../components/Sidebar";
import { ThemeToggleWithLabel } from "../components/ThemeToggle";
import { routeGroups } from "../config/routes";
import { FadeContainer } from "@/components/AnimatedContainer";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  return (
    <div className="grid grid-cols-[300px_1fr] grid-rows-1 gap-4 min-h-screen bg-gray-50 dark:bg-gray-900 text-slate-800 dark:text-slate-200 transition-colors duration-200 ease-in-out">
      {/* Sidebar */}
      <Sidebar variant="persistent" width={300}>
        <SidebarHeader>
          <LibraryLink
            to="/"
            className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Component Library
          </LibraryLink>
        </SidebarHeader>

        <SidebarContent>
          <Navigation routes={routeGroups} />
        </SidebarContent>

        <SidebarFooter>
          <ThemeToggleWithLabel />
        </SidebarFooter>
      </Sidebar>

      {/* Top navigation bar for mobile */}
      <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-200 ease-in-out sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 lg:hidden">
        <div className="px-4">
          <div className="flex justify-between items-center py-3 min-h-16">
            <div className="flex items-center space-x-4">
              <SidebarTrigger />
              <LibraryLink
                to="/"
                className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                Component Library
              </LibraryLink>
            </div>
            <div className="lg:hidden">
              <ThemeToggleWithLabel />
            </div>
          </div>
        </div>
      </nav>

      {/* Main content area */}
      <main className="place-self-center transition-all duration-200 h-screen overflow-x-hidden overflow-y-auto scrollbar-hide">
        <div className="w-full px-4 py-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <FadeContainer
            key={location.pathname}
            trigger="immediate"
            duration={0.8}
          >
            {children}
          </FadeContainer>
        </div>
      </main>
    </div>
  );
};

export default Layout;
