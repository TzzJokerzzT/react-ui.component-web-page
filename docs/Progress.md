# Progress Component

Un componente Progress para mostrar barras de progreso con animaciones fluidas y múltiples configuraciones visuales.

## Importación

```tsx
import { Progress } from '../components/Progress';
import type { 
  ProgressProps, 
  ProgressColor, 
  ProgressSize,
  ProgressRadius
} from '../components/Progress/types';
```

## Ejemplos de Uso

### Ejemplo Básico

```tsx
// Progress básico con valor
<Progress value={75} />

// Progress con etiqueta y valor mostrado
<Progress 
  value={65} 
  label="Cargando datos..." 
  showValueLabel 
/>
```

### Colores

```tsx
// Default (gris)
<Progress value={75} color="default" label="Default" showValueLabel />

// Primary (azul) - predeterminado
<Progress value={65} color="primary" label="Primary" showValueLabel />

// Secondary (púrpura)
<Progress value={85} color="secondary" label="Secondary" showValueLabel />

// Success (verde)
<Progress value={45} color="success" label="Success" showValueLabel />

// Warning (amarillo/naranja)
<Progress value={30} color="warning" label="Warning" showValueLabel />

// Danger (rojo)
<Progress value={20} color="danger" label="Danger" showValueLabel />
```

### Tamaños

```tsx
// Pequeño
<Progress value={60} size="sm" label="Small" showValueLabel />

// Mediano (predeterminado)
<Progress value={70} size="md" label="Medium" showValueLabel />

// Grande
<Progress value={80} size="lg" label="Large" showValueLabel />
```

### Radius (Bordes Redondeados)

```tsx
// Sin bordes redondeados
<Progress value={70} radius="none" label="Sharp corners" />

// Bordes pequeños
<Progress value={70} radius="sm" label="Small radius" />

// Bordes medianos
<Progress value={70} radius="md" label="Medium radius" />

// Bordes grandes
<Progress value={70} radius="lg" label="Large radius" />

// Completamente redondeado (predeterminado)
<Progress value={70} radius="full" label="Fully rounded" />
```

### Estados Especiales

```tsx
// Progress normal
<Progress value={75} label="Normal" showValueLabel />

// Progress con rayas (ideal para procesos activos)
<Progress value={60} label="Con rayas" showValueLabel isStriped />

// Progress indeterminado (cuando no conoces el progreso exacto)
<Progress label="Indeterminado" isIndeterminate />

// Progress deshabilitado
<Progress value={40} label="Deshabilitado" showValueLabel isDisabled />
```

### Con Etiquetas Personalizadas

```tsx
// Solo etiqueta
<Progress value={50} label="Descargando archivo..." />

// Solo valor
<Progress value={75} showValueLabel />

// Etiqueta y valor
<Progress 
  value={85} 
  label="Instalando dependencias" 
  showValueLabel 
/>
```

### Valores Personalizados (Min/Max)

```tsx
// Progress con rango personalizado (0-500)
<Progress 
  value={350} 
  minValue={0} 
  maxValue={500} 
  label="Descarga (350/500 KB)" 
  showValueLabel 
/>

// Progress con rango personalizado (10-100)
<Progress 
  value={75} 
  minValue={10} 
  maxValue={100} 
  label="Temperatura (75°C)" 
  showValueLabel 
/>
```

### Casos de Uso Prácticos

```tsx
// 1. Carga de página
const [pageProgress, setPageProgress] = useState(0);

useEffect(() => {
  const timer = setTimeout(() => {
    if (pageProgress < 100) {
      setPageProgress(prev => Math.min(prev + Math.random() * 15, 100));
    }
  }, 200);
  return () => clearTimeout(timer);
}, [pageProgress]);

<Progress
  value={pageProgress}
  label="Cargando página..."
  showValueLabel
  color="primary"
  size="md"
/>
```

```tsx
// 2. Subida de archivo
const [uploadProgress, setUploadProgress] = useState(0);

const simulateFileUpload = async () => {
  setUploadProgress(0);
  for (let i = 0; i <= 100; i += 2) {
    await new Promise(resolve => setTimeout(resolve, 50));
    setUploadProgress(i);
  }
};

<Progress
  value={uploadProgress}
  label="Subiendo archivo..."
  showValueLabel
  color="warning"
  isStriped={uploadProgress > 0 && uploadProgress < 100}
/>
```

```tsx
// 3. Descarga con XMLHttpRequest real
const handleDownload = async (url: string) => {
  const response = await fetch(url);
  const contentLength = response.headers.get('content-length');
  
  if (!contentLength) {
    // Si no sabemos el tamaño, usar indeterminado
    return <Progress label="Descargando..." isIndeterminate />;
  }
  
  const reader = response.body?.getReader();
  let receivedLength = 0;
  
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    
    receivedLength += value.length;
    const progress = (receivedLength / parseInt(contentLength)) * 100;
    setDownloadProgress(progress);
  }
};

<Progress
  value={downloadProgress}
  label="Descargando archivo..."
  showValueLabel
  color="success"
  radius="sm"
/>
```

```tsx
// 4. Progress paso a paso (wizard, instalación)
const steps = [
  'Descargando archivos...',
  'Instalando dependencias...',
  'Configurando aplicación...',  
  'Finalizando instalación...'
];

const SteppedProgress = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);
  
  const overallProgress = ((currentStep + stepProgress / 100) / steps.length) * 100;
  
  return (
    <div className="space-y-4">
      {/* Progreso general */}
      <Progress
        value={overallProgress}
        label="Progreso total"
        showValueLabel
        color="primary"
        size="lg"
      />
      
      {/* Paso actual */}
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-2">
          Paso {currentStep + 1} de {steps.length}
        </p>
        <h3 className="font-semibold">{steps[currentStep]}</h3>
      </div>
      
      {/* Progreso del paso actual */}
      <Progress
        value={stepProgress}
        showValueLabel
        color="success"
        isStriped
      />
    </div>
  );
};
```

### Progress con Clases Personalizadas

```tsx
<Progress
  value={75}
  label="Custom styling"
  showValueLabel
  className="my-custom-progress"
  classNames={{
    base: "bg-gray-100",
    track: "bg-gray-200",
    indicator: "bg-gradient-to-r from-blue-500 to-purple-500",
    label: "text-blue-600 font-semibold",
    value: "text-purple-600"
  }}
/>
```

### Hook Personalizado para Progress

```tsx
// hooks/useProgress.ts
import { useState, useCallback } from 'react';

interface UseProgressOptions {
  initialValue?: number;
  minValue?: number;
  maxValue?: number;
}

export const useProgress = (options: UseProgressOptions = {}) => {
  const { initialValue = 0, minValue = 0, maxValue = 100 } = options;
  const [value, setValue] = useState(initialValue);
  
  const setProgress = useCallback((newValue: number) => {
    setValue(Math.max(minValue, Math.min(maxValue, newValue)));
  }, [minValue, maxValue]);
  
  const increment = useCallback((amount: number = 1) => {
    setValue(prev => Math.min(maxValue, prev + amount));
  }, [maxValue]);
  
  const decrement = useCallback((amount: number = 1) => {
    setValue(prev => Math.max(minValue, prev - amount));
  }, [minValue]);
  
  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);
  
  const isComplete = value >= maxValue;
  const percentage = ((value - minValue) / (maxValue - minValue)) * 100;
  
  return {
    value,
    percentage,
    isComplete,
    setProgress,
    increment,
    decrement,
    reset
  };
};

// Uso del hook
const MyComponent = () => {
  const { value, percentage, isComplete, increment, reset } = useProgress({
    initialValue: 0,
    maxValue: 100
  });
  
  return (
    <div>
      <Progress 
        value={value} 
        showValueLabel 
        label="Custom Progress"
        color={isComplete ? "success" : "primary"}
      />
      <div className="mt-4 space-x-2">
        <button onClick={() => increment(10)}>+10</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
```

## Props

| Prop | Tipo | Valor por Defecto | Descripción |
|------|------|-------------------|-------------|
| `value` | `number` | `0` | El valor actual del progreso (0-100) |
| `maxValue` | `number` | `100` | El valor máximo para el cálculo del progreso |
| `minValue` | `number` | `0` | El valor mínimo para el cálculo del progreso |
| `color` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | El color temático de la barra de progreso |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | El tamaño de la barra de progreso |
| `radius` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'full'` | `'full'` | El radio de los bordes de la barra |
| `showValueLabel` | `boolean` | `false` | Si mostrar el porcentaje como texto |
| `label` | `string` | - | Etiqueta personalizada a mostrar |
| `isStriped` | `boolean` | `false` | Si mostrar un patrón de rayas |
| `isIndeterminate` | `boolean` | `false` | Si el progreso está en estado indeterminado |
| `isDisabled` | `boolean` | `false` | Si deshabilitar la barra de progreso |
| `className` | `string` | - | Nombre de clase personalizado |
| `classNames` | `ProgressClassNames` | - | Nombres de clase personalizados para diferentes slots |

## Tipos de Datos

### ProgressColor

```tsx
type ProgressColor = 
  | 'default'    // Gris
  | 'primary'    // Azul (predeterminado)
  | 'secondary'  // Púrpura
  | 'success'    // Verde
  | 'warning'    // Amarillo/Naranja
  | 'danger';    // Rojo
```

### ProgressSize

```tsx
type ProgressSize = 'sm' | 'md' | 'lg';
```

### ProgressRadius

```tsx
type ProgressRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';
```

### ProgressClassNames

```tsx
interface ProgressClassNames {
  base?: string;      // Contenedor principal
  track?: string;     // Pista de la barra de progreso
  indicator?: string; // Indicador de progreso (barra que se mueve)
  label?: string;     // Etiqueta de texto
  value?: string;     // Valor del porcentaje
}
```

### ProgressProps

```tsx
interface ProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  value?: number;
  maxValue?: number;
  minValue?: number;
  color?: ProgressColor;
  size?: ProgressSize;
  radius?: ProgressRadius;
  showValueLabel?: boolean;
  label?: string;
  isStriped?: boolean;
  isIndeterminate?: boolean;
  isDisabled?: boolean;
  className?: string;
  classNames?: ProgressClassNames;
}
```

## Características

- **Animaciones fluidas**: Utiliza Framer Motion para transiciones suaves del progreso
- **Estado indeterminado**: Animación de carga cuando no se conoce el progreso exacto
- **Patrón de rayas**: Opción visual para indicar procesos activos
- **Valores personalizables**: Soporte para rangos min/max personalizados
- **Múltiples tamaños y colores**: 3 tamaños y 6 colores temáticos
- **Bordes configurables**: 5 opciones de radio para personalizar la apariencia
- **Etiquetas flexibles**: Soporte para etiquetas personalizadas y valores mostrados
- **Accesibilidad completa**: Atributos ARIA apropiados para lectores de pantalla
- **Estado deshabilitado**: Opción para deshabilitar visualmente la barra
- **Clases personalizables**: Sistema de slots para personalización CSS avanzada
- **TypeScript**: Completamente tipado para mejor experiencia de desarrollo
- **Responsive**: Se adapta a diferentes tamaños de pantalla