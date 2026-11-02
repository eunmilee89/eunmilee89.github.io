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
    <div className="overflow-hidden rounded-xl">
      <table className="w-full table-fixed text-left">
        <caption className="sr-only">코딩 테스트 풀이 목록</caption>
        <thead className="bg-surface-2 text-xs text-secondary">
          <tr>
            <th scope="col" className="w-12 py-2.5 text-center font-medium md:w-14">
              번호
            </th>
            <th scope="col" className="px-3 py-2.5 font-medium md:px-4">
              제목
            </th>
            <th
              scope="col"
              className="hidden w-44 px-4 py-2.5 font-medium xl:table-cell"
            >
              태그
            </th>
            <th
              scope="col"
              className="hidden w-28 px-4 py-2.5 text-right font-medium md:table-cell"
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
              className="relative transition-colors duration-200 hover:bg-primary/5 focus-within:bg-primary/5"
            >
              <td className="text-center font-mono text-xs text-secondary">
                {firstRowNumber - index}
              </td>
              <td className="px-3 py-3.5 md:px-4">
                <Link
                  href={`/coding-test/${slug}`}
                  className="text-[15px] font-semibold text-foreground break-keep after:absolute after:inset-0"
                >
                  {title}
                </Link>
                <p className="mt-0.5 line-clamp-1 text-[13px] text-secondary break-keep">
                  {summary}
                </p>
              </td>
              <td className="hidden px-4 xl:table-cell">
                <ul className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <li key={tag}>
                      <Badge variant="subtle">{tag}</Badge>
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
    </div>
  );
}
