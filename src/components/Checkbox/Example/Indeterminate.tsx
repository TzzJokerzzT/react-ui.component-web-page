import { useState } from "react";
import { Checkbox } from "../Checkbox";

export const IndeterminateCheckbox = () => {
  const [indeterminate, setIndeterminate] = useState(true);
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Indeterminate State
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Click the checkbox to toggle between indeterminate, checked, and
        unchecked states.
      </p>
      <div className="grid grid-cols-2 mb-4 md:grid-cols-3 gap-4">
        <Checkbox
          isIndeterminate={indeterminate}
          onValueChange={(checked) => {
            if (indeterminate) {
              setIndeterminate(false);
            } else if (!checked) {
              setIndeterminate(true);
            }
          }}
        >
          Indeterminate checkbox
        </Checkbox>
        <Checkbox isIndeterminate color="success">
          Always indeterminate
        </Checkbox>
        <Checkbox isIndeterminate color="danger" size="lg">
          Large indeterminate
        </Checkbox>
      </div>
    </div>
  );
};
