import type { Metadata } from "next";
import { GrievanceForm } from "@/app/support/GrievanceForm";

export const metadata: Metadata = {
  title: "Support & Grievances",
  description:
    "Submit a grievance to the Gelathi team. We review every submission and respond by email.",
  robots: { index: true, follow: true },
};

export default function SupportPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#faf8f5] text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-25"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(20, 184, 166, 0.35), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(244, 114, 182, 0.18), transparent 50%)",
        }}
      />

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-2xl flex-col px-5 py-16 sm:px-8 sm:py-24">
        <header className="mb-10 text-center sm:mb-12 sm:text-left">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-400">
            Support
          </p>
          <h1 className="font-sans text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            We&rsquo;re here to listen.
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Tell us what happened. Every grievance is reviewed by a real person
            on our team, and we&rsquo;ll reply to you by email. Your submission
            is confidential.
          </p>
        </header>

        <GrievanceForm />

        <footer className="mt-12 text-center text-xs text-zinc-500 dark:text-zinc-500 sm:text-left">
          <p>
            Typical response time: 2&ndash;5 business days. Urgent safety
            concerns are prioritised.
          </p>
        </footer>
      </main>
    </div>
  );
}
