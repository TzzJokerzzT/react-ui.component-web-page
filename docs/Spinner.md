# Spinner Component

Un componente Spinner para mostrar indicadores de carga con múltiples tipos de animación y configuraciones personalizables.

## Importación

```tsx
import { Spinner } from '../components/Spinner';
import type { 
  SpinnerProps, 
  SpinnerType, 
  SpinnerSize, 
  SpinnerColor, 
  SpinnerSpeed,
  SpinnerAnimationConfig
} from '../components/Spinner/types';
```

## Ejemplos de Uso

### Ejemplo Básico

```tsx
// Spinner básico (rotating por defecto)
<Spinner />

// Spinner con configuración personalizada
<Spinner
  type="rotating"
  size="md"
  color="primary"
  speed="normal"
/>
```

### Tipos de Spinner

```tsx
// Spinner rotativo (predeterminado)
<Spinner type="rotating" color="primary" />

// Spinner pulsante
<Spinner type="pulse" color="success" />

// Spinner de rebote (puntos)
<Spinner type="bounce" color="warning" />

// Spinner de onda (barras)
<Spinner type="wave" color="error" />

// Spinner de anillo
<Spinner type="ring" color="secondary" />

// Spinner de puntos
<Spinner type="dots" color="neutral" />

// Spinner de barras
<Spinner type="bars" color="primary" />
```

### Tamaños

```tsx
// Extra pequeño
<Spinner type="rotating" size="xs" color="primary" />

// Pequeño
<Spinner type="rotating" size="sm" color="primary" />

// Mediano (predeterminado)
<Spinner type="rotating" size="md" color="primary" />

// Grande
<Spinner type="rotating" size="lg" color="primary" />

// Extra grande
<Spinner type="rotating" size="xl" color="primary" />
```

### Colores

```tsx
<Spinner type="pulse" size="md" color="primary" />
<Spinner type="pulse" size="md" color="secondary" />
<Spinner type="pulse" size="md" color="success" />
<Spinner type="pulse" size="md" color="warning" />
<Spinner type="pulse" size="md" color="error" />
<Spinner type="pulse" size="md" color="neutral" />
```

### Velocidades

```tsx
// Lento
<Spinner type="bounce" size="md" color="primary" speed="slow" />

// Normal (predeterminado)
<Spinner type="bounce" size="md" color="primary" speed="normal" />

// Rápido
<Spinner type="bounce" size="md" color="primary" speed="fast" />
```

### Con Etiquetas

```tsx
// Spinner con etiqueta básica
<Spinner
  type="rotating"
  size="md"
  color="primary"
  speed="normal"
  label="Loading..."
/>

// Spinner con etiqueta de procesamiento
<Spinner
  type="pulse"
  size="lg"
  color="success"
  speed="normal"
  label="Processing data..."
/>

// Spinner con etiqueta de espera
<Spinner
  type="wave"
  size="md"
  color="warning"
  speed="fast"
  label="Please wait..."
/>
```

### Modo Overlay

```tsx
// Overlay básico
<div className="relative w-full h-32">
  <div className="absolute inset-0 bg-blue-100 rounded-lg flex items-center justify-center text-blue-800">
    Background Content
  </div>
  <Spinner
    type="rotating"
    size="lg"
    color="primary"
    overlay={true}
    label="Loading..."
  />
</div>

// Overlay con opacidad personalizada
<Spinner
  type="pulse"
  size="md"
  color="primary"
  overlay={true}
  overlayOpacity={0.9}
  overlayColor="bg-gray-100"
  label="Processing..."
/>
```

### Control de Visibilidad

```tsx
// Spinner controlado por estado
const [isLoading, setIsLoading] = useState(true);

<Spinner
  type="rotating"
  size="md"
  color="primary"
  visible={isLoading}
  label="Loading..."
/>
```

### Configuración de Animación Personalizada

```tsx
<Spinner
  type="rotating"
  size="md"
  color="primary"
  animationConfig={{
    duration: 2,
    delay: 0.5,
    repeat: Infinity,
    repeatType: 'loop'
  }}
/>
```

### Ejemplos de Casos de Uso Reales

```tsx
// Loading de página
<Spinner
  type="rotating"
  size="lg"
  color="primary"
  overlay={true}
  label="Loading page..."
/>

// Procesamiento de formulario
<Spinner
  type="pulse"
  size="md"
  color="success"
  label="Saving changes..."
/>

// Carga de datos
<Spinner
  type="wave"
  size="sm"
  color="secondary"
  label="Fetching data..."
/>

// Estado de error
<Spinner
  type="bounce"
  size="md"
  color="error"
  label="Retrying connection..."
/>

// Estado neutral
<Spinner
  type="dots"
  size="md"
  color="neutral"
  speed="slow"
  label="Initializing..."
/>
```

### Spinner con Controles Interactivos

```tsx
const SpinnerDemo = () => {
  const [type, setType] = useState<SpinnerType>('rotating');
  const [size, setSize] = useState<SpinnerSize>('md');
  const [color, setColor] = useState<SpinnerColor>('primary');
  const [speed, setSpeed] = useState<SpinnerSpeed>('normal');
  const [showLabel, setShowLabel] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [visible, setVisible] = useState(true);

  return (
    <div>
      {/* Controles */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        <select
          value={type}
          onChange={(e) => setType(e.target.value as SpinnerType)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="rotating">Rotating</option>
          <option value="pulse">Pulse</option>
          <option value="bounce">Bounce</option>
          <option value="wave">Wave</option>
          <option value="ring">Ring</option>
          <option value="dots">Dots</option>
          <option value="bars">Bars</option>
        </select>

        <select
          value={size}
          onChange={(e) => setSize(e.target.value as SpinnerSize)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="xs">XS</option>
          <option value="sm">SM</option>
          <option value="md">MD</option>
          <option value="lg">LG</option>
          <option value="xl">XL</option>
        </select>

        <select
          value={color}
          onChange={(e) => setColor(e.target.value as SpinnerColor)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="error">Error</option>
          <option value="neutral">Neutral</option>
        </select>

        <select
          value={speed}
          onChange={(e) => setSpeed(e.target.value as SpinnerSpeed)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="slow">Slow</option>
          <option value="normal">Normal</option>
          <option value="fast">Fast</option>
        </select>
      </div>

      {/* Spinner */}
      <div className="p-12 bg-gray-50 rounded-lg flex items-center justify-center min-h-[200px]">
        {showOverlay ? (
          <div className="relative w-full h-32">
            <div className="absolute inset-0 bg-blue-100 rounded-lg flex items-center justify-center text-blue-800">
              Background Content
            </div>
            <Spinner
              type={type}
              size={size}
              color={color}
              speed={speed}
              visible={visible}
              overlay={showOverlay}
              label={showLabel ? "Loading..." : undefined}
            />
          </div>
        ) : (
          <Spinner
            type={type}
            size={size}
            color={color}
            speed={speed}
            visible={visible}
            label={showLabel ? "Loading..." : undefined}
          />
        )}
      </div>
    </div>
  );
};
```

## Props

| Prop | Tipo | Valor por Defecto | Descripción |
|------|------|-------------------|-------------|
| `type` | `'rotating' \| 'pulse' \| 'bounce' \| 'wave' \| 'grid' \| 'ring' \| 'dots' \| 'bars'` | `'rotating'` | Tipo de animación del spinner |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamaño del spinner |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'neutral'` | `'primary'` | Color temático del spinner |
| `speed` | `'slow' \| 'normal' \| 'fast'` | `'normal'` | Velocidad de la animación |
| `visible` | `boolean` | `true` | Si el spinner debe ser visible |
| `label` | `string` | - | Texto de etiqueta opcional debajo del spinner |
| `overlay` | `boolean` | `false` | Modo overlay para cubrir contenido |
| `overlayOpacity` | `number` | `0.8` | Opacidad del fondo del overlay (0-1) |
| `overlayColor` | `string` | `'bg-white'` | Color personalizado del fondo del overlay |
| `animationConfig` | `Partial<SpinnerAnimationConfig>` | - | Configuración personalizada de animación |
| `className` | `string` | - | Clases CSS adicionales |
| `aria-label` | `string` | `'Loading'` | Etiqueta ARIA para accesibilidad |
| `data-testid` | `string` | `'spinner'` | ID de prueba para testing |
| `style` | `React.CSSProperties` | - | Estilos CSS en línea |

## Tipos de Datos

### SpinnerType

```tsx
type SpinnerType = 
  | 'rotating'  // Spinner circular rotativo (predeterminado)
  | 'pulse'     // Spinner que pulsa con cambios de tamaño
  | 'bounce'    // Tres puntos que rebotan secuencialmente
  | 'wave'      // Cinco barras que crean efecto de onda
  | 'grid'      // Grid de puntos con animación
  | 'ring'      // Anillo con efecto de carga
  | 'dots'      // Puntos en secuencia
  | 'bars';     // Barras animadas
```

### SpinnerSize

```tsx
type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
```

### SpinnerColor

```tsx
type SpinnerColor = 
  | 'primary'    // Azul (predeterminado)
  | 'secondary'  // Púrpura
  | 'success'    // Verde
  | 'warning'    // Amarillo/Naranja
  | 'error'      // Rojo
  | 'neutral';   // Gris
```

### SpinnerSpeed

```tsx
type SpinnerSpeed = 'slow' | 'normal' | 'fast';
```

### SpinnerAnimationConfig

```tsx
interface SpinnerAnimationConfig {
  duration?: number;        // Duración de la animación en segundos
  delay?: number;          // Retraso antes de iniciar la animación
  repeat?: number;         // Número de repeticiones (Infinity para infinito)
  repeatType?: 'loop' | 'reverse' | 'mirror';  // Tipo de repetición
  repeatDelay?: number;    // Retraso entre repeticiones
}
```

### SpinnerProps

```tsx
interface SpinnerProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  type?: SpinnerType;
  size?: SpinnerSize;
  color?: SpinnerColor;
  speed?: SpinnerSpeed;
  visible?: boolean;
  label?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  overlayColor?: string;
  animationConfig?: Partial<SpinnerAnimationConfig>;
  className?: string;
  'aria-label'?: string;
  'data-testid'?: string;
}
```

## Características

- **Múltiples tipos de animación**: 8 tipos diferentes de spinners (rotating, pulse, bounce, wave, grid, ring, dots, bars)
- **Tamaños flexibles**: 5 tamaños disponibles desde xs hasta xl
- **Colores temáticos**: 6 colores predefinidos que siguen el sistema de diseño
- **Velocidades configurables**: 3 velocidades de animación (slow, normal, fast)
- **Modo overlay**: Capacidad de cubrir contenido existente con fondo semi-transparente
- **Etiquetas opcionales**: Texto descriptivo debajo del spinner
- **Control de visibilidad**: Capacidad de mostrar/ocultar dinámicamente
- **Animaciones personalizables**: Configuración avanzada de animación con Framer Motion
- **Accesibilidad completa**: Atributos ARIA apropiados y soporte para lectores de pantalla
- **TypeScript**: Completamente tipado para mejor experiencia de desarrollo
- **Responsive**: Se adapta a diferentes tamaños de pantalla
- **Optimizado**: Uso eficiente de Framer Motion para animaciones suaves