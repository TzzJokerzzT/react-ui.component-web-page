import { CodeBlockLayout } from "@/layout/CodeBlockLayout";

export const ColorCodeSwitch = ({ title }: { title: string }) => {
  return (
    <CodeBlockLayout title={title}>
      {`export const ColorSwitch = () => {

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Colors
      </h2>
      <div className="flex flex-wrap gap-4">
        <Switch color="default" defaultSelected data-testid="default-color">
          <p className="text-md font-semibold text-black dark:text-primary-50">
            Default
          </p>
        </Switch>
        <Switch color="primary" defaultSelected data-testid="primary-color">
          <p className="text-md font-semibold text-black dark:text-primary-50">
            Primary
          </p>
        </Switch>
        <Switch color="secondary" defaultSelected data-testid="secondary-color">
          <p className="text-md font-semibold text-black dark:text-primary-50">
            Secondary
          </p>
        </Switch>
        <Switch color="success" defaultSelected data-testid="success-color">
          <p className="text-md font-semibold text-black dark:text-primary-50">
            Success
          </p>
        </Switch>
        <Switch color="warning" defaultSelected data-testid="warning-color">
          <p className="text-md font-semibold text-black dark:text-primary-50">
            Warning
          </p>
        </Switch>
        <Switch color="danger" defaultSelected data-testid="danger-color">
          <p className="text-md font-semibold text-black dark:text-primary-50">
            Danger
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
