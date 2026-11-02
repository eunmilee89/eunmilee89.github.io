"use client";

import { useState } from "react";
import Link from "next/link";
import {
  GRAPE_COLORS,
  MONTHLY_GOAL,
  toClusterRows,
  type MonthGrape,
} from "../model/monthlyGrapes";
import { Grape } from "./Grape";
import { GrapeBerry } from "./GrapeBerry";

const BOARD_TITLE_ID = "grape-board-title";
const STEM_COLOR = "#7a5230";
const LEAF_COLOR = "#6aa84f";
const LEAF_VEIN_COLOR = "#4b7f36";

interface GrapeBoardProps {
  year: number;
  /** 빌드 시점의 달. 이후 달은 아직 오지 않았으므로 비활성화한다 */
  currentMonth: number;
  months: MonthGrape[];
}

/** 한 알이 한 달. 그달에 푼 문제가 많을수록 포도알이 익는다 */
export function GrapeBoard({ year, currentMonth, months }: GrapeBoardProps) {
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const totalCount = months.reduce((sum, { posts }) => sum + posts.length, 0);
  const selected = months[selectedMonth - 1];

  return (
    <section
      aria-labelledby={BOARD_TITLE_ID}
      className="rounded-2xl border border-line bg-surface p-5"
    >
      <div className="flex items-baseline justify-between font-mono">
        <h2 id={BOARD_TITLE_ID} className="text-sm font-semibold text-foreground">
          {year} grapes
        </h2>
        <p className="text-xs text-secondary">
          <span className="text-primary">{totalCount}</span> solved
        </p>
      </div>

      {/* 가지에 매달려 늘어진 느낌이 나도록 송이 전체를 기울인다 */}
      <div className="my-4 rotate-30">
        <GrapeStem />
        {/* 알끼리 살짝 겹쳐야 다닥다닥 붙은 송이처럼 보인다 */}
        <ol
          className="flex flex-col items-center -space-y-3"
          aria-label={`${year}년 월별 풀이 수`}
        >
          {toClusterRows(months).map((row) => (
            <li key={row[0].month}>
              <ol className="flex -space-x-1.5">
                {row.map(({ month, posts }) => (
                  <Grape
                    key={month}
                    month={month}
                    postCount={posts.length}
                    isSelected={month === selectedMonth}
                    isFuture={month > currentMonth}
                    onSelect={setSelectedMonth}
                  />
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>
      <RipenessLegend />

      <MonthDetail month={selected} />
    </section>
  );
}

/** 꼭지, 덩굴손, 잎맥이 있는 포도잎 */
function GrapeStem() {
  return (
    <svg
      viewBox="-5 -6 90 42"
      className="mx-auto mt-3 -mb-1.5 h-10.5 w-22.5"
      fill="none"
      strokeLinecap="round"
      aria-hidden
    >
      <path
        d="M40 36c0-8-1-15 3-22"
        stroke={STEM_COLOR}
        strokeWidth="3"
      />
      <path
        d="M42 18c-6-2-10 1-12-3s3-6 5-3"
        stroke={STEM_COLOR}
        strokeWidth="1.2"
      />
      {/* 잎자루 */}
      <path d="M43 14l5 1" stroke={STEM_COLOR} strokeWidth="1.5" />
      {/* 위·왼쪽·오른쪽 세 갈래로 갈라진 포도잎을 잎자루 끝에서 오른쪽으로 눕힌다 */}
      <g transform="translate(48 15) rotate(70) scale(1.5) translate(-12 -19)">
        <path
          d="M12 19C9 22 4 20 3 15L2 11C4 11 6 10 7 9 6 6 8 3 12 1 16 3 18 6 17 9 18 10 20 11 22 11L21 15C20 20 15 22 12 19Z"
          fill={LEAF_COLOR}
        />
        <path
          d="M12 19V4M12 19L4 12M12 19l8-7"
          stroke={LEAF_VEIN_COLOR}
          strokeWidth="0.7"
        />
      </g>
    </svg>
  );
}

function RipenessLegend() {
  return (
    <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-secondary">
      <span>1문제</span>
      <span className="flex gap-0.5">
        {GRAPE_COLORS.map((color) => (
          <GrapeBerry
            key={color.fill}
            color={color}
            className="h-3.5 w-3 -rotate-15"
          />
        ))}
      </span>
      <span>{MONTHLY_GOAL}문제</span>
    </div>
  );
}

interface MonthDetailProps {
  month: MonthGrape;
}

function MonthDetail({ month: { month, posts } }: MonthDetailProps) {
  return (
    <div className="mt-5 border-t border-line pt-4" aria-live="polite">
      <p className="flex items-baseline justify-between font-mono text-xs">
        <span className="font-semibold text-foreground">{month}월</span>
        <span className="text-secondary">
          {posts.length} / {MONTHLY_GOAL}
        </span>
      </p>

      {posts.length === 0 ? (
        <p className="mt-2 text-xs text-secondary">
          이 달에 푼 문제가 아직 없어요.
        </p>
      ) : (
        <ul className="mt-2 space-y-1">
          {posts.map(({ slug, title }) => (
            <li key={slug}>
              <Link
                href={`/coding-test/${slug}`}
                className="block truncate text-sm text-subtext transition-colors duration-200 hover:text-primary focus-visible:text-primary"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
