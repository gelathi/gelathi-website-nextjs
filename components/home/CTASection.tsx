export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f1f9] text-zinc-900 dark:bg-[#0d0a14] dark:text-zinc-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(136, 57, 242, 0.18), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
          Join the community
        </p>
        <h2 className="font-sans text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
          Want to listen on Gelathi?
        </h2>
        <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
          Verified expert and listener spots open on a rolling basis. If you
          have the patience to hear people out — and want to be part of a
          community that takes that seriously — sign up, complete your profile,
          and apply from inside the app. Our team reviews every application.
        </p>

        {/* Coming Soon badge */}
        <p className="mt-10 inline-block rounded-full border border-violet-300 bg-violet-100/60 px-5 py-2 text-sm font-medium text-violet-700 dark:border-violet-800/50 dark:bg-violet-950/40 dark:text-violet-300">
          App launches June 1, 2026
        </p>

        {/* Disabled store buttons */}
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <span
            aria-disabled="true"
            className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-zinc-200/70 px-6 py-3 text-sm font-semibold text-zinc-400 select-none dark:bg-zinc-700/50 dark:text-zinc-500"
          >
            <svg
              aria-hidden
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
            </svg>
            App Store
          </span>
          <span
            aria-disabled="true"
            className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-zinc-200 bg-white/40 px-6 py-3 text-sm font-semibold text-zinc-400 select-none dark:border-zinc-800 dark:bg-white/[0.03] dark:text-zinc-600"
          >
            <svg
              aria-hidden
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
            </svg>
            Google Play
          </span>
        </div>

        {/* Disclaimer */}
        <p className="mt-12 text-xs leading-relaxed text-zinc-400 dark:text-zinc-500">
          Gelathi is not a replacement for clinical care. If you are in crisis
          or need urgent mental health support, please contact a licensed
          professional or local emergency services.
        </p>
      </div>
    </section>
  );
}
