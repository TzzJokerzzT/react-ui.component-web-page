import { Card } from "../Card";

export const VariantCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card color="primary" variant="elevated">
        <h3 className="font-semibold mb-2 text-blue-800">Primary Card</h3>
        <p className="text-blue-600">Blue themed card</p>
      </Card>

      <Card color="success" variant="bordered">
        <h3 className="font-semibold mb-2 text-green-800">Success Card</h3>
        <p className="text-green-600">Green themed card</p>
      </Card>

      <Card color="danger" variant="shadow">
        <h3 className="font-semibold mb-2 text-red-800">Danger Card</h3>
        <p className="text-red-600">Red themed card</p>
      </Card>
    </div>
  );
};
