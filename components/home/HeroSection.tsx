import { DunsSeal } from "@/components/home/DunsSeal";
import { GooglePlayButton } from "@/components/home/GooglePlayButton";

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

          <div className="mt-10 flex flex-col items-center gap-6">
            <GooglePlayButton variant="hero" />
            <DunsSeal className="flex justify-center" />
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
