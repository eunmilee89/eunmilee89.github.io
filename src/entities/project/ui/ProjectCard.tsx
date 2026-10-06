import Link from "next/link";
import { Badge } from "@/shared/ui/badge";
import type { Project } from "../model/types";

type ProjectCardProps = Pick<Project, "slug" | "badge" | "title" | "tagline">;

export function ProjectCard({ slug, badge, title, tagline }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="block h-full rounded-lg border border-line bg-surface p-6 transition-colors duration-200 ease-out hover:border-primary/50"
    >
      <Badge dot>{badge}</Badge>
      <h2 className="mt-4 text-xl font-bold text-foreground">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-secondary">{tagline}</p>
    </Link>
  );
}
