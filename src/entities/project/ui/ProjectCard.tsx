import Link from "next/link";
import { Badge } from "@/shared/ui/badge";
import { MediaFrame } from "@/shared/ui/media-frame";
import { getTechNames } from "../lib/getTechNames";
import type { Project } from "../model/types";

type ProjectCardProps = Pick<
  Project,
  "slug" | "title" | "tagline" | "heroMedia" | "techStack"
>;

export function ProjectCard({
  slug,
  title,
  tagline,
  heroMedia,
  techStack,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="group block">
      <MediaFrame
        media={heroMedia ?? { alt: title }}
        mediaClassName="transition-transform duration-500 ease-out group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none"
      />
      <h2 className="mt-6 text-2xl font-bold text-foreground transition-colors duration-200 group-hover:text-primary md:text-3xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-secondary break-keep md:text-base">
        {tagline}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {getTechNames(techStack).map((name) => (
          <li key={name}>
            <Badge variant="mono">{name}</Badge>
          </li>
        ))}
      </ul>
    </Link>
  );
}
