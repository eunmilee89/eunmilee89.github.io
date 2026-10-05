import Link from 'next/link';
import { cn } from '@/shared/lib';
import { DemoIcon, GithubIcon } from '@/shared/ui/icons';

export interface LinkButtonProps {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
  icon?: 'github' | 'demo';
}

const variants = {
  primary: 'bg-accent text-bg hover:bg-accent/90',
  secondary: 'border border-line bg-surface text-fg hover:border-accent/50 hover:text-accent',
} as const;

export function LinkButton({ label, href, variant = 'secondary', icon }: LinkButtonProps) {
  const isExternal = href.startsWith('http');

  return (
    <Link
      href={href}
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      className={cn(
        'inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-colors',
        variants[variant],
      )}
    >
      {icon === 'github' && <GithubIcon className="h-4 w-4" />}
      {icon === 'demo' && <DemoIcon className="h-4 w-4" />}
      {label}
    </Link>
  );
}
