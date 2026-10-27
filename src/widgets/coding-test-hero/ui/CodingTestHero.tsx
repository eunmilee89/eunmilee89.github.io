import { GradientText } from "@/shared/ui/gradient-text";
import { Reveal } from "@/shared/ui/reveal";
import { SpotlightSurface } from "@/shared/ui/spotlight-surface";
import { TypingTerminal } from "./TypingTerminal";

export function CodingTestHero() {
  return (
    // body의 좌우 여백(px-6 + mx-2)만큼 끌어내 배경을 화면 끝까지 채우고, 같은 만큼 안쪽 여백을 줘 본문 정렬을 유지한다
    <SpotlightSurface className="-mx-8 px-8">
      <HeroBackground />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pt-10 pb-12 md:px-6 md:pt-14 md:pb-16 lg:grid-cols-[1fr_auto]">
        <Reveal>
          <header className="text-center lg:text-left">
            {/* 프론트엔드 포트폴리오답게 제목을 JSX 태그 모양으로 감싼다 */}
            <h1 className="text-3xl font-black tracking-tight text-foreground break-keep md:text-4xl lg:text-5xl">
              <span className="font-mono font-medium text-secondary" aria-hidden>
                &lt;
              </span>
              Coding <GradientText>Test</GradientText>
              <span className="font-mono font-medium text-secondary" aria-hidden>
                {" />"}
              </span>
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-subtext break-keep mx-auto md:text-base lg:mx-0">
              알고리즘 문제를 풀며 어떤 접근을 떠올렸고, 왜 그 방법을 골랐는지
              기록한 풀이 노트입니다.
            </p>
          </header>
        </Reveal>

        {/* 작은 화면에서 아래로 쌓이면 헤더 높이가 늘어나므로 가로 배치가 가능한 lg부터 보여준다 */}
        <div className="hidden animate-rise-in [animation-delay:300ms] motion-reduce:animate-none lg:block">
          <TypingTerminal />
        </div>
      </div>
    </SpotlightSurface>
  );
}

/** 아래로 갈수록 투명해지도록 마스크를 씌워 풀이 목록과 자연스럽게 이어지게 한다 */
function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-20 mask-[linear-gradient(to_bottom,black_40%,transparent)]"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-line)_1px,transparent_1px)] bg-size-[40px_40px] opacity-40 mask-[radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
      <div className="absolute top-1/3 left-1/2 size-72 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl animate-blob-drift motion-reduce:animate-none" />
      <div className="absolute -top-16 -left-16 size-56 rounded-full bg-[#f538f8]/15 blur-3xl animate-blob-drift [animation-delay:-5s] motion-reduce:animate-none" />
      <div className="absolute -top-20 -right-16 size-64 rounded-full bg-[#3b82f6]/20 blur-3xl animate-blob-drift [animation-delay:-9s] motion-reduce:animate-none" />
    </div>
  );
}
