import { Button } from "../button";

const ANIMATIONS = [
  "scale",
  "bounce",
  "ripple",
  "press",
  "punch",
  "wiggle",
  "none",
] as const;

export const AnimationButtons = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {ANIMATIONS.map((animation) => (
        <div
          key={animation}
          className="text-center p-4 border rounded-lg bg-white"
        >
          <Button
            clickAnimation={animation}
            color="secondary"
            className="mb-2 w-full"
          >
            {animation.charAt(0).toUpperCase() + animation.slice(1)}
          </Button>
          <p className="text-xs text-gray-600 capitalize">click: {animation}</p>
        </div>
      ))}
    </div>
  );
};
