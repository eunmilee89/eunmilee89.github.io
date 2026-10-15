import type { TechGroup } from '@/entities/project';

export function TechStackGroup({ category, items }: TechGroup) {
  return (
    <div>
      <h3 className="mb-3 font-mono text-[11px] tracking-widest text-secondary">{category}</h3>
      <ul className="divide-y divide-line overflow-hidden rounded-lg border border-line bg-surface">
        {items.map(({ name, reason }) => (
          <li key={name} className="grid gap-1 px-4 py-3 md:grid-cols-[200px_1fr] md:gap-6 md:px-5 md:py-4">
            <span className="font-mono text-[13px] font-semibold text-primary md:text-sm">{name}</span>
            <span className="text-[13px] leading-relaxed text-foreground/80 md:text-sm">{reason}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
