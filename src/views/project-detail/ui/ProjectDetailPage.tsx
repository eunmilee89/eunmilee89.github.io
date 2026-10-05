import type { Project } from "@/entities/project";
import { ProjectArchitecture } from "@/widgets/project-architecture";
import { ProjectChallenges } from "@/widgets/project-challenges";
import { ProjectFeatures } from "@/widgets/project-features";
import { ProjectHero } from "@/widgets/project-hero";
import { ProjectOverview } from "@/widgets/project-overview";
import { ProjectTechStack } from "@/widgets/project-tech-stack";

type ProjectDetailPageProps = {
  project: Project;
};

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-20 md:px-6">
      <ProjectHero {...project} />
      <ProjectOverview index={1} overview={project.overview} />
      <ProjectFeatures index={2} features={project.features} />
      <ProjectTechStack index={3} groups={project.techStack} />
      <ProjectArchitecture index={4} architecture={project.architecture} />
      <ProjectChallenges index={5} challenges={project.challenges} />
    </div>
  );
}
