import { ButtonSize, ButtonColor, ButtonVariant } from "../types";

export const sizes: ButtonSize[] = ["xs", "sm", "md", "lg", "xl"];

export const colors: ButtonColor[] = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
];
export const variants: ButtonVariant[] = [
  "solid",
  "outline",
  "ghost",
  "link",
  "gradient",
];

export const formatText = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
