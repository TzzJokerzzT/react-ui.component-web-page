import { useState } from "react";
import { Input } from "../Input";

export const PasswordInput = () => {
  const [password, setPassword] = useState("");

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Password Input
      </h2>
      <div className="max-w-md space-y-4">
        <Input
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={password}
          onValueChange={setPassword}
          data-testid="password-input"
        />
        <p className="text-sm text-gray-600">
          Current password: {password ? "•".repeat(password.length) : "(empty)"}
        </p>
      </div>
    </section>
  );
};
