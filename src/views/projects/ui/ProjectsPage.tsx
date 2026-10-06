import { getAllProjects, ProjectCard } from "@/entities/project";
import { Reveal } from "@/shared/ui/reveal";

/** 프로젝트 목록 (각 항목 → /projects/[slug]) */
export function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto max-w-5xl px-4 py-20 md:px-6 md:py-28">
      <Reveal>
        <header className="text-center lg:text-left">
          <h1 className="text-4xl font-black tracking-tight text-foreground break-keep md:text-5xl lg:text-6xl">
            문제를 풀어온{" "}
            <span className="text-primary">기록</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-subtext break-keep mx-auto md:text-base lg:mx-0">
            화면을 그리는 데서 멈추지 않고, 데이터가 어떻게 흐르고 사용자가
            어떤 순간에 머뭇거리는지 고민하며 만든 프로젝트들입니다. 각
            프로젝트에서 마주친 문제와 그것을 풀어낸 과정을 함께 담았습니다.
          </p>
        </header>
      </Reveal>

      <ul className="mt-20 flex flex-col gap-24 md:mt-28 md:gap-32">
        {projects.map((project) => (
          <li key={project.slug}>
            <Reveal>
              <ProjectCard {...project} />
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
