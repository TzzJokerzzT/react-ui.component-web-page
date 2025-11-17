import { Button } from "../button";

export const StateButtons = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        States
      </h2>
      <div className="flex gap-4 flex-wrap">
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
        <Button isLoading>Loading</Button>
        <Button fullWidth className="max-w-xs">
          Full Width
        </Button>
      </div>
    </section>
  );
};
