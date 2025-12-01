import { Checkbox } from "../Checkbox";

export const RadiusCheckbox = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Radius Variants
      </h3>
      <div className="grid grid-cols-2 mb-4 md:grid-cols-3 gap-4">
        <Checkbox radius="none" defaultSelected>
          None
        </Checkbox>
        <Checkbox radius="sm" defaultSelected>
          Small
        </Checkbox>
        <Checkbox radius="md" defaultSelected>
          Medium
        </Checkbox>
        <Checkbox radius="lg" defaultSelected>
          Large
        </Checkbox>
        <Checkbox radius="full" defaultSelected>
          Full
        </Checkbox>
      </div>
    </div>
  );
};
