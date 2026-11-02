import type { CodingTestPostMeta } from "@/entities/coding-test";

const MONTHS_PER_YEAR = 12;
/** 한 달에 이만큼 풀면 포도알이 가득 찬다 */
export const MONTHLY_GOAL = 5;
/** 위에서부터 줄마다 놓이는 포도알 수. 아래로 갈수록 좁아져 포도송이 모양이 된다 */
const CLUSTER_ROWS = [3, 4, 3, 2];

// date는 "YYYY-MM-DD" 형식이다
const YEAR_PREFIX_LENGTH = "YYYY-".length;
const YEAR_MONTH_LENGTH = "YYYY-MM".length;

export interface GrapePost {
  slug: string;
  title: string;
}

export interface MonthGrape {
  /** 1 ~ 12 */
  month: number;
  posts: GrapePost[];
}

export function groupPostsByMonth(
  posts: CodingTestPostMeta[],
  year: number,
): MonthGrape[] {
  const months: MonthGrape[] = Array.from(
    { length: MONTHS_PER_YEAR },
    (_, i) => ({ month: i + 1, posts: [] }),
  );

  posts
    .filter(({ date }) => date.startsWith(`${year}-`))
    .forEach(({ slug, title, date }) => {
      const month = Number(date.slice(YEAR_PREFIX_LENGTH, YEAR_MONTH_LENGTH));
      months[month - 1].posts.push({ slug, title });
    });

  return months;
}

export function toClusterRows(months: MonthGrape[]): MonthGrape[][] {
  return CLUSTER_ROWS.map((count, rowIndex) => {
    const start = CLUSTER_ROWS.slice(0, rowIndex).reduce((a, b) => a + b, 0);
    return months.slice(start, start + count);
  });
}

export interface GrapeColor {
  fill: string;
  /** 오른쪽 아래 그늘 */
  shade: string;
}

/**
 * 실제 포도가 익는 순서(연두 → 분홍빛 → 장밋빛 → 적보라 → 진보라)를 단계별로 고정한다.
 * 두 색을 섞으면 중간에 청록이나 탁한 갈색이 끼므로 보간하지 않는다.
 * 길이는 MONTHLY_GOAL과 같아야 한다.
 */
export const GRAPE_COLORS: GrapeColor[] = [
  { fill: "#a8cc6e", shade: "#86aa50" },
  { fill: "#c98a8f", shade: "#a6676d" },
  { fill: "#a8506f", shade: "#843a54" },
  { fill: "#7a3a72", shade: "#5c2756" },
  { fill: "#4f2a66", shade: "#371b4a" },
];

/** 아직 안 푼 달도 포도로 보이도록 빛바랜 풋포도로 그린다 (색은 globals.css에서 테마별로 정의) */
const EMPTY_GRAPE_COLOR: GrapeColor = {
  fill: "var(--grape-empty)",
  shade: "var(--grape-empty-shade)",
};
const FUTURE_GRAPE_COLOR: GrapeColor = {
  fill: "var(--grape-future)",
  shade: "var(--grape-future-shade)",
};

export function getGrapeColor(postCount: number, isFuture: boolean): GrapeColor {
  if (isFuture) return FUTURE_GRAPE_COLOR;
  if (postCount === 0) return EMPTY_GRAPE_COLOR;
  return GRAPE_COLORS[Math.min(postCount, MONTHLY_GOAL) - 1];
}
