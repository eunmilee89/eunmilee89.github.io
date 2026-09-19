import Image from "next/image";
import Button from "@/src/shared/ui/Button";
import { FaLinkedinIn } from "react-icons/fa";
import { FiDownload, FiGithub, FiGlobe } from "react-icons/fi";
import { SocialLink } from "@/src/shared/ui/SocialLink";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-4 py-20 lg:py-0 md:px-8 lg:px-0 max-w-[102rem]  mx-auto">
      <div className="text-center lg:text-left lg:py-48 lg:pl-20 2xl:pl-30">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight break-keep tracking-tight">
          안녕하세요.{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, #34d399, #2dd4bf, #f538f8)",
            }}
          >
            프론트엔드
          </span>{" "}
          개발자 이은미입니다.
        </h2>
        <div
          className="text-subtext mt-4 text-sm sm:text-base md:text-base max-w-md md:max-w-lg lg:max-w-3xl mx-auto lg:mx-0 break-keep tracking-wide
"
        >
          새로운 기술을 학습하고 실제 제품에 적용하는 과정을 좋아합니다. 사용자
          중심의 부드러운 인터렉션과 완성도 높은 인터페이스 아키텍처를 추구하는
          개발자입니다.
        </div>
        <ul className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4 mt-8 flex-wrap">
          <li>
            <Button
              path="/files/이은미_이력서.pdf"
              text="이력서 보기"
              icon={<FiDownload />}
              download="이은미_이력서.pdf"
            />
          </li>
          <div className="flex gap-2 lg:gap-4">
            <li>
              <SocialLink
                href="https://github.com/eunmilee89"
                icon={<FiGithub />}
                label="GitHub"
              />
            </li>
            <li>
              <SocialLink
                href="https://velog.io/@eunoia0235/posts"
                icon={<FiGlobe />}
                label="Velog"
              />
            </li>
            <li>
              <SocialLink
                href="https://www.linkedin.com/in/%EC%9D%80%EB%AF%B8-%EC%9D%B4-a78071376/"
                icon={<FaLinkedinIn />}
                label="LinkedIn"
              />
            </li>
          </div>
        </ul>
      </div>
      <div className="shrink-0">
        <Image
          src="/icons/A Ghost.svg"
          alt="귀여운 유령 캐릭터 로고"
          width={500}
          height={500}
          className="w-56 h-56 md:w-72 md:h-72 lg:w-[500px] lg:h-[500px] dark:mix-blend-screen dark:invert lg:mb-20"
          priority
        />
      </div>
    </div>
  );
}
