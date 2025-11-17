# Animated Container Components

A comprehensive collection of React container components that wrap other elements to provide entrance animations, hover effects, and interactive transitions. Built with TypeScript, Framer Motion, and performance optimization in mind.

## Features

- ✨ **8 Container Types**: Fade, Slide, Scale, Bounce, Flip, Stagger, Morphing, and Parallax
- 🎯 **Multiple Triggers**: inView, hover, focus, manual, and immediate
- 📱 **Mobile Friendly**: Optimized for mobile devices with reduced motion support
- 🎨 **Customizable**: Extensive configuration options for each container type
- 🔧 **TypeScript Support**: Full type safety with IntelliSense
- ⚡ **Performance Optimized**: Uses will-change CSS property and cleanup for smooth animations
- ♿ **Accessibility**: Respects user's reduced motion preferences
- 🪝 **Custom Hooks**: useParallaxContainer and useMorphingContainer for advanced control

## Installation

```bash
npm install framer-motion
```

## Quick Start

```tsx
import { FadeContainer, SlideContainer } from './components/AnimatedContainer';

function App() {
  return (
    <div>
      <FadeContainer trigger="inView" duration={0.8}>
        <div className="card">
          <h2>This content fades in when scrolled into view</h2>
        </div>
      </FadeContainer>

      <SlideContainer trigger="hover" direction="up" duration={0.4}>
        <button>Hover me to see slide effect</button>
      </SlideContainer>
    </div>
  );
}
```

## Container Types

### 1. FadeContainer

Provides fade in/out animations with optional blur effects.

```tsx
<FadeContainer 
  trigger="inView"
  duration={0.8}
  blur={true}
  blurAmount={5}
  startOpacity={0}
  endOpacity={1}
>
  <div>Content that fades in</div>
</FadeContainer>
```

**Props:**
- `startOpacity?: number` - Starting opacity (default: 0)
- `endOpacity?: number` - Ending opacity (default: 1)
- `blur?: boolean` - Enable blur effect
- `blurAmount?: number` - Blur intensity in pixels

### 2. SlideContainer

Animates elements sliding from 8 different directions.

```tsx
<SlideContainer
  trigger="inView"
  direction="up"
  distance={50}
  overshoot={true}
  duration={0.6}
>
  <div>Content that slides up</div>
</SlideContainer>
```

**Props:**
- `direction?: SlideDirection` - Direction: 'up' | 'down' | 'left' | 'right' | 'upLeft' | 'upRight' | 'downLeft' | 'downRight'
- `distance?: number` - Slide distance in pixels (default: 50)
- `overshoot?: boolean` - Add overshoot effect

### 3. ScaleContainer

Provides scale/zoom animations with bounce effects.

```tsx
<ScaleContainer
  trigger="hover"
  startScale={0.8}
  endScale={1.1}
  scaleOrigin="center"
  bounce={true}
  duration={0.4}
>
  <div>Content that scales on hover</div>
</ScaleContainer>
```

**Props:**
- `startScale?: number` - Starting scale (default: 0.8)
- `endScale?: number` - Ending scale (default: 1)
- `scaleOrigin?: string` - Transform origin (default: 'center')
- `bounce?: boolean` - Add bounce effect

### 4. BounceContainer

Creates bouncing entrance animations with configurable intensity.

```tsx
<BounceContainer
  trigger="inView"
  intensity="high"
  bounceCount={3}
  startScale={0.3}
  duration={1}
>
  <div>Content that bounces in</div>
</BounceContainer>
```

**Props:**
- `intensity?: AnimationIntensity` - 'low' | 'medium' | 'high'
- `bounceCount?: number` - Number of bounces
- `startScale?: number` - Starting scale

### 5. FlipContainer

Provides 3D flip animations with perspective control.

```tsx
<FlipContainer
  trigger="inView"
  direction="horizontal"
  perspective={1000}
  backfaceVisible={false}
  duration={1}
>
  <div>Content that flips in 3D</div>
</FlipContainer>
```

**Props:**
- `direction?: FlipDirection` - 'horizontal' | 'vertical' | 'both'
- `perspective?: number` - 3D perspective value
- `backfaceVisible?: boolean` - Show backface during flip

### 6. StaggerContainer

Animates multiple child elements with staggered delays.

```tsx
<StaggerContainer
  trigger="inView"
  staggerDelay={0.1}
  staggerDirection="normal"
  childSelector="div"
  duration={0.6}
>
  <div>
    <div>Child 1</div>
    <div>Child 2</div>
    <div>Child 3</div>
  </div>
</StaggerContainer>
```

**Props:**
- `staggerDelay?: number` - Delay between child animations
- `staggerDirection?: 'normal' | 'reverse' | 'alternate'`
- `childSelector?: string` - CSS selector for children

### 7. MorphingContainer

Morphs between different shapes, sizes, and colors.

```tsx
const morphStates = [
  { width: '200px', height: '200px', borderRadius: '0px', backgroundColor: '#3b82f6' },
  { width: '300px', height: '150px', borderRadius: '20px', backgroundColor: '#ef4444' },
  { width: '250px', height: '250px', borderRadius: '50%', backgroundColor: '#10b981' },
];

<MorphingContainer
  trigger="inView"
  morphStates={morphStates}
  morphInterval={2000}
  autoMorph={true}
  duration={0.8}
>
  <div>Content inside morphing shape</div>
</MorphingContainer>
```

**Props:**
- `morphStates?: Array<MorphState>` - Array of morph states
- `morphInterval?: number` - Auto-morph interval in ms
- `autoMorph?: boolean` - Enable automatic morphing

### 8. ParallaxContainer

Creates scroll-based parallax effects.

```tsx
<ParallaxContainer
  trigger="inView"
  speed={0.5}
  direction="vertical"
  offset={0}
  enableOnMobile={false}
>
  <div>Content with parallax effect</div>
</ParallaxContainer>
```

**Props:**
- `speed?: number` - Parallax speed multiplier
- `direction?: 'vertical' | 'horizontal' | 'both'`
- `offset?: number` - Starting offset
- `enableOnMobile?: boolean` - Enable on mobile devices

## Common Props

All containers share these base props:

```tsx
interface BaseAnimatedContainerProps {
  children: ReactNode;
  trigger?: 'inView' | 'hover' | 'focus' | 'manual' | 'immediate';
  delay?: number;
  duration?: number;
  easing?: EasingType;
  disabled?: boolean;
  variants?: Variants;
  transition?: Transition;
  className?: string;
  style?: React.CSSProperties;
  onAnimationStart?: () => void;
  onAnimationComplete?: () => void;
}
```

## Custom Hooks

### useMorphingContainer

Control morphing animations programmatically:

```tsx
import { useMorphingContainer } from './components/AnimatedContainer';

function MyComponent() {
  const morphing = useMorphingContainer(morphStates);

  return (
    <div>
      <button onClick={morphing.morphToNext}>Next Shape</button>
      <button onClick={morphing.morphToPrevious}>Previous Shape</button>
      <button onClick={() => morphing.morphToIndex(2)}>Go to Shape 3</button>
      <p>Current: {morphing.currentIndex}</p>
    </div>
  );
}
```

### useParallaxContainer

Access parallax values and controls:

```tsx
import { useParallaxContainer } from './components/AnimatedContainer';

function MyComponent() {
  const parallax = useParallaxContainer({
    speed: 0.5,
    direction: 'vertical',
    enableOnMobile: true
  });

  return (
    <div style={parallax.transformValue}>
      <p>Active: {parallax.isActive}</p>
      <p>Mobile: {parallax.isMobile}</p>
    </div>
  );
}
```

## Trigger Types

### `inView` (default)
Triggers when element enters viewport:
```tsx
<FadeContainer trigger="inView">
  <div>Animates when scrolled into view</div>
</FadeContainer>
```

### `hover`
Triggers on mouse hover:
```tsx
<ScaleContainer trigger="hover">
  <div>Scales on hover</div>
</ScaleContainer>
```

### `focus`
Triggers on focus (useful for form elements):
```tsx
<SlideContainer trigger="focus">
  <input placeholder="Slides when focused" />
</SlideContainer>
```

### `immediate`
Triggers immediately on mount:
```tsx
<BounceContainer trigger="immediate">
  <div>Bounces immediately</div>
</BounceContainer>
```

### `manual`
Controlled programmatically (requires ref or state management):
```tsx
<FlipContainer trigger="manual">
  <div>Controlled externally</div>
</FlipContainer>
```

## Easing Types

Available easing options:
- `linear`
- `easeIn`, `easeOut`, `easeInOut`
- `backIn`, `backOut`, `backInOut`
- `bounceIn`, `bounceOut`, `bounceInOut`
- `elasticIn`, `elasticOut`, `elasticInOut`

```tsx
<SlideContainer easing="backInOut" duration={0.8}>
  <div>Custom easing animation</div>
</SlideContainer>
```

## Performance Features

### Reduced Motion Support
Automatically detects and respects user's motion preferences:
```tsx
// Automatically handled - no animation if user prefers reduced motion
<FadeContainer trigger="inView">
  <div>Respects accessibility settings</div>
</FadeContainer>
```

### Mobile Optimization
Parallax effects can be disabled on mobile for better performance:
```tsx
<ParallaxContainer enableOnMobile={false}>
  <div>No parallax on mobile devices</div>
</ParallaxContainer>
```

### Performance Optimization
All containers automatically optimize rendering:
- Uses `will-change` CSS property during animations
- Cleanup optimization after animations complete
- Viewport detection to only animate visible elements

## Advanced Usage

### Custom Variants
Override default animation variants:
```tsx
const customVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -180 },
  visible: { opacity: 1, scale: 1, rotate: 0 }
};

<FadeContainer variants={customVariants}>
  <div>Custom animation</div>
</FadeContainer>
```

### Custom Transitions
Fine-tune animation timing:
```tsx
const customTransition = {
  type: "spring",
  stiffness: 100,
  damping: 10,
  mass: 1
};

<ScaleContainer transition={customTransition}>
  <div>Custom spring animation</div>
</ScaleContainer>
```

### Nesting Containers
Combine multiple containers for complex effects:
```tsx
<FadeContainer trigger="inView" duration={0.6}>
  <SlideContainer trigger="immediate" direction="up" delay={0.2}>
    <ScaleContainer trigger="immediate" startScale={0.8} delay={0.4}>
      <div>Multiple layered animations</div>
    </ScaleContainer>
  </SlideContainer>
</FadeContainer>
```

## Browser Support

- Chrome 51+
- Firefox 54+
- Safari 10+
- Edge 79+

Requires support for:
- CSS Transforms
- IntersectionObserver API
- RequestAnimationFrame

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Examples

Visit `/animated-containers` in the application to see all containers in action with interactive examples and code snippets.