import { Input } from "../Input";

export const DescriptionInput = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        With Description
      </h2>
      <div className="max-w-md">
        <Input
          label="Username"
          placeholder="Enter username"
          description="Username must be unique and contain only letters, numbers, and underscores"
          data-testid="input-with-description"
        />
      </div>
    </section>
  );
};
