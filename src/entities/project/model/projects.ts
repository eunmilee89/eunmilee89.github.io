import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    slug: "tastebox",
    badge: "TEAM PROJECT · FRONTEND",
    title: "TasteBox",
    tagline:
      "취향에 맞는 영화와 TV 콘텐츠를 발견하고, 나만의 컬렉션 보드로 모아두는 콘텐츠 추천 서비스",
    summary:
      "React 19 + TypeScript 기반 SPA로, 5인 팀(FE 3 · BE 2)에서 프론트엔드를 맡아 컬렉션 · 장르 도메인과 공통 기반을 구현했습니다.",
    links: [
      {
        label: "GitHub · Frontend",
        href: "https://github.com/StepUp2025/TasteBox-Frontend",
        variant: "primary",
        icon: "github",
      },
      {
        label: "GitHub · Backend",
        href: "https://github.com/StepUp2025/TasteBox-Backend",
        icon: "github",
      },
    ],
    heroMedia: { alt: "메인 화면" },

    overview: {
      meta: [
        { label: "기간", value: "2025.06 ~ 2025.07 (1개월)" },
        { label: "인원", value: "5인 (프론트엔드 3 · 백엔드 2)" },
        { label: "역할", value: "프론트엔드" },
        { label: "구분", value: "팀 프로젝트 (StepUp2025)" },
      ],
      description:
        "영화 · TV 콘텐츠를 **탐색하고, 취향 장르를 설정하고, 컬렉션 보드로 모아보는** 개인화 추천 서비스입니다. 프론트엔드 팀원으로서 **컬렉션 · 장르 도메인 전체**와 함께 **MSW 목 서버, axios 클라이언트, 토스트 · 에러 페이지 같은 공통 기반**을 담당했고, 프로젝트 초기 세팅부터 반응형 마무리까지 45개의 PR로 기여했습니다.",
    },

    features: [
      {
        title: "컬렉션 보드 생성 · 수정 · 삭제",
        description:
          "제목 · 설명 · 썸네일을 입력해 컬렉션 보드를 만들고, react-hook-form + zod로 유효성을 검사합니다. 삭제는 확인 모달을 거치도록 했습니다.",
        media: { alt: "컬렉션 보드 생성 화면" },
      },
      {
        title: "컬렉션 콘텐츠 관리",
        description:
          "컬렉션 상세에서 담긴 콘텐츠를 확인하고, 별도 편집 페이지에서 콘텐츠를 추가 · 삭제할 수 있습니다. 새 컬렉션을 만들 때 선택한 콘텐츠가 바로 담기도록 구현했습니다.",
        media: { alt: "컬렉션 콘텐츠 편집 화면" },
      },
      {
        title: "TV · 영화 장르별 탐색",
        description:
          "장르를 선택해 TV · 영화 콘텐츠를 장르별로 모아볼 수 있는 페이지를 구현했습니다.",
        media: { alt: "장르 페이지 화면" },
      },
      {
        title: "피드백 · 예외 화면",
        description:
          "어디서든 호출 가능한 토스트, Empty · Loading 상태, 에러 · NotFound 페이지를 공통 UI로 만들고, 비로그인 사용자에게는 로그인 페이지로 이동하는 액션을 제공합니다.",
        media: { alt: "토스트와 에러 화면" },
      },
    ],

    techStack: [
      {
        category: "FRONTEND",
        items: [
          {
            name: "React 19 + TypeScript",
            reason:
              "API 요청 · 응답 타입을 고정해 백엔드와의 계약을 코드로 드러내고, 협업 중 타입 불일치를 빌드 단계에서 잡기 위해 사용했습니다.",
          },
          {
            name: "TanStack Query v5",
            reason:
              "컬렉션 · 장르처럼 서버에서 오는 데이터를 커스텀 훅으로 감싸 캐싱 · 리페치를 위임하고, 클라이언트 상태와 분리하기 위해 사용했습니다.",
          },
          {
            name: "Zustand",
            reason:
              "인증 · 테마처럼 가볍지만 전역에서 필요한 상태를 보일러플레이트 없이 관리하기 위해 사용했습니다.",
          },
          {
            name: "react-hook-form + zod",
            reason:
              "컬렉션 생성 · 수정 폼의 유효성 규칙을 스키마로 선언해 생성과 수정 화면에서 같은 규칙을 재사용하기 위해 사용했습니다.",
          },
          {
            name: "styled-components",
            reason:
              "글로벌 테마와 공통 스타일을 토큰처럼 공유하고, props에 따라 달라지는 스타일을 컴포넌트 안에서 다루기 위해 사용했습니다.",
          },
          {
            name: "MSW v2",
            reason:
              "백엔드 API가 완성되기 전에도 명세 기반 핸들러로 화면을 먼저 개발 · 검증하기 위해 도입했습니다.",
          },
        ],
      },
      {
        category: "COLLABORATION",
        items: [
          {
            name: "Biome · Husky · commitlint",
            reason:
              "프론트엔드 3인이 같은 포맷 · 커밋 컨벤션을 지키도록 커밋 전에 자동으로 검사했습니다.",
          },
        ],
      },
    ],

    architecture: {
      notes: [
        {
          title: "FSD (Feature-Sliced Design)",
          description:
            "app · pages · widgets · features · entities · shared 레이어로 나눠, 팀원마다 맡은 도메인을 독립적으로 개발해도 충돌이 적도록 구성했습니다.",
        },
        {
          title: "인증 · 비인증 요청 분리",
          description:
            "axios 인스턴스를 httpClient와 authClient로 나눠, 토큰이 필요한 요청과 아닌 요청을 호출 지점에서 명확히 구분했습니다.",
        },
        {
          title: "Mock-First 개발",
          description:
            "MSW 실행 기반과 컬렉션 · 장르 핸들러를 먼저 만들어, 백엔드 완성 전에 화면 개발을 진행하고 이후 실제 API로 교체했습니다.",
        },
      ],
    },

    challenges: [
      {
        hash: "#328b255",
        title: "장르 선택 데이터 유지",
        problem:
          "취향 장르는 영화와 TV 시리즈를 한꺼번에 제출해야 해서, 영화 장르 선택 값을 다음 페이지(TV 장르 선택)까지 가져가야 했습니다.",
        cause:
          "선택 값이 컴포넌트 상태에만 있어, 이전 · 다음 버튼으로 페이지를 이동하면 앞에서 고른 장르가 사라졌습니다.",
        solution:
          "선택한 장르를 sessionStorage에 저장하고, 페이지 진입 시 저장된 값을 불러와 선택 상태를 복원하도록 했습니다.",
        result:
          "**이전 · 다음 버튼을 오가도 선택한 장르가 유지**되어, 마지막 단계에서 영화 · TV 장르를 한 번에 제출할 수 있게 되었습니다.",
      },
      {
        hash: "#88b67b5",
        title: "새 컬렉션 생성 시 콘텐츠 누락",
        problem:
          "콘텐츠를 담으려다 새 컬렉션을 만들면, 컬렉션은 생성되지만 담으려던 콘텐츠는 저장되지 않았습니다.",
        cause:
          "컬렉션 생성 페이지로 이동하면서 담으려던 콘텐츠 정보가 전달되지 않아, 생성 후 콘텐츠를 추가할 수 없었습니다.",
        solution:
          "이동 시 콘텐츠 id를 라우터 state로 넘기고, 생성 페이지에서 useLocation으로 받아 컬렉션 생성 성공 후 콘텐츠 추가 훅을 호출했습니다.",
        result:
          "**새 컬렉션을 만들면 담으려던 콘텐츠가 바로 추가된 상태**로 생성되도록 흐름을 완성했습니다.",
      },
      {
        hash: "#56f54ca",
        title: "호버 효과 불일치",
        problem:
          "카드 · 버튼 등 여러 요소의 호버 효과가 컴포넌트마다 제각각이라 화면 전체의 인터랙션이 일관되지 않았습니다.",
        cause:
          "호버 스타일을 컴포넌트마다 따로 작성해, 색 · 투명도 · 전환 속도가 서로 달랐습니다.",
        solution:
          "테마 색을 사용하는 공통 hoverOverlay 스타일을 만들어, 호버가 필요한 컴포넌트에서 재사용하도록 했습니다.",
        result:
          "**전체 화면의 호버 효과를 하나로 통일**하고, 수정이 필요할 때 한 곳만 바꾸면 되도록 했습니다.",
      },
      {
        hash: "#b6dd6bb",
        title: "불필요한 토큰 전송",
        problem:
          "모든 API 요청이 하나의 axios 인스턴스를 사용해, 토큰이 필요 없는 요청까지 인증 처리를 거쳤습니다.",
        cause:
          "인증이 필요한 요청과 필요 없는 요청을 구분하는 기준 없이 같은 클라이언트로 호출하고 있었습니다.",
        solution:
          "axios 인스턴스를 비인증용 httpClient와 요청 인터셉터로 토큰을 붙이는 authClient로 분리했습니다.",
        result:
          "**토큰이 필요한 요청에만 토큰을 실어 보내**고, 호출 지점에서 인증 여부가 명확히 드러나도록 했습니다.",
      },
    ],
  },
];
