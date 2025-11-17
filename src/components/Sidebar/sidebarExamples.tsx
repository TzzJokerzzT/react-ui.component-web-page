import React, { useState } from 'react';
import { 
  Sidebar, 
  SidebarProvider, 
  SidebarHeader, 
  SidebarContent, 
  SidebarFooter, 
  SidebarItem, 
  SidebarTrigger
} from './index';

// Demo wrapper component for examples
const SidebarDemo: React.FC<{
  title: string;
  description: string;
  children: React.ReactNode;
  code?: string;
}> = ({ title, description, children }) => {
  return (
    <div className="mb-12">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-xl overflow-hidden border dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

// Basic sidebar example
const BasicSidebarExample = () => {
  return (
    <SidebarProvider>
      <div className="flex h-96 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden relative">
        <Sidebar variant="persistent" width={250}>
          <SidebarHeader>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Navigation
            </h2>
          </SidebarHeader>
          
          <SidebarContent>
            <div className="space-y-1">
              <SidebarItem href="#" isActive>
                <HomeIcon />
                Dashboard
              </SidebarItem>
              <SidebarItem href="#">
                <UsersIcon />
                Users
              </SidebarItem>
              <SidebarItem href="#">
                <SettingsIcon />
                Settings
              </SidebarItem>
              <SidebarItem href="#" disabled>
                <ArchiveIcon />
                Archive
              </SidebarItem>
            </div>
          </SidebarContent>
          
          <SidebarFooter>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Version 1.0.0
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4 mb-4">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Main Content
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            This is the main content area. The sidebar can be toggled using the trigger button.
          </p>
        </main>
      </div>
    </SidebarProvider>
  );
};

// Temporary sidebar example
const TemporarySidebarExample = () => {
  return (
    <SidebarProvider>
      <div className="flex h-96 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden relative">
        <Sidebar variant="temporary" width={280}>
          <SidebarHeader showCloseButton>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">M</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Menu</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">Temporary sidebar</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <div className="space-y-2">
              <div className="px-3 py-2">
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Main
                </h3>
              </div>
              <SidebarItem href="#" isActive>
                <DashboardIcon />
                Dashboard
              </SidebarItem>
              <SidebarItem href="#">
                <ProjectsIcon />
                Projects
              </SidebarItem>
              <SidebarItem href="#">
                <TasksIcon />
                Tasks
              </SidebarItem>
              
              <div className="px-3 py-2 mt-4">
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Account
                </h3>
              </div>
              <SidebarItem href="#">
                <ProfileIcon />
                Profile
              </SidebarItem>
              <SidebarItem href="#">
                <SettingsIcon />
                Settings
              </SidebarItem>
            </div>
          </SidebarContent>
          
          <SidebarFooter>
            <SidebarItem href="#" className="text-red-600 dark:text-red-400">
              <LogoutIcon />
              Sign Out
            </SidebarItem>
          </SidebarFooter>
        </Sidebar>
        
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4 mb-4">
            <SidebarTrigger aria-label="Toggle sidebar" />
            <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Temporary Sidebar Demo
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This sidebar appears as an overlay and can be closed by clicking the backdrop or pressing Escape.
          </p>
          <div className="space-y-2">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              • Click the menu button to open the sidebar
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              • Click outside the sidebar to close it
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              • Press Escape to close it
            </p>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

// Right-positioned sidebar example
const RightSidebarExample = () => {
  return (
    <SidebarProvider>
      <div className="flex h-96 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden relative">
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Right Sidebar Demo
            </h1>
            <SidebarTrigger aria-label="Toggle right sidebar" />
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This example shows a sidebar positioned on the right side of the screen.
          </p>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Content Area</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              The main content is on the left, and the sidebar slides in from the right.
            </p>
          </div>
        </main>
        
        <Sidebar variant="temporary" position="right" width={300}>
          <SidebarHeader>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Right Panel
            </h2>
          </SidebarHeader>
          
          <SidebarContent>
            <div className="space-y-3">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  <SidebarItem href="#" className="text-sm">
                    <PlusIcon />
                    Create New
                  </SidebarItem>
                  <SidebarItem href="#" className="text-sm">
                    <ImportIcon />
                    Import Data
                  </SidebarItem>
                </div>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-1">
                  Recent Items
                </h3>
                <div className="space-y-2">
                  <SidebarItem href="#" className="text-sm">
                    <DocumentIcon />
                    Report.pdf
                  </SidebarItem>
                  <SidebarItem href="#" className="text-sm">
                    <ImageIcon />
                    Image.jpg
                  </SidebarItem>
                </div>
              </div>
            </div>
          </SidebarContent>
        </Sidebar>
      </div>
    </SidebarProvider>
  );
};

// Custom styled sidebar example
const CustomStyledSidebarExample = () => {
  return (
    <SidebarProvider>
      <div className="flex h-96 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg overflow-hidden relative">
        <Sidebar 
          variant="persistent" 
          width={260}
          className="bg-gradient-to-b from-purple-600 to-blue-600 text-white"
        >
          <SidebarHeader className="bg-black/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold">A</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold">App Name</h2>
                <p className="text-xs text-white/70">Custom Styled</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <div className="space-y-1">
              <SidebarItem 
                href="#" 
                isActive 
                className="text-white hover:bg-white/10 data-[active=true]:bg-white/20 data-[active=true]:text-white"
              >
                <HomeIcon />
                Overview
              </SidebarItem>
              <SidebarItem 
                href="#"
                className="text-white/80 hover:bg-white/10 hover:text-white"
              >
                <ChartIcon />
                Analytics
              </SidebarItem>
              <SidebarItem 
                href="#"
                className="text-white/80 hover:bg-white/10 hover:text-white"
              >
                <UsersIcon />
                Team
              </SidebarItem>
              <SidebarItem 
                href="#"
                className="text-white/80 hover:bg-white/10 hover:text-white"
              >
                <SettingsIcon />
                Settings
              </SidebarItem>
            </div>
          </SidebarContent>
          
          <SidebarFooter className="border-t border-white/10">
            <div className="flex items-center gap-3 p-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold">JD</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">John Doe</p>
                <p className="text-xs text-white/70">john@example.com</p>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4 mb-4">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Custom Styled Sidebar
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This sidebar demonstrates custom styling with gradients and custom colors.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Card 1</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Sample content</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Card 2</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Sample content</p>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

// Interactive sidebar example with state
const InteractiveSidebarExample = () => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [sidebarContent, setSidebarContent] = useState('Dashboard content here...');

  const handleItemClick = (item: string, content: string) => {
    setActiveItem(item);
    setSidebarContent(content);
  };

  return (
    <SidebarProvider>
      <div className="flex h-96 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden relative">
        <Sidebar variant="persistent" width={240}>
          <SidebarHeader>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Interactive Demo
            </h2>
          </SidebarHeader>
          
          <SidebarContent>
            <div className="space-y-1">
              <SidebarItem 
                isActive={activeItem === 'dashboard'}
                onClick={() => handleItemClick('dashboard', 'Dashboard: Overview of your data and metrics.')}
              >
                <DashboardIcon />
                Dashboard
              </SidebarItem>
              <SidebarItem 
                isActive={activeItem === 'users'}
                onClick={() => handleItemClick('users', 'Users: Manage user accounts and permissions.')}
              >
                <UsersIcon />
                Users
              </SidebarItem>
              <SidebarItem 
                isActive={activeItem === 'reports'}
                onClick={() => handleItemClick('reports', 'Reports: View and generate various reports.')}
              >
                <ReportsIcon />
                Reports
              </SidebarItem>
              <SidebarItem 
                isActive={activeItem === 'settings'}
                onClick={() => handleItemClick('settings', 'Settings: Configure application preferences.')}
              >
                <SettingsIcon />
                Settings
              </SidebarItem>
            </div>
          </SidebarContent>
        </Sidebar>
        
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4 mb-4">
            <SidebarTrigger />
            <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Interactive Example
            </h1>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-gray-600 dark:text-gray-400">
              {sidebarContent}
            </p>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

// Icon components for the examples
const HomeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ArchiveIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
  </svg>
);

const DashboardIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
  </svg>
);

const ProjectsIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const TasksIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

const ProfileIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const LogoutIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);

const PlusIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const ImportIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ImageIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const ReportsIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>
);

const SidebarExamples: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Sidebar Component
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A flexible sidebar component with multiple variants, positions, and customizable styling options.
          Perfect for navigation, quick actions, and secondary content.
        </p>
      </div>

      {/* Basic Example */}
      <SidebarDemo
        title="Basic Sidebar"
        description="A simple persistent sidebar with header, content, and footer sections."
      >
        <BasicSidebarExample />
      </SidebarDemo>

      {/* Temporary Sidebar */}
      <SidebarDemo
        title="Temporary Sidebar"
        description="A temporary sidebar that appears as an overlay and can be closed by clicking outside or pressing Escape."
      >
        <TemporarySidebarExample />
      </SidebarDemo>

      {/* Right Positioned Sidebar */}
      <SidebarDemo
        title="Right-Positioned Sidebar"
        description="A sidebar that slides in from the right side of the screen."
      >
        <RightSidebarExample />
      </SidebarDemo>

      {/* Custom Styled Sidebar */}
      <SidebarDemo
        title="Custom Styled Sidebar"
        description="A sidebar with custom styling including gradients and custom colors."
      >
        <CustomStyledSidebarExample />
      </SidebarDemo>

      {/* Interactive Sidebar */}
      <SidebarDemo
        title="Interactive Sidebar"
        description="A sidebar with interactive items that update the main content area."
      >
        <InteractiveSidebarExample />
      </SidebarDemo>

      {/* Installation */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-8">Installation</h2>
        <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
          <code className="text-green-400 font-mono text-sm">
            npm install @your-org/component-library
          </code>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-8">Usage</h2>
        <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
          <pre className="text-green-400 font-mono text-sm">
{`import { 
  Sidebar, 
  SidebarProvider, 
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarItem,
  SidebarTrigger 
} from '@your-org/component-library';

function App() {
  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar variant="persistent">
          <SidebarHeader>
            <h2>Navigation</h2>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarItem href="/" isActive>Home</SidebarItem>
            <SidebarItem href="/about">About</SidebarItem>
          </SidebarContent>
          
          <SidebarFooter>
            <p>Footer content</p>
          </SidebarFooter>
        </Sidebar>
        
        <main>
          <SidebarTrigger />
          <h1>Main Content</h1>
        </main>
      </div>
    </SidebarProvider>
  );
}`}
          </pre>
        </div>
      </section>
    </div>
  );
};

export default SidebarExamples;