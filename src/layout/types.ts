import { ReactNode } from "react";

export interface PagesLayoutProps {
  children: ReactNode;
  title: string;
  explanation: string;
}

export interface CodeBlockLayoutProps {
  children: ReactNode;
  title: string;
}
