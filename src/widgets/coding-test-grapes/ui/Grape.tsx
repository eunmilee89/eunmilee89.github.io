import { cn } from "@/shared/lib";
import { getGrapeColor } from "../model/monthlyGrapes";
import { GrapeBerry } from "./GrapeBerry";

/** 1월부터 차례로 맺히도록 달마다 시작을 늦춘다 */
const POP_STAGGER_MS = 50;

interface GrapeProps {
  month: number;
  postCount: number;
  isSelected: boolean;
  isFuture: boolean;
  onSelect: (month: number) => void;
}

export function Grape({
  month,
  postCount,
  isSelected,
  isFuture,
  onSelect,
}: GrapeProps) {
  const label = isFuture ? `${month}월` : `${month}월 · ${postCount}문제`;

  return (
    <li
      className="relative animate-grape-pop motion-reduce:animate-none"
      style={{ animationDelay: `${(month - 1) * POP_STAGGER_MS}ms` }}
    >
      <button
        type="button"
        aria-pressed={isSelected}
        aria-label={label}
        disabled={isFuture}
        onClick={() => onSelect(month)}
        className={cn(
          // 송이에 매달린 알처럼 보이도록 비스듬히 기울인다
          "peer relative block h-10 w-9 -rotate-15 rounded-[50%] transition-[scale] duration-200 outline-none",
          "enabled:cursor-pointer enabled:hover:z-10 enabled:hover:scale-110 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-foreground/60",
          isSelected &&
            "z-10 ring-2 ring-foreground/70 ring-offset-2 ring-offset-surface",
        )}
      >
        <GrapeBerry color={getGrapeColor(postCount, isFuture)} className="size-full" />
      </button>

      <span
        // 송이 전체를 기울였으므로 말풍선은 반대로 돌려 글자를 수평으로 세운다
        className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 translate-y-1 -rotate-30 rounded-md bg-foreground px-2 py-1 font-mono text-[11px] whitespace-nowrap text-background opacity-0 transition duration-150 peer-hover:translate-y-0 peer-hover:opacity-100 peer-focus-visible:translate-y-0 peer-focus-visible:opacity-100"
        aria-hidden
      >
        {label}
      </span>
    </li>
  );
}
