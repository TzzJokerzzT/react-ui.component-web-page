import React, { useState, useEffect } from 'react';
import { Progress } from '../components/Progress';
import { Spinner } from '../components/Spinner';
import { Button } from '../components/Button';

const ProgressSpinnerPage: React.FC = () => {
  // Estado para ejemplos interactivos
  const [progressValue, setProgressValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [pageLoadProgress, setPageLoadProgress] = useState(0);

  // Simular carga de página
  useEffect(() => {
    const timer = setTimeout(() => {
      if (pageLoadProgress < 100) {
        setPageLoadProgress(prev => Math.min(prev + Math.random() * 15, 100));
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [pageLoadProgress]);

  // Simular carga de datos
  const simulateDataLoad = async () => {
    setIsLoading(true);
    setProgressValue(0);
    
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 200));
      setProgressValue(i);
    }
    
    setIsLoading(false);
  };

  // Simular subida de archivo
  const simulateFileUpload = async () => {
    setUploadProgress(0);
    for (let i = 0; i <= 100; i += 2) {
      await new Promise(resolve => setTimeout(resolve, 50));
      setUploadProgress(i);
    }
  };

  // Simular descarga
  const simulateDownload = async () => {
    setDownloadProgress(0);
    for (let i = 0; i <= 100; i += 3) {
      await new Promise(resolve => setTimeout(resolve, 30));
      setDownloadProgress(i);
    }
  };

  const resetPageLoad = () => setPageLoadProgress(0);

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Progress & Spinner Components
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Componentes de barra de progreso y spinner con Framer Motion para crear experiencias 
          de carga fluidas y atractivas. Perfectos para mostrar el progreso de operaciones 
          asíncronas como cargas de página, subidas de archivos, y llamadas a APIs.
        </p>
      </div>

      {/* Ejemplos Prácticos - Simulaciones Reales */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          🎯 Ejemplos Prácticos - Simulaciones Reales
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Carga de Página */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              🌐 Carga de Página
            </h3>
            <div className="space-y-4">
              <Progress
                value={pageLoadProgress}
                label="Cargando página..."
                showValueLabel
                color="primary"
                size="md"
                className="mb-4"
              />
              <div className="flex gap-2">
                <Button size="sm" onClick={resetPageLoad} color="secondary">
                  Reiniciar Carga
                </Button>
              </div>
              <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                <strong>Cómo implementar:</strong>
                <pre className="mt-2 text-xs overflow-x-auto">{`const [progress, setProgress] = useState(0);

useEffect(() => {
  const timer = setTimeout(() => {
    if (progress < 100) {
      setProgress(prev => 
        Math.min(prev + Math.random() * 15, 100)
      );
    }
  }, 200);
  return () => clearTimeout(timer);
}, [progress]);

<Progress
  value={progress}
  label="Cargando página..."
  showValueLabel
  color="primary"
/>`}</pre>
              </div>
            </div>
          </div>

          {/* Llamada a API */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              🔄 Llamada a API
            </h3>
            <div className="space-y-4">
              {isLoading ? (
                <div className="text-center py-8">
                  <Spinner 
                    type="rotating" 
                    size="lg" 
                    color="primary"
                    label="Cargando datos..."
                  />
                  <Progress
                    value={progressValue}
                    label="Procesando respuesta..."
                    showValueLabel
                    color="success"
                    className="mt-4"
                  />
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">Datos cargados correctamente ✅</p>
                  <Button onClick={simulateDataLoad} color="primary">
                    Cargar Datos
                  </Button>
                </div>
              )}
              
              <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                <strong>Cómo implementar:</strong>
                <pre className="mt-2 text-xs overflow-x-auto">{`const [loading, setLoading] = useState(false);
const [progress, setProgress] = useState(0);

const loadData = async () => {
  setLoading(true);
  setProgress(0);
  
  for (let i = 0; i <= 100; i += 10) {
    await new Promise(resolve => 
      setTimeout(resolve, 200)
    );
    setProgress(i);
  }
  
  setLoading(false);
};

{loading ? (
  <>
    <Spinner type="rotating" label="Cargando..." />
    <Progress value={progress} showValueLabel />
  </>
) : (
  <Button onClick={loadData}>Cargar Datos</Button>
)}`}</pre>
              </div>
            </div>
          </div>

          {/* Subida de Archivo */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              📤 Subida de Archivo
            </h3>
            <div className="space-y-4">
              <Progress
                value={uploadProgress}
                label="Subiendo archivo..."
                showValueLabel
                color="warning"
                isStriped={uploadProgress > 0 && uploadProgress < 100}
              />
              <Button 
                onClick={simulateFileUpload} 
                color="warning"
                disabled={uploadProgress > 0 && uploadProgress < 100}
              >
                {uploadProgress > 0 && uploadProgress < 100 ? 'Subiendo...' : 'Subir Archivo'}
              </Button>
              
              <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                <strong>Para subidas de archivos reales:</strong>
                <pre className="mt-2 text-xs overflow-x-auto">{`const handleUpload = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  
  const xhr = new XMLHttpRequest();
  
  xhr.upload.onprogress = (event) => {
    if (event.lengthComputable) {
      const percentComplete = 
        (event.loaded / event.total) * 100;
      setUploadProgress(percentComplete);
    }
  };
  
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log('Archivo subido!');
    }
  };
  
  xhr.open('POST', '/upload');
  xhr.send(formData);
};`}</pre>
              </div>
            </div>
          </div>

          {/* Descarga */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              📥 Descarga de Archivo
            </h3>
            <div className="space-y-4">
              <Progress
                value={downloadProgress}
                label="Descargando archivo..."
                showValueLabel
                color="success"
                radius="sm"
              />
              <Button 
                onClick={simulateDownload} 
                color="success"
                disabled={downloadProgress > 0 && downloadProgress < 100}
              >
                {downloadProgress > 0 && downloadProgress < 100 ? 'Descargando...' : 'Descargar'}
              </Button>
              
              <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                <strong>Para descargas reales:</strong>
                <pre className="mt-2 text-xs overflow-x-auto">{`const handleDownload = async (url) => {
  const response = await fetch(url);
  const contentLength = 
    response.headers.get('content-length');
  
  const reader = response.body?.getReader();
  let receivedLength = 0;
  
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    
    receivedLength += value.length;
    const progress = 
      (receivedLength / contentLength) * 100;
    setDownloadProgress(progress);
  }
};`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Variantes de Progress */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          📊 Variantes de Progress Bar
        </h2>
        
        <div className="grid gap-8">
          {/* Colores */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Colores</h3>
            <div className="space-y-4">
              <Progress value={75} color="default" label="Default" showValueLabel />
              <Progress value={65} color="primary" label="Primary" showValueLabel />
              <Progress value={85} color="secondary" label="Secondary" showValueLabel />
              <Progress value={45} color="success" label="Success" showValueLabel />
              <Progress value={30} color="warning" label="Warning" showValueLabel />
              <Progress value={20} color="danger" label="Danger" showValueLabel />
            </div>
          </div>

          {/* Tamaños */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Tamaños</h3>
            <div className="space-y-4">
              <Progress value={60} size="sm" label="Small" showValueLabel />
              <Progress value={70} size="md" label="Medium" showValueLabel />
              <Progress value={80} size="lg" label="Large" showValueLabel />
            </div>
          </div>

          {/* Estados especiales */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Estados Especiales</h3>
            <div className="space-y-4">
              <Progress value={75} label="Normal" showValueLabel />
              <Progress value={60} label="Con rayas" showValueLabel isStriped />
              <Progress label="Indeterminado" isIndeterminate />
              <Progress value={40} label="Deshabilitado" showValueLabel isDisabled />
            </div>
          </div>
        </div>
      </section>

      {/* Variantes de Spinner */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          ⚡ Variantes de Spinner
        </h2>
        
        <div className="grid gap-8">
          {/* Tipos */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Tipos de Animación</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center space-y-2">
                <Spinner type="rotating" size="lg" />
                <span className="text-sm text-gray-600">Rotating</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Spinner type="pulse" size="lg" />
                <span className="text-sm text-gray-600">Pulse</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Spinner type="bounce" size="lg" />
                <span className="text-sm text-gray-600">Bounce</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Spinner type="wave" size="lg" />
                <span className="text-sm text-gray-600">Wave</span>
              </div>
            </div>
          </div>

          {/* Tamaños y colores */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Tamaños y Colores</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 text-center">
              <div className="flex flex-col items-center space-y-2">
                <Spinner size="xs" color="primary" />
                <span className="text-xs text-gray-600">XS</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Spinner size="sm" color="success" />
                <span className="text-xs text-gray-600">SM</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Spinner size="md" color="warning" />
                <span className="text-xs text-gray-600">MD</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Spinner size="lg" color="error" />
                <span className="text-xs text-gray-600">LG</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Spinner size="xl" color="secondary" />
                <span className="text-xs text-gray-600">XL</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Spinner size="lg" color="neutral" />
                <span className="text-xs text-gray-600">Neutral</span>
              </div>
            </div>
          </div>

          {/* Con etiquetas */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Con Etiquetas</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <Spinner 
                  type="rotating" 
                  size="lg" 
                  color="primary" 
                  label="Cargando datos..."
                />
              </div>
              <div className="text-center">
                <Spinner 
                  type="bounce" 
                  size="md" 
                  color="success" 
                  label="Procesando..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Códigos de ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          💻 Código de Ejemplo - Casos de Uso Comunes
        </h2>
        
        <div className="space-y-6">
          <div className="bg-gray-900 p-6 rounded-lg text-green-400 text-sm overflow-x-auto">
            <h3 className="text-white text-base font-semibold mb-4">
              1. Hook personalizado para manejo de carga
            </h3>
            <pre>{`// hooks/useLoading.ts
import { useState } from 'react';

interface UseLoadingOptions {
  delay?: number;
  minDuration?: number;
}

export const useLoading = (options: UseLoadingOptions = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const startLoading = async (callback: () => Promise<void>) => {
    setIsLoading(true);
    setProgress(0);
    
    try {
      // Simular progreso durante la operación
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90));
      }, 100);
      
      await callback();
      
      clearInterval(progressInterval);
      setProgress(100);
      
      // Mantener visible por minDuration
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, options.minDuration || 500);
      
    } catch (error) {
      setIsLoading(false);
      setProgress(0);
      throw error;
    }
  };
  
  return { isLoading, progress, startLoading };
};

// Uso en componente:
const MyComponent = () => {
  const { isLoading, progress, startLoading } = useLoading();
  
  const handleAction = () => {
    startLoading(async () => {
      // Tu operación asíncrona aquí
      await fetch('/api/data');
    });
  };
  
  return (
    <div>
      <Button onClick={handleAction} disabled={isLoading}>
        {isLoading ? 'Cargando...' : 'Ejecutar Acción'}
      </Button>
      
      {isLoading && (
        <div className="mt-4">
          <Spinner type="rotating" label="Procesando..." />
          <Progress value={progress} showValueLabel className="mt-2" />
        </div>
      )}
    </div>
  );
};`}</pre>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg text-green-400 text-sm overflow-x-auto">
            <h3 className="text-white text-base font-semibold mb-4">
              2. Componente de overlay de carga
            </h3>
            <pre>{`// components/LoadingOverlay.tsx
import { Spinner } from './Spinner';
import { Progress } from './Progress';

interface LoadingOverlayProps {
  isVisible: boolean;
  message?: string;
  progress?: number;
  showProgress?: boolean;
}

export const LoadingOverlay = ({ 
  isVisible, 
  message = 'Cargando...', 
  progress,
  showProgress = false 
}: LoadingOverlayProps) => {
  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
        <div className="text-center">
          <Spinner 
            type="rotating" 
            size="lg" 
            color="primary" 
            label={message}
          />
          
          {showProgress && progress !== undefined && (
            <Progress
              value={progress}
              showValueLabel
              className="mt-4"
              color="primary"
            />
          )}
        </div>
      </div>
    </div>
  );
};

// Uso:
const App = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  
  return (
    <div>
      {/* Tu aplicación */}
      
      <LoadingOverlay 
        isVisible={loading}
        message="Sincronizando datos..."
        progress={progress}
        showProgress={true}
      />
    </div>
  );
};`}</pre>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg text-green-400 text-sm overflow-x-auto">
            <h3 className="text-white text-base font-semibold mb-4">
              3. Progress para operaciones paso a paso
            </h3>
            <pre>{`// Ejemplo para instalación de software, wizard, etc.
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
  
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
      setStepProgress(0);
    }
  };
  
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
};`}</pre>
          </div>
        </div>
      </section>

      {/* Tips de implementación */}
      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          💡 Tips de Implementación
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">
              📊 Progress Bar
            </h3>
            <ul className="space-y-2 text-blue-700">
              <li>• Usa <code>isIndeterminate</code> cuando no sepas el progreso exacto</li>
              <li>• <code>isStriped</code> es ideal para procesos activos/en progreso</li>
              <li>• Combina con <code>showValueLabel</code> para mejor UX</li>
              <li>• Usa colores semánticamente: success para completado, warning para advertencias</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">
              ⚡ Spinner
            </h3>
            <ul className="space-y-2 text-blue-700">
              <li>• <code>type="rotating"</code> es el más universal</li>
              <li>• <code>type="bounce"</code> es más amigable y casual</li>
              <li>• Usa <code>overlay</code> para bloquear interacciones</li>
              <li>• Siempre incluye <code>aria-label</code> para accesibilidad</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Progress Props Reference */}
      <section className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          📊 Progress Props Reference
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-4 font-semibold">Prop</th>
                <th className="text-left py-2 px-4 font-semibold">Type</th>
                <th className="text-left py-2 px-4 font-semibold">Default</th>
                <th className="text-left py-2 px-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">value</td>
                <td className="py-2 px-4">number</td>
                <td className="py-2 px-4">0</td>
                <td className="py-2 px-4">The current progress value (0-100)</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">maxValue</td>
                <td className="py-2 px-4">number</td>
                <td className="py-2 px-4">100</td>
                <td className="py-2 px-4">Maximum value for progress calculation</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">minValue</td>
                <td className="py-2 px-4">number</td>
                <td className="py-2 px-4">0</td>
                <td className="py-2 px-4">Minimum value for progress calculation</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">color</td>
                <td className="py-2 px-4">default | primary | secondary | success | warning | danger</td>
                <td className="py-2 px-4">primary</td>
                <td className="py-2 px-4">The color theme of the progress bar</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">size</td>
                <td className="py-2 px-4">sm | md | lg</td>
                <td className="py-2 px-4">md</td>
                <td className="py-2 px-4">The size of the progress bar</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">radius</td>
                <td className="py-2 px-4">none | sm | md | lg | full</td>
                <td className="py-2 px-4">full</td>
                <td className="py-2 px-4">The border radius of the progress bar</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">showValueLabel</td>
                <td className="py-2 px-4">boolean</td>
                <td className="py-2 px-4">false</td>
                <td className="py-2 px-4">Whether to show the percentage as text</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">label</td>
                <td className="py-2 px-4">string</td>
                <td className="py-2 px-4">-</td>
                <td className="py-2 px-4">Custom label to display</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">isStriped</td>
                <td className="py-2 px-4">boolean</td>
                <td className="py-2 px-4">false</td>
                <td className="py-2 px-4">Whether to show a striped pattern</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">isIndeterminate</td>
                <td className="py-2 px-4">boolean</td>
                <td className="py-2 px-4">false</td>
                <td className="py-2 px-4">Whether progress is in indeterminate state</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">isDisabled</td>
                <td className="py-2 px-4">boolean</td>
                <td className="py-2 px-4">false</td>
                <td className="py-2 px-4">Whether to disable the progress bar</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">className</td>
                <td className="py-2 px-4">string</td>
                <td className="py-2 px-4">-</td>
                <td className="py-2 px-4">Custom class name</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">classNames</td>
                <td className="py-2 px-4">ProgressClassNames</td>
                <td className="py-2 px-4">-</td>
                <td className="py-2 px-4">Custom class names for different slots</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Spinner Props Reference */}
      <section className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          ⚡ Spinner Props Reference
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-4 font-semibold">Prop</th>
                <th className="text-left py-2 px-4 font-semibold">Type</th>
                <th className="text-left py-2 px-4 font-semibold">Default</th>
                <th className="text-left py-2 px-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">type</td>
                <td className="py-2 px-4">rotating | pulse | bounce | wave | ring | dots | bars | grid</td>
                <td className="py-2 px-4">rotating</td>
                <td className="py-2 px-4">The animation type of the spinner</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">size</td>
                <td className="py-2 px-4">xs | sm | md | lg | xl</td>
                <td className="py-2 px-4">md</td>
                <td className="py-2 px-4">The size of the spinner</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">color</td>
                <td className="py-2 px-4">primary | secondary | success | warning | error | neutral</td>
                <td className="py-2 px-4">primary</td>
                <td className="py-2 px-4">The color theme of the spinner</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">speed</td>
                <td className="py-2 px-4">slow | normal | fast</td>
                <td className="py-2 px-4">normal</td>
                <td className="py-2 px-4">The animation speed</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">visible</td>
                <td className="py-2 px-4">boolean</td>
                <td className="py-2 px-4">true</td>
                <td className="py-2 px-4">Whether the spinner should be visible</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">label</td>
                <td className="py-2 px-4">string</td>
                <td className="py-2 px-4">-</td>
                <td className="py-2 px-4">Optional text label below the spinner</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">overlay</td>
                <td className="py-2 px-4">boolean</td>
                <td className="py-2 px-4">false</td>
                <td className="py-2 px-4">Overlay mode to cover existing content</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">overlayOpacity</td>
                <td className="py-2 px-4">number</td>
                <td className="py-2 px-4">0.8</td>
                <td className="py-2 px-4">Opacity of the overlay background (0-1)</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">overlayColor</td>
                <td className="py-2 px-4">string</td>
                <td className="py-2 px-4">bg-white</td>
                <td className="py-2 px-4">Custom overlay background color</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">animationConfig</td>
                <td className="py-2 px-4">Partial&lt;SpinnerAnimationConfig&gt;</td>
                <td className="py-2 px-4">-</td>
                <td className="py-2 px-4">Custom animation configuration</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">className</td>
                <td className="py-2 px-4">string</td>
                <td className="py-2 px-4">-</td>
                <td className="py-2 px-4">Additional CSS classes</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">aria-label</td>
                <td className="py-2 px-4">string</td>
                <td className="py-2 px-4">Loading</td>
                <td className="py-2 px-4">ARIA label for accessibility</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono">data-testid</td>
                <td className="py-2 px-4">string</td>
                <td className="py-2 px-4">spinner</td>
                <td className="py-2 px-4">Test ID for testing purposes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ProgressSpinnerPage;