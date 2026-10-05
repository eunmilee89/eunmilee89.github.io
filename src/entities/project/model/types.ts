import type { LinkButtonProps } from "@/shared/ui/link-button";
import type { Media } from "@/shared/ui/media-frame";

export type ProjectLink = LinkButtonProps;

export type ProjectOverview = {
  meta: { label: string; value: string }[];
  description: string;
};

export type ProjectFeature = {
  title: string;
  description: string;
  media?: Media;
};

export type TechGroup = {
  category: string;
  items: { name: string; reason: string }[];
};

export type Architecture = {
  notes: { title: string; description: string }[];
};

export type Challenge = {
  hash: string;
  title: string;
  diff?: { removed: number; added: number };
  problem: string;
  cause: string;
  solution: string;
  result: string;
};

export type Project = {
  slug: string;
  badge: string;
  title: string;
  tagline: string;
  summary: string;
  links: ProjectLink[];
  heroMedia?: Media;
  overview: ProjectOverview;
  features: ProjectFeature[];
  techStack: TechGroup[];
  architecture: Architecture;
  challenges: Challenge[];
};
