import { Checkbox } from "../Checkbox";

export const LineThroughCheckbox = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Line Through Effect
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Labels get a strikethrough effect when checked.
      </p>
      <div className="grid grid-cols-2 mb-4 md:grid-cols-3 gap-4">
        <Checkbox lineThrough>Task item 1</Checkbox>
        <Checkbox lineThrough defaultSelected>
          Task item 2 (completed)
        </Checkbox>
        <Checkbox lineThrough>Task item 3</Checkbox>
        <Checkbox lineThrough color="success">
          Success task
        </Checkbox>
      </div>
    </div>
  );
};
