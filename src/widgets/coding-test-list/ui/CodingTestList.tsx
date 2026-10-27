import { Suspense } from "react";
import type { CodingTestPostMeta } from "@/entities/coding-test";
import { FIRST_PAGE, getTotalPages } from "../model/pagination";
import { CodingTestListView } from "./CodingTestListView";
import { PageSwitcher } from "./PageSwitcher";

interface CodingTestListProps {
  posts: CodingTestPostMeta[];
}

/** 쿼리를 읽기 전까지는 1페이지를 정적 HTML로 보여줘 빈 화면 없이 표가 바로 보이게 한다 */
export function CodingTestList({ posts }: CodingTestListProps) {
  const pages = Array.from({ length: getTotalPages(posts.length) }, (_, i) => {
    const page = FIRST_PAGE + i;
    return <CodingTestListView key={page} posts={posts} currentPage={page} />;
  });

  return (
    <Suspense fallback={pages[0]}>
      <PageSwitcher pages={pages} />
    </Suspense>
  );
}
