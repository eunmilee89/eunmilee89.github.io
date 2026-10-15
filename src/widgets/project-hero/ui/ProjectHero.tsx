import type { Project } from '@/entities/project';
import { Badge } from '@/shared/ui/badge';
import { LinkButton } from '@/shared/ui/link-button';
import { MediaFrame } from '@/shared/ui/media-frame';

type ProjectHeroProps = Pick<Project, 'badge' | 'title' | 'tagline' | 'summary' | 'links' | 'heroMedia'>;

export function ProjectHero({ badge, title, tagline, summary, links, heroMedia }: ProjectHeroProps) {
  return (
    <header className="pt-10 md:pt-24">
      <Badge dot>{badge}</Badge>

      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground md:mt-5 md:text-5xl">{title}</h1>
      <p className="mt-3 text-[15px] font-medium text-foreground/90 break-keep md:mt-4 md:text-lg">{tagline}</p>
      <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-secondary break-keep md:text-sm">{summary}</p>

      <div className="mt-6 flex flex-wrap gap-2 md:mt-7 md:gap-2.5">
        {links.map((link) => (
          <LinkButton key={link.href + link.label} {...link} />
        ))}
      </div>

      {heroMedia && <MediaFrame media={heroMedia} browserChrome className="mt-8 shadow-2xl md:mt-12 shadow-primary/5" />}
    </header>
  );
}
