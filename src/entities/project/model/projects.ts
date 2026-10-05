import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    slug: "book-store",
    badge: "PERSONAL PROJECT · FULLSTACK",
    title: "Book Store",
    tagline:
      "읽고 싶은 책을 고르고, 담고, 결제하기까지 — 프론트엔드부터 백엔드까지 직접 완성한 온라인 서점",
    summary:
      "React 19 기반 SPA와 Node.js / Express / MySQL 백엔드를 함께 설계·구현한 개인 풀스택 프로젝트입니다.",
    links: [
      { label: "데모 보기", href: "#", variant: "primary", icon: "demo" },
      {
        label: "GitHub · Frontend",
        href: "https://github.com/eunmilee89/prgms-book-store-frontend",
        icon: "github",
      },
      {
        label: "GitHub · Backend",
        href: "https://github.com/eunmilee89/prgms-book-store-backend",
        icon: "github",
      },
    ],
    heroMedia: { alt: "메인 화면 시연", type: "gif" },

    overview: {
      meta: [
        { label: "기간", value: "2024.11 ~ 2025.01 (3개월)" },
        { label: "인원", value: "1인 (개인 프로젝트)" },
        { label: "역할", value: "기획 · 프론트엔드 · 백엔드" },
        { label: "구분", value: "풀스택 (FE + BE + DB)" },
      ],
      description:
        "온라인 서점의 **탐색 · 회원 · 상세 · 장바구니 · 결제** 흐름이 유기적으로 엮여 있어 프론트·백엔드 통신 설계를 익히기에 좋은 도메인이라 판단해 주제로 선택했습니다. 단순히 화면을 만드는 데 그치지 않고 **인증 흐름, 상태 관리, API 설계**까지 전 구간을 혼자 책임지며 실무형 풀스택 개발 경험을 쌓는 것을 목표로 진행했습니다.",
    },

    features: [
      {
        title: "무한 스크롤 도서 목록",
        description:
          "TanStack Query의 useInfiniteQuery로 페이지네이션 없이 끊김 없는 탐색 경험을 제공합니다.",
        media: { alt: "무한 스크롤 시연", type: "gif" },
      },
      {
        title: "실시간 검색 · 필터",
        description:
          "디바운스 처리된 키워드 검색과 카테고리 필터를 URL 쿼리와 동기화했습니다.",
        media: { alt: "검색 필터 시연", type: "gif" },
      },
      {
        title: "장바구니 · 결제 플로우",
        description:
          "Zustand로 클라이언트 장바구니 상태를 관리하고, 서버와 동기화해 결제 단계까지 이어지도록 구성했습니다.",
        media: { alt: "장바구니 시연", type: "gif" },
      },
      {
        title: "JWT 기반 인증",
        description:
          "회원가입 · 로그인 · 토큰 재발급까지 인증 전 구간을 직접 설계하고 구현했습니다.",
        media: { alt: "로그인 시연", type: "gif" },
      },
    ],

    techStack: [
      {
        category: "FRONTEND",
        items: [
          {
            name: "React 19",
            reason:
              "최신 동시성 렌더링과 훅 기반 구조로 컴포넌트 재사용성을 높이기 위해 선택했습니다.",
          },
          {
            name: "TypeScript",
            reason:
              "API 응답 타입을 명확히 고정해 프론트·백엔드 간 계약을 코드로 문서화하고자 했습니다.",
          },
          {
            name: "TanStack Query v5",
            reason:
              "서버 상태와 클라이언트 상태를 분리해 캐싱·리페치 로직을 직접 구현하지 않기 위해 도입했습니다.",
          },
          {
            name: "Zustand",
            reason:
              "장바구니처럼 전역이지만 가벼운 상태에는 Redux보다 보일러플레이트가 적은 Zustand가 적합했습니다.",
          },
          {
            name: "MSW v2",
            reason:
              "백엔드 API가 준비되기 전에도 프론트 개발을 막힘 없이 진행하기 위해 네트워크 레벨 모킹을 사용했습니다.",
          },
        ],
      },
      {
        category: "BACKEND",
        items: [
          {
            name: "Node.js / Express",
            reason:
              "빠르게 REST API를 설계·검증하며 프론트와 함께 반복하기에 가장 적합하다고 판단했습니다.",
          },
          {
            name: "MySQL",
            reason:
              "도서 · 주문 · 회원처럼 관계가 명확한 도메인이라 관계형 DB의 정합성이 더 적합했습니다.",
          },
          {
            name: "JWT + express-validator",
            reason:
              "인증 흐름과 입력 검증을 미들웨어 단에서 일관되게 처리하기 위해 도입했습니다.",
          },
        ],
      },
    ],

    architecture: {
      notes: [
        {
          title: "도메인별 컴포넌트 분리",
          description:
            "기능 중심이 아닌 도메인(book, cart, auth) 기준으로 폴더를 나눠 기능 단위로 응집도를 높였습니다.",
        },
        {
          title: "API 계층 단일화",
          description:
            "모든 요청을 entities의 API 레이어로 통일해, 엔드포인트 변경 시 수정 범위를 최소화했습니다.",
        },
        {
          title: "Mock-First 개발",
          description:
            "MSW 핸들러를 실제 API 스펙과 동일하게 유지해 백엔드 완성 전 프론트 개발을 먼저 진행했습니다.",
        },
      ],
    },

    challenges: [
      {
        hash: "#a3f1c2",
        title: "무한 스크롤 리렌더링 성능 문제",
        diff: { removed: 42, added: 18 },
        problem:
          "도서 목록이 200개를 넘어가면 스크롤 시 프레임 드랍이 발생했습니다.",
        cause:
          "리스트 전체가 매 페이지마다 리렌더링되며, 이미지 lazy-load가 걸려 있지 않았습니다.",
        solution:
          "react-window로 가상화하고, IntersectionObserver 기반 이미지 지연 로딩을 적용했습니다.",
        result:
          "**스크롤 프레임이 안정적으로 유지**되고 초기 렌더링 DOM 노드 수를 크게 줄였습니다.",
      },
      {
        hash: "#7e0b4a",
        title: "백엔드 미완성 구간의 개발 지연",
        diff: { removed: 38, added: 65 },
        problem:
          "결제 API가 아직 없어 프론트 결제 화면 개발이 멈추는 구간이 있었습니다.",
        cause:
          "API 명세만 있고 실제 엔드포인트가 없어 화면 검증 자체가 불가능했습니다.",
        solution:
          "MSW로 명세와 동일한 목업 핸들러를 만들어 실제 API처럼 동작하도록 구성했습니다.",
        result:
          "**백엔드 완성 전에 결제 플로우를 100% 먼저 완성**하고 이후 연결만 하도록 개발 순서를 확보했습니다.",
      },
      {
        hash: "#f2e91b",
        title: "토큰 만료 시 요청 폭주",
        diff: { removed: 12, added: 27 },
        problem:
          "Access Token 만료 시 동시에 여러 요청이 401을 받고 각각 재발급을 시도했습니다.",
        cause:
          "토큰 재발급 로직이 요청 인터셉터마다 독립적으로 실행되어 중복 호출이 발생했습니다.",
        solution:
          "재발급 요청을 Promise로 공유해, 진행 중인 재발급이 있으면 대기 후 재시도하도록 변경했습니다.",
        result:
          "**토큰 재발급 API 호출을 1회로 통합**해 불필요한 요청을 제거했습니다.",
      },
    ],
  },
];
