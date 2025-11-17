import { Button } from "../button";

export const CombinedButtons = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-4 border rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
        <h4 className="font-semibold text-blue-800 mb-3">Energetic Combo</h4>
        <Button
          hoverAnimation="bounce"
          clickAnimation="punch"
          color="primary"
          className="w-full mb-2"
        >
          Bounce + Punch
        </Button>
        <p className="text-xs text-blue-700">Hover: bounce | Click: punch</p>
      </div>

      <div className="p-4 border rounded-lg bg-gradient-to-br from-purple-50 to-purple-100">
        <h4 className="font-semibold text-purple-800 mb-3">Elegant Combo</h4>
        <Button
          hoverAnimation="lift"
          clickAnimation="scale"
          color="secondary"
          variant="outline"
          className="w-full mb-2"
        >
          Lift + Scale
        </Button>
        <p className="text-xs text-purple-700">Hover: lift | Click: scale</p>
      </div>

      <div className="p-4 border rounded-lg bg-gradient-to-br from-green-50 to-green-100">
        <h4 className="font-semibold text-green-800 mb-3">Playful Combo</h4>
        <Button
          hoverAnimation="shake"
          clickAnimation="wiggle"
          color="success"
          className="w-full mb-2"
        >
          Shake + Wiggle
        </Button>
        <p className="text-xs text-green-700">Hover: shake | Click: wiggle</p>
      </div>
    </div>
  );
};
