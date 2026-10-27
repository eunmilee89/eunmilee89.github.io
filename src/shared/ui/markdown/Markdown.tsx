import { MarkdownAsync } from "react-markdown";
import remarkGfm from "remark-gfm";
import { rehypeShiki } from "./rehypeShiki";

interface MarkdownProps {
  content: string;
}

/** 마크다운 본문을 typography(prose) 스타일로 렌더링한다 (raw HTML은 렌더링하지 않음) */
export function Markdown({ content }: MarkdownProps) {
  return (
    <div className="prose max-w-none break-keep">
      <MarkdownAsync remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeShiki]} skipHtml>
        {content}
      </MarkdownAsync>
    </div>
  );
}
