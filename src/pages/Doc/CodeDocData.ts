// CodeProps columns and content
export const codePropsColumns = [
  { key: "prop", label: "PROP", allowsSorting: false },
  { key: "type", label: "TYPE", allowsSorting: false },
  { key: "default", label: "DEFAULT", allowsSorting: false },
  { key: "description", label: "DESCRIPTION", allowsSorting: false },
];

export const codePropsContent = [
  {
    id: 1,
    key: "children",
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "The code content to display",
  },
  {
    id: 2,
    key: "size",
    prop: "size",
    type: "sm | md | lg",
    default: '"sm"',
    description: "The size of the code block",
  },
  {
    id: 3,
    key: "color",
    prop: "color",
    type: 'default | "primary | secondary | success | warning | danger',
    default: '"default"',
    description: "The color theme of the code block",
  },
  {
    id: 4,
    key: "radius",
    prop: "radius",
    type: "none | sm | md | lg | full",
    default: '"sm"',
    description: "The border radius of the code block",
  },
  {
    id: 5,
    key: "className",
    prop: "className",
    type: "string",
    default: "-",
    description: "Custom class name for the code element",
  },
  {
    id: 6,
    key: "disableAnimation",
    prop: "disableAnimation",
    type: "boolean",
    default: "false",
    description: "Whether to disable animations",
  },
];
