# AnimatedContainer Components

A comprehensive collection of container components that wrap other elements to provide entrance animations, hover effects, and interactive transitions. Built with Framer Motion for smooth, performant animations with accessibility features.

## Features

- **8 Animation Types**: Fade, Slide, Scale, Bounce, Flip, Stagger, Morphing, and Parallax
- **Multiple Triggers**: inView, hover, focus, manual, and immediate
- **Performance Optimized**: Hardware acceleration, reduced motion support, and cleanup
- **TypeScript Support**: Full type safety with comprehensive prop definitions
- **Responsive**: Mobile-friendly with configurable behavior for different devices
- **Accessibility**: Respects `prefers-reduced-motion` setting automatically

## Installation

```bash
npm install framer-motion
```

## Quick Start

```tsx
import { 
  FadeContainer, 
  SlideContainer, 
  ScaleContainer,
  BounceContainer,
  FlipContainer,
  StaggerContainer,
  MorphingContainer,
  ParallaxContainer
} from './components/AnimatedContainer';

function MyComponent() {
  return (
    <FadeContainer trigger="inView" duration={0.6}>
      <div className="my-content">
        This content fades in when it comes into view
      </div>
    </FadeContainer>
  );
}
```

## Base Props

All animated containers share these common props:

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

### Easing Types

```tsx
type EasingType = 
  | 'linear' 
  | 'easeIn' 
  | 'easeOut' 
  | 'easeInOut' 
  | 'backIn' 
  | 'backOut' 
  | 'backInOut' 
  | 'bounceIn' 
  | 'bounceOut' 
  | 'bounceInOut' 
  | 'elasticIn' 
  | 'elasticOut' 
  | 'elasticInOut';
```

## Components

### FadeContainer

Animates opacity changes with optional blur effects.

#### Basic Usage

```tsx
<FadeContainer trigger="inView" duration={0.8}>
  <div>Content that fades in</div>
</FadeContainer>
```

#### Advanced Usage

```tsx
<FadeContainer 
  trigger="hover"
  duration={0.4}
  startOpacity={0}
  endOpacity={1}
  blur={true}
  blurAmount={5}
  easing="easeOut"
>
  <div>Hover to fade in with blur effect</div>
</FadeContainer>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `startOpacity` | `number` | `0` | Initial opacity value |
| `endOpacity` | `number` | `1` | Final opacity value |
| `blur` | `boolean` | `false` | Enable blur effect |
| `blurAmount` | `number` | `5` | Blur amount in pixels |

### SlideContainer

Animates elements sliding from different directions.

#### Basic Usage

```tsx
<SlideContainer direction="up" distance={50}>
  <div>Slides up from bottom</div>
</SlideContainer>
```

#### All Directions

```tsx
{/* Basic directions */}
<SlideContainer direction="up" />
<SlideContainer direction="down" />
<SlideContainer direction="left" />
<SlideContainer direction="right" />

{/* Diagonal directions */}
<SlideContainer direction="upLeft" />
<SlideContainer direction="upRight" />
<SlideContainer direction="downLeft" />
<SlideContainer direction="downRight" />
```

#### With Overshoot Effect

```tsx
<SlideContainer 
  direction="right"
  distance={100}
  overshoot={true}
  duration={0.8}
  easing="backOut"
>
  <div>Slides with spring overshoot</div>
</SlideContainer>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `SlideDirection` | `'up'` | Direction to slide from |
| `distance` | `number` | `50` | Distance in pixels to slide |
| `overshoot` | `boolean` | `false` | Add spring overshoot effect |

### ScaleContainer

Animates scale transformations with customizable origin points.

#### Basic Usage

```tsx
<ScaleContainer startScale={0.5} endScale={1}>
  <div>Scales up from 50% to 100%</div>
</ScaleContainer>
```

#### With Bounce Effect

```tsx
<ScaleContainer 
  startScale={0.8}
  endScale={1}
  bounce={true}
  scaleOrigin="center"
  duration={0.8}
>
  <div>Bouncy scale animation</div>
</ScaleContainer>
```

#### Hover Scale Effect

```tsx
<ScaleContainer 
  trigger="hover"
  startScale={1}
  endScale={1.1}
  duration={0.3}
  scaleOrigin="center"
>
  <button>Hover to scale up</button>
</ScaleContainer>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `startScale` | `number` | `0.8` | Initial scale value |
| `endScale` | `number` | `1` | Final scale value |
| `scaleOrigin` | `string` | `'center'` | Transform origin point |
| `bounce` | `boolean` | `false` | Add bounce effect |

### BounceContainer

Creates bouncy entrance animations with configurable intensity.

#### Basic Usage

```tsx
<BounceContainer intensity="medium">
  <div>Bounces in with medium intensity</div>
</BounceContainer>
```

#### Different Intensities

```tsx
<BounceContainer intensity="low" duration={0.6}>
  <div>Gentle bounce</div>
</BounceContainer>

<BounceContainer intensity="medium" duration={0.8}>
  <div>Medium bounce</div>
</BounceContainer>

<BounceContainer intensity="high" duration={1.2}>
  <div>Strong bounce</div>
</BounceContainer>
```

#### Custom Bounce

```tsx
<BounceContainer 
  intensity="high"
  bounceCount={2}
  startScale={0.3}
  duration={1.5}
>
  <div>Multiple bounces with custom scale</div>
</BounceContainer>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `intensity` | `'low' \| 'medium' \| 'high'` | `'medium'` | Bounce intensity level |
| `bounceCount` | `number` | `1` | Number of bounces |
| `startScale` | `number` | `0.3` | Initial scale value |

### FlipContainer

Creates 3D flip animations with customizable perspective.

#### Basic Usage

```tsx
<FlipContainer direction="horizontal">
  <div>Flips horizontally</div>
</FlipContainer>
```

#### 3D Flip Effects

```tsx
<FlipContainer 
  direction="vertical"
  perspective={1000}
  duration={1}
  backfaceVisible={false}
>
  <div>3D vertical flip</div>
</FlipContainer>

<FlipContainer 
  direction="both"
  perspective={1200}
  duration={1.5}
>
  <div>Flips on both axes</div>
</FlipContainer>
```

#### Interactive Flip

```tsx
<FlipContainer 
  trigger="hover"
  direction="horizontal"
  perspective={800}
  duration={0.8}
>
  <div className="card">
    <div className="front">Front Side</div>
    <div className="back">Back Side</div>
  </div>
</FlipContainer>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `'horizontal' \| 'vertical' \| 'both'` | `'horizontal'` | Flip direction |
| `perspective` | `number` | `1000` | 3D perspective value |
| `backfaceVisible` | `boolean` | `false` | Show backface during flip |

### StaggerContainer

Animates child elements with staggered timing.

#### Basic Usage

```tsx
<StaggerContainer staggerDelay={0.1}>
  <div>Child 1</div>
  <div>Child 2</div>
  <div>Child 3</div>
  <div>Child 4</div>
</StaggerContainer>
```

#### Card Grid with Stagger

```tsx
<StaggerContainer 
  staggerDelay={0.15}
  staggerDirection="normal"
  duration={0.6}
>
  <div className="grid grid-cols-3 gap-4">
    {items.map((item, index) => (
      <div key={index} className="card">
        {item.content}
      </div>
    ))}
  </div>
</StaggerContainer>
```

#### Reverse Stagger

```tsx
<StaggerContainer 
  staggerDelay={0.1}
  staggerDirection="reverse"
  childSelector="> .item"
>
  <div className="item">Last to animate</div>
  <div className="item">Second to last</div>
  <div className="item">First to animate</div>
</StaggerContainer>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `staggerDelay` | `number` | `0.1` | Delay between child animations |
| `staggerDirection` | `'normal' \| 'reverse' \| 'alternate'` | `'normal'` | Stagger direction |
| `childSelector` | `string` | `'> *'` | CSS selector for children |

### MorphingContainer

Animates between different container states (size, shape, color).

#### Basic Usage

```tsx
const morphStates = [
  { width: '200px', height: '200px', borderRadius: '0px', backgroundColor: '#3b82f6' },
  { width: '300px', height: '150px', borderRadius: '20px', backgroundColor: '#ef4444' },
  { width: '250px', height: '250px', borderRadius: '50%', backgroundColor: '#10b981' },
];

<MorphingContainer 
  morphStates={morphStates}
  autoMorph={true}
  morphInterval={2000}
>
  <div>Content inside morphing container</div>
</MorphingContainer>
```

#### Manual Control with Hook

```tsx
import { useMorphingContainer } from './components/AnimatedContainer';

function MyComponent() {
  const { currentIndex, morphToNext, morphToPrevious, morphToIndex } = 
    useMorphingContainer(morphStates);

  return (
    <div>
      <MorphingContainer 
        morphStates={morphStates}
        autoMorph={false}
      >
        <div>Manually controlled morphing</div>
      </MorphingContainer>
      
      <button onClick={morphToNext}>Next State</button>
      <button onClick={morphToPrevious}>Previous State</button>
      <button onClick={() => morphToIndex(2)}>Go to State 3</button>
    </div>
  );
}
```

#### Hover Morphing

```tsx
<MorphingContainer 
  trigger="hover"
  morphStates={[
    { width: '200px', height: '200px', backgroundColor: '#blue' },
    { width: '250px', height: '180px', backgroundColor: '#red' }
  ]}
  autoMorph={false}
  duration={0.5}
>
  <div>Hover to morph</div>
</MorphingContainer>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `morphStates` | `Array<MorphState>` | `[]` | Array of container states |
| `morphInterval` | `number` | `3000` | Auto-morph interval (ms) |
| `autoMorph` | `boolean` | `true` | Enable automatic morphing |

#### MorphState Interface

```tsx
interface MorphState {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  backgroundColor?: string;
  transform?: string;
}
```

### ParallaxContainer

Creates parallax scroll effects with configurable speed and direction.

#### Basic Usage

```tsx
<ParallaxContainer speed={0.5} direction="vertical">
  <div>Content moves at 50% scroll speed</div>
</ParallaxContainer>
```

#### Different Speeds

```tsx
{/* Slow parallax */}
<ParallaxContainer speed={0.2}>
  <div>Moves slowly</div>
</ParallaxContainer>

{/* Medium parallax */}
<ParallaxContainer speed={0.5}>
  <div>Moves at medium speed</div>
</ParallaxContainer>

{/* Fast parallax */}
<ParallaxContainer speed={0.8}>
  <div>Moves quickly</div>
</ParallaxContainer>
```

#### Horizontal and Both Directions

```tsx
<ParallaxContainer 
  speed={0.3}
  direction="horizontal"
  enableOnMobile={true}
>
  <div>Horizontal parallax</div>
</ParallaxContainer>

<ParallaxContainer 
  speed={0.4}
  direction="both"
  offset={100}
>
  <div>Both horizontal and vertical</div>
</ParallaxContainer>
```

#### Using the Hook

```tsx
import { useParallaxContainer } from './components/AnimatedContainer';

function MyComponent() {
  const { isActive, transformValue, scrollY } = useParallaxContainer({
    speed: 0.5,
    direction: 'vertical',
    enableOnMobile: false
  });

  return (
    <motion.div style={transformValue}>
      <div>Custom parallax implementation</div>
      <p>Scroll Y: {scrollY.get()}</p>
      <p>Active: {isActive ? 'Yes' : 'No'}</p>
    </motion.div>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `speed` | `number` | `0.5` | Parallax speed multiplier |
| `direction` | `'vertical' \| 'horizontal' \| 'both'` | `'vertical'` | Parallax direction |
| `offset` | `number` | `0` | Starting offset value |
| `enableOnMobile` | `boolean` | `false` | Enable on mobile devices |

## Trigger Types

### inView
Animates when the element enters the viewport.

```tsx
<FadeContainer trigger="inView">
  <div>Animates when visible</div>
</FadeContainer>
```

### hover
Animates on mouse enter/leave.

```tsx
<ScaleContainer trigger="hover" startScale={1} endScale={1.1}>
  <button>Hover me</button>
</ScaleContainer>
```

### focus
Animates on focus/blur events.

```tsx
<SlideContainer trigger="focus" direction="up">
  <input placeholder="Focus to animate" />
</SlideContainer>
```

### immediate
Animates immediately on mount.

```tsx
<BounceContainer trigger="immediate">
  <div>Animates right away</div>
</BounceContainer>
```

### manual
Controlled programmatically (requires custom implementation).

```tsx
<FlipContainer trigger="manual" ref={containerRef}>
  <div>Controlled externally</div>
</FlipContainer>
```

## Advanced Usage

### Custom Variants

```tsx
const customVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8, 
    filter: 'blur(10px)' 
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      ease: 'easeOut'
    }
  },
};

<FadeContainer variants={customVariants}>
  <div>Custom animation variants</div>
</FadeContainer>
```

### Performance Optimization

```tsx
import { 
  optimizeAnimation, 
  cleanupOptimization,
  useReducedMotion 
} from './components/AnimatedContainer/helpers';

function MyComponent() {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && !reducedMotion) {
      optimizeAnimation(ref.current);
      
      return () => {
        if (ref.current) {
          cleanupOptimization(ref.current);
        }
      };
    }
  }, [reducedMotion]);

  return (
    <div ref={ref}>
      Optimized for performance
    </div>
  );
}
```

### Animation Events

```tsx
<SlideContainer 
  onAnimationStart={() => console.log('Animation started')}
  onAnimationComplete={() => console.log('Animation completed')}
>
  <div>Content with event handlers</div>
</SlideContainer>
```

### Complex Combinations

```tsx
<StaggerContainer staggerDelay={0.2}>
  <SlideContainer direction="left">
    <div>Slides left, then staggers</div>
  </SlideContainer>
  <ScaleContainer bounce>
    <div>Scales with bounce, then staggers</div>
  </ScaleContainer>
  <FadeContainer blur>
    <div>Fades with blur, then staggers</div>
  </FadeContainer>
</StaggerContainer>
```

## Helper Functions

### Easing Configuration

```tsx
import { getEasingTransition } from './components/AnimatedContainer/helpers';

const transition = getEasingTransition('backOut', 0.8);
// Returns: { duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }
```

### Distance Calculations

```tsx
import { getSlideDistance } from './components/AnimatedContainer/helpers';

const distance = getSlideDistance('upRight', 100);
// Returns: { x: 100, y: -100 }
```

### Flip Rotations

```tsx
import { getFlipRotation } from './components/AnimatedContainer/helpers';

const rotation = getFlipRotation('both');
// Returns: { rotateX: 180, rotateY: 180 }
```

## Accessibility

### Reduced Motion Support

All components automatically respect the user's `prefers-reduced-motion` setting:

```tsx
// Animations are automatically disabled for users who prefer reduced motion
<FadeContainer>
  <div>Respects accessibility preferences</div>
</FadeContainer>
```

### Manual Disable

```tsx
<SlideContainer disabled={shouldDisableAnimations}>
  <div>Can be manually disabled</div>
</SlideContainer>
```

### Focus Management

```tsx
<FlipContainer trigger="focus" tabIndex={0}>
  <div>Accessible focus interactions</div>
</FlipContainer>
```

## Performance Considerations

### Mobile Optimization

```tsx
// Parallax disabled on mobile by default
<ParallaxContainer enableOnMobile={false}>
  <div>Desktop-only parallax</div>
</ParallaxContainer>
```

### Hardware Acceleration

All components automatically apply hardware acceleration optimizations:

- `will-change` CSS property during animations
- `backface-visibility: hidden` for 3D transforms
- Automatic cleanup after animations complete

### Viewport Detection

Animations only trigger when elements are in the viewport, saving resources:

```tsx
// Uses Intersection Observer for efficient viewport detection
<FadeContainer trigger="inView" margin="0px 0px -10% 0px">
  <div>Only animates when visible</div>
</FadeContainer>
```

## TypeScript Support

Full TypeScript support with detailed prop types:

```tsx
import type { 
  FadeContainerProps,
  SlideContainerProps,
  ScaleContainerProps,
  BounceContainerProps,
  FlipContainerProps,
  StaggerContainerProps,
  MorphingContainerProps,
  ParallaxContainerProps,
  TriggerType,
  SlideDirection,
  FlipDirection,
  AnimationIntensity,
  EasingType
} from './components/AnimatedContainer/types';
```

## Browser Support

- Modern browsers with CSS transforms support
- Framer Motion compatibility requirements
- Automatic fallbacks for unsupported features
- Progressive enhancement approach

## Examples

See the complete implementation examples in:
- `src/pages/AnimatedContainersPage.tsx` - Full demo page
- `src/components/AnimatedContainer/` - Source code examples

The demo page showcases all components with various configurations, trigger types, and use cases in a real application context.