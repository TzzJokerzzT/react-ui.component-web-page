import { useState } from "react";
import { Switch } from "./index";

/**
 * Switch Thumb Click Test Component
 * Test component to verify thumb click functionality
 */
export const SwitchThumbClickTest = () => {
  const [clickCount, setClickCount] = useState(0);
  const [lastClickSource, setLastClickSource] = useState<string>("");

  // Test switches
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  const handleSwitch1Change = (value: boolean) => {
    setSwitch1(value);
    setClickCount(prev => prev + 1);
    setLastClickSource("Switch 1");
  };

  const handleSwitch2Change = (value: boolean) => {
    setSwitch2(value);
    setClickCount(prev => prev + 1);
    setLastClickSource("Switch 2");
  };

  const handleSwitch3Change = (value: boolean) => {
    setSwitch3(value);
    setClickCount(prev => prev + 1);
    setLastClickSource("Switch 3");
  };

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Switch Thumb Click Test
        </h1>
        <p className="text-gray-600 mb-4">
          Prueba hacer click tanto en el thumb (círculo) como en el área alrededor del switch.
          Ambos deberían funcionar y cambiar el estado.
        </p>
        
        <div className="p-4 bg-blue-50 rounded-lg mb-6">
          <h3 className="font-semibold text-blue-800 mb-2">Estadísticas de Clicks:</h3>
          <p className="text-blue-700">Total de clicks: <strong>{clickCount}</strong></p>
          <p className="text-blue-700">Último click en: <strong>{lastClickSource || "Ninguno"}</strong></p>
        </div>
      </div>

      {/* Test Section - Different sizes */}
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Tamaño Small - Haz click en el thumb o en el área
          </h2>
          <div className="flex items-center space-x-4">
            <Switch
              size="sm"
              isSelected={switch1}
              onValueChange={handleSwitch1Change}
              color="primary"
            >
              Switch Small
            </Switch>
            <span className="text-sm text-gray-600">
              Estado: {switch1 ? "ON" : "OFF"}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            💡 Tip: Apunta específicamente al círculo blanco (thumb) y haz click
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Tamaño Medium - Haz click en el thumb o en el área
          </h2>
          <div className="flex items-center space-x-4">
            <Switch
              size="md"
              isSelected={switch2}
              onValueChange={handleSwitch2Change}
              color="success"
            >
              Switch Medium
            </Switch>
            <span className="text-sm text-gray-600">
              Estado: {switch2 ? "ON" : "OFF"}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            💡 Tip: Deberías ver efectos hover (escala 1.1) y tap (escala 0.95) en el thumb
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Tamaño Large - Haz click en el thumb o en el área
          </h2>
          <div className="flex items-center space-x-4">
            <Switch
              size="lg"
              isSelected={switch3}
              onValueChange={handleSwitch3Change}
              color="danger"
            >
              Switch Large
            </Switch>
            <span className="text-sm text-gray-600">
              Estado: {switch3 ? "ON" : "OFF"}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            💡 Tip: El cursor debería cambiar a pointer cuando pases sobre el thumb
          </p>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Instrucciones de Prueba
        </h2>
        <div className="space-y-3 text-gray-700">
          <div className="flex items-start space-x-3">
            <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <p><strong>Click en el Thumb:</strong> Haz click directamente en el círculo blanco que se mueve</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <p><strong>Click en el Wrapper:</strong> Haz click en el área de color alrededor del thumb</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <p><strong>Hover Effects:</strong> Al pasar el mouse sobre el thumb, debería escalar ligeramente</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <p><strong>Cursor:</strong> El cursor debería cambiar a pointer sobre el thumb</p>
          </div>
        </div>
      </div>

      {/* Expected Behavior */}
      <div className="bg-green-50 p-6 rounded-lg">
        <h3 className="font-semibold text-green-800 mb-2">✅ Comportamiento Esperado:</h3>
        <ul className="text-green-700 space-y-1">
          <li>• Ambos clicks (thumb y wrapper) deben cambiar el estado del switch</li>
          <li>• No debe haber doble activación (no debe cambiar dos veces por un click)</li>
          <li>• Las animaciones deben funcionar suavemente</li>
          <li>• El contador de clicks debe incrementar con cada interacción</li>
          <li>• Los efectos hover/tap deben ser visibles en el thumb</li>
        </ul>
      </div>
    </div>
  );
};