export function CommunitySection() {
  return (
    <section className="relative overflow-hidden bg-[#0d0a14] text-zinc-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 100%, rgba(136, 57, 242, 0.12), transparent 55%), radial-gradient(ellipse 50% 30% at 80% 0%, rgba(198, 129, 93, 0.1), transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Moderated by Real Humans */}
          <div>
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-900/40 text-violet-400">
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
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
            </div>
            <h2 className="font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
              Moderated by real humans.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              A 24/7 team reviews every report and keeps the community kind. One
              tap to report. Real action, not just form letters.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Typical response time: 2–5 business days. Urgent safety concerns
              are prioritised.
            </p>
          </div>

          {/* A Mature Community */}
          <div>
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-900/40 text-violet-400">
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
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            </div>
            <h2 className="font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
              A mature community.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              Gelathi is designed exclusively for users 18 and older. We enforce
              strict community guidelines to ensure a safe, respectful, and
              appropriate environment for all members. Violations of our terms
              of service are strictly prohibited and actively moderated.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              Gelathi is not a replacement for clinical care. If you are in
              crisis or need urgent mental health support, please contact a
              licensed professional or local emergency services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
