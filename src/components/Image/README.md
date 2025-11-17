# Image Component

A comprehensive React image component with advanced features including lazy loading, fallback images, zoom effects, blur effects, and skeleton loading animations.

## Features

- ✅ **Lazy Loading**: Built-in support for lazy loading with `loading="lazy"`
- ✅ **Fallback Images**: Automatic fallback when main image fails to load
- ✅ **Zoom Effect**: Smooth hover zoom animation
- ✅ **Blur Effect**: Artistic blurred background effect
- ✅ **Skeleton Loading**: Animated loading placeholder
- ✅ **Responsive**: Support for `srcSet` and `sizes` attributes
- ✅ **Radius Variants**: Multiple border radius options
- ✅ **Shadow Variants**: Various shadow depth options
- ✅ **TypeScript**: Full TypeScript support with comprehensive types
- ✅ **Customizable**: Flexible styling with custom classes

## Installation

This component is part of the library-component package. Import it directly:

```tsx
import { Image } from './components/Image';
```

## Basic Usage

```tsx
import { Image } from './components/Image';

function App() {
  return (
    <Image
      src="https://example.com/image.jpg"
      alt="Description of image"
      width={300}
      height={200}
    />
  );
}
```

## API Reference

### Image Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | **Required.** Image source URL |
| `alt` | `string` | - | **Required.** Alternative text for accessibility |
| `srcSet` | `string` | - | Image source set for responsive images |
| `sizes` | `string` | - | Image sizes attribute for responsive images |
| `width` | `number` | - | Image width |
| `height` | `number` | - | Image height |
| `radius` | `"none" \| "sm" \| "md" \| "lg" \| "full"` | `"lg"` | Border radius variant |
| `shadow` | `"none" \| "sm" \| "md" \| "lg"` | `"none"` | Shadow variant |
| `loading` | `"eager" \| "lazy"` | `"lazy"` | Loading behavior |
| `fallbackSrc` | `string` | - | Fallback image URL when main image fails |
| `isBlurred` | `boolean` | `false` | Enable blur background effect |
| `isZoomed` | `boolean` | `false` | Enable zoom on hover effect |
| `removeWrapper` | `boolean` | `false` | Remove wrapper div |
| `disableSkeleton` | `boolean` | `false` | Disable skeleton loading animation |
| `className` | `string` | - | Additional CSS classes |
| `classNames` | `object` | - | Custom classes for different slots |
| `onLoad` | `function` | - | Image load event handler |
| `onError` | `function` | - | Image error event handler |

### Class Names Slots

The `classNames` prop allows you to customize different parts of the component:

```tsx
<Image
  src="image.jpg"
  alt="Example"
  classNames={{
    wrapper: "custom-wrapper-class",
    img: "custom-image-class",
    zoomedWrapper: "custom-zoom-wrapper-class",
    blurredImg: "custom-blur-class"
  }}
/>
```

| Slot | Description |
|------|-------------|
| `wrapper` | Main wrapper element |
| `img` | The main image element |
| `zoomedWrapper` | Wrapper when zoom is enabled |
| `blurredImg` | Blurred background image |

## Examples

### Basic Image

```tsx
<Image
  src="https://picsum.photos/300/200"
  alt="Basic image example"
  width={300}
  height={200}
/>
```

### With Fallback

```tsx
<Image
  src="https://broken-url.jpg"
  alt="Image with fallback"
  fallbackSrc="https://picsum.photos/300/200"
  width={300}
  height={200}
/>
```

### Blur Effect

```tsx
<Image
  src="https://picsum.photos/300/200"
  alt="Blurred image"
  width={300}
  height={200}
  isBlurred={true}
/>
```

### Zoom Effect

```tsx
<Image
  src="https://picsum.photos/300/200"
  alt="Zoomable image"
  width={300}
  height={200}
  isZoomed={true}
/>
```

### Different Radius

```tsx
{/* Rounded */}
<Image src="image.jpg" alt="Rounded" radius="lg" />

{/* Circular */}
<Image src="image.jpg" alt="Circular" radius="full" />

{/* No radius */}
<Image src="image.jpg" alt="Sharp" radius="none" />
```

### With Shadow

```tsx
<Image
  src="https://picsum.photos/300/200"
  alt="Image with shadow"
  width={300}
  height={200}
  shadow="lg"
/>
```

### Combined Effects

```tsx
<Image
  src="https://picsum.photos/300/200"
  alt="All effects combined"
  width={300}
  height={200}
  isBlurred={true}
  isZoomed={true}
  shadow="lg"
  radius="lg"
  fallbackSrc="https://picsum.photos/300/200?backup"
/>
```

### Responsive Image

```tsx
<Image
  src="https://picsum.photos/800/600"
  srcSet="
    https://picsum.photos/400/300 400w,
    https://picsum.photos/800/600 800w,
    https://picsum.photos/1200/900 1200w
  "
  sizes="(max-width: 640px) 400px, (max-width: 1200px) 800px, 1200px"
  alt="Responsive image"
/>
```

### Custom Styling

```tsx
<Image
  src="https://picsum.photos/300/200"
  alt="Custom styled image"
  width={300}
  height={200}
  className="border-4 border-blue-500"
  classNames={{
    wrapper: "p-4 bg-gray-100",
    img: "grayscale hover:grayscale-0 transition-all duration-300"
  }}
/>
```

## Accessibility

The Image component follows accessibility best practices:

- Always provide meaningful `alt` text
- The component supports all standard image attributes
- Blurred background images are marked with `aria-hidden="true"`
- Proper loading states are announced to screen readers

## Performance

- **Lazy Loading**: Images load only when they enter the viewport
- **Skeleton Animation**: Provides visual feedback during loading
- **Fallback Support**: Graceful degradation when images fail
- **Optimized Rendering**: Minimal DOM manipulation and efficient re-renders

## Browser Support

The Image component works in all modern browsers that support:
- CSS transforms (zoom effect)
- CSS blur filters (blur effect)
- Intersection Observer API (lazy loading)

## TypeScript

Full TypeScript support with comprehensive type definitions:

```tsx
import type { ImageProps, ImageRadius, ImageShadow } from './components/Image';

const MyImage: React.FC<ImageProps> = (props) => {
  return <Image {...props} />;
};
```