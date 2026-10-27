"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/shared/lib";

interface SpotlightSurfaceProps {
  children: ReactNode;
  className?: string;
}

/** 포인터 위치를 CSS 변수로 넘겨, 커서를 따라다니는 빛을 그린다 */
export function SpotlightSurface({ children, className }: SpotlightSurfaceProps) {
  const ref = useRef<HTMLElement>(null);

  // 포인터가 움직일 때마다 리렌더링하지 않도록 상태 대신 CSS 변수를 직접 갱신한다
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    element.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    element.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <section
      ref={ref}
      onPointerMove={handlePointerMove}
      className={cn("group/spotlight relative isolate overflow-hidden", className)}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover/spotlight:opacity-100 bg-[radial-gradient(520px_circle_at_var(--spot-x)_var(--spot-y),color-mix(in_srgb,var(--color-primary)_22%,transparent),transparent_70%)]"
        aria-hidden
      />
      {children}
    </section>
  );
}
