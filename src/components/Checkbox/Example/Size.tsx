import { Checkbox } from "../Checkbox";

export const SizeCheckbox = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Sizes
      </h3>
      <div className="grid grid-cols-2 mb-4 md:grid-cols-3 gap-4">
        <Checkbox size="sm" defaultSelected>
          Small
        </Checkbox>
        <Checkbox size="md" defaultSelected>
          Medium
        </Checkbox>
        <Checkbox size="lg" defaultSelected>
          Large
        </Checkbox>
      </div>
    </div>
  );
};
