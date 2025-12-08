import { FadeContainer } from "@/components/AnimatedContainer";
import { Button } from "@/components/Button";
import { useState } from "react";
import { ThumbIconSwitchCode } from "../Code/ThumbIconCode";
import { useShowCode } from "../hook/useShowCode";
import { MoonIcon, SunIcon, Switch } from "../Switch";

export const ThumbIconSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { showCode, toggleCodeVisibility } = useShowCode();

  const handleChange = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        With Thumb Icon
      </h2>
      <div className="flex flex-wrap gap-4">
        <Switch
          thumbIcon={({ isSelected }) =>
            isSelected ? (
              <MoonIcon className="text-blue-600" />
            ) : (
              <SunIcon className="text-amber-500" />
            )
          }
          onValueChange={handleChange}
          color="primary"
          data-testid="thumb-icon-switch"
        >
          <p className="text-md font-semibold text-black dark:text-primary-50">
            {darkMode ? "Light Mode" : " Dark Mode"}
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
              <ThumbIconSwitchCode title="With Thumb Icons" />
            </FadeContainer>
          </div>
        )}
      </div>
    </section>
  );
};
