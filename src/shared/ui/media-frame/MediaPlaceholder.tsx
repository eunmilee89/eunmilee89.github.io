import { cn } from '@/shared/lib';

interface MediaPlaceholderProps {
  label: string;
  className?: string;
}

export function MediaPlaceholder({ label, className }: MediaPlaceholderProps) {
  return (
    <div className={cn('absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--color-primary)_18%,transparent),transparent_60%)]', className)}>
      <span className="rounded border border-line bg-background/70 px-3 py-1 font-mono text-[11px] text-secondary">{label}</span>
    </div>
  );
}
