const ExamplesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-8 space-y-8 bg-white dark:bg-gray-800 min-h-screen rounded-lg">
      {children}
    </div>
  );
};

export default ExamplesLayout;
