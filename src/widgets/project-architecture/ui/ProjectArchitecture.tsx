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
          <li key={title} className="rounded-lg border border-line bg-surface p-5">
            <h3 className="text-sm font-bold text-primary">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">{description}</p>
          </li>
        ))}
      </ul>
    </NumberedSection>
  );
}
