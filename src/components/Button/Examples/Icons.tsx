import { Button } from "../button";

export const IconButtons = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <Button startIcon={<span>🚀</span>}>Start Icon</Button>
      <Button endIcon={<span>➡️</span>}>End Icon</Button>
      <Button startIcon={<span>⭐</span>} endIcon={<span>✨</span>}>
        Both Icons
      </Button>
    </div>
  );
};
