"use client";

import { useEffect, useState } from "react";
import { cn } from "@/shared/lib";

const START_DELAY_MS = 300;
const TYPE_DELAY_MS = 90;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

interface TypingTextProps {
  text: string;
}

/** 터미널에 입력하듯 한 글자씩 타이핑하고, 다 치면 커서가 깜빡인다 */
export function TypingText({ text }: TypingTextProps) {
  const [charCount, setCharCount] = useState(0);
  const isTyped = charCount >= text.length;

  useEffect(() => {
    // 모션 감소 환경에서는 CSS로 전체 제목을 바로 보여주므로 타이머를 돌리지 않는다
    if (isTyped || window.matchMedia(REDUCED_MOTION_QUERY).matches) return;

    const timer = setTimeout(
      () => setCharCount((count) => count + 1),
      charCount === 0 ? START_DELAY_MS : TYPE_DELAY_MS,
    );
    return () => clearTimeout(timer);
  }, [charCount, isTyped]);

  return (
    <>
      {/* 스크린 리더와 정적 HTML에는 타이핑과 상관없이 전체 제목을 준다 */}
      <span className="sr-only">{text}</span>
      <span className="flex items-center" aria-hidden>
        <span className="whitespace-pre motion-reduce:hidden">
          {text.slice(0, charCount)}
        </span>
        <span className="hidden whitespace-pre motion-reduce:inline">{text}</span>
        {/* 실제 터미널처럼 입력 중에는 커서가 켜져 있고, 입력이 끝나면 깜빡인다 */}
        <span
          className={cn(
            "ml-1 h-[0.9em] w-2.5 bg-primary",
            isTyped && "animate-cursor-blink",
            "motion-reduce:animate-none",
          )}
        />
      </span>
    </>
  );
}
