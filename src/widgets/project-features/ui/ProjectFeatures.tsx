import type { ProjectFeature } from '@/entities/project';
import { NumberedSection } from '@/shared/ui/numbered-section';
import { FeatureCard } from './FeatureCard';

interface ProjectFeaturesProps {
  index: number;
  features: ProjectFeature[];
}

export function ProjectFeatures({ index, features }: ProjectFeaturesProps) {
  return (
    <NumberedSection id="features" index={index} title="핵심 기능">
      <div className="grid gap-4 md:grid-cols-2">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </NumberedSection>
  );
}
