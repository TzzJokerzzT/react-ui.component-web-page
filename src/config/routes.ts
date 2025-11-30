import React from 'react';
import { Route, RouteGroup } from '../components/Router/types';
import AnimationPage from '../components/Animation/AnimationPage';
import AccordionPage from '../pages/AccordionPage';
import AnimatedContainersPage from '../pages/AnimatedContainersPage';
import AutocompletePage from '../pages/AutocompletePage';
import AvatarPage from '../pages/AvatarPage';
import BadgePage from '../pages/BadgePage';
import BreadcrumbPage from '../pages/BreadcrumbPage';
import ButtonPage from '../pages/ButtonPage';
import CardPage from '../pages/CardPage';
import CheckboxPage from '../pages/CheckboxPage';
import ChipPage from '../pages/ChipPage';
import ImagePage from '../pages/ImagePage';
import ModalPage from '../pages/ModalPage';
import NavbarPage from '../pages/NavbarPage';
import PaginationPage from '../pages/PaginationPage';
import ProgressSpinnerPage from '../pages/ProgressSpinnerPage';
import SpinnerPage from '../pages/SpinnerPage';
import { SwitchPage } from '../pages/SwitchPage';
import TablePage from '../pages/TablePage';
import TextAnimationPage from '../pages/TextAnimationPage';
import ToastPage from '../pages/ToastPage';
import TooltipPage from '../pages/TooltipPage';
import { UserPage } from '../pages/UserPage';
import { InputPage } from '../pages/InputPage';
import SidebarPage from '../pages/SidebarPage';
import RouterPage from '../pages/RouterPage';
import { CodePage } from '../pages/CodePage';

// Icon components
const ComponentIcon = () => React.createElement(
  'svg',
  {
    className: 'w-4 h-4',
    fill: 'none',
    stroke: 'currentColor',
    viewBox: '0 0 24 24'
  },
  React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    d: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V5zM21 15a2 2 0 00-2-2h-4a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4z'
  })
);

const AnimationIcon = () => React.createElement(
  'svg',
  {
    className: 'w-4 h-4',
    fill: 'none',
    stroke: 'currentColor',
    viewBox: '0 0 24 24'
  },
  React.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    d: 'M13 10V3L4 14h7v7l9-11h-7z'
  })
);

// Define all routes
export const allRoutes: Route[] = [
  // Core Components
  { path: '/', element: ButtonPage, label: 'Buttons', icon: React.createElement(ComponentIcon), category: 'core', exact: true },
  { path: '/cards', element: CardPage, label: 'Cards', icon: React.createElement(ComponentIcon), category: 'core' },
  { path: '/toasts', element: ToastPage, label: 'Toasts', icon: React.createElement(ComponentIcon), category: 'core' },
  { path: '/tables', element: TablePage, label: 'Tables', icon: React.createElement(ComponentIcon), category: 'core' },
  { path: '/images', element: ImagePage, label: 'Images', icon: React.createElement(ComponentIcon), category: 'core' },
  { path: '/checkboxes', element: CheckboxPage, label: 'Checkboxes', icon: React.createElement(ComponentIcon), category: 'core' },
  { path: '/inputs', element: InputPage, label: 'Inputs', icon: React.createElement(ComponentIcon), category: 'core' },
  { path: '/switches', element: SwitchPage, label: 'Switches', icon: React.createElement(ComponentIcon), category: 'core' },
  { path: '/accordions', element: AccordionPage, label: 'Accordions', icon: React.createElement(ComponentIcon), category: 'core' },
  { path: '/avatars', element: AvatarPage, label: 'Avatars', icon: React.createElement(ComponentIcon), category: 'core' },
  { path: '/autocomplete', element: AutocompletePage, label: 'Autocomplete', icon: React.createElement(ComponentIcon), category: 'core' },
  { path: '/badges', element: BadgePage, label: 'Badges', icon: React.createElement(ComponentIcon), category: 'core' },
  { path: '/chips', element: ChipPage, label: 'Chips', icon: React.createElement(ComponentIcon), category: 'core' },
  { path: '/code', element: CodePage, label: 'Code', icon: React.createElement(ComponentIcon), category: 'core' },
  { path: '/progress', element: ProgressSpinnerPage, label: 'Progress', icon: React.createElement(ComponentIcon), category: 'core' },
  { path: '/navbar', element: NavbarPage, label: 'Navbar', icon: React.createElement(ComponentIcon), category: 'core' },
  { path: '/modal', element: ModalPage, label: 'Modal', icon: React.createElement(ComponentIcon), category: 'core' },
  { path: '/sidebar', element: SidebarPage, label: 'Sidebar', icon: React.createElement(ComponentIcon), category: 'core' },
  { path: '/router', element: RouterPage, label: 'Router', icon: React.createElement(ComponentIcon), category: 'core' },
  
  // Animation Components
  { path: '/animations', element: AnimationPage, label: 'Animations', icon: React.createElement(AnimationIcon), category: 'animation' },
  { path: '/text-animations', element: TextAnimationPage, label: 'Text Animations', icon: React.createElement(AnimationIcon), category: 'animation' },
  { path: '/animated-containers', element: AnimatedContainersPage, label: 'Containers', icon: React.createElement(AnimationIcon), category: 'animation' },
  { path: '/breadcrumbs', element: BreadcrumbPage, label: 'Breadcrumbs', icon: React.createElement(ComponentIcon), category: 'animation' },
  { path: '/spinners', element: SpinnerPage, label: 'Spinners', icon: React.createElement(AnimationIcon), category: 'animation' },
  { path: '/tooltips', element: TooltipPage, label: 'Tooltips', icon: React.createElement(ComponentIcon), category: 'animation' },
  { path: '/pagination', element: PaginationPage, label: 'Pagination', icon: React.createElement(ComponentIcon), category: 'animation' },
  { path: '/users', element: UserPage, label: 'User', icon: React.createElement(ComponentIcon), category: 'animation' },
];

// Group routes by category for navigation
export const routeGroups: RouteGroup[] = [
  {
    label: 'Core Components',
    routes: allRoutes.filter(route => route.category === 'core')
  },
  {
    label: 'Animation Components', 
    routes: allRoutes.filter(route => route.category === 'animation')
  }
];