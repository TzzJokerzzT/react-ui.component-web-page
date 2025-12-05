import { Switch } from "../Switch";

export const AdvancedSwitch = () => {
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
    </section>
  );
};
