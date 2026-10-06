import type { TechGroup } from '@/entities/project';

export function TechStackGroup({ category, items }: TechGroup) {
  return (
    <div>
      <h3 className="mb-3 font-mono text-[11px] tracking-widest text-secondary">{category}</h3>
      <ul className="divide-y divide-line overflow-hidden rounded-lg border border-line bg-surface">
        {items.map(({ name, reason }) => (
          <li key={name} className="grid gap-1 px-5 py-4 md:grid-cols-[200px_1fr] md:gap-6">
            <span className="font-mono text-sm font-semibold text-primary">{name}</span>
            <span className="text-sm leading-relaxed text-foreground/80">{reason}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
