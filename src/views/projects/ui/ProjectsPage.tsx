import { getAllProjects } from "@/entities/project";
import { ProjectCarousel } from "@/widgets/project-carousel";
import { PROJECT_LIST_ID, ProjectsHero } from "@/widgets/projects-hero";
import { Reveal } from "@/shared/ui/reveal";

/** 프로젝트 목록 (각 항목 → /projects/[slug]) */
export function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <ProjectsHero projectCount={projects.length} />

      <div
        id={PROJECT_LIST_ID}
        className="scroll-mt-28 pt-16 pb-20 md:pt-24 md:pb-28"
      >
        <Reveal>
          <ProjectCarousel projects={projects} />
        </Reveal>
      </div>
    </>
  );
}
