import { Switch } from "../Switch";

export const NoAnimationSwitch = () => {
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
    </section>
  );
};
