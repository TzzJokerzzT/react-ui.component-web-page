import { Button } from "../button";

export const LoadingButtons = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <Button isLoading color="primary">
        Loading Primary
      </Button>
      <Button isLoading color="secondary" variant="outline">
        Loading Outline
      </Button>
      <Button isLoading color="success" variant="ghost">
        Loading Ghost
      </Button>
      <Button isLoading color="warning" size="lg">
        Loading Large
      </Button>
    </div>
  );
};
