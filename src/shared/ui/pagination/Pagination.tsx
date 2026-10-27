import type { ReactNode } from "react";
import Link from "next/link";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";
import { cn } from "@/shared/lib";

/** 페이지가 많아져도 한 줄에 들어가도록 현재 페이지 주변만 보여준다 */
const MAX_VISIBLE_PAGES = 5;
const FIRST_PAGE = 1;

const ITEM_CLASS_NAME =
  "inline-flex h-10 min-w-10 items-center justify-center rounded-md px-2 font-mono text-sm transition-colors duration-200";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  getPageHref: (page: number) => string;
}

function getVisiblePages(currentPage: number, totalPages: number): number[] {
  const half = Math.floor(MAX_VISIBLE_PAGES / 2);
  const start = Math.max(
    FIRST_PAGE,
    Math.min(currentPage - half, totalPages - MAX_VISIBLE_PAGES + 1),
  );
  const end = Math.min(totalPages, start + MAX_VISIBLE_PAGES - 1);

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

interface PageStepProps {
  page: number;
  isDisabled: boolean;
  label: string;
  getPageHref: PaginationProps["getPageHref"];
  children: ReactNode;
}

function PageStep({
  page,
  isDisabled,
  label,
  getPageHref,
  children,
}: PageStepProps) {
  if (isDisabled) {
    return (
      <span
        aria-disabled
        className={cn(ITEM_CLASS_NAME, "text-secondary/40")}
      >
        {children}
      </span>
    );
  }

  return (
    <Link
      href={getPageHref(page)}
      aria-label={label}
      className={cn(ITEM_CLASS_NAME, "text-secondary hover:text-primary")}
    >
      {children}
    </Link>
  );
}

export function Pagination({
  currentPage,
  totalPages,
  getPageHref,
}: PaginationProps) {
  if (totalPages <= FIRST_PAGE) return null;

  return (
    <nav aria-label="페이지 이동">
      <ul className="flex items-center justify-center gap-1">
        <li>
          <PageStep
            page={currentPage - 1}
            isDisabled={currentPage === FIRST_PAGE}
            label="이전 페이지"
            getPageHref={getPageHref}
          >
            <TbChevronLeft className="h-4 w-4" aria-hidden />
          </PageStep>
        </li>
        {getVisiblePages(currentPage, totalPages).map((page) => {
          const isCurrent = page === currentPage;

          return (
            <li key={page}>
              <Link
                href={getPageHref(page)}
                aria-current={isCurrent ? "page" : undefined}
                className={cn(
                  ITEM_CLASS_NAME,
                  isCurrent
                    ? "bg-primary/10 font-semibold text-primary"
                    : "text-secondary hover:text-primary",
                )}
              >
                {page}
              </Link>
            </li>
          );
        })}
        <li>
          <PageStep
            page={currentPage + 1}
            isDisabled={currentPage === totalPages}
            label="다음 페이지"
            getPageHref={getPageHref}
          >
            <TbChevronRight className="h-4 w-4" aria-hidden />
          </PageStep>
        </li>
      </ul>
    </nav>
  );
}
