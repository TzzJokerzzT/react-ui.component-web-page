import { Input } from "../Input";

export const DisabledAndReadInput = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Disabled & Read Only
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Disabled Input"
          placeholder="This input is disabled"
          isDisabled
          data-testid="disabled-input"
        />
        <Input
          label="Read Only Input"
          value="This value cannot be edited"
          isReadOnly
          data-testid="readonly-input"
        />
      </div>
    </section>
  );
};
