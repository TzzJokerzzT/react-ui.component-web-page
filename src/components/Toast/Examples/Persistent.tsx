import { Button } from "@/components/Button";
import { useToast } from "../useToast";

export const PersistentToast = () => {
  const { success, error, warning } = useToast();
  return (
    <section>
      <h3 className="text-lg font-semibold mb-4">
        Persistent & Custom Duration
      </h3>
      <div className="flex gap-4 flex-wrap">
        <Button
          onClick={() =>
            error("This toast won't auto-dismiss", { duration: 0 })
          }
          color="danger"
        >
          Persistent Toast
        </Button>
        <Button
          onClick={() =>
            success("Auto-dismiss in 10 seconds", { duration: 10000 })
          }
          color="success"
        >
          Long Duration
        </Button>
        <Button
          onClick={() =>
            warning("Quick dismiss in 1 second", { duration: 1000 })
          }
          color="warning"
        >
          Short Duration
        </Button>
      </div>
    </section>
  );
};
