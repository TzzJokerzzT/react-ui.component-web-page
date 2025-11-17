import { Button } from "../button";

export const PopularAnimationButtons = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="p-4 border rounded-lg bg-white">
        <h4 className="font-medium text-black mb-2">Professional</h4>
        <Button
          hoverAnimation="scale"
          clickAnimation="scale"
          color="primary"
          className="w-full mb-2"
        >
          Scale + Scale
        </Button>
        <p className="text-xs text-black">Subtle and professional</p>
      </div>

      <div className="p-4 border rounded-lg bg-white">
        <h4 className="font-medium text-black mb-2">Elegant</h4>
        <Button
          hoverAnimation="lift"
          clickAnimation="press"
          color="secondary"
          className="w-full mb-2"
        >
          Lift + Press
        </Button>
        <p className="text-xs text-black">Smooth and elegant</p>
      </div>

      <div className="p-4 border rounded-lg bg-white">
        <h4 className="font-medium text-black mb-2">Playful</h4>
        <Button
          hoverAnimation="bounce"
          clickAnimation="bounce"
          color="success"
          className="w-full mb-2"
        >
          Bounce + Bounce
        </Button>
        <p className="text-xs text-black">Fun and energetic</p>
      </div>

      <div className="p-4 border rounded-lg bg-white">
        <h4 className="font-medium text-black mb-2">Modern</h4>
        <Button
          hoverAnimation="glow"
          clickAnimation="ripple"
          color="primary"
          variant="outline"
          className="w-full mb-2"
        >
          Glow + Ripple
        </Button>
        <p className="text-xs text-black">Contemporary feel</p>
      </div>

      <div className="p-4 border rounded-lg bg-white">
        <h4 className="font-medium text-black mb-2">Dynamic</h4>
        <Button
          hoverAnimation="pulse"
          clickAnimation="punch"
          color="warning"
          className="w-full mb-2"
        >
          Pulse + Punch
        </Button>
        <p className="text-xs text-black">High energy</p>
      </div>

      <div className="p-4 border rounded-lg bg-white">
        <h4 className="font-medium text-black mb-2">Minimal</h4>
        <Button
          hoverAnimation="none"
          clickAnimation="none"
          color="default"
          variant="ghost"
          className="w-full mb-2"
        >
          None + None
        </Button>
        <p className="text-xs text-black">Clean and minimal</p>
      </div>
    </div>
  );
};
