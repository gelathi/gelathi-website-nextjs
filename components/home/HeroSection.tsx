export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0d0a14] text-zinc-100">
      {/* Layered gradient backdrop — deep purple with warm undertones */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 20% 10%, rgba(136, 57, 242, 0.22), transparent 55%), radial-gradient(ellipse 70% 50% at 80% 90%, rgba(198, 129, 93, 0.15), transparent 50%), radial-gradient(ellipse 50% 40% at 50% 50%, rgba(89, 34, 178, 0.12), transparent 45%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          {/* Tagline */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-violet-400">
            Gelathi
          </p>

          {/* Promotional headline */}
          <h1 className="font-sans text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Pick up a call. Send a note.
            <br />
            Shop something you love.
          </h1>

          {/* Subhead */}
          <p className="mt-6 text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Gelathi is the one app where all three
            <br className="hidden sm:inline" /> just feel right.
          </p>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Your trusted space for meaningful conversations with verified
            experts and trained listeners. Whether you&rsquo;re working through
            relationship stress, career pressure, grief, loneliness, or simply
            looking for clarity in your day — Gelathi connects you with people
            who listen with empathy, patience, and care.
          </p>

          {/* Coming Soon badge */}
          <p className="mt-10 inline-block rounded-full border border-violet-800/50 bg-violet-950/40 px-5 py-2 text-sm font-medium text-violet-300 backdrop-blur-sm">
            App launches June 1, 2026
          </p>

          {/* Disabled store buttons */}
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <span
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-zinc-700/50 px-6 py-3 text-sm font-semibold text-zinc-500 select-none"
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
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-zinc-800 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-zinc-600 select-none"
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

          {/* App screenshots strip — subtle preview */}
          <div className="mt-16 hidden gap-4 sm:flex sm:justify-center">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-72 w-36 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl"
              >
                <img
                  src={`/images/0x0ss${i > 0 ? ` (${i})` : ""}.png`}
                  alt={`Gelathi app screenshot ${i + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
