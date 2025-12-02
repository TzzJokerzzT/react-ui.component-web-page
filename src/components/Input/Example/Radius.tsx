import { Input } from "../Input";

export const RadiusInput = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Radius
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Input
          radius="none"
          label="None"
          placeholder="No radius"
          data-testid="none-radius-input"
        />
        <Input
          radius="sm"
          label="Small"
          placeholder="Small radius"
          data-testid="sm-radius-input"
        />
        <Input
          radius="md"
          label="Medium (Default)"
          placeholder="Medium radius"
          data-testid="md-radius-input"
        />
        <Input
          radius="lg"
          label="Large"
          placeholder="Large radius"
          data-testid="lg-radius-input"
        />
        <Input
          radius="full"
          label="Full"
          placeholder="Full radius"
          data-testid="full-radius-input"
        />
      </div>
    </section>
  );
};
