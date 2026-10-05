import type { Challenge } from '@/entities/project';
import { cn } from '@/shared/lib';
import { Badge } from '@/shared/ui/badge';
import { RichText } from '@/shared/ui/rich-text';

const STEPS = [
  { key: 'problem', label: '문제 상황' },
  { key: 'cause', label: '원인 분석' },
  { key: 'solution', label: '해결 방법' },
  { key: 'result', label: '결과' },
] as const;

export function ChallengeCard(challenge: Challenge) {
  const { hash, title, diff } = challenge;

  return (
    <article className="overflow-hidden rounded-lg border border-line bg-surface">
      <header className="flex items-center gap-3 border-b border-line px-5 py-3.5">
        <Badge variant="mono" className="rounded px-2 py-0.5">{hash}</Badge>
        <h3 className="flex-1 text-sm font-bold text-fg md:text-base">{title}</h3>
        {diff && (
          <span className="shrink-0 font-mono text-xs">
            <span className="text-red-400">-{diff.removed}</span>{' '}
            <span className="text-accent">+{diff.added}</span>
          </span>
        )}
      </header>

      <ol className="grid divide-line max-md:divide-y md:grid-cols-4 md:divide-x">
        {STEPS.map(({ key, label }) => {
          const isResult = key === 'result';
          return (
            <li key={key} className={cn('p-5', isResult && 'bg-accent/[0.04]')}>
              <h4 className={cn('mb-2 text-[11px] font-medium', isResult ? 'text-accent' : 'text-fg-muted')}>
                {label}
              </h4>
              <RichText text={challenge[key]} className="text-[13px] leading-relaxed text-fg/85" />
            </li>
          );
        })}
      </ol>
    </article>
  );
}
