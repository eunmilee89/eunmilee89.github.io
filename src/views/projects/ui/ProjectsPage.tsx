import { getAllProjects, ProjectCard } from "@/entities/project";

/** 프로젝트 목록 (각 카드 → /projects/[slug]) */
export function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto max-w-5xl px-4 py-20 md:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
        Projects
      </h1>

      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
