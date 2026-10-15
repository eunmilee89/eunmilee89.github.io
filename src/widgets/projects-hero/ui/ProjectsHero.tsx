import { GradientText } from "@/shared/ui/gradient-text";
import { LinkButton } from "@/shared/ui/link-button";
import { FlowSteps } from "./FlowSteps";
import { SpotlightSurface } from "./SpotlightSurface";

export const PROJECT_LIST_ID = "project-list";
const COUNT_DIGITS = 2;

interface ProjectsHeroProps {
  projectCount: number;
}

export function ProjectsHero({ projectCount }: ProjectsHeroProps) {
  return (
    // body의 좌우 여백(px-6 + mx-2)만큼 끌어내 배경을 화면 끝까지 채운다
    <SpotlightSurface className="-mx-8 flex min-h-[calc(100svh-5.5rem)] items-center">
      <HeroBackground />

      <div className="mx-auto grid w-full max-w-[102rem] items-center gap-14 px-8 py-20 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:px-20 2xl:px-30">
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-background/60 px-3 py-1 font-mono text-xs tracking-widest text-secondary backdrop-blur animate-rise-in motion-reduce:animate-none">
            <span
              className="h-2 w-2 rounded-full bg-primary animate-glow-pulse motion-reduce:animate-none"
              aria-hidden
            />
            PROJECTS · {String(projectCount).padStart(COUNT_DIGITS, "0")}
          </p>

          <h1 className="mt-6 text-4xl font-black leading-[1.15] tracking-tight text-foreground break-keep sm:text-5xl md:text-6xl xl:text-7xl">
            <span className="block animate-rise-in [animation-delay:150ms] motion-reduce:animate-none">
              화면 너머,
            </span>
            <span className="block animate-rise-in [animation-delay:300ms] motion-reduce:animate-none">
              <GradientText>흐름까지</GradientText>{" "}
              고민한
            </span>
            <span className="block animate-rise-in [animation-delay:450ms] motion-reduce:animate-none">
              프로젝트들
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed tracking-wide text-subtext break-keep animate-rise-in [animation-delay:600ms] motion-reduce:animate-none md:max-w-lg md:text-base lg:mx-0">
            화면을 그리는 데서 멈추지 않고, 데이터가 어떻게 흐르고 사용자의
            상호작용을 고민하며 만든 프로젝트들입니다. 각 프로젝트에서 마주친
            문제와 그것을 풀어낸 과정을 함께 담았습니다.
          </p>

          <div className="mt-10 animate-rise-in [animation-delay:750ms] motion-reduce:animate-none">
            <LinkButton
              label="프로젝트 보러가기"
              href={`#${PROJECT_LIST_ID}`}
              variant="primary"
            />
          </div>
        </div>

        <FlowSteps />
      </div>
    </SpotlightSurface>
  );
}

/** 아래로 갈수록 투명해지도록 마스크를 씌워 프로젝트 목록과 자연스럽게 이어지게 한다 */
function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-20 mask-[linear-gradient(to_bottom,black_55%,transparent)]"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-line)_1px,transparent_1px)] bg-size-[56px_56px] opacity-40 mask-[radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
      <div className="absolute -top-24 -left-24 size-64 rounded-full bg-primary/20 md:-top-32 md:size-128 md:bg-primary/30 blur-3xl animate-blob-drift motion-reduce:animate-none" />
      <div className="absolute top-1/3 -right-32 size-72 rounded-full bg-[#2dd4bf]/15 md:top-1/4 md:-right-24 md:size-144 md:bg-[#2dd4bf]/20 blur-3xl animate-blob-drift [animation-delay:-5s] motion-reduce:animate-none" />
      <div className="absolute bottom-0 -left-16 size-56 rounded-full bg-[#f538f8]/10 md:left-1/3 md:size-112 md:bg-[#f538f8]/15 blur-3xl animate-blob-drift [animation-delay:-9s] motion-reduce:animate-none" />
    </div>
  );
}
