import { getProjects, ProjectCard } from "@/entities/project";
import { Section } from "@/shared/ui/section";

export async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <Section>
      <h1 className="text-2xl font-bold">프로젝트</h1>

      <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
