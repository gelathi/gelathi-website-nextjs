export function TrustPrivacySection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f1f9] text-zinc-900 dark:bg-[#0d0a14] dark:text-zinc-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25 dark:opacity-15"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 100%, rgba(136, 57, 242, 0.15), transparent 55%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Verified Section */}
          <div>
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400">
              <svg
                aria-hidden
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-5.033-2.215-5.033-2.215z"
                />
              </svg>
            </div>
            <h2 className="font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
              Verified. Always.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Every expert and listener on Gelathi passes identity verification
              and community guidelines training before joining. Our diverse
              community brings empathy, experience, and perspective — so
              whatever you&rsquo;re navigating, there&rsquo;s someone
              who&rsquo;s walked near it.
            </p>

            {/* Content Safety highlight */}
            <div className="mt-6 rounded-xl border border-zinc-200/60 bg-white/70 p-5 backdrop-blur-sm dark:border-zinc-800 dark:bg-white/5">
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                Content Safety
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Our automated, on-device safety systems proactively filter
                inappropriate media before it is sent. Nothing is sent to our
                servers for this check — your privacy stays intact.
              </p>
            </div>
          </div>

          {/* Privacy Section */}
          <div>
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400">
              <svg
                aria-hidden
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <h2 className="font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
              What&rsquo;s visible, what&rsquo;s not.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Other members see your name and birthday. Everything else — phone,
              email, location, and call history — stays yours. That&rsquo;s the
              deal.
            </p>

            <ul className="mt-5 space-y-3">
              {[
                "Confidential, secure messaging.",
                "Calls are strictly private and never stored on our servers.",
                "Block, mute, and report tools available on every screen.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <svg
                    aria-hidden
                    className="mt-0.5 h-4 w-4 shrink-0 text-violet-600 dark:text-violet-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-zinc-600 dark:text-zinc-400">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
