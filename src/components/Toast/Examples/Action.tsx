import { Button } from "@/components/Button";
import { useToast } from "../useToast";

export const ActionToast = () => {
  const { info } = useToast();
  return (
    <section>
      <h3 className="text-lg font-semibold mb-4">Toast with Actions</h3>
      <div className="flex gap-4 flex-wrap">
        <Button
          onClick={() =>
            info("Your changes have been saved", {
              title: "Changes Saved",
              action: (
                <div className="flex gap-2">
                  <Button size="xs" variant="light" color="primary">
                    Undo
                  </Button>
                  <Button size="xs" variant="bordered" color="primary">
                    View
                  </Button>
                </div>
              ),
              duration: 0,
            })
          }
          color="primary"
        >
          Toast with Actions
        </Button>
      </div>
    </section>
  );
};
