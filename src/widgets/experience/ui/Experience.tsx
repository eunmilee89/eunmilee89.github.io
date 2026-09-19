import { Timeline, TimelineItem } from "@/src/shared/ui/Timeline";
import { TbBook } from "react-icons/tb";

const HISTORY_DATA: TimelineItem[] = [
  {
    id: "dev-deepdive",
    period: "2025.08 - Present",
    title: "프론트엔드 개발 역량 심화 및 자격증 취득",
    organization: "자기주도 학습",
    description: [
      "북스토어(풀스택),투두리스트, 유튜브·인스타그램 클론 등 개인 프로젝트 다수 제작",
      "정보처리기사 자격증 취득 등 관련 역량을 쌓으며 데이터베이스·CS·코딩테스트·AI 기초 병행 학습",
    ],
  },
  {
    id: "dev-bootcamp",
    period: "2025.01 - 2025.07",
    title: "K-Digital Training 웹 풀스택 데브코스 6기 수료",
    organization: "(주)그렙",
    description: [
      "TypeScript 기반의 React와 Node.js를 활용한 웹 풀사이클 서비스 개발 경험",
      "컴포넌트 재사용성 고려 및 효율적인 상태 관리를 중점에 둔 프론트엔드 아키텍처 학습",
      "팀 프로젝트에서 프론트엔드 리드 — 취향 기반 영화·TV 추천 서비스를 기획 단계부터 배포까지 진행",
    ],
  },
  {
    id: "plan-intern",
    period: "2023.08 - 2023.12",
    title: "IT 서비스 기획 산학 인턴",
    organization: "컬러버스",
    description: [
      "WebGL 기반 메타버스 서비스 B2B 계약 콘텐츠 및 B2C 신규 서비스 기획, 아이디어 구체화 프로세스 참여",
      "시장 조사 및 파트너사 협업 과정을 통한 사용자 중심의 서비스 플로우 이해",
    ],
  },
  {
    id: "edu-degree",
    period: "2020.03 - 2024.08",
    title: "경제학과 / 서비스디자인공학과 복수전공 졸업",
    organization: "성신여자대학교",
    description: [
      "디자인 싱킹을 바탕으로 한 사용자 중심의 문제 해결 및 UX 관점 체득",
      "시장 흐름과 비즈니스 구조를 분석하는 거시적 안목과 논리적 사고력 함양",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <>
      <section className="mx-auto max-w-[102rem] py-24 md:px-8 lg:px-20 2xl:px-30">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="lg:sticky lg:top-24 lg:self-start mb-20 ">
            <h2 className="flex items-center justify-center lg:justify-start gap-2 text-2xl font-bold">
              <TbBook className="text-primary" /> 교육 및 경험
            </h2>
            <p className="mt-2 text-sm text-secondary text-center lg:text-left">
              가닿고 싶은 목표를 향해 한 걸음씩 궤적을 그려온 과정입니다.
            </p>
          </div>

          <Timeline items={HISTORY_DATA} />
        </div>
      </section>
    </>
  );
}
