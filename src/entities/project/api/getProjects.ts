import { PROJECTS } from "../model/projects";
import type { Project } from "../model/types";

export function getAllProjects(): Project[] {
  return PROJECTS;
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((project) => project.slug);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
