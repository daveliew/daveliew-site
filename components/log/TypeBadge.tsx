import type { LogEntryType } from "@/types/log";

const typeStyles: Record<LogEntryType, string> = {
  note: "text-[var(--knowledge-color)] border-[var(--knowledge-color)]/30 bg-[var(--knowledge-color)]/10",
  essay:
    "text-[var(--wealth-color)] border-[var(--wealth-color)]/30 bg-[var(--wealth-color)]/10",
};

export function TypeBadge({ type }: { type: LogEntryType }) {
  return (
    <span
      className={`text-xs font-mono uppercase tracking-wide px-2 py-0.5 rounded border ${typeStyles[type]}`}
    >
      {type}
    </span>
  );
}
