import { CodeBlockLayout } from "@/layout/CodeBlockLayout";

export const BasicSwitchCode = ({ title }: { title: string }) => {
  return (
    <CodeBlockLayout title={title}>
      {`import { Switch } from './components/Switch';

export const SimpleSwitch = () => {
  return (
      <div className="flex flex-wrap gap-4">
        <Switch data-testid="basic-switch" />
        <Switch
          defaultSelected
          onValueChange={() => console.log("Notificacion")}
          data-testid="default-selected"
         />
      </div>
  );
};`}
    </CodeBlockLayout>
  );
};
