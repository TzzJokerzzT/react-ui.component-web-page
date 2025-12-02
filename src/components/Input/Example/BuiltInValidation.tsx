import { Input } from "../Input";

export const BuiltInValidationInput = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Built-in Validation
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          type="email"
          label="Email"
          placeholder="Enter email"
          isRequired
          data-testid="builtin-email-validation"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          isRequired
          minLength={8}
          data-testid="builtin-password-validation"
        />
        <Input
          label="Phone"
          type="tel"
          placeholder="Enter phone number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          data-testid="builtin-phone-validation"
        />
        <Input
          label="Website"
          type="url"
          placeholder="Enter website URL"
          data-testid="builtin-url-validation"
        />
      </div>
    </section>
  );
};
