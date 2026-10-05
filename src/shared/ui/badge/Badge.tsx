import type { ReactNode } from 'react';
import { cn } from '@/shared/lib';

interface BadgeProps {
  children: ReactNode;
  variant?: 'outline' | 'solid' | 'mono';
  dot?: boolean;
  className?: string;
}

const variants = {
  outline: 'border border-accent/40 text-accent bg-accent/5',
  solid: 'bg-accent/15 text-accent',
  mono: 'border border-line bg-surface-2 font-mono text-accent',
} as const;

export function Badge({ children, variant = 'outline', dot, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium tracking-wider',
        variants[variant],
        className,
      )}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />}
      {children}
    </span>
  );
}
