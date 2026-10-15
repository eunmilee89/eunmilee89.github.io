import type { ProjectFeature } from '@/entities/project';
import { MediaFrame } from '@/shared/ui/media-frame';
import { RichText } from '@/shared/ui/rich-text';

export function FeatureCard({ title, description, media }: ProjectFeature) {
  return (
    <article className="group overflow-hidden rounded-lg border border-line bg-surface transition-transform duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none">
      <MediaFrame media={media} className="rounded-none border-0" />
      <div className="border-t border-line p-4 md:p-5">
        <h3 className="text-[15px] font-bold text-foreground transition-colors duration-200 group-hover:text-primary md:text-base">{title}</h3>
        <RichText text={description} className="mt-1.5 text-[13px] leading-relaxed text-secondary md:mt-2 md:text-sm" />
      </div>
    </article>
  );
}
