import { Button } from "@/components/Button";
import { Card, CardHeader, CardBody, CardFooter } from "../Card";

export const RealWorldCard = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Real-world Example
      </h2>
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
              <Button color="danger" size="sm" variant="light">
                ❤️
              </Button>
            </div>
          </CardBody>

          <CardFooter>
            <Button color="default">Edit</Button>
            <Button color="primary">View Details</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};
