import { Button } from "@/components/Button";
import { useToast } from "../useToast";

export const PositionToast = () => {
  const { info } = useToast();
  return (
    <section>
      <h3 className="text-lg font-semibold mb-4">Toast Positions</h3>
      <div className="grid grid-cols-3 gap-4">
        <Button
          onClick={() => info("Top left position", { position: "top-left" })}
          size="sm"
        >
          Top Left
        </Button>
        <Button
          onClick={() => info("Top center position", { position: "top" })}
          size="sm"
        >
          Top Center
        </Button>
        <Button
          onClick={() => info("Top right position", { position: "top-right" })}
          size="sm"
        >
          Top Right
        </Button>
        <Button
          onClick={() =>
            info("Bottom left position", { position: "bottom-left" })
          }
          size="sm"
        >
          Bottom Left
        </Button>
        <Button
          onClick={() => info("Bottom center position", { position: "bottom" })}
          size="sm"
        >
          Bottom Center
        </Button>
        <Button
          onClick={() =>
            info("Bottom right position", { position: "bottom-right" })
          }
          size="sm"
        >
          Bottom Right
        </Button>
      </div>
    </section>
  );
};
