import Link from "next/link";
import { Badge } from "@/shared/ui/badge";
import type { CodingTestPostMeta } from "../model/types";

interface CodingTestTableProps {
  posts: CodingTestPostMeta[];
  /** 첫 행의 글 번호. 최신 글이 위에 오므로 아래로 갈수록 1씩 줄어든다 */
  firstRowNumber: number;
}

export function CodingTestTable({
  posts,
  firstRowNumber,
}: CodingTestTableProps) {
  return (
    <table className="w-full table-fixed border-t border-line text-left">
      <caption className="sr-only">코딩 테스트 풀이 목록</caption>
      <thead className="border-b border-line text-xs text-secondary">
        <tr>
          <th scope="col" className="w-12 py-3 text-center font-medium md:w-16">
            번호
          </th>
          <th scope="col" className="px-3 py-3 font-medium md:px-4">
            제목
          </th>
          <th
            scope="col"
            className="hidden w-52 px-4 py-3 font-medium md:table-cell"
          >
            태그
          </th>
          <th
            scope="col"
            className="hidden w-28 px-4 py-3 text-right font-medium md:table-cell"
          >
            날짜
          </th>
        </tr>
      </thead>
      <tbody>
        {posts.map(({ slug, title, summary, tags, date }, index) => (
          // 제목 링크의 ::after가 행 전체를 덮어 행 어디를 눌러도 이동한다
          <tr
            key={slug}
            className="group relative border-b border-line transition-colors duration-200 focus-within:bg-surface"
          >
            <td className="text-center font-mono text-sm text-secondary">
              {firstRowNumber - index}
            </td>
            <td className="px-3 py-5 md:px-4">
              <Link
                href={`/coding-test/${slug}`}
                className="font-bold text-foreground break-keep transition-colors duration-200 after:absolute after:inset-0 group-hover:text-primary md:text-lg"
              >
                {title}
              </Link>
              <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-secondary break-keep md:line-clamp-1">
                {summary}
              </p>
            </td>
            <td className="hidden px-4 md:table-cell">
              <ul className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <li key={tag}>
                    <Badge variant="outline">{tag}</Badge>
                  </li>
                ))}
              </ul>
            </td>
            <td className="hidden px-4 text-right md:table-cell">
              <time
                dateTime={date}
                className="font-mono text-xs text-secondary"
              >
                {date}
              </time>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
