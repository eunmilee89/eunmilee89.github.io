import { type Project, TechStackList } from "@/entities/project";
import { Section } from "@/shared/ui/section";

type ProjectDetailPageProps = {
  project: Project;
};

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <Section>
      <span className="text-xs md:text-sm font-semibold text-primary">
        {project.period}
      </span>
      <h1 className="mt-2 text-2xl md:text-3xl font-bold text-foreground">
        {project.title}
      </h1>
      <p className="mt-2 text-sm md:text-base text-secondary break-keep">
        {project.summary}
      </p>

      <TechStackList stack={project.stack} className="mt-4" />

      <ul className="mt-8 space-y-2 text-sm md:text-base text-subtext break-keep">
        {project.description.map((desc, idx) => (
          <li key={idx} className="list-disc list-inside tracking-wide">
            {desc}
          </li>
        ))}
      </ul>
    </Section>
  );
}
