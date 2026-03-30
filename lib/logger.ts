/**
 * Lightweight structured logging for deferred deep-link and redirect flows.
 * Keeps a single prefix so production logs stay easy to filter.
 */
type LogMeta = Record<string, unknown>;

export const logger = {
  info(message: string, meta?: LogMeta): void {
    console.log(`[gelathi] ${message}`, meta ?? "");
  },
  warn(message: string, meta?: LogMeta): void {
    console.warn(`[gelathi] ${message}`, meta ?? "");
  },
  error(message: string, meta?: LogMeta): void {
    console.error(`[gelathi] ${message}`, meta ?? "");
  },
};
