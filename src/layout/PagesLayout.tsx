import { PagesLayoutProps } from "./types";

const PagesLayout = ({ children, title, explanation }: PagesLayoutProps) => {
  return (
    <div className="space-y-8 p-6 min-h-screen rounded-lg">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900 text-black dark:text-white">
          {title}
        </h1>
        <p className="text-gray-600 text-gray-900 dark:text-white">
          {explanation}
        </p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PagesLayout;
