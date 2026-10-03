import { TbBook } from "react-icons/tb";
import { EXPERIENCES } from "@/entities/experience";
import { Section } from "@/shared/ui/section";
import { Timeline } from "@/shared/ui/timeline";

export function ExperienceSection() {
  return (
    <Section className="max-md:px-0">
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="lg:sticky lg:top-24 lg:self-start mb-20">
          <h2 className="flex items-center justify-center lg:justify-start gap-2 text-2xl font-bold">
            <TbBook className="text-primary" /> 교육 및 경험
          </h2>
          <p className="mt-2 text-sm text-secondary text-center lg:text-left">
            가닿고 싶은 목표를 향해 한 걸음씩 궤적을 그려온 과정입니다.
          </p>
        </div>

        <Timeline items={EXPERIENCES} />
      </div>
    </Section>
  );
}
