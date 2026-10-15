import type { ProjectFeature } from '@/entities/project';
import { MediaFrame } from '@/shared/ui/media-frame';
import { RichText } from '@/shared/ui/rich-text';

export function FeatureCard({ title, description, media }: ProjectFeature) {
  return (
    <article className="overflow-hidden rounded-lg border border-line bg-surface transition-colors duration-200 ease-out hover:border-primary/50">
      <MediaFrame media={media} className="rounded-none border-0" />
      <div className="border-t border-line p-4 md:p-5">
        <h3 className="text-[15px] font-bold text-foreground md:text-base">{title}</h3>
        <RichText text={description} className="mt-1.5 text-[13px] leading-relaxed text-secondary md:mt-2 md:text-sm" />
      </div>
    </article>
  );
}
