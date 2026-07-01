import { GooglePlayButton } from "@/components/home/GooglePlayButton";

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

        <div className="mt-10 flex justify-center">
          <GooglePlayButton variant="cta" />
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
