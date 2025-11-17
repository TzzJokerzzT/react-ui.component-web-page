import React, { useState } from 'react';
import { Accordion, AccordionItem } from '../components/Accordion';

/**
 * Test component specifically for uniform animation validation
 */
export const UniformAnimationTest: React.FC = () => {
  const [testKey, setTestKey] = useState<string[]>([]);

  const toggleAccordion = () => {
    setTestKey(current => 
      current.includes('test-1') ? [] : ['test-1']
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">
          🎯 Test de Animación Uniforme
        </h1>
        <p className="text-gray-600 mb-6">
          Esta prueba verifica que la animación de apertura sea completamente uniforme
        </p>
        
        <button
          onClick={toggleAccordion}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {testKey.includes('test-1') ? 'Cerrar' : 'Abrir'} Accordion
        </button>
      </div>

      <div className="space-y-8">
        {/* Test principal con spring preset */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Spring Preset (Default)</h3>
          <Accordion 
            expandedKeys={testKey}
            onExpandedChange={setTestKey}
            animationConfig={{ preset: 'spring' }}
            variant="bordered"
            color="primary"
          >
            <AccordionItem itemKey="test-1" title="🚀 Test de Animación Uniforme">
              <div className="space-y-3">
                <p>
                  <strong>✅ Verificación:</strong> La altura del contenedor y la opacidad/posición del contenido 
                  deben animarse <em>exactamente</em> al mismo tiempo, sin retrasos ni escalonamiento.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Qué observar:</strong>
                  </p>
                  <ul className="text-sm text-blue-700 mt-1 space-y-1">
                    <li>• La animación debe ser completamente suave y uniforme</li>
                    <li>• No debe haber "doble apertura" o efectos escalonados</li>
                    <li>• El contenido debe aparecer sincronizado con la altura</li>
                    <li>• Tanto apertura como cierre deben ser fluidos</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>Configuración actual:</strong> Animación unificada en un solo contenedor.
                  Height, opacity y y se animan simultáneamente con valores idénticos de spring 
                  (280 stiffness, 25 damping) sin delays ni fases separadas.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Tests adicionales con otros presets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Bouncy Preset</h4>
            <Accordion 
              animationConfig={{ preset: 'bouncy' }}
              variant="shadow"
              color="warning"
              size="sm"
            >
              <AccordionItem itemKey="bouncy-test" title="Bouncy Test">
                <p>Animación energética pero uniforme (400 stiffness, 18 damping)</p>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Smooth Preset</h4>
            <Accordion 
              animationConfig={{ preset: 'smooth' }}
              variant="flat"
              color="secondary"
              size="sm"
            >
              <AccordionItem itemKey="smooth-test" title="Smooth Test">
                <p>Animación pulida y consistente (240 stiffness, 28 damping)</p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <div className="flex items-start space-x-3">
            <div className="text-green-600 text-lg">✅</div>
            <div>
              <p className="text-sm text-green-800 font-medium">🎯 SOLUCIÓN DEFINITIVA - Versión 4.1 FINAL</p>
              <ul className="text-sm text-green-700 mt-1 space-y-1">
                <li>• 🚨 <strong>CAUSA REAL:</strong> height: "auto" no se puede animar uniformemente</li>
                <li>• ✅ <strong>SOLUCIÓN:</strong> Cambiado a scaleY + opacity (transformaciones suaves)</li>
                <li>• ✅ Eliminadas TODAS las animaciones de height inconsistentes</li>
                <li>• ✅ Solo transformaciones que se animan perfectamente</li>
                <li>• ✅ transformOrigin: "top" para expansión natural</li>
                <li>• ✅ generateAccordionVariants también corregido (última pieza)</li>
                <li>• ✅ Animación completamente uniforme garantizada en TODO el sistema</li>
              </ul>
              <div className="mt-2 p-2 bg-green-100 rounded text-xs">
                <strong>🔧 Última actualización:</strong> Eliminada la función generateAccordionVariants 
                que aún usaba height: "auto". Ahora TODO el sistema usa scaleY uniformemente.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniformAnimationTest;