import { Input } from "../Input";

export const SizeInput = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Sizes
      </h2>
      <div className="space-y-4">
        <Input
          size="sm"
          label="Small"
          placeholder="Small input"
          data-testid="small-input"
        />
        <Input
          size="md"
          label="Medium (Default)"
          placeholder="Medium input"
          data-testid="medium-input"
        />
        <Input
          size="lg"
          label="Large"
          placeholder="Large input"
          data-testid="large-input"
        />
      </div>
    </section>
  );
};
