import { Input } from "../Input";

export const VariantInput = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Variants
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          variant="flat"
          label="Flat (Default)"
          placeholder="Flat variant"
          data-testid="flat-input"
        />
        <Input
          variant="bordered"
          label="Bordered"
          placeholder="Bordered variant"
          data-testid="bordered-input"
        />
        <Input
          variant="faded"
          label="Faded"
          placeholder="Faded variant"
          data-testid="faded-input"
        />
        <Input
          variant="underlined"
          label="Underlined"
          placeholder="Underlined variant"
          data-testid="underlined-input"
        />
      </div>
    </section>
  );
};
