import type { TechGroup } from '@/entities/project';
import { NumberedSection } from '@/shared/ui/numbered-section';
import { TechStackGroup } from './TechStackGroup';

interface ProjectTechStackProps {
  index: number;
  groups: TechGroup[];
}

export function ProjectTechStack({ index, groups }: ProjectTechStackProps) {
  return (
    <NumberedSection id="tech-stack" index={index} title="기술 스택">
      <div className="space-y-10">
        {groups.map((group) => (
          <TechStackGroup key={group.category} {...group} />
        ))}
      </div>
    </NumberedSection>
  );
}
