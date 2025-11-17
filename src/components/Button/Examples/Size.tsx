import { Button } from "../button";
import { formatText, sizes } from "./helper";

export const SizeButtons = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Sizes
      </h2>
      <div className="flex items-end gap-4 flex-wrap">
        {sizes.map((size) => (
          <div key={size} className="text-center">
            <Button size={size} className="mb-2">
              Size {size.toUpperCase()}
            </Button>
            <p className="text-sm text-black dark:text-primary-50 ">
              {formatText(size)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
