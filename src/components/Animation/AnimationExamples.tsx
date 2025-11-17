import { useState } from 'react';
import { FadeIn, SlideIn, ScaleIn, Stagger } from './';
import { ThemeToggleWithLabel } from '../ThemeToggle';
import { useTheme } from '../../contexts/ThemeContext';

export function AnimationExamples() {
  const [manualTrigger, setManualTrigger] = useState(false);
  const staggerItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  const { actualTheme } = useTheme();

  // Common styles with dark mode support
  const sectionStyle = "mb-12";
  const headerStyle = "text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center";
  const cardStyle = "bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-xl p-6 mb-6 border border-gray-200 dark:border-gray-700";
  const subHeaderStyle = "text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4";
  const demoBoxStyle = "p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-center shadow-md";
  const exampleGridStyle = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header with Theme Toggle */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Animation Components Library
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive examples of animation components with interactive demos and code examples.
            </p>
          </div>
          <div className="ml-8">
            <ThemeToggleWithLabel />
          </div>
        </div>

        {/* Theme Status Indicator */}
        <div className={cardStyle}>
          <div className="flex items-center justify-center gap-4 py-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Tema actual:
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
              {actualTheme === 'dark' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
            </span>
          </div>
        </div>

      {/* Stagger Animations */}
      <section className={sectionStyle}>
        <h2 className={headerStyle}>📋 Stagger - Animaciones Escalonadas</h2>
        
        <div className={cardStyle}>
          <h3 className={subHeaderStyle}>Lista con FadeIn escalonado</h3>
          <Stagger animationType="fadeIn" staggerDelay={0.1}>
            {staggerItems.map((item, index) => (
              <div key={index} className={`${demoBoxStyle} mb-2`}>
                {item}
              </div>
            ))}
          </Stagger>
        </div>

        <div className={cardStyle}>
          <h3 className={subHeaderStyle}>Grid con SlideIn escalonado</h3>
          <Stagger 
            animationType="slideIn" 
            direction="left" 
            staggerDelay={0.15}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6'].map((item, index) => (
              <div key={index} className={demoBoxStyle}>
                {item}
              </div>
            ))}
          </Stagger>
        </div>

        <div className={cardStyle}>
          <h3 className={subHeaderStyle}>Botones con ScaleIn escalonado</h3>
          <Stagger 
            animationType="scaleIn" 
            staggerDelay={0.1}
            className="flex flex-wrap gap-3"
          >
            {['Inicio', 'Servicios', 'Productos', 'Contacto', 'Blog'].map((item, index) => (
              <button 
                key={index} 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {item}
              </button>
            ))}
          </Stagger>
        </div>

        {/* Stagger Code Examples */}
        <div className={cardStyle}>
          <h3 className={subHeaderStyle}>📝 Ejemplos de Código</h3>
          
          <div className="space-y-8">
            {/* Basic Stagger */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Stagger Básico</h4>
              <div className="bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-200 p-4 rounded-lg overflow-x-auto border dark:border-gray-600">
                <pre><code>{`// Lista con FadeIn escalonado
import { Stagger } from '@/components/Animation';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

<Stagger animationType="fadeIn" staggerDelay={0.1}>
  {items.map((item, index) => (
    <div key={index} className="p-4 bg-blue-100 rounded mb-2">
      {item}
    </div>
  ))}
</Stagger>`}</code></pre>
              </div>
            </div>

            {/* Grid Stagger */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Grid con Animación Escalonada</h4>
              <div className="bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-200 p-4 rounded-lg overflow-x-auto border dark:border-gray-600">
                <pre><code>{`// Grid responsive con SlideIn escalonado
<Stagger 
  animationType="slideIn" 
  direction="left" 
  staggerDelay={0.15}
  className="grid grid-cols-2 md:grid-cols-3 gap-4"
>
  {cardData.map((card, index) => (
    <div key={index} className="p-6 bg-white rounded-lg shadow">
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </div>
  ))}
</Stagger>`}</code></pre>
              </div>
            </div>

            {/* Navigation Menu */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Menú de Navegación</h4>
              <div className="bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-200 p-4 rounded-lg overflow-x-auto border dark:border-gray-600">
                <pre><code>{`// Botones de navegación con ScaleIn escalonado
const menuItems = ['Inicio', 'Servicios', 'Productos', 'Contacto'];

<Stagger 
  animationType="scaleIn" 
  staggerDelay={0.1}
  className="flex flex-wrap gap-3"
>
  {menuItems.map((item, index) => (
    <button 
      key={index} 
      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      onClick={() => handleNavigation(item)}
    >
      {item}
    </button>
  ))}
</Stagger>`}</code></pre>
              </div>
            </div>

            {/* Advanced Configuration */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Configuración Avanzada</h4>
              <div className="bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-200 p-4 rounded-lg overflow-x-auto border dark:border-gray-600">
                <pre><code>{`// Stagger con configuración completa
<Stagger 
  animationType="slideIn"
  direction="up"
  distance={50}
  staggerDelay={0.2}
  duration={800}
  easing="cubic-bezier(0.4, 0, 0.2, 1)"
  trigger="intersection"
  threshold={0.3}
  className="space-y-4"
>
  {blogPosts.map((post, index) => (
    <article key={post.id} className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <time className="text-sm text-gray-500">{post.date}</time>
    </article>
  ))}
</Stagger>`}</code></pre>
              </div>
            </div>

            {/* Performance Tips */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Consejos de Rendimiento</h4>
              <div className="bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-200 p-4 rounded-lg overflow-x-auto border dark:border-gray-600">
                <pre><code>{`// Optimizando Stagger para listas largas
<Stagger 
  animationType="fadeIn" 
  staggerDelay={0.05} // Delay más corto para listas largas
  maxItems={20}       // Limitar animaciones simultáneas
  disableReducedMotion={false} // Respetar preferencias del usuario
>
  {largeDataSet.slice(0, 20).map((item, index) => (
    <LazyLoadedComponent key={item.id} data={item} />
  ))}
</Stagger>

// Para listas muy largas, considera paginación
{showMore && (
  <Stagger animationType="slideIn" direction="up">
    {largeDataSet.slice(20, 40).map((item, index) => (
      <LazyLoadedComponent key={item.id} data={item} />
    ))}
  </Stagger>
)}`}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manual Control Example */}
      <section className={sectionStyle}>
        <h2 className={headerStyle}>🎮 Control Manual</h2>
        
        <div className={cardStyle}>
          <h3 className={subHeaderStyle}>Trigger manual con botones</h3>
          <div className="space-y-4">
            <div className="space-x-4">
              <button 
                onClick={() => setManualTrigger(!manualTrigger)}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                {manualTrigger ? 'Ocultar' : 'Mostrar'} Animación
              </button>
            </div>
            
            {manualTrigger && (
              <div className="space-y-4">
                <FadeIn key={manualTrigger.toString()}>
                  <div className={demoBoxStyle}>FadeIn controlado manualmente</div>
                </FadeIn>
                <SlideIn key={`slide-${manualTrigger.toString()}`} direction="right">
                  <div className={demoBoxStyle}>SlideIn controlado manualmente</div>
                </SlideIn>
                <ScaleIn key={`scale-${manualTrigger.toString()}`}>
                  <div className={demoBoxStyle}>ScaleIn controlado manualmente</div>
                </ScaleIn>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Performance Options */}
      <section className={sectionStyle}>
        <h2 className={headerStyle}>⚙️ Opciones de Rendimiento</h2>
        
        <div className={cardStyle}>
          <h3 className={subHeaderStyle}>Animaciones deshabilitadas</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Útil para usuarios que prefieren reducir las animaciones o para mejorar el rendimiento.
          </p>
          <div className={exampleGridStyle}>
            <FadeIn disabled>
              <div className={demoBoxStyle}>FadeIn deshabilitado</div>
            </FadeIn>
            <SlideIn disabled direction="up">
              <div className={demoBoxStyle}>SlideIn deshabilitado</div>
            </SlideIn>
            <ScaleIn disabled>
              <div className={demoBoxStyle}>ScaleIn deshabilitado</div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className={sectionStyle}>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">
            💡 Mejores Prácticas
          </h2>
          <ul className="space-y-2 text-blue-700 dark:text-blue-300">
            <li>• Usa <code className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">once=true</code> para animaciones que solo deben ejecutarse una vez</li>
            <li>• Ajusta el <code className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">threshold</code> según cuándo quieres que se active la animación</li>
            <li>• Utiliza <code className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">disabled</code> para respetar las preferencias de accesibilidad del usuario</li>
            <li>• Combina diferentes animaciones para crear efectos únicos</li>
            <li>• Usa <code className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Stagger</code> para listas y grids para mejor experiencia visual</li>
            <li>• Considera el rendimiento: evita animar muchos elementos simultáneamente</li>
          </ul>
        </div>
      </section>
      </div>
    </div>
  );
}

export default AnimationExamples;