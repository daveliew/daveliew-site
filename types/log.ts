export type LogEntryType = "note" | "essay";

export interface LogEntryMeta {
  title: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  type: LogEntryType;
  summary?: string;
  /** Facet tag; free-form until real clusters emerge (~15 entries), then closed. */
  lens?: string;
  /** Slugs of earlier entries this one builds on; validated by check-log-meta. */
  refs?: string[];
}

export interface LogEntry extends LogEntryMeta {
  slug: string;
}
