import type { ShareKind } from "@/components/deeplink/types";
import {
  getIosAppStoreUrl,
  PLAY_STORE_DETAILS_URL,
} from "@/lib/deeplink/constants";

function copyForKind(kind: ShareKind): { headline: string; body: string } {
  switch (kind) {
    case "referral":
      return {
        headline: "You’re invited to Gelathi",
        body: "This link brings referral details into the app. Download Gelathi on your phone to continue.",
      };
    case "post":
      return {
        headline: "Check out this post on Gelathi",
        body: "Posts live in the Gelathi app. Install on your phone to view the full story.",
      };
    case "user":
      return {
        headline: "View this profile on Gelathi",
        body: "Profiles are available in the Gelathi app. Download on mobile to connect.",
      };
    case "marketplace_item":
      return {
        headline: "Marketplace item on Gelathi",
        body: "Browse and buy in the Gelathi app. Get the app on your phone to see this listing.",
      };
  }
}

export function AppOpenLanding({ kind }: { kind: ShareKind }) {
  const { headline, body } = copyForKind(kind);
  const appStoreUrl = getIosAppStoreUrl();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#faf8f5] text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Soft brand backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-25"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(20, 184, 166, 0.35), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(244, 114, 182, 0.2), transparent 50%)",
        }}
      />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 py-16 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
          Gelathi
        </p>
        <h1 className="font-sans text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {headline}
        </h1>
        <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {body}
        </p>

        <div className="mt-10 flex w-full max-w-sm flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={appStoreUrl}
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            App Store
          </a>
          <a
            href={PLAY_STORE_DETAILS_URL}
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white/80 px-5 py-3 text-sm font-medium text-zinc-900 backdrop-blur-sm transition hover:bg-white dark:border-zinc-600 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            Google Play
          </a>
        </div>

        {/* Placeholder region for a future static QR asset or generated QR */}
        <div className="mt-12 w-full max-w-[200px]">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
            Scan to download
          </p>
          <div
            className="flex aspect-square w-full items-center justify-center rounded-2xl border-2 border-dashed border-zinc-300 bg-white/50 text-xs text-zinc-500 dark:border-zinc-600 dark:bg-zinc-900/40 dark:text-zinc-500"
            aria-hidden
          >
            QR
          </div>
        </div>
      </main>
    </div>
  );
}
