"use client";

import { useEffect, useState } from "react";
import { cn } from "@/shared/lib";
import { TERMINAL_SAMPLES } from "../model/terminalSamples";

const TYPE_DELAY_MS = 70;
const RESULT_HOLD_MS = 2000;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/** 풀이 함수를 호출하고 결과가 출력되는 모습을 반복해서 타이핑한다 */
export function TypingTerminal() {
  const [sampleIndex, setSampleIndex] = useState(0);
  // 정적 HTML과 모션 감소 환경에서도 내용이 보이도록 첫 줄은 완성된 상태로 시작한다
  const [charCount, setCharCount] = useState(TERMINAL_SAMPLES[0].call.length);

  const { call, result } = TERMINAL_SAMPLES[sampleIndex];
  const isTyped = charCount >= call.length;

  useEffect(() => {
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return;

    const timer = isTyped
      ? setTimeout(() => {
          setSampleIndex((index) => (index + 1) % TERMINAL_SAMPLES.length);
          setCharCount(0);
        }, RESULT_HOLD_MS)
      : setTimeout(() => setCharCount((count) => count + 1), TYPE_DELAY_MS);

    return () => clearTimeout(timer);
  }, [isTyped, charCount]);

  return (
    <div
      className="w-full max-w-sm overflow-hidden rounded-xl border border-line bg-background/70 font-mono text-xs shadow-sm backdrop-blur transition-[border-color,box-shadow] duration-300 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 md:text-sm"
      aria-hidden
    >
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-2">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="ml-2 text-[11px] text-secondary">solve.js</span>
      </div>
      <div className="space-y-1.5 px-4 py-3">
        <p className="whitespace-nowrap text-foreground">
          <span className="text-primary">&gt; </span>
          {call.slice(0, charCount)}
          {!isTyped && (
            <span className="ml-px inline-block h-[1.1em] w-1.5 translate-y-[0.15em] bg-primary animate-pulse motion-reduce:animate-none" />
          )}
        </p>
        <p
          className={cn(
            "whitespace-nowrap text-secondary transition-opacity duration-300",
            isTyped ? "opacity-100" : "opacity-0",
          )}
        >
          ← {result} <span className="text-primary">✓ passed</span>
        </p>
      </div>
    </div>
  );
}
