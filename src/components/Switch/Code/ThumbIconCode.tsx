import { CodeBlockLayout } from "@/layout/CodeBlockLayout";

export const ThumbIconSwitchCode = ({ title }: { title: string }) => {
  return (
    <CodeBlockLayout title={title}>
      {`export const ThumbIconSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        With Thumb Icon
      </h2>
      <div className="flex flex-wrap gap-4">
        <Switch
          thumbIcon={({ isSelected }) =>
            isSelected ? (
              <MoonIcon className="text-blue-600" />
            ) : (
              <SunIcon className="text-amber-500" />
            )
          }
          onValueChange={handleChange}
          color="primary"
          data-testid="thumb-icon-switch"
        >
          <p className="text-md font-semibold text-black dark:text-primary-50">
            {darkMode ? "Light Mode" : " Dark Mode"}
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
