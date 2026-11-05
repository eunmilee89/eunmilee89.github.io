import { getAllPosts } from "@/entities/coding-test";
import { CodingTestHero } from "@/widgets/coding-test-hero";
import { CodingTestList } from "@/widgets/coding-test-list";
import { GrapeBoard, groupPostsByMonth } from "@/widgets/coding-test-grapes";
import { Reveal } from "@/shared/ui/reveal";

/** 코딩 테스트 풀이 목록 (각 항목 → /coding-test/[slug]) */
export function CodingTestPage() {
  const posts = getAllPosts();
  // Static Export라 "올해"와 "이번 달"은 빌드 시점 기준이다
  const now = new Date();
  const year = now.getFullYear();

  return (
    <>
      <CodingTestHero />

      <div className="mx-auto grid w-full max-w-7xl gap-10 pb-20 md:px-6 md:pb-28 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_18rem]">
        <aside className="mx-auto w-full max-w-sm lg:sticky lg:top-28 lg:col-start-2 lg:row-start-1 lg:max-w-none lg:self-start">
          <Reveal>
            <GrapeBoard
              year={year}
              currentMonth={now.getMonth() + 1}
              months={groupPostsByMonth(posts, year)}
            />
          </Reveal>
        </aside>

        <div className="min-w-0">
          {posts.length === 0 ? (
            <p className="text-center text-sm text-secondary md:text-base">
              아직 작성된 풀이가 없습니다.
            </p>
          ) : (
            <Reveal>
              <CodingTestList posts={posts} />
            </Reveal>
          )}
        </div>
      </div>
    </>
  );
}
