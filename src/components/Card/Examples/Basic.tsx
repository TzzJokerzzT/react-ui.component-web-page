import { Card } from "../Card";

export const BasicCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card variant="elevated" color="primary">
        <h3 className="font-semibold mb-2">Elevated Card</h3>
        <p className="text-gray-600">Default elevated style with shadow</p>
      </Card>

      <Card variant="bordered" color="secondary">
        <h3 className="font-semibold mb-2">Bordered Card</h3>
        <p className="text-gray-600">Clean bordered style</p>
      </Card>

      <Card variant="shadow" color="warning">
        <h3 className="font-semibold mb-2">Shadow Card</h3>
        <p className="text-gray-600">Custom shadow styling</p>
      </Card>

      <Card variant="flat" color="default">
        <h3 className="font-semibold mb-2">Flat Card</h3>
        <p className="text-gray-600">Flat background style</p>
      </Card>
    </div>
  );
};
