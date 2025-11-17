import { Button } from "../Button";
import { useToast } from "./useToast";

/**
 * Toast examples for demonstration
 */
export const ToastExamples = () => {
  const { toast, success, error, warning, info } = useToast();

  return (
    <div className="space-y-8">
      {/* Basic Examples */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Basic Toast Types</h3>
        <div className="flex gap-4 flex-wrap">
          <Button
            onClick={() => toast("This is a default toast message")}
            color="primary"
          >
            Default Toast
          </Button>
          <Button
            onClick={() => success("Operation completed successfully!")}
            color="success"
          >
            Success Toast
          </Button>
          <Button
            onClick={() => error("Something went wrong!")}
            color="danger"
          >
            Error Toast
          </Button>
          <Button
            onClick={() => warning("Please check your input")}
            color="warning"
          >
            Warning Toast
          </Button>
          <Button
            onClick={() => info("Here's some useful information")}
            color="primary"
            variant="bordered"
          >
            Info Toast
          </Button>
        </div>
      </section>

      {/* With Titles */}
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

      {/* Different Variants */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Toast Variants</h3>
        <div className="flex gap-4 flex-wrap">
          <Button
            onClick={() =>
              success("Solid variant toast", { variant: "solid" })
            }
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
            onClick={() =>
              warning("Flat variant toast", { variant: "flat" })
            }
            color="warning"
            variant="light"
          >
            Flat
          </Button>
          <Button
            onClick={() =>
              info("Faded variant toast", { variant: "faded" })
            }
            color="primary"
            variant="faded"
          >
            Faded
          </Button>
          <Button
            onClick={() =>
              success("Shadow variant toast", { variant: "shadow" })
            }
            color="success"
            variant="gradient"
          >
            Shadow
          </Button>
        </div>
      </section>

      {/* Different Positions */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Toast Positions</h3>
        <div className="grid grid-cols-3 gap-4">
          <Button
            onClick={() =>
              info("Top left position", { position: "top-left" })
            }
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
            onClick={() =>
              info("Top right position", { position: "top-right" })
            }
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
            onClick={() =>
              info("Bottom center position", { position: "bottom" })
            }
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

      {/* Different Sizes */}
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

      {/* Persistent Toasts */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Persistent & Custom Duration</h3>
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

      {/* With Actions */}
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

      {/* Custom Icons */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Custom Icons</h3>
        <div className="flex gap-4 flex-wrap">
          <Button
            onClick={() =>
              toast("Toast with custom icon", {
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                )
              })
            }
            color="warning"
          >
            Custom Icon
          </Button>
          <Button
            onClick={() =>
              toast("Toast without icon", {
                icon: false
              })
            }
            color="secondary"
          >
            No Icon
          </Button>
        </div>
      </section>
    </div>
  );
};