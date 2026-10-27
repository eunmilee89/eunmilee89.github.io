import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { CodingTestPost, CodingTestPostMeta } from "../model/types";

const POSTS_DIR = path.join(process.cwd(), "content/coding-test");
const POST_EXTENSION = ".md";
const ISO_DATE_LENGTH = "YYYY-MM-DD".length;

type PostFrontmatter = Omit<CodingTestPostMeta, "slug" | "date"> & {
  date: string | Date;
};

/** YAML은 따옴표 없는 날짜를 Date로 파싱하므로 문자열과 Date를 모두 허용한다 */
function isPostFrontmatter(data: unknown): data is PostFrontmatter {
  if (typeof data !== "object" || data === null) return false;
  const { title, date, summary, tags } = data as Record<string, unknown>;

  return (
    typeof title === "string" &&
    (typeof date === "string" || date instanceof Date) &&
    typeof summary === "string" &&
    Array.isArray(tags) &&
    tags.every((tag) => typeof tag === "string")
  );
}

function toDateString(date: string | Date): string {
  return date instanceof Date
    ? date.toISOString().slice(0, ISO_DATE_LENGTH)
    : date;
}

function readPost(slug: string): { meta: CodingTestPostMeta; content: string } {
  const fileName = `${slug}${POST_EXTENSION}`;
  const source = fs.readFileSync(path.join(POSTS_DIR, fileName), "utf8");
  const { data, content } = matter(source);

  if (!isPostFrontmatter(data)) {
    throw new Error(
      `[coding-test] ${fileName}: frontmatter의 title, date, summary, tags 필드를 확인하세요.`,
    );
  }

  return {
    meta: { ...data, slug, date: toDateString(data.date) },
    content,
  };
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  // slug 생성
  return fs
    .readdirSync(POSTS_DIR)
    .filter((fileName) => fileName.endsWith(POST_EXTENSION))
    .map((fileName) => path.basename(fileName, POST_EXTENSION));
}

// 최신 글이 먼저 오도록 날짜 내림차순으로 정렬한다
export function getAllPosts(): CodingTestPostMeta[] {
  return getAllPostSlugs()
    .map((slug) => readPost(slug).meta)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): CodingTestPost | undefined {
  if (!getAllPostSlugs().includes(slug)) return undefined;
  const { meta, content } = readPost(slug);
  return { ...meta, content };
}
