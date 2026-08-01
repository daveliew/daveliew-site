export type LogEntryType = "note" | "essay";

export interface LogEntryMeta {
  title: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  type: LogEntryType;
  summary?: string;
}

export interface LogEntry extends LogEntryMeta {
  slug: string;
}
