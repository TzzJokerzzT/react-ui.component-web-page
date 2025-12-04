import { Card, CardHeader, CardBody, CardFooter } from "../Card";

export const ComposedCard = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Composed Cards
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Profile Card */}
        <Card
          variant="elevated"
          color="primary"
          size="lg"
          radius="xl"
          isHoverable
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div>
                <h3 className="font-semibold text-blue-900">John Doe</h3>
                <p className="text-sm text-blue-600">Software Engineer</p>
              </div>
            </div>
            <button className="text-blue-400 hover:text-blue-600 text-xl">
              ⚙️
            </button>
          </CardHeader>

          <CardBody>
            <p className="text-blue-700 mb-4">
              Passionate developer with 5+ years of experience in React and
              TypeScript.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                React
              </span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                TypeScript
              </span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                Node.js
              </span>
            </div>
          </CardBody>

          <CardFooter>
            <button className="px-4 py-2 text-sm border border-blue-300 text-blue-700 rounded-lg hover:bg-blue-50">
              Message
            </button>
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Connect
            </button>
          </CardFooter>
        </Card>

        {/* Article Preview Card */}
        <Card variant="bordered" color="default" isHoverable>
          <CardHeader>
            <h3 className="text-lg font-semibold line-clamp-2">
              Building Reusable Components with TypeScript
            </h3>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              Technology
            </span>
          </CardHeader>

          <CardBody>
            <p className="text-gray-600 mb-4">
              Learn how to create flexible, type-safe components that can be
              reused across your entire application...
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-1">⭐ 4.8/5</span>
              <span className="text-gray-500">5 min read</span>
            </div>
          </CardBody>

          <CardFooter>
            <button className="text-gray-600 hover:text-gray-800">
              🤍 Save
            </button>
            <button className="px-4 py-2 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800">
              Read More
            </button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};
