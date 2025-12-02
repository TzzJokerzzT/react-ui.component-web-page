import { Input } from "../Input";

export const RequiredInput = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Required Field
      </h2>
      <div className="max-w-md">
        <Input
          label="Required Field"
          placeholder="This field is required"
          isRequired
          data-testid="required-input"
        />
      </div>
    </section>
  );
};
