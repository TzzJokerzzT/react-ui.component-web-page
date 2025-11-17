import { Button } from "../button";
import { colors, formatText } from "./helper";

export const ColorButtons = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Colors
      </h2>
      <div className="flex justify-between gap-4 flex-wrap">
        {colors.map((color) => (
          <div key={color} className="text-center">
            <Button color={color} className="mb-2">
              {formatText(color)}
            </Button>
            <p className="text-sm text-black dark:text-primary-50 ">
              {formatText(color)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
