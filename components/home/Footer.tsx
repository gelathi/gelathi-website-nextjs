"use client";

import {
  useComingSoon,
  ComingSoonModal,
} from "@/components/home/ComingSoonModal";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { open, show, hide } = useComingSoon();

  return (
    <>
      <footer className="relative overflow-hidden bg-[#0d0a14] text-zinc-400">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 30% at 50% 100%, rgba(136, 57, 242, 0.08), transparent 55%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 sm:px-8 sm:py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <p className="font-sans text-lg font-semibold tracking-tight text-zinc-200">
                Gelathi
              </p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed">
                Listen, share, and connect with the people who matter. Your
                trusted space for meaningful conversations and curated
                discoveries.
              </p>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Support
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://gelathi.zohodesk.in/portal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-violet-400"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@gelathi.in"
                    className="transition hover:text-violet-400"
                  >
                    support@gelathi.in
                  </a>
                </li>
                <li>
                  <a
                    href="/support"
                    className="transition hover:text-violet-400"
                  >
                    Grievance Redressal
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Legal
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://gelathi.in/terms-and-conditions.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-violet-400"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy.html"
                    className="transition hover:text-violet-400"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/cookie-policy.html"
                    className="transition hover:text-violet-400"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/community-guidelines.html"
                    className="transition hover:text-violet-400"
                  >
                    Community Guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="/return-refund-policy.html"
                    className="transition hover:text-violet-400"
                  >
                    Return &amp; Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Company
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/content/marketplace/item"
                    className="transition hover:text-violet-400"
                  >
                    Marketplace
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={show}
                    className="transition hover:text-violet-400"
                  >
                    App Store
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={show}
                    className="transition hover:text-violet-400"
                  >
                    Google Play
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 border-t border-zinc-800 pt-6 text-center text-xs text-zinc-500 sm:flex sm:items-center sm:justify-between sm:text-left">
            <p>&copy; {currentYear}, Mouni Mart. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">
              By installing, you agree to our{" "}
              <a
                href="https://gelathi.in/terms-and-conditions.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition hover:text-violet-400"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                href="/privacy-policy.html"
                className="underline underline-offset-2 transition hover:text-violet-400"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </footer>

      <ComingSoonModal open={open} onCloseAction={hide} />
    </>
  );
}
