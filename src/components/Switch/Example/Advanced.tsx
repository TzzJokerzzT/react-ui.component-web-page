import { FadeContainer } from "@/components/AnimatedContainer";
import { Button } from "@/components/Button";
import { CustomStylesCode } from "../Code/CustomStylesCode";
import { Switch } from "../Switch";
import { useShowCode } from "../hook/useShowCode";
import { AdvancedSwitchCode } from "../Code/AdvancedCode";

export const AdvancedSwitch = () => {
  const { showCode, toggleCodeVisibility } = useShowCode();

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Advanced Examples
      </h2>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-4">
          <Switch
            size="lg"
            color="success"
            thumbIcon={({ isSelected }) =>
              isSelected ? (
                <span className="text-white font-bold text-xs">ON</span>
              ) : (
                <span className="text-gray-500 font-bold text-xs">OFF</span>
              )
            }
            data-testid="text-thumb-switch"
          >
            <p className="text-md font-semibold text-black dark:text-primary-50">
              Power Mode
            </p>
          </Switch>
        </div>

        <div className="flex flex-wrap gap-4">
          <Switch
            size="sm"
            color="warning"
            startContent=""
            endContent=""
            data-testid="emoji-switch"
          >
            <p className="text-md font-semibold text-black dark:text-primary-50">
              Sound
            </p>
          </Switch>
        </div>

        <div className="flex flex-wrap gap-4">
          <Switch
            color="danger"
            thumbIcon={({ isSelected }) => (isSelected ? "✓" : "✗")}
            data-testid="checkmark-switch"
          >
            <p className="text-md font-semibold text-black dark:text-primary-50">
              Accept Terms
            </p>
          </Switch>
        </div>
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
              <AdvancedSwitchCode title="Advanced Examples" />
            </FadeContainer>
          </div>
        )}
      </div>
    </section>
  );
};
