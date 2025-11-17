# Animation Components Library

A comprehensive animation library built with **Framer Motion** and **TypeScript**, providing smooth, performant animations with accessibility support.

## Features

- 🎨 **6 Core Animation Components** (FadeIn, SlideIn, ScaleIn, RotateIn, Bounce, Stagger)
- ⚡ **High Performance** - Optimized for 60fps animations
- 🎯 **Multiple Triggers** - inView, hover, tap, manual control
- 🎪 **Accessibility First** - Respects user motion preferences
- 📱 **Responsive** - Works across all device sizes
- 🔧 **TypeScript Support** - Full type safety and IntelliSense
- 🎛️ **Highly Customizable** - Extensive props for fine-tuning

## Installation

```bash
npm install framer-motion
```

## Quick Start

```tsx
import { FadeIn, SlideIn, ScaleIn } from './components/Animation';

function MyComponent() {
  return (
    <div>
      <FadeIn>
        <h1>This will fade in when it comes into view</h1>
      </FadeIn>
      
      <SlideIn direction="up" delay={0.2}>
        <p>This slides up from the bottom</p>
      </SlideIn>
      
      <ScaleIn trigger="hover">
        <button>Hover to scale me!</button>
      </ScaleIn>
    </div>
  );
}
```

## Components Overview

### FadeIn
Smooth opacity-based animations for elegant entrances.

```tsx
<FadeIn 
  duration={0.8} 
  delay={0.1} 
  threshold={0.3}
  once={true}
>
  <div>Content fades in smoothly</div>
</FadeIn>
```

### SlideIn  
Directional slide animations from any direction.

```tsx
<SlideIn 
  direction="left" 
  distance={100}
  duration={0.6}
  trigger="inView"
>
  <div>Slides in from the left</div>
</SlideIn>
```

### ScaleIn
Scale-based animations with transform origin control.

```tsx
<ScaleIn 
  from={0.8} 
  to={1.1}
  origin="center"
  trigger="hover"
>
  <div>Scales on hover</div>
</ScaleIn>
```

### RotateIn
Rotation animations with customizable direction and degrees.

```tsx
<RotateIn 
  direction="clockwise"
  degrees={360}
  duration={1.2}
>
  <div>Rotates into view</div>
</RotateIn>
```

### Bounce
Bouncing effects with amplitude and frequency control.

```tsx
<Bounce 
  amplitude={10}
  frequency={2}
  trigger="tap"
>
  <button>Click to bounce!</button>
</Bounce>
```

### Stagger
Sequential animations for multiple children elements.

```tsx
<Stagger staggerDelay={0.1} direction="normal">
  <div>Item 1 - animates first</div>
  <div>Item 2 - animates second</div>
  <div>Item 3 - animates third</div>
</Stagger>
```

## Trigger Types

### inView (Default)
Triggers when element enters the viewport.

```tsx
<FadeIn trigger="inView" threshold={0.5}>
  <div>Animates when 50% visible</div>
</FadeIn>
```

### hover
Triggers on mouse hover (desktop) or touch (mobile).

```tsx
<ScaleIn trigger="hover" to={1.05}>
  <div>Scales on hover</div>
</ScaleIn>
```

### tap
Triggers on click/tap interactions.

```tsx
<Bounce trigger="tap" amplitude={20}>
  <button>Click for bounce effect</button>
</Bounce>
```

### manual
Controlled programmatically via `isActive` prop.

```tsx
const [isActive, setIsActive] = useState(false);

<FadeIn trigger="manual" isActive={isActive}>
  <div>Toggle with button below</div>
</FadeIn>
```

## Animation Presets

Pre-configured animation settings for common use cases:

```tsx
import { animationPresets } from './components/Animation';

// Available presets:
animationPresets.quick    // Fast animations (0.3s)
animationPresets.smooth   // Standard animations (0.6s)  
animationPresets.slow     // Slow animations (1s)
animationPresets.bouncy   // Spring-based easing
animationPresets.snappy   // Sharp easing
```

## Common Props

All animation components share these base props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `trigger` | `'inView' \| 'hover' \| 'tap' \| 'manual'` | `'inView'` | When to trigger the animation |
| `duration` | `number` | `0.6` | Animation duration in seconds |
| `delay` | `number` | `0` | Delay before animation starts |
| `easing` | `EasingType` | `'easeOut'` | Animation easing function |
| `threshold` | `number` | `0.1` | Intersection threshold (0-1) |
| `once` | `boolean` | `false` | Only animate once |
| `disabled` | `boolean` | `false` | Disable animations |
| `isActive` | `boolean` | - | Manual trigger control |
| `className` | `string` | - | Additional CSS classes |

## Performance Optimization

### Reduce Motion Support
Automatically respects user's motion preferences:

```tsx
// Animations automatically disabled if user prefers reduced motion
<FadeIn disabled={false}> // Still respects system preferences
  <div>Content</div>
</FadeIn>
```

### Once-Only Animations
Prevent re-animations for better performance:

```tsx
<SlideIn once={true}>
  <div>Only animates once when first visible</div>
</SlideIn>
```

### Disable When Needed
Disable animations programmatically:

```tsx
const [animationsDisabled, setAnimationsDisabled] = useState(false);

<FadeIn disabled={animationsDisabled}>
  <div>Can be disabled on demand</div>
</FadeIn>
```

## Best Practices

### ✅ Do
- Use `once={true}` for one-time entrance animations
- Adjust `threshold` based on when you want animations to trigger
- Use `disabled` prop to respect accessibility preferences
- Combine different animations for unique effects
- Use `Stagger` for lists and grids
- Consider performance with many simultaneous animations

### ❌ Avoid
- Animating too many elements at once
- Very long durations (>2s) for UI elements
- Animations on critical user interactions without fallbacks
- Ignoring reduced motion preferences
- Overlapping stagger animations

## TypeScript Support

Full TypeScript definitions included:

```tsx
import type { 
  FadeInProps, 
  SlideInProps, 
  AnimationType,
  EasingType 
} from './components/Animation';

const MyComponent: React.FC = () => {
  const handleComplete = (animationType: AnimationType) => {
    console.log(`${animationType} animation completed`);
  };

  return (
    <FadeIn onComplete={handleComplete}>
      <div>Fully typed component</div>
    </FadeIn>
  );
};
```

## Examples

Visit `/animations` in your application to see all components in action with interactive examples and code snippets.

## Dependencies

- React 18+
- Framer Motion 11+
- TypeScript 5+ (optional but recommended)

## Browser Support

- Chrome/Edge 88+
- Firefox 87+
- Safari 14+
- iOS Safari 14+
- Android Chrome 88+

## Contributing

When adding new animation components:

1. Follow the existing TypeScript patterns
2. Include accessibility considerations
3. Add comprehensive examples
4. Test across different trigger types
5. Update this documentation

---

Built with ❤️ using Framer Motion and TypeScript