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

interface SubContent {
  id: number;
  title: string;
  content: ReactNode;
}

interface Content {
  id: number;
  title: string;
  mainContent: ReactNode;
  subContent?: SubContent[];
}

export interface TableDocLayoutProps {
  content: Content[];
}
