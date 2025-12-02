import { Input } from "../Input";

export const CustomValidationInput = () => {
  const validateUsername = (value: string) => {
    if (value.length < 3) return "Username must be at least 3 characters";
    if (!/^[a-zA-Z0-9_]+$/.test(value))
      return "Username can only contain letters, numbers, and underscores";
    return true;
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Custom Validation
      </h2>
      <div className="max-w-md">
        <Input
          label="Username"
          placeholder="Enter username"
          validate={validateUsername}
          description="Username must be at least 3 characters and contain only letters, numbers, and underscores"
          data-testid="custom-validation-input"
        />
      </div>
    </section>
  );
};
