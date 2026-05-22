const marketplaceItems = [
  {
    title: "Handcrafted Gifts",
    description:
      "Thoughtful, one-of-a-kind pieces made with care — perfect for someone special or a little self-kindness.",
    icon: "🎁",
  },
  {
    title: "Signature Perfumes",
    description:
      "Curated fragrances that tell a story. Subtle, memorable, and crafted by independent perfumers.",
    icon: "✨",
  },
  {
    title: "Everyday Essentials",
    description:
      "Small things that make the everyday a little brighter. From desk companions to evening rituals.",
    icon: "🌿",
  },
  {
    title: "Wellness & Comfort",
    description:
      "Candles, teas, and gentle comforts that turn a room into a retreat and a moment into a reset.",
    icon: "🕯️",
  },
];

export function MarketplaceSection() {
  return (
    <section className="relative overflow-hidden bg-[#0d0a14] text-zinc-100">
      {/* Warm gradient with violet and terracotta */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 30% 20%, rgba(145, 81, 232, 0.18), transparent 55%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(198, 129, 93, 0.12), transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            Community Marketplace
          </p>
          <h2 className="font-sans text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            Shop something you love.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Beyond conversations, Gelathi is home to a curated marketplace of
            handcrafted finds, thoughtful essentials, and small pieces that make
            the everyday a little better. Delivered to your door.
          </p>
        </div>

        {/* Featured items grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {marketplaceItems.map((item) => (
            <div
              key={item.title}
              className="group flex gap-5 rounded-2xl border border-zinc-800 bg-white/5 p-6 backdrop-blur-sm transition hover:border-violet-800/50 hover:bg-white/[0.07] sm:p-8"
            >
              <div
                aria-hidden
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-900/40 text-2xl"
              >
                {item.icon}
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-violet-800/30 bg-violet-950/30 p-6 text-center backdrop-blur-sm sm:p-8">
          <p className="text-sm font-medium uppercase tracking-wider text-violet-400">
            Coming soon
          </p>
          <p className="mt-2 text-base leading-relaxed text-zinc-300">
            Our marketplace launches with gifting, fragrances, and everyday
            comforts. New makers and collections added every month. Stay tuned.
          </p>
        </div>
      </div>
    </section>
  );
}
