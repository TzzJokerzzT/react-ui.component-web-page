import { Checkbox } from "../Checkbox";

export const StatesCheckbox = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        States
      </h3>
      <div className="flex flex-col flex-wrap gap-4">
        <div className="space-y-3">
          <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Normal States
          </h4>
          <div className="grid grid-cols-2 mb-4 md:grid-cols-3 gap-4">
            <Checkbox>Unchecked</Checkbox>
            <Checkbox defaultSelected>Checked</Checkbox>
            <Checkbox isRequired>Required</Checkbox>
            <Checkbox isReadOnly defaultSelected>
              Read-only
            </Checkbox>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Error States
          </h4>
          <div className="grid grid-cols-2 mb-4 md:grid-cols-3 gap-4">
            <Checkbox isInvalid>Invalid</Checkbox>
            <Checkbox isInvalid defaultSelected>
              Invalid checked
            </Checkbox>
            <Checkbox validationState="invalid">Validation error</Checkbox>
            <Checkbox validationState="valid" defaultSelected>
              Valid
            </Checkbox>
          </div>
        </div>
      </div>
    </div>
  );
};
