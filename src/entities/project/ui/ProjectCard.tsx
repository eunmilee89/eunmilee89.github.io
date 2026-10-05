import Link from "next/link";
import { Badge } from "@/shared/ui/badge";
import type { Project } from "../model/types";

type ProjectCardProps = Pick<Project, "slug" | "badge" | "title" | "tagline">;

export function ProjectCard({ slug, badge, title, tagline }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="block h-full rounded-lg border border-line bg-surface p-6 transition-colors hover:border-accent/50"
    >
      <Badge dot>{badge}</Badge>
      <h2 className="mt-4 text-xl font-bold text-fg">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-fg-muted">{tagline}</p>
    </Link>
  );
}
