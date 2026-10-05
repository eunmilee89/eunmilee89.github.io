import type { Challenge } from '@/entities/project';
import { NumberedSection } from '@/shared/ui/numbered-section';
import { ChallengeCard } from './ChallengeCard';

interface ProjectChallengesProps {
  index: number;
  challenges: Challenge[];
}

export function ProjectChallenges({ index, challenges }: ProjectChallengesProps) {
  return (
    <NumberedSection id="challenges" index={index} title="기술적 도전과 해결 과정">
      <div className="space-y-4">
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.hash} {...challenge} />
        ))}
      </div>
    </NumberedSection>
  );
}
