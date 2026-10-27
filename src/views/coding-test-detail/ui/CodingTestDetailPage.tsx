import type { CodingTestPost } from "@/entities/coding-test";
import { Badge } from "@/shared/ui/badge";
import { Markdown } from "@/shared/ui/markdown";

interface CodingTestDetailPageProps {
  post: CodingTestPost;
}

export function CodingTestDetailPage({ post }: CodingTestDetailPageProps) {
  return (
    <article className="mx-auto max-w-5xl px-4 py-4 md:px-6 md:py-10">
      <header className="border-b border-line pb-8">
        <time dateTime={post.date} className="font-mono text-xs text-secondary">
          {post.date}
        </time>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-foreground break-keep md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-subtext break-keep md:text-base">
          {post.summary}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="outline">{tag}</Badge>
            </li>
          ))}
        </ul>
      </header>

      <div className="mt-8">
        <Markdown content={post.content} />
      </div>
    </article>
  );
}
