"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/shared/lib";

/** 요소가 화면 하단에서 조금 올라온 뒤에 등장해야 스크롤에 반응하는 느낌이 난다 */
const REVEAL_ROOT_MARGIN = "0px 0px -10% 0px";
const REVEAL_THRESHOLD = 0.15;

interface RevealProps {
  children: ReactNode;
  className?: string;
}

/** 스크롤로 화면에 들어오면 아래에서 위로 떠오르며 나타난다 (한 번만) */
export function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { rootMargin: REVEAL_ROOT_MARGIN, threshold: REVEAL_THRESHOLD },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,translate] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
