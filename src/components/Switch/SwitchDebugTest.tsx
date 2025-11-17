import { useState } from "react";
import { Switch } from "./index";

/**
 * Simple Switch Debug Test
 * Very basic test to debug switch functionality
 */
export const SwitchDebugTest = () => {
  const [simpleSwitch, setSimpleSwitch] = useState(false);
  
  console.log("SwitchDebugTest render - simpleSwitch:", simpleSwitch);

  const handleChange = (newValue: boolean) => {
    console.log("handleChange called with:", newValue);
    setSimpleSwitch(newValue);
  };

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Switch Debug Test</h1>
      
      <div className="space-y-4">
        <p>Estado actual: {simpleSwitch ? "ON" : "OFF"}</p>
        
        <Switch
          isSelected={simpleSwitch}
          onValueChange={handleChange}
          data-testid="debug-switch"
        >
          Debug Switch
        </Switch>
        
        <button 
          onClick={() => setSimpleSwitch(!simpleSwitch)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Toggle Programáticamente
        </button>
      </div>
    </div>
  );
};