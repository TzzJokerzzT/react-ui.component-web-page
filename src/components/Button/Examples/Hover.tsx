import { Button } from "../button";

export const HoverButtons = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {(
        [
          "scale",
          "lift",
          "bounce",
          "pulse",
          "shake",
          "rotate",
          "glow",
          "none",
        ] as const
      ).map((animation) => (
        <div
          key={animation}
          className="text-center p-4 border border-default dark:border-default-50 rounded-lg"
        >
          <Button
            hoverAnimation={animation}
            color="primary"
            className="mb-2 w-full"
          >
            {animation.charAt(0).toUpperCase() + animation.slice(1)}
          </Button>
          <p className="text-xs text-black dark:text-default-50 capitalize">
            hover: {animation}
          </p>
        </div>
      ))}
    </div>
  );
};
