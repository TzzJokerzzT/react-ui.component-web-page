import { Button } from "@/components/Button";
import { useToast } from "../useToast";

export const SizeToast = () => {
  const { info } = useToast();
  return (
    <section>
      <h3 className="text-lg font-semibold mb-4">Toast Sizes</h3>
      <div className="flex gap-4 flex-wrap">
        <Button
          onClick={() => info("Small size toast", { size: "sm" })}
          size="sm"
        >
          Small
        </Button>
        <Button
          onClick={() => info("Medium size toast", { size: "md" })}
          size="md"
        >
          Medium
        </Button>
        <Button
          onClick={() => info("Large size toast", { size: "lg" })}
          size="lg"
        >
          Large
        </Button>
      </div>
    </section>
  );
};
