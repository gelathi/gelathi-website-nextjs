import { PLAY_STORE_DETAILS_URL } from "@/lib/deeplink/constants";

const playIcon = (
  <svg
    aria-hidden
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
  </svg>
);

const variantClasses = {
  hero: "inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-violet-700 hover:bg-violet-950/40 hover:text-white",
  cta: "inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:border-violet-400 hover:bg-violet-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-violet-600 dark:hover:bg-violet-950/40",
  footer:
    "transition hover:text-violet-400",
  landing:
    "inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white/80 px-5 py-3 text-sm font-medium text-zinc-900 backdrop-blur-sm transition hover:bg-white dark:border-zinc-600 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-900",
} as const;

export function GooglePlayButton({
  variant = "hero",
}: {
  variant?: keyof typeof variantClasses;
}) {
  return (
    <a
      href={PLAY_STORE_DETAILS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={variantClasses[variant]}
    >
      {variant !== "footer" && playIcon}
      Google Play
    </a>
  );
}
