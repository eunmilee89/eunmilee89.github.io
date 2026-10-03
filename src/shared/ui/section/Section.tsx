import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section
      className={`mx-auto max-w-[102rem] py-24 px-4 md:px-8 lg:px-20 2xl:px-30 ${className}`}
    >
      {children}
    </section>
  );
}
