import { Card, CardHeader, CardBody, CardFooter } from "../Card";

export const RealWorldCard = () => {
  return (
    <div className="max-w-md">
      <Card
        variant="elevated"
        isHoverable
        className="h-full"
        data-testid="example-article-card"
      >
        <CardHeader>
          <h3 className="text-lg font-semibold line-clamp-2">
            Advanced React Patterns for 2024
          </h3>
          <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded">
            React
          </span>
        </CardHeader>

        <CardBody>
          <p className="text-gray-600 line-clamp-3 mb-4">
            Explore the latest React patterns including compound components,
            render props, and the new use() hook for better component
            composition.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">⭐</span>
              <span className="text-sm">4.9/5</span>
            </div>
            <button className="text-red-500 hover:text-red-700 text-lg">
              ❤️
            </button>
          </div>
        </CardBody>

        <CardFooter>
          <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
            Edit
          </button>
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
            View Details
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};
