"use client";

import { useState, useCallback, useEffect } from "react";

export function useComingSoon() {
  const [open, setOpen] = useState(false);
  const show = useCallback(() => setOpen(true), []);
  const hide = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return { open, show, hide };
}

export function ComingSoonModal({
  open,
  onCloseAction,
}: {
  open: boolean;
  onCloseAction: () => void;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onCloseAction}
      role="dialog"
      aria-modal="true"
      aria-label="App coming soon"
    >
      <div
        className="mx-4 w-full max-w-sm rounded-2xl border border-violet-800/40 bg-[#1a1025] p-8 text-center shadow-2xl shadow-violet-900/30"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-violet-900/50 text-violet-400">
          <svg
            aria-hidden
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h3 className="font-sans text-xl font-semibold tracking-tight text-zinc-100">
          Coming Soon
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          The Gelathi app launches on{" "}
          <span className="font-semibold text-violet-400">June 1, 2026</span>.
          Check back then to download from the App Store or Google Play.
        </p>

        <button
          onClick={onCloseAction}
          className="mt-6 w-full rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500 active:scale-[0.98]"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
