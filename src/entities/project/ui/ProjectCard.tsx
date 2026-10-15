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
      <h2 className="mt-4 text-xl font-bold text-foreground transition-colors duration-200 group-hover:text-primary md:mt-6 md:text-3xl">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-secondary break-keep md:mt-3 md:text-base">
        {tagline}
      </p>
      {/* 태그 수가 많아 모바일에서는 가독성을 위해 숨긴다 */}
      <ul className="mt-5 hidden flex-wrap gap-2 md:flex">
        {getTechNames(techStack).map((name) => (
          <li key={name}>
            <Badge variant="mono">{name}</Badge>
          </li>
        ))}
      </ul>
    </Link>
  );
}
