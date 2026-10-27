import type { Element, ElementContent, Root } from "hast";
import { bundledLanguages, codeToHast, type BundledLanguage } from "shiki";

const CODE_THEMES = { light: "github-light", dark: "github-dark" } as const;
const LANGUAGE_CLASS_PREFIX = "language-";

function isBundledLanguage(lang: string): lang is BundledLanguage {
  return Object.hasOwn(bundledLanguages, lang);
}

function getLanguage(code: Element): string | undefined {
  const { className } = code.properties;
  if (!Array.isArray(className)) return undefined;

  const languageClass = className.find(
    (name) => typeof name === "string" && name.startsWith(LANGUAGE_CLASS_PREFIX),
  );
  return typeof languageClass === "string"
    ? languageClass.slice(LANGUAGE_CLASS_PREFIX.length)
    : undefined;
}

function getText(node: ElementContent): string {
  if (node.type === "text") return node.value;
  if (node.type === "element") return node.children.map(getText).join("");
  return "";
}

function collectPreElements(node: Root | Element): Element[] {
  return node.children.flatMap((child) => {
    if (child.type !== "element") return [];
    return child.tagName === "pre" ? [child] : collectPreElements(child);
  });
}

/** 지원하지 않는 언어나 언어 미지정 블록은 원본 그대로 둔다 */
async function highlightPre(pre: Element): Promise<void> {
  const [code] = pre.children;
  if (pre.children.length !== 1 || code.type !== "element" || code.tagName !== "code") return;

  const lang = getLanguage(code);
  if (!lang || !isBundledLanguage(lang)) return;

  // 마크다운 코드 블록 텍스트는 끝에 개행이 붙어 있어 빈 줄이 하나 더 렌더링된다
  const source = getText(code).replace(/\n$/, "");
  const highlighted = await codeToHast(source, {
    lang,
    themes: CODE_THEMES,
    defaultColor: false,
  });

  const [highlightedPre] = highlighted.children;
  if (highlightedPre?.type !== "element") return;

  pre.properties = highlightedPre.properties;
  pre.children = highlightedPre.children;
}

/** 코드 블록을 Shiki로 하이라이트한다. 색은 --shiki-light / --shiki-dark 변수로만 내보내 테마 전환을 CSS에 맡긴다 */
export function rehypeShiki() {
  return async (tree: Root) => {
    await Promise.all(collectPreElements(tree).map(highlightPre));
  };
}
