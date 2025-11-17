# Tooltip Component

A comprehensive tooltip system built with **Framer Motion** and **Tailwind CSS**. Features advanced positioning, multiple triggers, animations, and full TypeScript support with manual positioning logic (no external dependencies).

## 🚀 Features

- **12 Placement Options**: top, bottom, left, right + start/end variants with auto-flipping
- **4 Trigger Types**: hover, click, focus, manual with proper event handling
- **6 Color Variants**: dark, light, primary, success, warning, error
- **4 Size Options**: xs, sm, md, lg with responsive content
- **4 Animation Types**: fade, scale, shift, none using Framer Motion
- **Arrow Support**: Configurable pointer with proper color matching
- **Manual Positioning**: Custom positioning logic with boundary detection
- **Context Provider**: Global configuration with delay management
- **Portal Rendering**: Optional portal with custom containers
- **Rich Content**: JSX support, formatted text, complex layouts
- **TypeScript**: Full type safety with comprehensive interfaces
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

## 📦 Installation

The component uses **Framer Motion** for animations. Ensure it's installed:

```bash
npm install framer-motion
```

## 🎯 Basic Usage

```tsx
import { Tooltip } from './components/Tooltip';

// Basic tooltip
<Tooltip content="This is a tooltip">
  <button>Hover me</button>
</Tooltip>

// Customized tooltip
<Tooltip
  content="Advanced tooltip with custom styling"
  placement="top-start"
  trigger="click"
  variant="primary"
  size="lg"
  showArrow={true}
  animation="scale"
>
  <div>Click for tooltip</div>
</Tooltip>
```

## 📍 Placement Options

### Primary Positions
```tsx
<Tooltip placement="top" content="Top tooltip" />
<Tooltip placement="bottom" content="Bottom tooltip" />
<Tooltip placement="left" content="Left tooltip" />
<Tooltip placement="right" content="Right tooltip" />
```

### Start/End Variants
```tsx
<Tooltip placement="top-start" content="Top start" />
<Tooltip placement="top-end" content="Top end" />
<Tooltip placement="bottom-start" content="Bottom start" />
<Tooltip placement="bottom-end" content="Bottom end" />
<Tooltip placement="left-start" content="Left start" />
<Tooltip placement="left-end" content="Left end" />
<Tooltip placement="right-start" content="Right start" />
<Tooltip placement="right-end" content="Right end" />
```

## 🎛️ Trigger Types

### Hover (Default)
```tsx
<Tooltip trigger="hover" content="Appears on hover">
  <button>Hover me</button>
</Tooltip>
```

### Click
```tsx
<Tooltip trigger="click" content="Click to toggle">
  <button>Click me</button>
</Tooltip>
```

### Focus
```tsx
<Tooltip trigger="focus" content="Focus to show">
  <input placeholder="Focus me" />
</Tooltip>
```

### Manual Control
```tsx
const [isOpen, setIsOpen] = useState(false);

<Tooltip 
  trigger="manual" 
  isOpen={isOpen}
  content="Manually controlled"
>
  <button onClick={() => setIsOpen(!isOpen)}>
    Toggle tooltip
  </button>
</Tooltip>
```

## 🎨 Color Variants

```tsx
<Tooltip variant="dark" />     {/* Black background - default */}
<Tooltip variant="light" />    {/* White background */}
<Tooltip variant="primary" />  {/* Blue theme */}
<Tooltip variant="success" />  {/* Green theme */}
<Tooltip variant="warning" />  {/* Yellow theme */}
<Tooltip variant="error" />    {/* Red theme */}
```

## 📏 Size Options

```tsx
<Tooltip size="xs" />   {/* Extra small */}
<Tooltip size="sm" />   {/* Small - default */}
<Tooltip size="md" />   {/* Medium */}
<Tooltip size="lg" />   {/* Large */}
```

## ✨ Animation Types

```tsx
<Tooltip animation="fade" />   {/* Fade in/out - default */}
<Tooltip animation="scale" />  {/* Scale from center */}
<Tooltip animation="shift" />  {/* Slide from placement direction */}
<Tooltip animation="none" />   {/* No animation */}
```

## 🎯 Arrow Styling

```tsx
<Tooltip 
  showArrow={true}
  content="Tooltip with arrow"
  placement="top"
>
  <button>With arrow</button>
</Tooltip>
```

## ⏱️ Delay Configuration

```tsx
<Tooltip
  showDelay={500}    // 500ms delay before showing
  hideDelay={200}    // 200ms delay before hiding
  content="Delayed tooltip"
>
  <button>Hover with delay</button>
</Tooltip>
```

## 🌍 Global Configuration with Provider

```tsx
import { TooltipProvider } from './components/Tooltip';

function App() {
  return (
    <TooltipProvider
      defaultShowDelay={300}
      defaultHideDelay={100}
      defaultVariant="dark"
      defaultAnimation="fade"
    >
      {/* All tooltips inherit these defaults */}
      <Tooltip content="Uses provider defaults">
        <button>Global config</button>
      </Tooltip>
    </TooltipProvider>
  );
}
```

## 🚪 Portal Rendering

```tsx
<Tooltip
  portal={true}
  portalContainer={document.getElementById('tooltip-root')}
  content="Rendered in portal"
>
  <button>Portal tooltip</button>
</Tooltip>
```

## 📱 Rich Content Support

### JSX Content
```tsx
<Tooltip
  content={
    <div>
      <h4 className="font-bold">Rich Content</h4>
      <p>Supports JSX elements</p>
      <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
      </ul>
    </div>
  }
>
  <button>Rich tooltip</button>
</Tooltip>
```

### Formatted Text
```tsx
<Tooltip
  content={
    <div className="space-y-1">
      <div className="font-semibold">User Information</div>
      <div className="text-sm">John Doe</div>
      <div className="text-xs text-gray-400">john@example.com</div>
    </div>
  }
  size="lg"
>
  <div className="w-8 h-8 bg-blue-500 rounded-full" />
</Tooltip>
```

## 🔧 API Reference

### TooltipProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | `required` | Trigger element |
| `content` | `ReactNode` | `required` | Tooltip content |
| `placement` | `TooltipPlacement` | `'top'` | Position relative to trigger |
| `trigger` | `TooltipTrigger` | `'hover'` | How tooltip is triggered |
| `variant` | `TooltipVariant` | `'dark'` | Color theme |
| `size` | `TooltipSize` | `'sm'` | Size variant |
| `animation` | `TooltipAnimation` | `'fade'` | Animation type |
| `showArrow` | `boolean` | `false` | Show arrow pointer |
| `isOpen` | `boolean` | `undefined` | Manual control (for trigger="manual") |
| `showDelay` | `number` | `200` | Delay before showing (ms) |
| `hideDelay` | `number` | `100` | Delay before hiding (ms) |
| `portal` | `boolean` | `false` | Render in portal |
| `portalContainer` | `Element` | `document.body` | Portal container |
| `className` | `string` | `undefined` | Additional CSS classes |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Open state callback |
| `disabled` | `boolean` | `false` | Disable tooltip |

### TooltipPlacement
```tsx
type TooltipPlacement = 
  | 'top' | 'top-start' | 'top-end'
  | 'bottom' | 'bottom-start' | 'bottom-end' 
  | 'left' | 'left-start' | 'left-end'
  | 'right' | 'right-start' | 'right-end';
```

### TooltipTrigger
```tsx
type TooltipTrigger = 'hover' | 'click' | 'focus' | 'manual';
```

### TooltipVariant
```tsx
type TooltipVariant = 'dark' | 'light' | 'primary' | 'success' | 'warning' | 'error';
```

### TooltipSize
```tsx
type TooltipSize = 'xs' | 'sm' | 'md' | 'lg';
```

### TooltipAnimation
```tsx
type TooltipAnimation = 'fade' | 'scale' | 'shift' | 'none';
```

## 🎨 Advanced Examples

### Interactive Form Field
```tsx
<div className="space-y-4">
  <Tooltip
    content="Enter your full name as it appears on official documents"
    placement="top-start"
    trigger="focus"
    variant="primary"
    showArrow={true}
  >
    <input
      type="text"
      placeholder="Full Name"
      className="w-full p-2 border rounded"
    />
  </Tooltip>
</div>
```

### Status Indicators
```tsx
<div className="flex space-x-2">
  <Tooltip content="Service is running" variant="success">
    <div className="w-3 h-3 bg-green-500 rounded-full" />
  </Tooltip>
  
  <Tooltip content="Service has warnings" variant="warning">
    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
  </Tooltip>
  
  <Tooltip content="Service is down" variant="error">
    <div className="w-3 h-3 bg-red-500 rounded-full" />
  </Tooltip>
</div>
```

### Complex Information Panel
```tsx
<Tooltip
  content={
    <div className="space-y-3 min-w-64">
      <div className="flex items-center space-x-2">
        <img src="/avatar.jpg" className="w-8 h-8 rounded-full" />
        <div>
          <div className="font-semibold">Sarah Johnson</div>
          <div className="text-sm text-gray-400">Product Manager</div>
        </div>
      </div>
      <div className="border-t pt-2">
        <div className="text-sm">
          <div>📧 sarah.johnson@company.com</div>
          <div>📱 +1 (555) 123-4567</div>
          <div>🏢 San Francisco Office</div>
        </div>
      </div>
    </div>
  }
  placement="bottom-start"
  size="lg"
  trigger="click"
  variant="light"
  showArrow={true}
>
  <div className="cursor-pointer p-2 border rounded hover:bg-gray-50">
    View Profile
  </div>
</Tooltip>
```

## ♿ Accessibility

The component includes comprehensive accessibility features:

- `role="tooltip"` for proper semantic meaning
- `aria-describedby` connecting trigger to tooltip
- `aria-hidden` management for screen readers
- Keyboard navigation support (Escape to close)
- Focus management and restoration
- High contrast support

```tsx
<Tooltip
  content="Accessible tooltip with proper ARIA"
  aria-label="Additional information"
>
  <button aria-describedby="tooltip-id">
    Accessible button
  </button>
</Tooltip>
```

## 🧪 Testing

```tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Tooltip } from './Tooltip';

test('shows tooltip on hover', async () => {
  render(
    <Tooltip content="Test tooltip">
      <button>Hover me</button>
    </Tooltip>
  );
  
  const trigger = screen.getByText('Hover me');
  fireEvent.mouseEnter(trigger);
  
  await waitFor(() => {
    expect(screen.getByText('Test tooltip')).toBeInTheDocument();
  });
});

test('respects manual control', () => {
  render(
    <Tooltip trigger="manual" isOpen={true} content="Manual tooltip">
      <button>Manual button</button>
    </Tooltip>
  );
  
  expect(screen.getByText('Manual tooltip')).toBeInTheDocument();
});
```

## 📱 Responsive Design

Tooltips automatically adjust positioning for mobile devices:

```tsx
<Tooltip
  placement="top"
  content="Responsive tooltip"
  className="md:text-base text-sm" // Responsive text size
>
  <button className="p-2 md:p-4"> // Responsive button
    Responsive tooltip
  </button>
</Tooltip>
```

## 🎯 Common Patterns

### Loading States
```tsx
const [loading, setLoading] = useState(false);

<Tooltip
  content={loading ? "Processing..." : "Click to submit"}
  variant={loading ? "warning" : "primary"}
  disabled={loading}
>
  <button disabled={loading} onClick={() => setLoading(true)}>
    {loading ? "Loading..." : "Submit"}
  </button>
</Tooltip>
```

### Conditional Content
```tsx
<Tooltip
  content={hasError ? "Please fix errors" : "Ready to save"}
  variant={hasError ? "error" : "success"}
  placement="top"
>
  <button disabled={hasError}>
    Save Changes
  </button>
</Tooltip>
```

### Coordinated Tooltips
```tsx
<TooltipProvider defaultShowDelay={500}>
  <div className="space-x-2">
    <Tooltip content="First action">
      <button>Action 1</button>
    </Tooltip>
    <Tooltip content="Second action">
      <button>Action 2</button>
    </Tooltip>
    <Tooltip content="Third action">
      <button>Action 3</button>
    </Tooltip>
  </div>
</TooltipProvider>
```

## 🔧 Customization

### Custom Styles
```tsx
<Tooltip
  content="Custom styled tooltip"
  className="!bg-purple-600 !text-white shadow-lg"
>
  <button>Custom tooltip</button>
</Tooltip>
```

### Theme Integration
```tsx
// With your design system
<Tooltip
  variant="primary"
  size="md"
  className="shadow-xl border-2 border-blue-200"
  content="Themed tooltip"
>
  <button className="btn-primary">
    Themed button
  </button>
</Tooltip>
```

## ⚡ Performance Tips

1. **Use `disabled` prop** instead of conditional rendering for better performance
2. **Portal rendering** for complex layouts with z-index issues
3. **Manual trigger** for precise control over show/hide logic
4. **Provider configuration** for consistent behavior across the app

## 🔮 Technical Details

### Manual Positioning System
The component includes a sophisticated positioning system that:
- Calculates optimal placement based on viewport boundaries
- Automatically flips to opposite side when space is limited  
- Handles start/end variants with precision
- Updates positioning on scroll and resize events
- Works without external dependencies like Popper.js

### Animation System
Built on Framer Motion with:
- Directional shift animations that respect placement
- Configurable duration and easing
- Proper cleanup and memory management
- Smooth transitions between states

## 🤝 Contributing

1. Add new placement options in `types.ts`
2. Extend animation variants in `variants.ts`
3. Update positioning logic in `Tooltip.tsx`
4. Add showcase examples in `TooltipPage.tsx`
5. Update documentation and tests

## 📄 License

MIT License - feel free to use in your projects!

---

**Built with ❤️ using React, TypeScript, Framer Motion, and Tailwind CSS**