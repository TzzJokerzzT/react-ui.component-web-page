# Spinner Component

A comprehensive collection of animated loading spinners built with **Framer Motion** and **Tailwind CSS**. Features multiple animation types, customizable variants, and full TypeScript support.

## 🚀 Features

- **8 Animation Types**: rotating, pulse, bounce, wave, ring, dots, bars, grid
- **5 Size Variants**: xs, sm, md, lg, xl  
- **6 Color Themes**: primary, secondary, success, warning, error, neutral
- **3 Speed Options**: slow, normal, fast
- **Overlay Support**: Full-screen overlay mode with customizable opacity
- **Label Support**: Optional loading text below spinner
- **TypeScript**: Full type safety with comprehensive interfaces
- **Accessibility**: ARIA labels and screen reader support
- **Framer Motion**: Smooth, performant animations

## 📦 Installation

The component uses **Framer Motion** for animations. Ensure it's installed:

```bash
npm install framer-motion
```

## 🎯 Basic Usage

```tsx
import { Spinner } from './components/Spinner';

// Basic spinner
<Spinner />

// Customized spinner
<Spinner
  type="pulse"
  size="lg"
  color="primary"
  speed="fast"
  label="Loading..."
/>
```

## 🎨 Animation Types

### Rotating Spinner
Classic circular loading indicator with rotation animation.
```tsx
<Spinner type="rotating" />
```

### Pulse Spinner  
Pulsing dot that scales and fades rhythmically.
```tsx
<Spinner type="pulse" />
```

### Bounce Spinner
Three dots bouncing up and down in sequence.
```tsx
<Spinner type="bounce" />
```

### Wave Spinner
Five bars animating in wave pattern with varying heights.
```tsx
<Spinner type="wave" />
```

### Ring Spinner
Loading ring with trailing gradient effect.
```tsx
<Spinner type="ring" />
```

### Dots Spinner
Sequence of dots with staggered animation.
```tsx
<Spinner type="dots" />
```

### Bars Spinner
Animated bars with wave-like motion.
```tsx
<Spinner type="bars" />
```

### Grid Spinner (Future)
Grid pattern with sequential cell animation.
```tsx
<Spinner type="grid" />
```

## 📏 Size Variants

```tsx
<Spinner size="xs" />   {/* 12px */}
<Spinner size="sm" />   {/* 16px */}
<Spinner size="md" />   {/* 24px - default */}
<Spinner size="lg" />   {/* 32px */}
<Spinner size="xl" />   {/* 48px */}
```

## 🎨 Color Themes

```tsx
<Spinner color="primary" />    {/* Blue */}
<Spinner color="secondary" />  {/* Gray */}
<Spinner color="success" />    {/* Green */}
<Spinner color="warning" />    {/* Yellow */}
<Spinner color="error" />      {/* Red */}
<Spinner color="neutral" />    {/* Light Gray */}
```

## ⚡ Speed Control

```tsx
<Spinner speed="slow" />    {/* 2.0s duration */}
<Spinner speed="normal" />  {/* 1.0s duration - default */}
<Spinner speed="fast" />    {/* 0.6s duration */}
```

## 🏷️ With Labels

```tsx
<Spinner 
  type="rotating"
  size="md"
  color="primary"
  label="Loading data..."
/>
```

## 🖼️ Overlay Mode

Create full-screen loading overlays:

```tsx
<Spinner
  type="pulse"
  size="lg"
  color="primary"
  overlay={true}
  overlayOpacity={0.8}
  overlayColor="bg-white"
  label="Processing..."
/>
```

## 🎛️ Advanced Configuration

### Custom Animation Config
```tsx
<Spinner
  type="bounce"
  animationConfig={{
    duration: 1.5,
    delay: 0.2,
    repeat: Infinity,
    repeatType: 'reverse'
  }}
/>
```

### Conditional Rendering
```tsx
const [loading, setLoading] = useState(false);

<Spinner
  type="rotating"
  visible={loading}
  label={loading ? "Loading..." : undefined}
/>
```

## 🔧 API Reference

### SpinnerProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `SpinnerType` | `'rotating'` | Animation type |
| `size` | `SpinnerSize` | `'md'` | Component size |
| `color` | `SpinnerColor` | `'primary'` | Color theme |
| `speed` | `SpinnerSpeed` | `'normal'` | Animation speed |
| `visible` | `boolean` | `true` | Show/hide spinner |
| `label` | `string` | `undefined` | Optional label text |
| `overlay` | `boolean` | `false` | Full-screen overlay mode |
| `overlayOpacity` | `number` | `0.8` | Overlay background opacity |
| `overlayColor` | `string` | `'bg-white'` | Overlay background color |
| `animationConfig` | `SpinnerAnimationConfig` | `{}` | Custom animation settings |
| `className` | `string` | `undefined` | Additional CSS classes |
| `aria-label` | `string` | `'Loading'` | Accessibility label |
| `data-testid` | `string` | `'spinner'` | Test identifier |

### SpinnerType
```tsx
type SpinnerType = 
  | 'rotating' 
  | 'pulse' 
  | 'bounce' 
  | 'wave' 
  | 'ring' 
  | 'dots' 
  | 'bars' 
  | 'grid';
```

### SpinnerSize
```tsx
type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
```

### SpinnerColor
```tsx
type SpinnerColor = 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'warning' 
  | 'error' 
  | 'neutral';
```

### SpinnerSpeed
```tsx
type SpinnerSpeed = 'slow' | 'normal' | 'fast';
```

## 🎨 Customization

### Custom Styles
```tsx
<Spinner
  className="custom-spinner"
  style={{ margin: '20px' }}
/>
```

### Tailwind Classes
```tsx
<Spinner
  className="m-4 p-2 bg-blue-50 rounded-lg"
/>
```

## ♿ Accessibility

The component includes built-in accessibility features:

- `role="status"` for screen readers
- `aria-live="polite"` for live updates  
- `aria-label` for description
- Proper semantic structure

```tsx
<Spinner
  aria-label="Loading user data"
  data-testid="user-data-spinner"
/>
```

## 🧪 Testing

```tsx
import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';

test('renders spinner with label', () => {
  render(
    <Spinner
      type="rotating"
      label="Loading..."
      data-testid="test-spinner"
    />
  );
  
  expect(screen.getByTestId('test-spinner')).toBeInTheDocument();
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});
```

## 📱 Responsive Design

Spinners automatically scale appropriately across devices:

```tsx
{/* Mobile-first approach */}
<Spinner 
  size="sm"        // Mobile
  className="md:hidden"
/>
<Spinner 
  size="md"        // Tablet+
  className="hidden md:block"
/>
```

## 🎯 Common Patterns

### Loading States
```tsx
const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async () => {
  setIsLoading(true);
  try {
    await submitData();
  } finally {
    setIsLoading(false);
  }
};

return (
  <div className="relative">
    {isLoading && (
      <Spinner
        type="pulse"
        overlay={true}
        label="Saving..."
      />
    )}
    <form onSubmit={handleSubmit}>
      {/* Form content */}
    </form>
  </div>
);
```

### Conditional Rendering
```tsx
{loading ? (
  <Spinner type="bounce" label="Loading..." />
) : (
  <div>Content loaded!</div>
)}
```

### Button Loading States
```tsx
<button disabled={loading}>
  {loading ? (
    <Spinner size="sm" type="rotating" />
  ) : (
    'Submit'
  )}
</button>
```

## 🔮 Future Enhancements

- **Grid Spinner**: 3x3 grid pattern animation
- **Custom Animations**: User-defined animation variants
- **Spinner Container**: Wrapper component for loading states
- **Progress Spinner**: Ring spinner with progress indication
- **More Color Variants**: Extended color palette
- **RTL Support**: Right-to-left language support

## 🤝 Contributing

1. Add new animation types in `variants.ts`
2. Extend TypeScript interfaces in `types.ts`
3. Update main component in `Spinner.tsx`
4. Add showcase examples in `SpinnerPage.tsx`
5. Update documentation

## 📄 License

MIT License - feel free to use in your projects!

---

**Built with ❤️ using React, TypeScript, Framer Motion, and Tailwind CSS**