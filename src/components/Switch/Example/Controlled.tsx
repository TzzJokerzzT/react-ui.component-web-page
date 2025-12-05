import { useState } from "react";
import { Switch } from "../Switch";

export const ControlledSwitch = () => {
  const [controlledValue, setControlledValue] = useState(false);

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Controlled
      </h2>
      <div className="space-y-2">
        <Switch
          isSelected={controlledValue}
          onValueChange={setControlledValue}
          data-testid="controlled-switch"
        >
          <p className="text-md font-semibold text-black dark:text-primary-50">
            Controlled Switch
          </p>
        </Switch>
        <p className="text-sm text-black dark:text-primary-50">
          Current value: {controlledValue ? "ON" : "OFF"}
        </p>
      </div>
    </section>
  );
};
