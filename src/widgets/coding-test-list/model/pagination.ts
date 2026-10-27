export const POSTS_PER_PAGE = 10;
export const FIRST_PAGE = 1;
export const PAGE_QUERY_KEY = "page";

const LIST_PATH = "/coding-test";

export function getTotalPages(postCount: number): number {
  return Math.max(FIRST_PAGE, Math.ceil(postCount / POSTS_PER_PAGE));
}

/** 숫자가 아니거나 범위를 벗어난 값이 들어와도 빈 목록 대신 가장 가까운 페이지를 보여준다 */
export function parsePage(value: string | null, totalPages: number): number {
  const page = Number(value);
  if (!Number.isInteger(page)) return FIRST_PAGE;

  return Math.min(Math.max(page, FIRST_PAGE), totalPages);
}

export function getPageHref(page: number): string {
  return page === FIRST_PAGE ? LIST_PATH : `${LIST_PATH}?${PAGE_QUERY_KEY}=${page}`;
}
