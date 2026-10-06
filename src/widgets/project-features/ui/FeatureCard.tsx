import type { ProjectFeature } from '@/entities/project';
import { Badge } from '@/shared/ui/badge';
import { MediaFrame } from '@/shared/ui/media-frame';
import { RichText } from '@/shared/ui/rich-text';

export function FeatureCard({ title, description, media }: ProjectFeature) {
  return (
    <article className="overflow-hidden rounded-lg border border-line bg-surface transition-colors duration-200 ease-out hover:border-primary/50">
      <div className="relative">
        <MediaFrame media={media} className="rounded-none border-0" />
        {media?.type && (
          <Badge variant="solid" className="absolute right-3 top-3 rounded px-2 py-0.5 text-[10px]">
            {media.type.toUpperCase()}
          </Badge>
        )}
      </div>
      <div className="border-t border-line p-5">
        <h3 className="text-base font-bold text-foreground">{title}</h3>
        <RichText text={description} className="mt-2 text-sm leading-relaxed text-secondary" />
      </div>
    </article>
  );
}
