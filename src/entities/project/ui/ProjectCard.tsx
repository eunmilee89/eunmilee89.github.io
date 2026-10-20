import Link from "next/link";
import { Badge } from "@/shared/ui/badge";
import { MediaFrame } from "@/shared/ui/media-frame";
import type { Project } from "../model/types";

type ProjectCardProps = Pick<
  Project,
  "slug" | "title" | "tagline" | "heroMedia" | "badge"
>;

export function ProjectCard({
  slug,
  title,
  tagline,
  heroMedia,
  badge,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="group block">
      <div className="relative">
        <MediaFrame media={heroMedia ?? { alt: title }} />
        <div
          className="pointer-events-none absolute inset-0 rounded-lg bg-black/0 transition-colors duration-300 ease-out group-hover:bg-black/10 group-focus-visible:bg-black/10 motion-reduce:transition-none"
          aria-hidden
        />
      </div>
      <h2 className="mt-4 text-xl font-bold text-foreground  md:mt-6 md:text-3xl">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-secondary break-keep md:mt-3 md:text-base">
        {tagline}
      </p>
      <Badge variant="outline" className="mt-4 md:mt-5">
        {badge}
      </Badge>
    </Link>
  );
}
