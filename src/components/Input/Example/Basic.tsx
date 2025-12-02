import { Input } from "../Input";

export const BasicInput = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Basic Usage
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Email"
          placeholder="Enter your email"
          data-testid="basic-input"
        />
        <Input
          label="Name"
          placeholder="Enter your name"
          defaultValue="John Doe"
          data-testid="basic-input-with-value"
        />
      </div>
    </section>
  );
};
