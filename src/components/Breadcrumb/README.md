# Breadcrumb Component

A highly customizable and accessible breadcrumb navigation component inspired by HeroUI design patterns, built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **🎨 Multiple Variants**: 4 style variants (solid, bordered, light, flat)
- **🌈 Rich Color System**: 6 semantic colors (default, primary, secondary, success, warning, danger)
- **📏 Flexible Sizing**: 3 size options (sm, md, lg)
- **🔗 Smart Separators**: 4 built-in separator types + custom separator support
- **📱 Responsive Design**: Mobile-first responsive design
- **♿ Accessibility**: Full ARIA support and keyboard navigation
- **⚡ Performance**: Optimized with React.memo and useMemo
- **🎯 TypeScript**: Complete TypeScript support with comprehensive types
- **🎛️ Customizable**: Extensive customization through slots and class names
- **📦 Collapse Support**: Automatic item collapse with ellipsis for long breadcrumbs

## 🚀 Installation

```bash
npm install tailwind-variants tailwind-merge
```

## 📖 Basic Usage

```tsx
import { Breadcrumb, BreadcrumbItem } from './components/Breadcrumb';

function MyComponent() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/products">Products</BreadcrumbItem>
      <BreadcrumbItem>Current Page</BreadcrumbItem>
    </Breadcrumb>
  );
}
```

## 🎨 Variants

### Size Variants

```tsx
<Breadcrumb size="sm">
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem>Current</BreadcrumbItem>
</Breadcrumb>

<Breadcrumb size="md">  {/* Default */}
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem>Current</BreadcrumbItem>
</Breadcrumb>

<Breadcrumb size="lg">
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem>Current</BreadcrumbItem>
</Breadcrumb>
```

### Color Variants

```tsx
<Breadcrumb color="primary">
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem>Current</BreadcrumbItem>
</Breadcrumb>

<Breadcrumb color="success">
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem>Current</BreadcrumbItem>
</Breadcrumb>

<Breadcrumb color="danger">
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem>Current</BreadcrumbItem>
</Breadcrumb>
```

### Style Variants

```tsx
<Breadcrumb variant="solid">
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem>Current</BreadcrumbItem>
</Breadcrumb>

<Breadcrumb variant="bordered">
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem>Current</BreadcrumbItem>
</Breadcrumb>

<Breadcrumb variant="light">
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem>Current</BreadcrumbItem>
</Breadcrumb>
```

## 🔗 Separator Types

```tsx
{/* Built-in separator types */}
<Breadcrumb separator="slash">      {/* / */}
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem>Current</BreadcrumbItem>
</Breadcrumb>

<Breadcrumb separator="chevron">    {/* › (SVG icon) */}
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem>Current</BreadcrumbItem>
</Breadcrumb>

<Breadcrumb separator="arrow">      {/* → (SVG icon) */}
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem>Current</BreadcrumbItem>
</Breadcrumb>

<Breadcrumb separator="dot">        {/* • (SVG icon) */}
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem>Current</BreadcrumbItem>
</Breadcrumb>

{/* Custom separator with ReactNode */}
<Breadcrumb separator={<span className="mx-1 text-blue-500">|</span>}>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem>Current</BreadcrumbItem>
</Breadcrumb>
```

## 📦 Collapse Functionality

```tsx
<Breadcrumb 
  maxItems={4}
  itemsBeforeCollapse={1}
  itemsAfterCollapse={1}
>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/docs">Documentation</BreadcrumbItem>
  <BreadcrumbItem href="/docs/components">Components</BreadcrumbItem>
  <BreadcrumbItem href="/docs/components/breadcrumb">Breadcrumb</BreadcrumbItem>
  <BreadcrumbItem href="/docs/components/breadcrumb/api">API Reference</BreadcrumbItem>
  <BreadcrumbItem>Current Page</BreadcrumbItem>
</Breadcrumb>
```

## 🎯 Advanced Usage

### With Start/End Content

```tsx
<Breadcrumb>
  <BreadcrumbItem 
    href="/" 
    startContent={<HomeIcon />}
  >
    Home
  </BreadcrumbItem>
  <BreadcrumbItem 
    href="/products"
    startContent={<ProductIcon />}
    endContent={<Badge>New</Badge>}
  >
    Products
  </BreadcrumbItem>
  <BreadcrumbItem>Current Page</BreadcrumbItem>
</Breadcrumb>
```

### Custom Ellipsis Renderer

```tsx
<Breadcrumb 
  maxItems={3}
  renderEllipsis={(hiddenItems) => (
    <Tooltip content={`${hiddenItems} more items`}>
      <span>...</span>
    </Tooltip>
  )}
>
  {/* items */}
</Breadcrumb>
```

### Disabled States

```tsx
{/* Entire breadcrumb disabled */}
<Breadcrumb isDisabled>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem>Current</BreadcrumbItem>
</Breadcrumb>

{/* Individual items disabled */}
<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/products" isDisabled>Products</BreadcrumbItem>
  <BreadcrumbItem>Current</BreadcrumbItem>
</Breadcrumb>
```

## 🛠️ API Reference

### Breadcrumb Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the breadcrumb |
| `color` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'default'` | Color theme |
| `variant` | `'solid' \| 'bordered' \| 'light' \| 'flat'` | `'flat'` | Visual style variant |
| `separator` | `SeparatorType \| ReactNode` | `'slash'` | Separator between items |
| `maxItems` | `number` | `undefined` | Maximum items to show before collapsing |
| `itemsBeforeCollapse` | `number` | `1` | Items to show before ellipsis |
| `itemsAfterCollapse` | `number` | `1` | Items to show after ellipsis |
| `isDisabled` | `boolean` | `false` | Disable entire breadcrumb |
| `hideSeparator` | `boolean` | `false` | Hide all separators |
| `showRoot` | `boolean` | `true` | Show root item |
| `renderEllipsis` | `(hiddenItems: number) => ReactNode` | `undefined` | Custom ellipsis renderer |
| `className` | `string` | `undefined` | Additional CSS classes |
| `separatorClassName` | `string` | `undefined` | Separator CSS classes |
| `itemsClassName` | `string` | `undefined` | Items container CSS classes |

### BreadcrumbItem Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `href` | `string` | `undefined` | Link URL |
| `isDisabled` | `boolean` | `false` | Disable this item |
| `isCurrent` | `boolean` | `false` | Mark as current page |
| `startContent` | `ReactNode` | `undefined` | Content before text |
| `endContent` | `ReactNode` | `undefined` | Content after text |
| `onPress` | `(event: MouseEvent) => void` | `undefined` | Click handler |
| `className` | `string` | `undefined` | Additional CSS classes |
| `linkClassName` | `string` | `undefined` | Link element CSS classes |

### BreadcrumbSeparator Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `type` | `'slash' \| 'chevron' \| 'arrow' \| 'dot' \| 'custom'` | `'slash'` | Separator type |
| `customIcon` | `ReactNode` | `undefined` | Custom separator icon |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of separator |
| `color` | `BreadcrumbColor` | `'default'` | Color of separator |

## 🎨 Styling & Customization

### Using Slots

```tsx
<Breadcrumb
  slots={{
    base: "custom-breadcrumb-base",
    list: "custom-breadcrumb-list",
    item: "custom-breadcrumb-item",
    link: "custom-breadcrumb-link",
    separator: "custom-separator"
  }}
>
  {/* items */}
</Breadcrumb>
```

### Using Class Names

```tsx
<Breadcrumb
  classNames={{
    base: "my-breadcrumb",
    list: "my-breadcrumb-list",
    item: "my-breadcrumb-item",
    link: "my-breadcrumb-link",
    separator: "my-separator"
  }}
>
  {/* items */}
</Breadcrumb>
```

### Custom Theme Configuration

```tsx
const customTheme = {
  base: "custom-base-styles",
  list: "custom-list-styles",
  item: "custom-item-styles",
  link: "custom-link-styles",
  separator: "custom-separator-styles"
};

<Breadcrumb theme={customTheme}>
  {/* items */}
</Breadcrumb>
```

## 🎯 Presets

Use predefined configurations for common use cases:

```tsx
import { breadcrumbPresets, applyPreset } from './components/Breadcrumb';

// Navigation preset
const navConfig = applyPreset('navigation');
<Breadcrumb {...navConfig}>
  {/* items */}
</Breadcrumb>

// Website preset
const websiteConfig = applyPreset('website');
<Breadcrumb {...websiteConfig}>
  {/* items */}
</Breadcrumb>

// Admin preset
const adminConfig = applyPreset('admin');
<Breadcrumb {...adminConfig}>
  {/* items */}
</Breadcrumb>

// Compact preset
const compactConfig = applyPreset('compact');
<Breadcrumb {...compactConfig}>
  {/* items */}
</Breadcrumb>
```

## ♿ Accessibility

The Breadcrumb component follows WAI-ARIA guidelines:

- Uses `nav` element with `aria-label="Breadcrumb"`
- Implements proper `aria-current="page"` for current item
- Supports keyboard navigation
- Provides proper focus management
- Uses semantic HTML elements
- Includes screen reader friendly separators

## 🔧 Hooks

### useBreadcrumbContext

Access breadcrumb context in child components:

```tsx
import { useBreadcrumbContext } from './components/Breadcrumb';

function CustomBreadcrumbItem() {
  const { size, color, variant, separator, isDisabled } = useBreadcrumbContext();
  
  return (
    <span className={`breadcrumb-item-${size}-${color}`}>
      Custom Item
    </span>
  );
}
```

### useBreadcrumb

Use breadcrumb logic in custom components:

```tsx
import { useBreadcrumb } from './components/Breadcrumb';

function CustomBreadcrumb(props) {
  const {
    processedChildren,
    slots,
    contextValue,
  } = useBreadcrumb(props);
  
  // Custom rendering logic
}
```

## 📱 Responsive Design

The breadcrumb automatically adapts to different screen sizes:

```tsx
<Breadcrumb className="max-w-full overflow-hidden">
  <BreadcrumbItem href="/" className="flex-shrink-0">Home</BreadcrumbItem>
  <BreadcrumbItem href="/products" className="truncate">Products</BreadcrumbItem>
  <BreadcrumbItem className="truncate">Current Very Long Page Name</BreadcrumbItem>
</Breadcrumb>
```

## 🔄 Animation Support

Enable animations for better user experience:

```tsx
<Breadcrumb
  enableAnimation
  animationType="fade"
  animationDuration={300}
  staggerDelay={50}
>
  {/* items */}
</Breadcrumb>
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [HeroUI](https://heroui.com/) design patterns
- Built with [Tailwind CSS](https://tailwindcss.com/)
- Powered by [tailwind-variants](https://www.tailwind-variants.org/)

---

**Made with ❤️ for the React community**