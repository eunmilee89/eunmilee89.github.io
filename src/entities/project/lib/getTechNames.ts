import type { TechGroup } from "../model/types";

/** 카테고리 구분 없이 기술 이름만 모아 태그로 쓴다 */
export function getTechNames(techStack: TechGroup[]): string[] {
  return techStack.flatMap((group) => group.items.map((item) => item.name));
}
