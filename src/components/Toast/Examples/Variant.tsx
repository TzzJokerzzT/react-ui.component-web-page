import { Button } from "@/components/Button";
import { useToast } from "../useToast";

export const VariantToast = () => {
  const { success, warning, info } = useToast();
  return (
    <section>
      <h3 className="text-lg font-semibold mb-4">Toast Variants</h3>
      <div className="flex gap-4 flex-wrap">
        <Button
          onClick={() => success("Solid variant toast", { variant: "solid" })}
          color="success"
        >
          Solid
        </Button>
        <Button
          onClick={() =>
            info("Bordered variant toast", { variant: "bordered" })
          }
          color="primary"
          variant="bordered"
        >
          Bordered
        </Button>
        <Button
          onClick={() => warning("Flat variant toast", { variant: "flat" })}
          color="warning"
          variant="light"
        >
          Flat
        </Button>
        <Button
          onClick={() => info("Faded variant toast", { variant: "faded" })}
          color="primary"
          variant="faded"
        >
          Faded
        </Button>
        <Button
          onClick={() => success("Shadow variant toast", { variant: "shadow" })}
          color="success"
          variant="gradient"
        >
          Shadow
        </Button>
      </div>
    </section>
  );
};
