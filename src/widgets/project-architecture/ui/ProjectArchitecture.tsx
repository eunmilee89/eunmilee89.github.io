import type { Architecture } from '@/entities/project';
import { NumberedSection } from '@/shared/ui/numbered-section';

interface ProjectArchitectureProps {
  index: number;
  architecture: Architecture;
}

export function ProjectArchitecture({ index, architecture }: ProjectArchitectureProps) {
  return (
    <NumberedSection id="architecture" index={index} title="아키텍처">
      <ul className="space-y-3">
        {architecture.notes.map(({ title, description }) => (
          <li key={title} className="rounded-lg border border-line bg-surface p-4 md:p-5">
            <h3 className="text-sm font-bold text-primary">{title}</h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-foreground/80 md:mt-2 md:text-sm">{description}</p>
          </li>
        ))}
      </ul>
    </NumberedSection>
  );
}
