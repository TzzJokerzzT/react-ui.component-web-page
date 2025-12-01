import { Checkbox } from "../Checkbox";

export const CustomStylingCheckbox = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Custom Styling
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Customize different parts of the checkbox with custom classes.
      </p>
      <div className="grid grid-cols-2 mb-4 md:grid-cols-3 gap-4">
        <Checkbox
          classNames={{
            wrapper:
              "border-purple-500 data-[selected=true]:bg-purple-500 data-[selected=true]:border-purple-500",
            icon: "text-white",
            label: "text-purple-700 font-medium",
          }}
          defaultSelected
        >
          Custom purple checkbox
        </Checkbox>
        <Checkbox
          className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
          classNames={{
            wrapper:
              "border-green-500 data-[selected=true]:bg-green-500 shadow-lg",
            label: "text-green-700 font-semibold text-lg",
          }}
          defaultSelected
        >
          Fully custom styled checkbox
        </Checkbox>
      </div>
    </div>
  );
};
