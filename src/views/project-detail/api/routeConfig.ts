import type { Metadata } from "next";
import { getAllProjectSlugs, getProjectBySlug } from "@/entities/project";

/** 빌드 시 모든 프로젝트 페이지를 정적으로 생성 */
export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} | Portfolio`,
    description: project.tagline,
    openGraph: { title: project.title, description: project.tagline },
  };
}
