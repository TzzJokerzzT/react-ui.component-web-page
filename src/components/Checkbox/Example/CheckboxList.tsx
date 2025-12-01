import { Checkbox } from "../Checkbox";

const TECHNOLOGIES = [
  "JavaScript",
  "TypeScript",
  "React",
  "Vue.js",
  "Angular",
  "Svelte",
  "Next.js",
  "Nuxt.js",
  "Node.js",
  "Python",
  "Go",
  "Rust",
];

export const CheckboxList = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Checkbox List
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Example of a list with multiple checkboxes for selection.
      </p>
      <div className="grid grid-cols-2 mb-4 md:grid-cols-3 gap-4">
        {TECHNOLOGIES.map((tech) => (
          <Checkbox key={tech} color="primary" value={tech.toLowerCase()}>
            {tech}
          </Checkbox>
        ))}
      </div>
    </div>
  );
};
