import { cn } from "@/shared/lib";
import { FLOW_STEPS } from "../model/flowSteps";
import { TiltPreview } from "./TiltPreview";

const STEP_DIGITS = 2;

/** 프로젝트를 만들 때 고민하는 흐름을 계단식 카드로 보여준다 */
export function FlowSteps() {
  return (
    <div className="mx-auto w-full max-w-md animate-rise-in [animation-delay:500ms] motion-reduce:animate-none">
      <TiltPreview>
        <ol className="relative flex flex-col gap-4 transform-3d">
          <span
            className="absolute top-8 bottom-8 left-[2.4rem] w-px bg-line"
            aria-hidden
          >
            <span className="absolute -left-1 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)] animate-flow-dot motion-reduce:hidden" />
          </span>

          {FLOW_STEPS.map(({ title, description, className }, index) => (
            <li
              key={title}
              className={cn(
                "group relative flex items-center gap-4 rounded-2xl border border-line bg-background/70 px-5 py-4 shadow-sm backdrop-blur transition-[translate,border-color,box-shadow] duration-300 ease-out hover:translate-x-2 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10",
                className,
              )}
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line bg-surface font-mono text-xs text-secondary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-background">
                {String(index + 1).padStart(STEP_DIGITS, "0")}
              </span>
              <div>
                <p className="font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {title}
                </p>
                <p className="mt-0.5 text-xs text-secondary md:text-sm">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </TiltPreview>
    </div>
  );
}
