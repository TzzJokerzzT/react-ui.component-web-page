import { Checkbox } from "../Checkbox";

export const ColorCheckbox = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Colors
      </h3>
      <div className="grid grid-cols-2 mb-4 md:grid-cols-3 gap-4">
        <Checkbox color="default" defaultSelected>
          Default
        </Checkbox>
        <Checkbox color="primary" defaultSelected>
          Primary
        </Checkbox>
        <Checkbox color="secondary" defaultSelected>
          Secondary
        </Checkbox>
        <Checkbox color="success" defaultSelected>
          Success
        </Checkbox>
        <Checkbox color="warning" defaultSelected>
          Warning
        </Checkbox>
        <Checkbox color="danger" defaultSelected>
          Danger
        </Checkbox>
      </div>
    </div>
  );
};
