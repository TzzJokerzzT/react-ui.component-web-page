import { FadeContainer } from "@/components/AnimatedContainer";
import { Button } from "@/components/Button";
import { useState } from "react";
import { ControlledSwitchCode } from "../Code/ControlledCode";
import { useShowCode } from "../hook/useShowCode";
import { Switch } from "../Switch";

export const ControlledSwitch = () => {
  const [controlledValue, setControlledValue] = useState(false);
  const { showCode, toggleCodeVisibility } = useShowCode();

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

      <div className="mt-4 flex flex-col">
        <Button
          className="w-28"
          onClick={toggleCodeVisibility}
          variant="outline"
          size="sm"
        >
          Show Code
        </Button>
        {showCode && (
          <div className="grid md:grid-cols-2 gap-6">
            <FadeContainer trigger="inView" duration={0.8} blur blurAmount={5}>
              <ControlledSwitchCode title="Controlled Switch" />
            </FadeContainer>
          </div>
        )}
      </div>
    </section>
  );
};
