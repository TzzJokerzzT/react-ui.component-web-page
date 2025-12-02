import { Input } from "../Input";

export const ColorsInput = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Colors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Input
          color="default"
          label="Default"
          placeholder="Default color"
          data-testid="default-color-input"
        />
        <Input
          color="primary"
          label="Primary"
          placeholder="Primary color"
          data-testid="primary-color-input"
        />
        <Input
          color="secondary"
          label="Secondary"
          placeholder="Secondary color"
          data-testid="secondary-color-input"
        />
        <Input
          color="success"
          label="Success"
          placeholder="Success color"
          data-testid="success-color-input"
        />
        <Input
          color="warning"
          label="Warning"
          placeholder="Warning color"
          data-testid="warning-color-input"
        />
        <Input
          color="danger"
          label="Danger"
          placeholder="Danger color"
          data-testid="danger-color-input"
        />
      </div>
    </section>
  );
};
