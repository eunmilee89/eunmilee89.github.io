import { getAllProjects, ProjectCard } from "@/entities/project";
import { PROJECT_LIST_ID, ProjectsHero } from "@/widgets/projects-hero";
import { Reveal } from "@/shared/ui/reveal";

/** 프로젝트 목록 (각 항목 → /projects/[slug]) */
export function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <ProjectsHero projectCount={projects.length} />

      <div className="mx-auto max-w-5xl px-4 pt-16 pb-20 md:px-6 md:pt-24 md:pb-28">
        <ul
          id={PROJECT_LIST_ID}
          className="flex scroll-mt-28 flex-col gap-16 md:gap-32"
        >
          {projects.map((project) => (
            <li key={project.slug}>
              <Reveal>
                <ProjectCard {...project} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
