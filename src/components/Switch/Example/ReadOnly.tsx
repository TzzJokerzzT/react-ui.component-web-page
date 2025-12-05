import { Switch } from "../Switch";

export const ReadOnlySwitch = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Read Only
      </h2>
      <div className="flex flex-wrap gap-4">
        <Switch isReadOnly defaultSelected data-testid="readonly-switch">
          <p className="text-md font-semibold text-black dark:text-primary-50">
            Read Only Switch
          </p>
        </Switch>
      </div>
    </section>
  );
};
