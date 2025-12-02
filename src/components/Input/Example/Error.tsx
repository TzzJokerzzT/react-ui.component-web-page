import { useState } from "react";
import { Input } from "../Input";

export const ErrorInput = () => {
  const [email, setEmail] = useState("");

  // Email validation function
  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return "Email is required";
    if (!emailRegex.test(value)) return "Please enter a valid email address";
    return true;
  };
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        With Error Message
      </h2>
      <div className="space-y-4">
        {/* Static error message */}
        <Input
          label="Email"
          placeholder="Enter email"
          isInvalid
          errorMessage="Please enter a valid email address"
          data-testid="input-with-error"
        />

        {/* Dynamic error message with regex validation */}
        <Input
          label="Email (with validation)"
          placeholder="Enter email"
          value={email}
          onValueChange={setEmail}
          validate={validateEmail}
          data-testid="email-validation-input"
        />
      </div>
    </section>
  );
};
