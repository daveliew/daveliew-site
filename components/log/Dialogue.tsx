import type { ReactNode } from "react";

type Speaker = "kid" | "dad" | "ai";

const speakerConfig: Record<
  Speaker,
  { label: string; accent: string; frame: string }
> = {
  kid: {
    label: "Kid",
    accent: "text-[var(--time-color)]",
    frame: "border-l-2 border-[var(--time-color)]/60",
  },
  dad: {
    label: "Dad",
    accent: "text-[var(--knowledge-color)]",
    frame: "border-l-2 border-[var(--knowledge-color)]/60",
  },
  ai: {
    label: "AI",
    accent: "text-[var(--strategy-color)]",
    frame:
      "border-l-2 border-dashed border-[var(--strategy-color)]/60 bg-[var(--strategy-color)]/5 rounded-r",
  },
};

interface TurnProps {
  speaker: Speaker;
  aside?: string;
  children: ReactNode;
}

export function Turn({ speaker, aside, children }: TurnProps) {
  const cfg = speakerConfig[speaker];
  return (
    <div className="md:grid md:grid-cols-[minmax(0,1fr)_11rem] md:gap-5">
      <div className={`pl-4 pr-3 py-2 ${cfg.frame}`}>
        <div className="flex items-baseline gap-2 mb-1">
          <span
            className={`text-xs font-semibold uppercase tracking-wide ${cfg.accent}`}
          >
            {cfg.label}
          </span>
          {speaker === "ai" && (
            <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded border border-[var(--strategy-color)]/40 text-[var(--strategy-color)]">
              AI-assisted
            </span>
          )}
        </div>
        <div className="text-gray-700 dark:text-gray-300 [&>p]:mb-0">
          {children}
        </div>
      </div>
      {aside && (
        <p className="mt-1 pl-4 md:mt-2 md:pl-0 text-xs italic leading-relaxed text-gray-500 dark:text-gray-400 md:self-start">
          {aside}
        </p>
      )}
    </div>
  );
}

export function Dialogue({ children }: { children: ReactNode }) {
  return <div className="my-8 space-y-4">{children}</div>;
}
