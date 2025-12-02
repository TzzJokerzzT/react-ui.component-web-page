import { Input } from "../Input";

export const StartAndEndInput = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Start & End Content
      </h2>
      <div className="space-y-4">
        <Input
          label="Website"
          placeholder="mysite"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">https://</span>
            </div>
          }
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">.com</span>
            </div>
          }
          data-testid="start-end-content-input"
        />

        <Input
          label="Price"
          placeholder="0.00"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
          endContent={
            <div className="flex items-center">
              <span className="text-default-400 text-small">USD</span>
            </div>
          }
          type="number"
          data-testid="price-input"
        />

        <Input
          label="Search"
          placeholder="Type to search..."
          startContent={
            <svg
              className="w-4 h-4 text-default-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          }
          data-testid="search-input"
        />
      </div>
    </section>
  );
};
