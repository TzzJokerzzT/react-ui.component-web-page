import { CodeBlockLayoutProps } from "./types";

export const CodeBlockLayout = ({ children, title }: CodeBlockLayoutProps) => {
  return (
    <div className="bg-gray-900 rounded-lg p-4 mt-3 overflow-y-auto h-auto">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 text-sm ml-2">{title}</span>
      </div>
      <pre className="text-primary-50 text-sm overflow-x-auto">
        <code>{children}</code>
      </pre>
    </div>
  );
};
