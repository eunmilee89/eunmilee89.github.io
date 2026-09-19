import Link from "next/link";
import { ReactNode } from "react";

type SocialLinkProps = {
  href: string;
  icon: ReactNode;
  label: string;
};

export function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-background border border-line text-foreground transition-colors duration-200 ease-out hover:text-primary"
    >
      <span className="[&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6">
        {icon}
      </span>
    </Link>
  );
}
