# TextAnimation Components

A comprehensive collection of text animation components built with React, TypeScript, and Framer Motion. Features typewriter effects, text reveals, counters, gradients, morphing text, and glitch effects.

## Installation

```tsx
import {
  TypeWriter,
  RevealText,
  CounterText,
  GradientText,
  MorphingText,
  GlitchText,
} from '../components/TextAnimation';
```

## Components Overview

- **TypeWriter** - Typewriter effect with cursor and deletion options
- **RevealText** - Text reveals by letter, word, or line with directional effects
- **CounterText** - Animated number counters with formatting
- **GradientText** - Animated gradient text effects
- **MorphingText** - Text morphing between multiple states
- **GlitchText** - Digital glitch and corruption effects

---

## TypeWriter Component

Creates a typewriter effect where text appears character by character, with optional cursor, deletion, and multiple text cycling.

### Basic Usage

```tsx
<TypeWriter 
  text="Hello, World! This is a typing animation."
  speed={50}
  showCursor={true}
  trigger="inView"
/>
```

### Multiple Texts with Cycling

```tsx
<TypeWriter 
  texts={['Innovation', 'Creativity', 'Excellence', 'Design']}
  speed={30}
  showCursor={true}
  deleteAfter={true}
  deleteSpeed={50}
  pauseBeforeDelete={1}
  loop={true}
  trigger="inView"
/>
```

### Different Cursor Styles

```tsx
{/* Block cursor */}
<TypeWriter 
  text="Block cursor example"
  cursor="block"
  cursorColor="#ff0000"
  showCursor={true}
/>

{/* Line cursor */}
<TypeWriter 
  text="Line cursor example"
  cursor="line"
  cursorColor="#00ff00"
  showCursor={true}
/>

{/* Underscore cursor */}
<TypeWriter 
  text="Underscore cursor example"
  cursor="underscore"
  cursorColor="#0000ff"
  showCursor={true}
/>
```

### Trigger Types

```tsx
{/* Hover triggered */}
<TypeWriter 
  text="Hover me to start typing!"
  trigger="hover"
  speed={40}
/>

{/* Manual control */}
const [isActive, setIsActive] = useState(false);

<button onClick={() => setIsActive(!isActive)}>
  Toggle Typing
</button>
<TypeWriter 
  text="Click the button to control me!"
  trigger="manual"
  isActive={isActive}
  speed={30}
/>
```

### TypeWriter Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | - | Text content to type (required) |
| `texts` | `string[]` | - | Multiple texts to cycle through |
| `speed` | `number` | `2` | Typing speed in characters per second |
| `cursor` | `CursorStyle` | `"line"` | Cursor style: `block`, `line`, `underscore`, `none` |
| `cursorColor` | `string` | `"currentColor"` | Cursor color |
| `showCursor` | `boolean` | `true` | Whether to show blinking cursor |
| `deleteAfter` | `boolean` | `false` | Whether to delete text after typing |
| `deleteSpeed` | `number` | `3` | Deletion speed in characters per second |
| `pauseBeforeDelete` | `number` | `1` | Pause duration before deletion (seconds) |
| `loop` | `boolean` | `false` | Loop through texts infinitely |
| `trigger` | `TextTrigger` | `"inView"` | Animation trigger: `inView`, `hover`, `focus`, `manual`, `immediate` |
| `repeat` | `boolean` | `false` | Whether to repeat the animation |
| `delay` | `number` | `0` | Delay before animation starts (seconds) |
| `disabled` | `boolean` | `false` | Whether animation is disabled |
| `isActive` | `boolean` | `false` | Manual trigger control |
| `onComplete` | `() => void` | - | Callback when animation completes |
| `onStart` | `() => void` | - | Callback when animation starts |

---

## RevealText Component

Reveals text character by character, word by word, or line by line with customizable animation effects and directions.

### Basic Usage

```tsx
<RevealText 
  text="Text that reveals gradually"
  mode="letter"
  direction="up"
  staggerDelay={0.05}
  trigger="inView"
/>
```

### Reveal Modes

```tsx
{/* Letter by letter */}
<RevealText 
  text="Each letter appears individually"
  mode="letter"
  direction="up"
  staggerDelay={0.03}
/>

{/* Word by word */}
<RevealText 
  text="Every word slides in with style"
  mode="word"
  direction="left"
  staggerDelay={0.1}
/>

{/* Line by line */}
<RevealText 
  text="Line one\nLine two\nLine three"
  mode="line"
  direction="right"
  staggerDelay={0.2}
/>
```

### With Effects

```tsx
<RevealText 
  text="Blur, scale, and rotation effects combined"
  mode="letter"
  direction="up"
  withBlur={true}
  withScale={true}
  withRotation={true}
  staggerDelay={0.05}
  easing="bounceOut"
/>
```

### Direction Examples

```tsx
{/* From different directions */}
<RevealText text="From up" direction="up" />
<RevealText text="From down" direction="down" />
<RevealText text="From left" direction="left" />
<RevealText text="From right" direction="right" />
<RevealText text="From center" direction="center" />
```

### RevealText Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | - | Text content to reveal (required) |
| `mode` | `RevealMode` | `"letter"` | Reveal mode: `letter`, `word`, `line` |
| `duration` | `number` | `0.6` | Animation duration per unit |
| `staggerDelay` | `number` | `0.05` | Stagger delay between units |
| `direction` | `TextDirection` | `"up"` | Direction: `left`, `right`, `up`, `down`, `center` |
| `initialOpacity` | `number` | `0` | Initial opacity of hidden text |
| `easing` | `TextEasing` | `"easeOut"` | Animation easing |
| `withBlur` | `boolean` | `false` | Reveal with blur effect |
| `withScale` | `boolean` | `false` | Reveal with scale effect |
| `withRotation` | `boolean` | `false` | Reveal with rotation effect |
| `trigger` | `TextTrigger` | `"inView"` | Animation trigger |
| `repeat` | `boolean` | `false` | Whether to repeat the animation |
| `delay` | `number` | `0` | Delay before animation starts |
| `disabled` | `boolean` | `false` | Whether animation is disabled |
| `isActive` | `boolean` | `false` | Manual trigger control |
| `onComplete` | `() => void` | - | Callback when animation completes |
| `onStart` | `() => void` | - | Callback when animation starts |

---

## CounterText Component

Animates a number from one value to another with formatting options and customizable animation effects.

### Basic Usage

```tsx
<CounterText 
  from={0}
  to={1000}
  duration={2}
  trigger="inView"
/>
```

### Currency Format

```tsx
<CounterText 
  from={0}
  to={2549.99}
  duration={3}
  format="currency"
  currency="USD"
  locale="en-US"
  decimals={2}
/>
```

### Percentage Format

```tsx
<CounterText 
  from={0}
  to={0.85}
  duration={2.5}
  format="percentage"
  decimals={1}
/>
```

### With Prefix/Suffix

```tsx
<CounterText 
  from={0}
  to={150}
  duration={2}
  prefix="Level "
  suffix="/200"
/>
```

### Different Locales

```tsx
{/* European format */}
<CounterText 
  from={0}
  to={1234.56}
  format="currency"
  currency="EUR"
  locale="es-ES"
  decimals={2}
/>

{/* US format */}
<CounterText 
  from={0}
  to={1234.56}
  format="currency"
  currency="USD"
  locale="en-US"
  decimals={2}
/>
```

### Custom Formatter

```tsx
<CounterText 
  from={0}
  to={1234567}
  duration={3}
  formatter={(value) => `${(value / 1000000).toFixed(1)}M`}
/>
```

### CounterText Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `from` | `number` | - | Starting number (required) |
| `to` | `number` | - | Ending number (required) |
| `duration` | `number` | `2` | Animation duration in seconds |
| `decimals` | `number` | `0` | Number of decimal places |
| `format` | `'number' \| 'currency' \| 'percentage'` | `'number'` | Number format |
| `currency` | `string` | `'EUR'` | Currency symbol for currency format |
| `locale` | `string` | `'es-ES'` | Locale for number formatting |
| `formatter` | `(value: number) => string` | - | Custom formatter function |
| `easing` | `TextEasing` | `"easeOut"` | Animation easing |
| `prefix` | `string` | `''` | Prefix text |
| `suffix` | `string` | `''` | Suffix text |
| `trigger` | `TextTrigger` | `"inView"` | Animation trigger |
| `repeat` | `boolean` | `false` | Whether to repeat the animation |
| `delay` | `number` | `0` | Delay before animation starts |
| `disabled` | `boolean` | `false` | Whether animation is disabled |
| `isActive` | `boolean` | `false` | Manual trigger control |
| `onComplete` | `() => void` | - | Callback when animation completes |
| `onStart` | `() => void` | - | Callback when animation starts |

---

## GradientText Component

Displays text with animated color gradients that can move in different directions. Supports continuous animation and various gradient styles.

### Basic Usage

```tsx
<GradientText 
  text="Beautiful Gradient Text"
  colors={['#ff6b6b', '#4ecdc4', '#45b7d1']}
  direction="horizontal"
  animate={true}
  duration={3}
/>
```

### Different Directions

```tsx
{/* Horizontal gradient */}
<GradientText 
  text="Horizontal Flow"
  colors={['#ff6b6b', '#4ecdc4', '#45b7d1']}
  direction="horizontal"
  animate={true}
  duration={3}
/>

{/* Diagonal gradient */}
<GradientText 
  text="Diagonal Flow"
  colors={['#667eea', '#764ba2', '#f093fb']}
  direction="diagonal"
  animate={true}
  duration={4}
/>

{/* Radial gradient */}
<GradientText 
  text="Radial Effect"
  colors={['#ff9a9e', '#fecfef', '#fecfef']}
  direction="radial"
  animate={true}
  duration={5}
/>

{/* Vertical gradient */}
<GradientText 
  text="Vertical Flow"
  colors={['#ff0000', '#00ff00', '#0000ff']}
  direction="vertical"
  animate={true}
  duration={3}
/>
```

### Static Gradient (No Animation)

```tsx
<GradientText 
  text="Static Gradient"
  colors={['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4']}
  direction="horizontal"
  animate={false}
/>
```

### Custom Gradient Stops

```tsx
<GradientText 
  text="Custom Stops"
  colors={['#ff0000', '#00ff00', '#0000ff']}
  stops={[0, 50, 100]}
  direction="horizontal"
  animate={true}
/>
```

### GradientText Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | - | Text content to display (required) |
| `colors` | `string[]` | - | Gradient colors array (required) |
| `direction` | `GradientDirection` | `"horizontal"` | Gradient direction: `horizontal`, `vertical`, `diagonal`, `radial` |
| `duration` | `number` | `3` | Animation duration in seconds |
| `speed` | `number` | `1` | Animation speed multiplier |
| `animate` | `boolean` | `true` | Whether to animate continuously |
| `backgroundSize` | `string` | - | Background size for gradient animation |
| `stops` | `number[]` | - | Custom gradient stops |
| `trigger` | `TextTrigger` | `"immediate"` | Animation trigger |
| `repeat` | `boolean` | `true` | Whether to repeat the animation |
| `delay` | `number` | `0` | Delay before animation starts |
| `disabled` | `boolean` | `false` | Whether animation is disabled |
| `isActive` | `boolean` | `false` | Manual trigger control |
| `onComplete` | `() => void` | - | Callback when animation completes |
| `onStart` | `() => void` | - | Callback when animation starts |

---

## MorphingText Component

Text morphing between multiple states with different transition styles.

### Basic Usage

```tsx
<MorphingText 
  texts={['HELLO', 'WORLD', 'MAGIC', 'TEXT']}
  displayDuration={2000}
  morphDuration={600}
  morphStyle="scramble"
  loop={true}
/>
```

### Different Morph Styles

```tsx
{/* Scramble effect */}
<MorphingText 
  texts={['HELLO', 'WORLD', 'MAGIC']}
  displayDuration={2000}
  morphDuration={600}
  morphStyle="scramble"
  loop={true}
/>

{/* Fade transition */}
<MorphingText 
  texts={['Innovation', 'Creativity', 'Excellence']}
  displayDuration={1500}
  morphDuration={400}
  morphStyle="fade"
  loop={true}
/>

{/* Slide animation */}
<MorphingText 
  texts={['React', 'TypeScript', 'Framer Motion']}
  displayDuration={1800}
  morphDuration={500}
  morphStyle="slide"
  loop={true}
/>
```

### Manual Control

```tsx
const [isActive, setIsActive] = useState(false);

<button onClick={() => setIsActive(!isActive)}>
  Toggle Morphing
</button>
<MorphingText 
  texts={['Click', 'To', 'Control', 'Me!']}
  displayDuration={1200}
  morphDuration={300}
  morphStyle="scramble"
  trigger="manual"
  isActive={isActive}
  loop={true}
/>
```

### MorphingText Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `texts` | `string[]` | - | Array of texts to morph between (required) |
| `displayDuration` | `number` | `2000` | Duration to show each text (ms) |
| `morphDuration` | `number` | `600` | Morphing animation duration (ms) |
| `loop` | `boolean` | `false` | Whether to loop through texts |
| `easing` | `TextEasing` | `"easeOut"` | Morphing animation easing |
| `morphStyle` | `'fade' \| 'slide' \| 'scramble'` | `'fade'` | Character morphing style |
| `trigger` | `TextTrigger` | `"inView"` | Animation trigger |
| `repeat` | `boolean` | `false` | Whether to repeat the animation |
| `delay` | `number` | `0` | Delay before animation starts |
| `disabled` | `boolean` | `false` | Whether animation is disabled |
| `isActive` | `boolean` | `false` | Manual trigger control |
| `onComplete` | `() => void` | - | Callback when animation completes |
| `onStart` | `() => void` | - | Callback when animation starts |

---

## GlitchText Component

Digital glitch and corruption effects with customizable intensity and colors.

### Basic Usage

```tsx
<GlitchText 
  text="GLITCH EFFECT"
  intensity="medium"
  continuous={true}
  colors={['#ff0000', '#00ff00', '#0000ff']}
/>
```

### Different Intensities

```tsx
{/* Low intensity */}
<GlitchText 
  text="SUBTLE GLITCH"
  intensity="low"
  continuous={true}
  colors={['#ff0000', '#00ff00', '#0000ff']}
/>

{/* High intensity */}
<GlitchText 
  text="INTENSE EFFECT"
  intensity="high"
  continuous={true}
  colors={['#ff00ff', '#00ffff', '#ffff00']}
/>

{/* Extreme intensity */}
<GlitchText 
  text="EXTREME CHAOS"
  intensity="extreme"
  continuous={true}
  colors={['#ff0000', '#ff6600', '#ff0066']}
/>
```

### Data Corruption Effect

```tsx
<GlitchText 
  text="SYSTEM ERROR"
  intensity="extreme"
  continuous={true}
  corruptData={true}
  colors={['#ff0000', '#ff6600', '#ff0066']}
  glitchChars="!@#$%^&*()_+-=[]{}|;:,.<>?~`"
/>
```

### Triggered Effects

```tsx
{/* Hover triggered */}
<GlitchText 
  text="HOVER ME!"
  intensity="high"
  trigger="hover"
  colors={['#ff0000', '#00ff00', '#0000ff']}
/>

{/* Manual control */}
const [isActive, setIsActive] = useState(false);

<button onClick={() => setIsActive(!isActive)}>
  Toggle Glitch
</button>
<GlitchText 
  text="CONTROLLED CHAOS"
  intensity="medium"
  trigger="manual"
  isActive={isActive}
  colors={['#ff00ff', '#00ffff']}
/>
```

### Multiple Layers

```tsx
<GlitchText 
  text="LAYERED EFFECT"
  intensity="high"
  continuous={true}
  layers={5}
  colors={['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00']}
/>
```

### GlitchText Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | - | Text content to glitch (required) |
| `intensity` | `GlitchIntensity` | `"medium"` | Glitch intensity: `low`, `medium`, `high`, `extreme` |
| `duration` | `number` | `0.3` | Animation duration in seconds |
| `continuous` | `boolean` | `false` | Whether to animate continuously |
| `colors` | `string[]` | - | Glitch colors array |
| `corruptData` | `boolean` | `false` | Whether to include data corruption effect |
| `glitchChars` | `string` | - | Custom glitch characters |
| `layers` | `number` | `3` | Number of glitch layers |
| `trigger` | `TextTrigger` | `"inView"` | Animation trigger |
| `repeat` | `boolean` | `false` | Whether to repeat the animation |
| `delay` | `number` | `0` | Delay before animation starts |
| `disabled` | `boolean` | `false` | Whether animation is disabled |
| `isActive` | `boolean` | `false` | Manual trigger control |
| `onComplete` | `() => void` | - | Callback when animation completes |
| `onStart` | `() => void` | - | Callback when animation starts |

---

## Common Types

### Trigger Types
```tsx
type TextTrigger = 'inView' | 'hover' | 'focus' | 'manual' | 'immediate';
```

### Easing Types
```tsx
type TextEasing = 
  | 'linear' 
  | 'easeIn' 
  | 'easeOut' 
  | 'easeInOut'
  | 'backIn'
  | 'backOut'
  | 'backInOut'
  | 'bounceIn'
  | 'bounceOut'
  | 'bounceInOut';
```

### Direction Types
```tsx
type TextDirection = 'left' | 'right' | 'up' | 'down' | 'center';
```

### Base Props Interface
```tsx
interface BaseTextProps {
  text?: string;
  className?: string;
  trigger?: TextTrigger;
  repeat?: boolean;
  delay?: number;
  disabled?: boolean;
  isActive?: boolean;
  onComplete?: () => void;
  onStart?: () => void;
  'data-testid'?: string;
}
```

## Animation Presets

The library includes predefined animation presets for quick setup:

```tsx
const textAnimationPresets = {
  quick: { duration: 0.3, easing: 'easeOut', staggerDelay: 0.02 },
  smooth: { duration: 0.6, easing: 'easeInOut', staggerDelay: 0.05 },
  slow: { duration: 1.2, easing: 'easeOut', staggerDelay: 0.08 },
  bouncy: { duration: 0.8, easing: 'bounceOut', staggerDelay: 0.04 },
  elegant: { duration: 0.9, easing: 'easeInOut', staggerDelay: 0.06 },
  dramatic: { duration: 1.5, easing: 'backOut', staggerDelay: 0.1 },
  playful: { duration: 0.5, easing: 'bounceInOut', staggerDelay: 0.03 }
};
```

## Helper Functions

The library provides utility functions for advanced usage:

```tsx
import {
  parseTextForAnimation,
  generateMorphSteps,
  generateGlitchChars,
  formatNumber,
  prefersReducedMotion,
  calculateOptimalDelay,
} from '../components/TextAnimation';
```

## Accessibility Features

- **Reduced Motion**: Automatically respects `prefers-reduced-motion` setting
- **Keyboard Navigation**: Focus triggers work with Tab navigation
- **Screen Readers**: Proper ARIA attributes and semantic HTML
- **Performance**: Optimized animations with debouncing and intersection observers

## Performance Considerations

- All components use **Intersection Observer** for efficient viewport detection
- **Motion values** are used for smooth counter animations
- **Reduced motion** preferences are automatically respected
- **Debounced** event handlers prevent excessive re-renders
- **Cleanup** on unmount prevents memory leaks

## Real-world Use Cases

- **Hero Sections**: TypeWriter and RevealText for dramatic introductions
- **Statistics**: CounterText for animated data visualization
- **Branding**: GradientText for colorful brand messaging
- **UI States**: MorphingText for dynamic status indicators  
- **Gaming/Tech**: GlitchText for cyberpunk aesthetics
- **Landing Pages**: Combined effects for engaging storytelling
- **Dashboards**: CounterText for live metrics and KPIs
- **Portfolio Sites**: RevealText for smooth content reveals