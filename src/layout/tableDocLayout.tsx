import { TableDocLayoutProps } from "./types";

export const TableDocLayout = ({ content }: TableDocLayoutProps) => {
  return (
    <section className="space-y-6 mt-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-black dark:text-gray-200">
            Props Reference
          </h2>
        </div>
        {content.map((items) => (
          <>
            <div className="mb-8" key={items.id}>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-black dark:text-gray-200">
                  {items.title}
                </h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="overflow-x-auto">{items.mainContent}</div>
              </div>
            </div>

            {items?.subContent?.map(({ id, title, content }) => (
              <div className="mb-8" key={id}>
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-black dark:text-gray-200">
                    {title}
                  </h2>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="overflow-x-auto">{content}</div>
                </div>
              </div>
            ))}
          </>
        ))}
      </div>
    </section>
  );
};
