import { Checkbox } from "../Checkbox";

export const AnimationCheckbox = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Animation Control
      </h3>
      <div className="grid grid-cols-2 mb-4 md:grid-cols-3 gap-4">
        <Checkbox defaultSelected>With animations</Checkbox>
        <Checkbox defaultSelected disableAnimation>
          Without animations
        </Checkbox>
      </div>
    </div>
  );
};
