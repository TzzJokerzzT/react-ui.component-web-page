import { Card } from "../Card";

export const InteractiveCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card
        isClickable
        onClick={() => alert("Clickable card clicked!")}
        variant="elevated"
        color="primary"
      >
        <h3 className="font-semibold mb-2">Clickable Card</h3>
        <p className="text-gray-600">Click me to see the action!</p>
      </Card>

      <Card isHoverable variant="bordered" color="secondary">
        <h3 className="font-semibold mb-2">Hoverable Card</h3>
        <p className="text-gray-600">Hover for smooth effects</p>
      </Card>

      <Card
        isClickable
        isDisabled
        onClick={() => alert("This should not fire")}
        variant="shadow"
        color="danger"
      >
        <h3 className="font-semibold mb-2">Disabled Card</h3>
        <p className="text-gray-600">This card is disabled</p>
      </Card>
    </div>
  );
};
