import { Card } from "../Card";

export const SizeCard = () => {
  return (
    <div className="space-y-4">
      <Card size="sm" variant="bordered" className="max-w-xs">
        <p className="text-sm">Small card - compact spacing</p>
      </Card>

      <Card size="md" variant="bordered" className="max-w-md">
        <p>Medium card - default spacing</p>
      </Card>

      <Card size="lg" variant="bordered" className="max-w-lg">
        <h3 className="font-semibold mb-2">Large card</h3>
        <p>More generous spacing for content</p>
      </Card>

      <Card size="xl" variant="bordered" className="max-w-xl">
        <h2 className="text-xl font-bold mb-3">Extra Large card</h2>
        <p className="mb-4">Maximum spacing for rich content layouts</p>
        <p className="text-gray-600">
          Perfect for detailed information displays
        </p>
      </Card>
    </div>
  );
};
