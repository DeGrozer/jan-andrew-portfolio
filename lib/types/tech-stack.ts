export type TechStatus = "familiar" | "refining";

export type TechCategoryId =
  | "languages"
  | "web-scripting"
  | "frameworks-libraries"
  | "tools-environment";

export interface TechStackCategory {
  id: TechCategoryId;
  label: string;
  direction: "left" | "right";
  durationSeconds: number;
}

export interface TechStackItem {
  name: string;
  category: TechCategoryId;
  key: string;
  url: string;
  status: TechStatus;
}