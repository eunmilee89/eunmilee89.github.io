export interface FlowStep {
  title: string;
  description: string;
  /** 카드마다 들여쓰기·깊이를 달리해 계단처럼 흐르는 배치를 만든다 */
  className: string;
}

export const FLOW_STEPS: FlowStep[] = [
  {
    title: "사용자 상호작용",
    description: "클릭 · 입력 · 스크롤",
    className: "ml-0 [transform:translateZ(30px)]",
  },
  {
    title: "상태 설계",
    description: "클라이언트 상태와 서버 상태의 경계",
    className: "ml-8 [transform:translateZ(60px)]",
  },
  {
    title: "데이터 흐름",
    description: "패칭 · 캐싱 · 동기화",
    className: "ml-4 [transform:translateZ(45px)]",
  },
  {
    title: "화면 반영",
    description: "로딩 · 에러 · 빈 상태까지",
    className: "ml-12 [transform:translateZ(75px)]",
  },
];
