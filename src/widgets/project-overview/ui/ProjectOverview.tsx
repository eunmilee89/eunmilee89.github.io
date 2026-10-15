import type { Project } from '@/entities/project';
import { NumberedSection } from '@/shared/ui/numbered-section';
import { RichText } from '@/shared/ui/rich-text';

interface ProjectOverviewProps {
  index: number;
  overview: Project['overview'];
}

export function ProjectOverview({ index, overview }: ProjectOverviewProps) {
  return (
    <NumberedSection id="overview" index={index} title="프로젝트 개요">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-4">
        {overview.meta.map(({ label, value }) => (
          <div key={label} className="bg-surface p-3 md:p-4">
            <dt className="text-[11px] font-medium text-secondary">{label}</dt>
            <dd className="mt-1 text-[13px] font-semibold text-foreground break-keep md:mt-1.5 md:text-sm">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-3 rounded-lg border border-line bg-surface p-4 md:mt-4 md:p-6">
        <RichText text={overview.description} className="text-[13px] leading-6 text-foreground/85 md:text-sm md:leading-7" />
      </div>
    </NumberedSection>
  );
}
