// Card component props table
export const cardColumns = [
  { key: "prop", label: "Prop", allowsSorting: false },
  { key: "type", label: "Type", allowsSorting: false },
  { key: "default", label: "Default", allowsSorting: false },
  { key: "description", label: "Description", allowsSorting: false },
];

export const cardContent = [
  {
    id: "1",
    key: "children",
    prop: "children",
    type: "React.ReactNode",
    default: "-",
    description: "The content to display inside the card.",
  },
  {
    id: "2",
    key: "className",
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS classes to apply to the card.",
  },
  {
    id: "3",
    key: "size",
    prop: "size",
    type: "sm | md | lg | xl",
    default: "md",
    description: "The size of the card.",
  },
  {
    id: "4",
    key: "variant",
    prop: "variant",
    type: "elevated | bordered | shadow | flat",
    default: "elevated",
    description: "The visual style variant of the card.",
  },
  {
    id: "5",
    key: "color",
    prop: "color",
    type: "default | primary | secondary | success | warning | danger",
    default: "default",
    description: "The color theme of the card.",
  },
  {
    id: "6",
    key: "radius",
    prop: "radius",
    type: "none | sm | md | lg | xl |full",
    default: "md",
    description: "The border radius of the card.",
  },
  {
    id: "7",
    key: "isClickable",
    prop: "isClickable",
    type: "boolean",
    default: "false",
    description: "Whether the card is clickable and shows hover effects.",
  },
  {
    id: "8",
    key: "isDisabled",
    prop: "isDisabled",
    type: "boolean",
    default: "false",
    description: "Whether the card is disabled.",
  },
  {
    id: "9",
    key: "isHoverable",
    prop: "isHoverable",
    type: "boolean",
    default: "false",
    description: "Whether the card shows hover effects.",
  },
  {
    id: "10",
    key: "onClick",
    prop: "onClick",
    type: "() => void",
    default: "-",
    description: "Handler that is called when the card is clicked.",
  },
  {
    id: "11",
    key: "data-testid",
    prop: "data-testid",
    type: "string",
    default: "-",
    description: "A test identifier for the card element.",
  },
];

// CardHeader component props table
export const cardHeaderColumns = [
  { key: "prop", label: "Prop", allowsSorting: true },
  { key: "type", label: "Type", allowsSorting: true },
  { key: "default", label: "Default", allowsSorting: false },
  { key: "description", label: "Description", allowsSorting: false },
];

export const cardHeaderContent = [
  {
    id: "1",
    key: "children",
    prop: "children",
    type: "React.ReactNode",
    default: "-",
    description: "The content to display inside the card header.",
  },
  {
    id: "2",
    key: "className",
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS classes to apply to the card header.",
  },
  {
    id: "3",
    key: "data-testid",
    prop: "data-testid",
    type: "string",
    default: "-",
    description: "A test identifier for the card header element.",
  },
];

// CardBody component props table
export const cardBodyColumns = [
  { key: "prop", label: "Prop", allowsSorting: true },
  { key: "type", label: "Type", allowsSorting: true },
  { key: "default", label: "Default", allowsSorting: false },
  { key: "description", label: "Description", allowsSorting: false },
];

export const cardBodyContent = [
  {
    id: "1",
    key: "children",
    prop: "children",
    type: "React.ReactNode",
    default: "-",
    description: "The content to display inside the card body.",
  },
  {
    id: "2",
    key: "className",
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS classes to apply to the card body.",
  },
  {
    id: "3",
    key: "data-testid",
    prop: "data-testid",
    type: "string",
    default: "-",
    description: "A test identifier for the card body element.",
  },
];

// CardFooter component props table
export const cardFooterColumns = [
  { key: "prop", label: "Prop", allowsSorting: true },
  { key: "type", label: "Type", allowsSorting: true },
  { key: "default", label: "Default", allowsSorting: false },
  { key: "description", label: "Description", allowsSorting: false },
];

export const cardFooterContent = [
  {
    id: "1",
    key: "children",
    prop: "children",
    type: "React.ReactNode",
    default: "-",
    description: "The content to display inside the card footer.",
  },
  {
    id: "2",
    key: "className",
    prop: "className",
    type: "string",
    default: "-",
    description: "Additional CSS classes to apply to the card footer.",
  },
  {
    id: "3",
    key: "data-testid",
    prop: "data-testid",
    type: "string",
    default: "-",
    description: "A test identifier for the card footer element.",
  },
];
