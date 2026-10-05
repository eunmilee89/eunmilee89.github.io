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
    <section id={id} className="scroll-mt-20 py-16 md:py-20">
      <header className="mb-8 flex items-baseline gap-3">
        <span className="font-mono text-sm text-accent">{String(index).padStart(2, '0')}</span>
        <h2 className="text-xl font-bold tracking-tight text-fg md:text-2xl">{title}</h2>
      </header>
      {children}
    </section>
  );
}
