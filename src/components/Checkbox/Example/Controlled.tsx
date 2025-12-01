import { useState } from "react";
import { Checkbox } from "../Checkbox";

export const ControlledCheckbox = () => {
  const [controlled, setControlled] = useState(false);
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Controlled Component
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Checkbox state controlled by React state. Current value:{" "}
        {controlled ? "checked" : "unchecked"}
      </p>
      <div className="grid grid-cols-2 mb-4 md:grid-cols-3 gap-4">
        <Checkbox isSelected={controlled} onValueChange={setControlled}>
          Controlled checkbox
        </Checkbox>
        <button
          onClick={() => setControlled(!controlled)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Toggle Programmatically
        </button>
      </div>
    </div>
  );
};
