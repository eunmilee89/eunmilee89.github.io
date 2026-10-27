import type { Metadata } from "next";
import { getAllPostSlugs, getPostBySlug } from "@/entities/coding-test";

/** 빌드 시 모든 풀이 페이지를 정적으로 생성 */
export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/coding-test/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Portfolio`,
    description: post.summary,
    openGraph: { title: post.title, description: post.summary },
  };
}
