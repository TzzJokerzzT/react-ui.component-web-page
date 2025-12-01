import { Checkbox } from "../Checkbox";

export const BasicCheckbox = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Basic Usage
      </h3>
      <div className="grid grid-cols-2 mb-4 md:grid-cols-3 gap-4">
        <Checkbox>Default checkbox</Checkbox>
        <Checkbox defaultSelected>Pre-selected</Checkbox>
        <Checkbox isDisabled>Disabled</Checkbox>
        <Checkbox isDisabled defaultSelected>
          Disabled selected
        </Checkbox>
      </div>
    </div>
  );
};
