import { FadeContainer } from "@/components/AnimatedContainer";
import { Button } from "@/components/Button";
import { CustomStylesCode } from "../Code/CustomStylesCode";
import { Switch } from "../Switch";
import { useShowCode } from "../hook/useShowCode";

export const CustomStylesSwitch = () => {
  const { showCode, toggleCodeVisibility } = useShowCode();

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Custom Styles
      </h2>
      <div className="flex flex-wrap gap-4">
        <Switch
          classNames={{
            base: "max-w-full",
            wrapper:
              "group-data-[selected=true]:bg-gradient-to-r from-pink-500 to-purple-500",
            thumb: "w-6 h-6 shadow-lg",
            label: "text-purple-600 font-bold",
          }}
          data-testid="custom-styles-switch"
        >
          Custom Styled Switch
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
              <CustomStylesCode title="Custom Styles" />
            </FadeContainer>
          </div>
        )}
      </div>
    </section>
  );
};
