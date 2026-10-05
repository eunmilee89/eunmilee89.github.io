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
          <div key={label} className="bg-surface p-4">
            <dt className="text-[11px] font-medium text-fg-muted">{label}</dt>
            <dd className="mt-1.5 text-sm font-semibold text-fg">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 rounded-lg border border-line bg-surface p-5 md:p-6">
        <RichText text={overview.description} className="text-sm leading-7 text-fg/85" />
      </div>
    </NumberedSection>
  );
}
