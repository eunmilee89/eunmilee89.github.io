import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/entities/project";
import { ProjectDetailPage } from "@/views/project-detail";

export { generateMetadata, generateStaticParams } from "@/views/project-detail";

export const dynamicParams = false;

export default async function Page({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectDetailPage project={project} />;
}
