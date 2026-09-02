export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectStackItem {
  label: string;
  key: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
}

export interface PortfolioProject {
  id: string;
  number: string;
  slug: string;
  name: string;
  title: string;
  category: string;
  description: string;
  stack: ProjectStackItem[];
  image?: string;
  imageAlt: string;
  screenshots?: ProjectScreenshot[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  status?: "active" | "wip" | "archived";
}
