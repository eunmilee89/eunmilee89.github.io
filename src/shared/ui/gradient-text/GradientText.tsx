import type { ReactNode } from "react";
import { cn } from "@/shared/lib";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

/** 브랜드 그라데이션이 옆으로 흐르는 강조 텍스트. 시작색으로 끝나야 반복 지점이 끊기지 않는다 */
export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-[linear-gradient(to_right,#34d399,#2dd4bf,#f538f8,#34d399)] bg-size-[200%_auto] bg-clip-text text-transparent animate-gradient-flow motion-reduce:animate-none",
        className,
      )}
    >
      {children}
    </span>
  );
}
