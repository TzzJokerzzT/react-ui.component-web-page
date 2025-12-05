import { FadeContainer } from "@/components/AnimatedContainer";
import { Button } from "@/components/Button";
import { BasicSwitchCode } from "../Code/BasicCode";
import { useShowCode } from "../hook/useShowCode";
import { Switch } from "../Switch";

export const BasicSwitch = () => {
  const { showCode, toggleCodeVisibility } = useShowCode();

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Basic Usage
      </h2>
      <div className="flex flex-wrap gap-4">
        <Switch data-testid="basic-switch" />
        <Switch
          defaultSelected
          onValueChange={() => console.log("Notificacion")}
          data-testid="default-selected"
        />
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
              <BasicSwitchCode title="Basic Switch Example" />
            </FadeContainer>
          </div>
        )}
      </div>
    </section>
  );
};
