import { CodeBlockLayout } from "@/layout/CodeBlockLayout";

export const CustomStylesCode = ({ title }: { title: string }) => {
  return (
    <CodeBlockLayout title={title}>
      {`export const CustomStylesSwitch = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Custom Styles
      </h2>
      <div className="flex flex-wrap gap-4">
        <Switch
          classNames={{
            base: "max-w-full",
            wrapper:
              "group-data-[selected=true]:bg-gradient-to-r from-pink-500 to-purple-500",
            thumb: "w-6 h-6 shadow-lg",
            label: "text-purple-600 font-bold",
          }}
          data-testid="custom-styles-switch"
        >
          Custom Styled Switch
        </Switch>
      </div>
    </section>
  );
};
`}
    </CodeBlockLayout>
  );
};
