import { CodeBlockLayout } from "@/layout/CodeBlockLayout";

export const SizeCodeSwitch = ({ title }: { title: string }) => {
  return (
    <CodeBlockLayout title={title}>
      {`export const SizeSwitch = () => {

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
    </section>
  );
};
`}
    </CodeBlockLayout>
  );
};
