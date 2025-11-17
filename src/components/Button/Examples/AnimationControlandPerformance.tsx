import { Button } from "../button";

export const AnimationControlandPerformance = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-4 border rounded-lg">
        <h4 className="font-semibold text-gray-700 mb-3">Full Animations</h4>
        <div className="space-y-2">
          <Button hoverAnimation="glow" clickAnimation="ripple" color="primary">
            Glow + Ripple Effect
          </Button>
          <Button
            hoverAnimation="rotate"
            clickAnimation="bounce"
            color="secondary"
          >
            Rotate + Bounce
          </Button>
        </div>
        <p className="text-xs text-gray-600 mt-2">
          Full Framer Motion animations enabled
        </p>
      </div>

      <div className="p-4 border rounded-lg">
        <h4 className="font-semibold text-gray-700 mb-3">
          Animations Disabled
        </h4>
        <div className="space-y-2">
          <Button disableAnimation color="primary">
            No Animations
          </Button>
          <Button disableAnimation color="secondary">
            Static Button
          </Button>
        </div>
        <p className="text-xs text-gray-600 mt-2">
          Animations disabled for accessibility or performance
        </p>
      </div>
    </div>
  );
};
