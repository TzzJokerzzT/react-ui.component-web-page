import { Checkbox } from "../Checkbox";
import { CheckboxIconProps } from "../types";

/**
 * Custom heart icon component for checkbox
 */
const HeartIcon = ({ isSelected, className }: CheckboxIconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={isSelected ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
};

/**
 * Custom star icon component for checkbox
 */
const StarIcon = ({ isSelected, className }: CheckboxIconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={isSelected ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
    >
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
};

export const CustomIconCheckbox = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Custom Icons
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Replace the default checkmark with custom icons.
      </p>
      <div className="space-y-4">
        <div className="grid grid-cols-2 mb-4 md:grid-cols-3 gap-4">
          <Checkbox icon={HeartIcon} color="danger">
            Like this post
          </Checkbox>
          <Checkbox icon={HeartIcon} color="danger" defaultSelected>
            Already liked
          </Checkbox>
        </div>
        <div className="grid grid-cols-2 mb-4 md:grid-cols-3 gap-4">
          <Checkbox icon={StarIcon} color="warning">
            Add to favorites
          </Checkbox>
          <Checkbox icon={StarIcon} color="warning" defaultSelected>
            Already favorited
          </Checkbox>
        </div>
      </div>
    </div>
  );
};
