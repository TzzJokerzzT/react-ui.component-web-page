import { CodeBlockLayout } from "@/layout/CodeBlockLayout";

export const DisabledCodeSwitch = ({ title }: { title: string }) => {
  return (
    <CodeBlockLayout title={title}>
      {`export const DisabledSwitch = () => {

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Disabled
      </h2>
      <div className="flex flex-wrap gap-4">
        <Switch isDisabled data-testid="disabled-switch">
          Disabled Switch
        </Switch>
        <Switch isDisabled defaultSelected data-testid="disabled-selected">
          Disabled & Selected
        </Switch>
      </div>
    </section>
  );
};
`}
    </CodeBlockLayout>
  );
};
