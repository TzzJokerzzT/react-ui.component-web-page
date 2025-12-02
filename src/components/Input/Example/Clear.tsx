import { useState } from "react";
import { Input } from "../Input";

export const ClearInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Clear Button
      </h2>
      <div className="max-w-md space-y-4">
        <Input
          label="Search"
          placeholder="Type to see clear button"
          isClearable
          value={searchTerm}
          onValueChange={setSearchTerm}
          onClear={() => console.log("Cleared!")}
          data-testid="clearable-input"
        />
        <p className="text-sm text-gray-600">Search term: "{searchTerm}"</p>
      </div>
    </section>
  );
};
