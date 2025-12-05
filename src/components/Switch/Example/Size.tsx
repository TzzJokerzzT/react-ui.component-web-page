import { FadeContainer } from "@/components/AnimatedContainer";
import { Button } from "@/components/Button";
import { SizeCodeSwitch } from "../Code/SizeCode";
import { Switch } from "../Switch";
import { useShowCode } from "../hook/useShowCode";

export const SizeSwitch = () => {
  const { showCode, toggleCodeVisibility } = useShowCode();

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Sizes
      </h2>
      <div className="flex flex-wrap items-center gap-4">
        <Switch size="sm" data-testid="small-switch">
          <p className="text-md font-semibold text-black dark:text-primary-50">
            Small
          </p>
        </Switch>
        <Switch size="md" data-testid="medium-switch">
          <p className="text-md font-semibold text-black dark:text-primary-50">
            Medium
          </p>
        </Switch>
        <Switch size="lg" data-testid="large-switch">
          <p className="text-md font-semibold text-black dark:text-primary-50">
            Large
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
              <SizeCodeSwitch title="Switch sizes" />
            </FadeContainer>
          </div>
        )}
      </div>
    </section>
  );
};
