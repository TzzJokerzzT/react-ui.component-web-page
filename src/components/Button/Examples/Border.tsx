import { Button } from "../button";

export const BorderButtons = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <Button radius="none">None</Button>
      <Button radius="sm">Small</Button>
      <Button radius="md">Medium</Button>
      <Button radius="lg">Large</Button>
      <Button radius="xl">XL</Button>
      <Button radius="full">Full</Button>
    </div>
  );
};
