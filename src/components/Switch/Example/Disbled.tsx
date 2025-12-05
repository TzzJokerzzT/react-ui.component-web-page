import { FadeContainer } from "@/components/AnimatedContainer";
import { Button } from "@/components/Button";
import { DisabledCodeSwitch } from "../Code/DisabledCode";
import { Switch } from "../Switch";
import { useShowCode } from "../hook/useShowCode";

export const DisabledSwitch = () => {
  const { showCode, toggleCodeVisibility } = useShowCode();
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Disabled
      </h2>
      <div className="flex flex-wrap gap-4">
        <Switch isDisabled data-testid="disabled-switch">
          Disabled Switch
        </Switch>
        <Switch isDisabled defaultSelected data-testid="disabled-selected">
          Disabled & Selected
        </Switch>
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
              <DisabledCodeSwitch title="Disbled Switch" />
            </FadeContainer>
          </div>
        )}
      </div>
    </section>
  );
};
