import { notFound } from "next/navigation";
import { getPostBySlug } from "@/entities/coding-test";
import { CodingTestDetailPage } from "@/views/coding-test-detail";

export {
  generateMetadata,
  generateStaticParams,
} from "@/views/coding-test-detail";

export const dynamicParams = false;

export default async function Page({
  params,
}: PageProps<"/coding-test/[slug]">) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return <CodingTestDetailPage post={post} />;
}
