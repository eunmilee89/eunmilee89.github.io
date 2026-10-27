import { CodingTestTable, type CodingTestPostMeta } from "@/entities/coding-test";
import { Pagination } from "@/shared/ui/pagination";
import { getPageHref, getTotalPages, POSTS_PER_PAGE } from "../model/pagination";

interface CodingTestListViewProps {
  posts: CodingTestPostMeta[];
  currentPage: number;
}

export function CodingTestListView({
  posts,
  currentPage,
}: CodingTestListViewProps) {
  const offset = (currentPage - 1) * POSTS_PER_PAGE;

  return (
    <div className="flex flex-col gap-10 md:gap-12">
      <CodingTestTable
        posts={posts.slice(offset, offset + POSTS_PER_PAGE)}
        firstRowNumber={posts.length - offset}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={getTotalPages(posts.length)}
        getPageHref={getPageHref}
      />
    </div>
  );
}
