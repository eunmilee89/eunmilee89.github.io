import { getAllPosts } from "@/entities/coding-test";
import { CodingTestHero } from "@/widgets/coding-test-hero";
import { CodingTestList } from "@/widgets/coding-test-list";
import { Reveal } from "@/shared/ui/reveal";

/** 코딩 테스트 풀이 목록 (각 항목 → /coding-test/[slug]) */
export function CodingTestPage() {
  const posts = getAllPosts();

  return (
    <>
      <CodingTestHero />

      <div className="mx-auto w-full max-w-7xl px-4 pb-20 md:px-6 md:pb-28">
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
    </>
  );
}
