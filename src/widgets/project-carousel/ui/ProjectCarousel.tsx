"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { ProjectCard, type Project } from "@/entities/project";

/** 프레임당 이동 픽셀. 카드 내용을 읽을 수 있을 만큼 느리게 둔다 */
const AUTO_SCROLL_SPEED = 1;
/** loop는 슬라이드 전체 폭이 뷰포트보다 충분히 넓어야 동작하므로, 프로젝트가 적으면 반복해서 채운다 */
const MIN_SLIDE_COUNT = 6;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

interface ProjectCarouselProps {
  projects: Project[];
}

interface Slide {
  key: string;
  project: Project;
  isClone: boolean;
}

function createSlides(projects: Project[]): Slide[] {
  if (projects.length === 0) return [];

  const repeatCount = Math.ceil(MIN_SLIDE_COUNT / projects.length);
  return Array.from({ length: repeatCount }, (_, round) =>
    projects.map((project) => ({
      key: `${project.slug}-${round}`,
      project,
      isClone: round > 0,
    })),
  ).flat();
}

/** 프로젝트 카드가 옆으로 계속 흘러가는 캐러셀. 마우스를 올리거나 포커스하면 멈춘다 */
export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({
      speed: AUTO_SCROLL_SPEED,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      breakpoints: { [REDUCED_MOTION_QUERY]: { active: false } },
    }),
  ]);

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <ul className="flex touch-pan-y">
        {createSlides(projects).map(({ key, project, isClone }) => (
          // 반복용 복제 슬라이드는 스크린 리더 · 탭 이동에서 제외해 같은 프로젝트가 중복 노출되지 않게 한다
          <li
            key={key}
            inert={isClone}
            className="min-w-0 shrink-0 basis-[85%] pl-6 md:basis-1/2 md:pl-10"
          >
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
