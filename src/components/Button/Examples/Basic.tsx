import { Button } from "../button";
import { formatText, variants } from "./helper";

export const BasicButtons = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Variants
      </h2>
      <div className="flex justify-between gap-4 flex-wrap">
        {variants.map((variant) => (
          <div key={variant} className="text-center">
            <Button variant={variant} className="mb-2">
              {formatText(variant)}
            </Button>
            <p className="text-sm text-black dark:text-primary-50 ">
              {formatText(variant)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
