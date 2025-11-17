import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '../components/Navbar';

// Mock components for demonstration
const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-sm">L</span>
    </div>
    <span className="font-bold text-inherit">LibraryUI</span>
  </div>
);

const SearchIcon = () => (
  <svg
    fill="none"
    height="20"
    viewBox="0 0 24 24"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m19 19-3.5-3.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <circle
      cx="11"
      cy="11"
      r="8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const Avatar = () => (
  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
    <span className="text-white font-medium text-sm">JD</span>
  </div>
);

const ChevronDownIcon = () => (
  <svg
    fill="none"
    height="16"
    viewBox="0 0 24 24"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m6 9 6 6 6-6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export default function NavbarPage() {
  const [activeItem, setActiveItem] = useState('home');

  const menuItems = [
    { key: 'home', label: 'Home' },
    { key: 'features', label: 'Features' },
    { key: 'pricing', label: 'Pricing' },
    { key: 'about', label: 'About' },
    { key: 'contact', label: 'Contact' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-4">Navbar Component</h1>
        <p className="text-lg text-foreground-600 mb-6">
          A responsive navigation header with support for branding, links, and mobile menu.
        </p>
      </div>

      {/* Basic Navbar */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Basic Navbar</h2>
        <div className="border border-divider rounded-lg overflow-hidden">
          <Navbar>
            <NavbarBrand>
              <Logo />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              {menuItems.map((item) => (
                <NavbarItem key={item.key} isActive={activeItem === item.key}>
                  <button
                    className="text-foreground hover:text-primary transition-colors"
                    onClick={() => setActiveItem(item.key)}
                  >
                    {item.label}
                  </button>
                </NavbarItem>
              ))}
            </NavbarContent>
            <NavbarContent justify="end">
              <NavbarItem>
                <button className="text-primary font-medium">Login</button>
              </NavbarItem>
              <NavbarItem>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium">
                  Sign Up
                </button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
        </div>
      </section>

      {/* Navbar with Mobile Menu */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">With Mobile Menu</h2>
        <div className="border border-divider rounded-lg overflow-hidden">
          <Navbar>
            <NavbarContent>
              <NavbarMenuToggle className="sm:hidden" />
              <NavbarBrand>
                <Logo />
              </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              {menuItems.map((item) => (
                <NavbarItem key={item.key} isActive={activeItem === item.key}>
                  <button
                    className="text-foreground hover:text-primary transition-colors"
                    onClick={() => setActiveItem(item.key)}
                  >
                    {item.label}
                  </button>
                </NavbarItem>
              ))}
            </NavbarContent>

            <NavbarContent justify="end">
              <NavbarItem className="hidden sm:flex">
                <button className="text-primary font-medium">Login</button>
              </NavbarItem>
              <NavbarItem className="hidden sm:flex">
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium">
                  Sign Up
                </button>
              </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
              {menuItems.map((item) => (
                <NavbarMenuItem key={item.key} isActive={activeItem === item.key}>
                  <button
                    className="w-full text-left text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setActiveItem(item.key)}
                  >
                    {item.label}
                  </button>
                </NavbarMenuItem>
              ))}
              <NavbarMenuItem>
                <button className="w-full text-left text-primary font-medium py-2">
                  Login
                </button>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <button className="w-full text-left bg-primary text-primary-foreground rounded-lg font-medium py-2 px-4 mt-2">
                  Sign Up
                </button>
              </NavbarMenuItem>
            </NavbarMenu>
          </Navbar>
        </div>
      </section>

      {/* Static Navbar */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Static Position</h2>
        <div className="border border-divider rounded-lg overflow-hidden">
          <Navbar position="static">
            <NavbarBrand>
              <Logo />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem isActive>
                <span className="text-primary">Dashboard</span>
              </NavbarItem>
              <NavbarItem>
                <button className="text-foreground hover:text-primary transition-colors">
                  Analytics
                </button>
              </NavbarItem>
              <NavbarItem>
                <button className="text-foreground hover:text-primary transition-colors">
                  Settings
                </button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
        </div>
      </section>

      {/* Bordered Navbar */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">With Border</h2>
        <div className="border border-divider rounded-lg overflow-hidden">
          <Navbar isBordered>
            <NavbarBrand>
              <Logo />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <button className="text-foreground hover:text-primary transition-colors">
                  Products
                </button>
              </NavbarItem>
              <NavbarItem>
                <button className="text-foreground hover:text-primary transition-colors">
                  Solutions
                </button>
              </NavbarItem>
              <NavbarItem isActive>
                <span className="text-primary">Pricing</span>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
              <NavbarItem>
                <Avatar />
              </NavbarItem>
            </NavbarContent>
          </Navbar>
        </div>
      </section>

      {/* Non-blurred Navbar */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Without Blur</h2>
        <div className="border border-divider rounded-lg overflow-hidden">
          <Navbar isBlurred={false}>
            <NavbarBrand>
              <Logo />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <button className="text-foreground hover:text-primary transition-colors">
                  Docs
                </button>
              </NavbarItem>
              <NavbarItem isActive>
                <span className="text-primary">Examples</span>
              </NavbarItem>
              <NavbarItem>
                <button className="text-foreground hover:text-primary transition-colors">
                  Community
                </button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
        </div>
      </section>

      {/* Navbar with Search */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">With Search Input</h2>
        <div className="border border-divider rounded-lg overflow-hidden">
          <Navbar>
            <NavbarContent>
              <NavbarMenuToggle className="sm:hidden" />
              <NavbarBrand>
                <Logo />
              </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="items-center" justify="center">
              <div className="relative">
                <SearchIcon />
                <input
                  type="search"
                  placeholder="Search..."
                  className="pl-8 pr-4 py-2 bg-default-100 rounded-lg border-none outline-none focus:bg-default-200 transition-colors"
                />
              </div>
            </NavbarContent>

            <NavbarContent justify="end">
              <NavbarItem>
                <div className="flex items-center gap-2">
                  <Avatar />
                  <ChevronDownIcon />
                </div>
              </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
              <NavbarMenuItem>
                <div className="relative w-full mb-4">
                  <SearchIcon />
                  <input
                    type="search"
                    placeholder="Search..."
                    className="w-full pl-8 pr-4 py-2 bg-default-100 rounded-lg border-none outline-none focus:bg-default-200 transition-colors"
                  />
                </div>
              </NavbarMenuItem>
              {menuItems.map((item) => (
                <NavbarMenuItem key={item.key}>
                  <button className="w-full text-left text-foreground hover:text-primary transition-colors py-2">
                    {item.label}
                  </button>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </Navbar>
        </div>
      </section>

      {/* Navbar with Different Max Widths */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Different Max Widths</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Small (sm)</h3>
            <div className="border border-divider rounded-lg overflow-hidden">
              <Navbar maxWidth="sm">
                <NavbarBrand>
                  <Logo />
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex" justify="end">
                  <NavbarItem>
                    <button className="text-primary">Small</button>
                  </NavbarItem>
                </NavbarContent>
              </Navbar>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Large (lg) - Default</h3>
            <div className="border border-divider rounded-lg overflow-hidden">
              <Navbar maxWidth="lg">
                <NavbarBrand>
                  <Logo />
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex" justify="end">
                  <NavbarItem>
                    <button className="text-primary">Large</button>
                  </NavbarItem>
                </NavbarContent>
              </Navbar>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Full Width</h3>
            <div className="border border-divider rounded-lg overflow-hidden">
              <Navbar maxWidth="full">
                <NavbarBrand>
                  <Logo />
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex" justify="end">
                  <NavbarItem>
                    <button className="text-primary">Full Width</button>
                  </NavbarItem>
                </NavbarContent>
              </Navbar>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Height */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Custom Height</h2>
        <div className="border border-divider rounded-lg overflow-hidden">
          <Navbar height="80px">
            <NavbarBrand>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <span className="font-bold text-inherit text-xl">LibraryUI</span>
              </div>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-6" justify="center">
              <NavbarItem isActive>
                <span className="text-primary text-lg">Tall</span>
              </NavbarItem>
              <NavbarItem>
                <button className="text-foreground hover:text-primary transition-colors text-lg">
                  Navbar
                </button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
        </div>
      </section>

      {/* Props Reference */}
      <section className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Props Reference</h2>
        
        {/* Navbar Props */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Navbar</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Prop</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Default</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">children</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ReactNode</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Content to be rendered inside the navbar</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">height</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string | number</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom height for the navbar</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">position</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">'static' | 'sticky'</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">'sticky'</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">CSS position behavior of the navbar</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">maxWidth</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">'lg'</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Maximum width constraint for the navbar content</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">isBordered</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Whether to show a bottom border</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">isBlurred</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">true</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Whether to apply backdrop blur effect</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">isMenuOpen</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Control the mobile menu open state</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">isMenuDefaultOpen</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Initial state of the mobile menu</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">shouldHideOnScroll</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Whether to hide navbar when scrolling down</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">disableScrollHandler</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Disable scroll handling functionality</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">disableAnimation</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Disable all animations</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">parentRef</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">React.RefObject&lt;HTMLElement&gt;</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Reference to parent element for scroll handling</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">onMenuOpenChange</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">(isOpen: boolean) =&gt; void</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Callback when mobile menu state changes</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">onScrollPositionChange</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">(position: number) =&gt; void</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Callback when scroll position changes</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">classNames</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Partial&lt;NavbarSlots&gt;</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom class names for navbar slots</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">className</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom CSS class for the navbar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* NavbarContent Props */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">NavbarContent</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Prop</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Default</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">children</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ReactNode</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Content to be rendered inside the content wrapper</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">justify</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">'start' | 'center' | 'end'</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">'start'</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">How to justify the content within the container</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">className</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom CSS class for the content wrapper</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* NavbarItem Props */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">NavbarItem</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Prop</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Default</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">children</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ReactNode</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Content of the navbar item</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">isActive</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Whether the item is currently active/selected</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">className</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom CSS class for the item</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* NavbarBrand Props */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">NavbarBrand</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Prop</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Default</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">children</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ReactNode</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Brand content (logo, title, etc.)</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">className</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom CSS class for the brand section</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* NavbarMenuToggle Props */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">NavbarMenuToggle</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Prop</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Default</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">icon</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ReactNode | ((isOpen: boolean | undefined) =&gt; ReactNode)</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom toggle icon or function that returns an icon</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">isSelected</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Control the selected state of the toggle</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">defaultSelected</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Initial selected state of the toggle</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">srOnlyText</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Screen reader only text for accessibility</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">onChange</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">(isOpen: boolean) =&gt; void</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Callback when toggle state changes</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">className</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom CSS class for the toggle button</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* NavbarMenu Props */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">NavbarMenu</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Prop</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Default</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">children</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ReactNode</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Menu items to be rendered in the mobile menu</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">portalContainer</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">HTMLElement</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Container element for portal rendering</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">className</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom CSS class for the mobile menu</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* NavbarMenuItem Props */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">NavbarMenuItem</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Prop</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Default</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">children</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">ReactNode</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Content of the mobile menu item</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">isActive</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">false</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Whether the menu item is currently active/selected</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-mono text-purple-600 dark:text-purple-400">className</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">-</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-200">Custom CSS class for the menu item</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Usage Information */}
      <section className="mt-12 p-6 bg-default-50 rounded-lg">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Usage Information</h2>
        <div className="space-y-4 text-foreground-600">
          <div>
            <h3 className="font-medium text-foreground mb-2">Key Features:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Responsive design with mobile menu support</li>
              <li>Multiple positioning options (sticky, static)</li>
              <li>Blur and border effects</li>
              <li>Hide on scroll functionality</li>
              <li>Flexible content arrangement</li>
              <li>Smooth animations with Framer Motion</li>
              <li>Full TypeScript support</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">Components:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><code>Navbar</code> - Main container</li>
              <li><code>NavbarBrand</code> - Logo/brand section</li>
              <li><code>NavbarContent</code> - Content wrapper with justify options</li>
              <li><code>NavbarItem</code> - Individual navigation items</li>
              <li><code>NavbarMenuToggle</code> - Mobile menu toggle button</li>
              <li><code>NavbarMenu</code> - Mobile menu container</li>
              <li><code>NavbarMenuItem</code> - Mobile menu items</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}