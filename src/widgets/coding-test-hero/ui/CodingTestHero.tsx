import { TypingText } from "./TypingText";

const TITLE = "Coding Test";

/** 터미널 프롬프트 모양의 간결한 페이지 제목 */
export function CodingTestHero() {
  return (
    <header className="mx-auto max-w-7xl pb-8 font-mono md:px-4">
      <h1 className="mt-1.5 flex items-center gap-2.5 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        <span className="text-primary" aria-hidden>
          &gt;
        </span>
        <TypingText text={TITLE} />
      </h1>
    </header>
  );
}
