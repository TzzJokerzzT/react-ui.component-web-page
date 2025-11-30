import { Button } from "@/components/Button";
import { useToast } from "../useToast";

export const TitleToast = () => {
  const { success, error } = useToast();
  return (
    <section>
      <h3 className="text-lg font-semibold mb-4">Toast with Titles</h3>
      <div className="flex gap-4 flex-wrap">
        <Button
          onClick={() =>
            success("User profile updated successfully", {
              title: "Profile Updated",
            })
          }
          color="success"
        >
          Success with Title
        </Button>
        <Button
          onClick={() =>
            error("Failed to save changes to database", {
              title: "Save Failed",
            })
          }
          color="danger"
        >
          Error with Title
        </Button>
      </div>
    </section>
  );
};
