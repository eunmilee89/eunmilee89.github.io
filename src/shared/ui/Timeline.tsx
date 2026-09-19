export type TimelineItem = {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string[];
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative border-l border-line ml-4 md:ml-8 space-y-16">
      {items.map((item, index) => {
        const isActive = index === 0;

        return (
          <div
            key={item.id}
            id={item.id}
            className="relative pl-6 md:pl-10 group"
          >
            <div
              className={`absolute -left-2.25 top-0 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                isActive
                  ? "bg-primary border-primary scale-110 animate-glow-pulse"
                  : "bg-background border-line"
              }`}
            />

            <div className="flex flex-col gap-2">
              <span className="text-xs md:text-sm font-semibold text-primary">
                {item.period}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-foreground break-keep">
                {item.title}{" "}
                <span className="text-secondary text-xs font-normal md:text-sm">
                  @ {item.organization}
                </span>
              </h3>
              <ul className="mt-2 space-y-2 text-sm md:text-base text-subtext break-keep">
                {item.description.map((desc, idx) => (
                  <li
                    key={idx}
                    className="list-disc list-inside tracking-wide
"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
