import type { ReactNode } from 'react';

interface NumberedSectionProps {
  id?: string;
  /** 섹션 번호 (01, 02 ...) */
  index: number;
  title: string;
  children: ReactNode;
}

/** 번호 + 제목 헤더를 가진 공통 섹션 래퍼 */
export function NumberedSection({ id, index, title, children }: NumberedSectionProps) {
  return (
    <section id={id} className="scroll-mt-20 py-10 md:py-20">
      <header className="mb-5 flex items-baseline gap-2.5 md:mb-8 md:gap-3">
        <span className="font-mono text-xs text-primary md:text-sm">{String(index).padStart(2, '0')}</span>
        <h2 className="text-lg font-bold tracking-tight text-foreground md:text-2xl">{title}</h2>
      </header>
      {children}
    </section>
  );
}
