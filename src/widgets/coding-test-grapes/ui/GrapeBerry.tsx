import type { GrapeColor } from "../model/monthlyGrapes";

interface GrapeBerryProps {
  color: GrapeColor;
  className?: string;
}

/** 잎·꼭지 일러스트와 맞춘 납작한 단색 포도알 */
export function GrapeBerry({ color, className }: GrapeBerryProps) {
  return (
    <svg viewBox="0 0 36 40" className={className} aria-hidden>
      <ellipse cx="18" cy="20" rx="17" ry="19" style={{ fill: color.shade }} />
      {/* 밝은 면을 왼쪽 위로 치우쳐 얹어 오른쪽 아래에 초승달 모양 그늘을 남긴다 */}
      <ellipse cx="16.5" cy="18.5" rx="14.5" ry="16.5" style={{ fill: color.fill }} />
      <ellipse
        cx="11"
        cy="11"
        rx="2.5"
        ry="4.5"
        transform="rotate(30 11 11)"
        fill="white"
        opacity="0.55"
      />
    </svg>
  );
}
