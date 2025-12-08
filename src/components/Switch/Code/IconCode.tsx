import { CodeBlockLayout } from "@/layout/CodeBlockLayout";

export const IconSwitchCode = ({ title }: { title: string }) => {
  return (
    <CodeBlockLayout title={title}>
      {`export const IconSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        With Icons
      </h2>
      <div className="flex flex-wrap gap-4">
        <Switch
          startContent={<SunIcon className="w-4 h-4 text-amber-500" />}
          endContent={<MoonIcon className="w-4 h-4 text-blue-600" />}
          isSelected={darkMode}
          onValueChange={setDarkMode}
          color="success"
          data-testid="icon-switch"
        >
          <p className="text-md font-semibold text-black dark:text-primary-50">
            Theme
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
