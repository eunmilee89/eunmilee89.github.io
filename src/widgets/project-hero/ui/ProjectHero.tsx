import type { Project } from '@/entities/project';
import { Badge } from '@/shared/ui/badge';
import { LinkButton } from '@/shared/ui/link-button';
import { MediaFrame } from '@/shared/ui/media-frame';

type ProjectHeroProps = Pick<Project, 'badge' | 'title' | 'tagline' | 'summary' | 'links' | 'heroMedia'>;

export function ProjectHero({ badge, title, tagline, summary, links, heroMedia }: ProjectHeroProps) {
  return (
    <header className="pt-16 md:pt-24">
      <Badge dot>{badge}</Badge>

      <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">{title}</h1>
      <p className="mt-4 text-base font-medium text-foreground/90 md:text-lg">{tagline}</p>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-secondary">{summary}</p>

      <div className="mt-7 flex flex-wrap gap-2.5">
        {links.map((link) => (
          <LinkButton key={link.href + link.label} {...link} />
        ))}
      </div>

      {heroMedia && <MediaFrame media={heroMedia} browserChrome className="mt-12 shadow-2xl shadow-primary/5" />}
    </header>
  );
}
