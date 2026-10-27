"use client";

import type { ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { FIRST_PAGE, PAGE_QUERY_KEY, parsePage } from "../model/pagination";

interface PageSwitcherProps {
  pages: ReactNode[];
}

/** Static Export라 서버에서 쿼리를 읽을 수 없어, 미리 렌더링한 페이지 중 ?page에 맞는 것을 브라우저에서 고른다 */
export function PageSwitcher({ pages }: PageSwitcherProps) {
  const searchParams = useSearchParams();
  const currentPage = parsePage(searchParams.get(PAGE_QUERY_KEY), pages.length);

  return pages[currentPage - FIRST_PAGE];
}
