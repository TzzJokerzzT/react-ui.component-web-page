import { FadeContainer } from "@/components/AnimatedContainer";
import { Button } from "@/components/Button";
import { SizeCodeSwitch } from "../Code/SizeCode";
import { useShowCode } from "../hook/useShowCode";
import { Switch } from "../Switch";
import { ColorCodeSwitch } from "../Code/ColorCode";

export const ColorSwitch = () => {
  const { showCode, toggleCodeVisibility } = useShowCode();
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Colors
      </h2>
      <div className="flex flex-wrap gap-4">
        <Switch color="default" defaultSelected data-testid="default-color">
          <p className="text-md font-semibold text-black dark:text-primary-50">
            Default
          </p>
        </Switch>
        <Switch color="primary" defaultSelected data-testid="primary-color">
          <p className="text-md font-semibold text-black dark:text-primary-50">
            Primary
          </p>
        </Switch>
        <Switch color="secondary" defaultSelected data-testid="secondary-color">
          <p className="text-md font-semibold text-black dark:text-primary-50">
            Secondary
          </p>
        </Switch>
        <Switch color="success" defaultSelected data-testid="success-color">
          <p className="text-md font-semibold text-black dark:text-primary-50">
            Success
          </p>
        </Switch>
        <Switch color="warning" defaultSelected data-testid="warning-color">
          <p className="text-md font-semibold text-black dark:text-primary-50">
            Warning
          </p>
        </Switch>
        <Switch color="danger" defaultSelected data-testid="danger-color">
          <p className="text-md font-semibold text-black dark:text-primary-50">
            Danger
          </p>
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
              <ColorCodeSwitch title="Switch Colors" />
            </FadeContainer>
          </div>
        )}
      </div>
    </section>
  );
};
