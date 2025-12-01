import { Button } from "@/components/Button";
import { Checkbox } from "../Checkbox";

export const FormIntegrationCheckbox = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Form submitted!");
  };
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Form Integration
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Checkboxes work seamlessly with forms and form libraries.
      </p>
      <form
        className="grid grid-cols-2 mb-4 md:grid-cols-3 gap-4"
        onSubmit={handleSubmit}
      >
        <Checkbox name="newsletter" value="yes">
          Subscribe to newsletter
        </Checkbox>
        <Checkbox name="terms" value="accepted" isRequired>
          I agree to the terms and conditions *
        </Checkbox>
        <Checkbox name="marketing" value="yes" defaultSelected>
          Allow marketing communications
        </Checkbox>
        <Button type="submit" color="success" size="md">
          Submit Form
        </Button>
      </form>
    </div>
  );
};
