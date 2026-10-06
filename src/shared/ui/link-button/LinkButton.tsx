import Link from 'next/link';
import { cn } from '@/shared/lib';
import { DemoIcon, GithubIcon } from '@/shared/ui/icons';

export interface LinkButtonProps {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
  icon?: 'github' | 'demo';
  shouldOpenNewTab?: boolean;
}

const variants = {
  primary: 'bg-primary text-background hover:bg-primary/90',
  secondary: 'border border-line bg-surface text-foreground hover:border-primary/50 hover:text-primary',
} as const;

export function LinkButton({ label, href, variant = 'secondary', icon, shouldOpenNewTab }: LinkButtonProps) {
  const isNewTab = shouldOpenNewTab ?? href.startsWith('http');

  return (
    <Link
      href={href}
      {...(isNewTab && { target: '_blank', rel: 'noopener noreferrer' })}
      className={cn(
        'inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-colors duration-200 ease-out',
        variants[variant],
      )}
    >
      {icon === 'github' && <GithubIcon className="h-4 w-4" />}
      {icon === 'demo' && <DemoIcon className="h-4 w-4" />}
      {label}
    </Link>
  );
}
