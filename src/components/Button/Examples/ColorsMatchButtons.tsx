import { Button } from "../button";
import { colors } from "./helper";

export const ColorsMatchButtons = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {colors.map((color) => (
        <div key={color} className="text-center p-4 border rounded-lg bg-white">
          <Button color={color} hoverAnimation="pulse" className="mb-2 w-full">
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </Button>
          <p className="text-xs text-gray-600">Focus ring matches color</p>
        </div>
      ))}
    </div>
  );
};
