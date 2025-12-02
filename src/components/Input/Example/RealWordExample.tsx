import { Button } from "@/components/Button";
import { Input } from "../Input";

export const RealWordExampleInput = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Real-world Form Example
      </h2>
      <div className="max-w-2xl">
        <form
          className="space-y-6 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-800 dark:border-white"
          onSubmit={handleSubmit}
        >
          <h3 className="text-lg font-medium text-black dark:text-primary-50 mb-4">
            User Registration
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              placeholder="Enter first name"
              isRequired
              data-testid="form-first-name"
            />
            <Input
              label="Last Name"
              placeholder="Enter last name"
              isRequired
              data-testid="form-last-name"
            />
          </div>

          <Input
            type="email"
            label="Email Address"
            placeholder="Enter email address"
            isRequired
            startContent={
              <svg
                className="w-4 h-4 text-default-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            }
            data-testid="form-email"
          />

          <Input
            type="password"
            label="Password"
            placeholder="Create a strong password"
            isRequired
            minLength={8}
            description="Password must be at least 8 characters long"
            data-testid="form-password"
          />

          <Input
            type="tel"
            label="Phone Number"
            placeholder="Enter phone number"
            startContent={<span className="text-default-400">+1</span>}
            data-testid="form-phone"
          />

          <Input
            label="Company (Optional)"
            labelPlacement="inside"
            placeholder="Enter company name"
            startContent={
              <svg
                className="w-4 h-4 text-default-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8v-2a2 2 0 012-2h2a2 2 0 012 2v2"
                />
              </svg>
            }
            data-testid="form-company"
          />

          <div className="flex gap-4 pt-4">
            <Button type="submit" color="primary">
              Register
            </Button>
            <Button type="reset" variant="outline" color="default">
              Reset
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
