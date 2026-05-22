const features = [
  {
    title: "Talk to someone who understands",
    description:
      "Start a secure audio call with a verified expert or trained listener. Every conversation stays confidential and stays focused on you. No judgement, no awkwardness, no noise — just a clean, one-to-one talk with someone who's ready to hear you out.",
    icon: (
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
          d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
        />
      </svg>
    ),
  },
  {
    title: "Chat between calls",
    description:
      "Keep the conversation going. Send a quick message to your listener when a full call feels like too much, and pick it back up whenever you're ready. Private, smooth, and yours.",
    icon: (
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
          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
        />
      </svg>
    ),
  },
  {
    title: "Discover the marketplace",
    description:
      "Browse curated picks from our community marketplace — handcrafted finds, thoughtful essentials, and small pieces that make the everyday a little better. Delivered to your door.",
    icon: (
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
          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
    ),
  },
];

export function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f1f9] text-zinc-900 dark:bg-[#0d0a14] dark:text-zinc-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(136, 57, 242, 0.18), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            What Gelathi does
          </p>
          <h2 className="font-sans text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            Three ways to feel closer.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-zinc-200/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-white/5 sm:p-8"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400">
                {feature.icon}
              </div>
              <h3 className="font-sans text-lg font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
