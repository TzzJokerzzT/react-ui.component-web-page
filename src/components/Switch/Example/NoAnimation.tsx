import { FadeContainer } from "@/components/AnimatedContainer";
import { Button } from "@/components/Button";
import { NoAnimationSwitchCode } from "../Code/NoAnimationCode";
import { useShowCode } from "../hook/useShowCode";
import { Switch } from "../Switch";

export const NoAnimationSwitch = () => {
  const { showCode, toggleCodeVisibility } = useShowCode();

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Without Animation
      </h2>
      <div className="flex flex-wrap gap-4">
        <Switch disableAnimation data-testid="no-animation-switch">
          <p className="text-md font-semibold text-black dark:text-primary-50">
            No Animation
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
              <NoAnimationSwitchCode title="Without Animations" />
            </FadeContainer>
          </div>
        )}
      </div>
    </section>
  );
};
