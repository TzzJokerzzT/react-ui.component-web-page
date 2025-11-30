import { Button } from "@/components/Button";
import { useToast } from "../useToast";

export const BasicToast = () => {
  const { toast, success, error, warning, info } = useToast();
  return (
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
        <Button onClick={() => error("Something went wrong!")} color="danger">
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
  );
};
