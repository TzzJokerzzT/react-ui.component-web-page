import { useState } from "react";
import { Input } from "../Input";

export const RealTimeValidationInput = () => {
  const [realtimeEmail, setRealtimeEmail] = useState("");

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Realtime Validation
      </h2>
      <div className="max-w-md">
        <Input
          type="email"
          label="Email (Realtime)"
          placeholder="Enter email to see realtime validation"
          value={realtimeEmail}
          onValueChange={setRealtimeEmail}
          isInvalid={
            realtimeEmail !== "" &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(realtimeEmail)
          }
          errorMessage={
            realtimeEmail !== "" &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(realtimeEmail)
              ? "Please enter a valid email address"
              : ""
          }
          data-testid="realtime-validation-input"
        />
      </div>
    </section>
  );
};
