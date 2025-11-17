import { useState } from "react";
import { Switch } from "./index";

/**
 * Switch Centering Test Component
 * Visual test to verify thumb centering calculations across all sizes
 */
export const SwitchCenteringTest = () => {
  const [showDebug, setShowDebug] = useState(false);
  
  // Test data for visual verification
  const sizes = [
    { 
      size: "sm" as const, 
      wrapperPx: 40, 
      thumbPx: 20, 
      expectedTranslate: 40 - 20 - 4 // 16px
    },
    { 
      size: "md" as const, 
      wrapperPx: 48, 
      thumbPx: 24, 
      expectedTranslate: 48 - 24 - 4 // 20px
    },
    { 
      size: "lg" as const, 
      wrapperPx: 56, 
      thumbPx: 28, 
      expectedTranslate: 56 - 28 - 4 // 24px
    }
  ];

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Switch Centering Test</h1>
        <p className="text-gray-600 mb-4">
          Visual verification of thumb centering calculations across all switch sizes.
        </p>
        
        <div className="mb-4">
          <Switch 
            isSelected={showDebug}
            onValueChange={setShowDebug}
            size="sm"
          >
            Show Debug Info
          </Switch>
        </div>
      </div>

      {/* Size Testing Grid */}
      <div className="space-y-8">
        {sizes.map(({ size, wrapperPx, thumbPx, expectedTranslate }) => (
          <div key={size} className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Size: {size.toUpperCase()}
            </h2>
            
            {showDebug && (
              <div className="mb-4 p-3 bg-gray-100 rounded text-sm font-mono space-y-1">
                <div>Wrapper Width: {wrapperPx}px</div>
                <div>Thumb Width: {thumbPx}px</div>
                <div>Total Offset: 4px (2px border + 2px positioning)</div>
                <div>Expected Translate: {expectedTranslate}px</div>
                <div className="text-blue-600 font-semibold">
                  Formula: wrapperWidth - thumbWidth - totalOffset = {wrapperPx} - {thumbPx} - 4 = {expectedTranslate}px
                </div>
              </div>
            )}

            {/* Visual Test Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* OFF State */}
              <div className="space-y-2">
                <h3 className="font-medium text-gray-700">OFF State</h3>
                <Switch 
                  size={size}
                  isSelected={false}
                  data-testid={`${size}-off`}
                >
                  Disabled
                </Switch>
              </div>

              {/* ON State */}
              <div className="space-y-2">
                <h3 className="font-medium text-gray-700">ON State</h3>
                <Switch 
                  size={size}
                  isSelected={true}
                  data-testid={`${size}-on`}
                >
                  Enabled
                </Switch>
              </div>

              {/* Interactive */}
              <div className="space-y-2">
                <h3 className="font-medium text-gray-700">Interactive</h3>
                <Switch 
                  size={size}
                  data-testid={`${size}-interactive`}
                >
                  Toggle Me
                </Switch>
              </div>

              {/* With Colors */}
              <div className="space-y-2">
                <h3 className="font-medium text-gray-700">Colored</h3>
                <Switch 
                  size={size}
                  color="success"
                  defaultSelected
                  data-testid={`${size}-colored`}
                >
                  Success
                </Switch>
              </div>
            </div>

            {/* Manual Centering Check */}
            {showDebug && (
              <div className="mt-6 p-4 border-2 border-dashed border-gray-300 rounded">
                <h4 className="font-medium text-gray-700 mb-2">Manual Centering Check:</h4>
                <div className="flex items-center space-x-4">
                  <div className="space-y-1">
                    <div className="text-sm text-gray-600">OFF Position (should be left-aligned):</div>
                    <div 
                      className={`relative border-2 border-gray-300 rounded-full bg-gray-200 ${
                        size === 'sm' ? 'w-10 h-6' : 
                        size === 'md' ? 'w-12 h-7' : 'w-14 h-8'
                      }`}
                    >
                      <div 
                        className={`absolute top-0.5 left-0.5 rounded-full bg-white shadow-lg ${
                          size === 'sm' ? 'w-5 h-5' : 
                          size === 'md' ? 'w-6 h-6' : 'w-7 h-7'
                        }`}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-sm text-gray-600">ON Position (should be right-aligned):</div>
                    <div 
                      className={`relative border-2 border-blue-600 rounded-full bg-blue-600 ${
                        size === 'sm' ? 'w-10 h-6' : 
                        size === 'md' ? 'w-12 h-7' : 'w-14 h-8'
                      }`}
                    >
                      <div 
                        className={`absolute top-0.5 left-0.5 rounded-full bg-white shadow-lg transform ${
                          size === 'sm' ? 'w-5 h-5' : 
                          size === 'md' ? 'w-6 h-6' : 'w-7 h-7'
                        }`}
                        style={{ 
                          transform: `translateX(${expectedTranslate}px)` 
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Centering Logic Summary</h2>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">
            The <code className="bg-gray-100 px-2 py-1 rounded">translateDistance</code> variable 
            in the <code className="bg-gray-100 px-2 py-1 rounded">SwitchThumb</code> component 
            controls the horizontal movement of the switch thumb.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Key Variables:</h3>
            <ul className="text-blue-700 space-y-1">
              <li><strong>wrapperWidths:</strong> Container widths (sm: 40px, md: 48px, lg: 56px)</li>
              <li><strong>thumbWidths:</strong> Thumb sizes (sm: 20px, md: 24px, lg: 28px)</li>
              <li><strong>totalOffset:</strong> 4px (2px border + 2px initial positioning)</li>
              <li><strong>translateDistance:</strong> wrapperWidth - thumbWidth - totalOffset</li>
            </ul>
          </div>
          
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Formula:</h3>
            <code className="text-green-700 bg-green-100 px-2 py-1 rounded">
              translateDistance = wrapperWidth - thumbWidth - 4
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};