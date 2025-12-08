import { FadeContainer } from "@/components/AnimatedContainer";
import { Button } from "@/components/Button";
import { useState } from "react";
import { IconSwitchCode } from "../Code/IconCode";
import { useShowCode } from "../hook/useShowCode";
import { MoonIcon, SunIcon, Switch } from "../Switch";

export const IconSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { showCode, toggleCodeVisibility } = useShowCode();

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        With Icons
      </h2>
      <div className="flex flex-wrap gap-4">
        <Switch
          startContent={<SunIcon className="w-4 h-4 text-amber-500" />}
          endContent={<MoonIcon className="w-4 h-4 text-blue-600" />}
          isSelected={darkMode}
          onValueChange={setDarkMode}
          color="success"
          data-testid="icon-switch"
        >
          <p className="text-md font-semibold text-black dark:text-primary-50">
            Theme
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
              <IconSwitchCode title="Switch with Icons" />
            </FadeContainer>
          </div>
        )}
      </div>
    </section>
  );
};
