import { Input } from "../Input";

export const CustomStylingInput = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Custom Styling
      </h2>
      <div className="space-y-4">
        <Input
          label="Custom Styled Input"
          placeholder="This input has custom styling"
          classNames={{
            base: "bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-xl",
            label: "text-purple-900 font-bold",
            inputWrapper:
              "bg-white border-2 border-purple-200 hover:border-purple-400 shadow-lg",
            input: "text-purple-900 placeholder:text-purple-400",
            description: "text-purple-600",
          }}
          description="This demonstrates custom class names for different slots"
          data-testid="custom-styled-input"
        />

        <Input
          variant="bordered"
          color="secondary"
          size="lg"
          radius="full"
          label="Stylish Input"
          placeholder="Bordered, secondary, large, full radius"
          startContent={<span className="text-purple-500">✨</span>}
          endContent={<span className="text-purple-500">✨</span>}
          data-testid="stylish-input"
        />
      </div>
    </section>
  );
};
