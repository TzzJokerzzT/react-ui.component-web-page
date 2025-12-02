import { useState } from "react";
import { Input } from "../Input";
import { Button } from "@/components/Button";

export const ControlledInput = () => {
  const [username, setUsername] = useState("");

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Controlled Input
      </h2>
      <div className="max-w-md space-y-4">
        <Input
          label="Username"
          placeholder="Enter username"
          value={username}
          onValueChange={setUsername}
          description="You can control this input externally"
          data-testid="controlled-input"
        />
        <div className="flex gap-2">
          <Button onClick={() => setUsername("john_doe")}>
            Set to "john_doe"
          </Button>
          <Button
            color="default"
            onClick={() => setUsername("")}
            variant="outline"
          >
            Clear
          </Button>
        </div>
        <p className="text-sm text-black dark:text-primary-50 ">
          Current value: "{username}"
        </p>
      </div>
    </section>
  );
};
