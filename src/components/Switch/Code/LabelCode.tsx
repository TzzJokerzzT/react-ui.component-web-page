import { CodeBlockLayout } from "@/layout/CodeBlockLayout";

export const LabelCodeSwitch = ({ title }: { title: string }) => {
  return (
    <CodeBlockLayout title={title}>
      {`export const LabelSwitch = () => {

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        With Label
      </h2>
      <div className="flex flex-wrap gap-4">
        <Switch data-testid="labeled-switch">
          <p className="text-md font-semibold text-black dark:text-primary-50">
            Bluetooth
          </p>
        </Switch>
      </div>
    </section>
  );
`}
    </CodeBlockLayout>
  );
};
