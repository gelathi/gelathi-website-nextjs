import { DunsSeal } from "@/components/home/DunsSeal";
import { PLAY_STORE_DETAILS_URL } from "@/lib/deeplink/constants";
import { LEGAL_ENTITY } from "@/lib/legal/entity";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0d0a14] text-zinc-400">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 30% at 50% 100%, rgba(136, 57, 242, 0.08), transparent 55%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-12">
        <div className="grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand + legal entity */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-sans text-lg font-semibold tracking-tight text-zinc-200">
              {LEGAL_ENTITY.brand}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed">
              Listen, share, and connect with the people who matter. Your
              trusted space for meaningful conversations and curated
              discoveries.
            </p>

            <div className="mt-5 space-y-1 text-sm leading-relaxed">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Legal entity
              </p>
              <p className="font-medium text-zinc-300">{LEGAL_ENTITY.name}</p>
              <p>{LEGAL_ENTITY.address}</p>
              <p>
                <a
                  href={`mailto:${LEGAL_ENTITY.email}`}
                  className="transition hover:text-violet-400"
                >
                  {LEGAL_ENTITY.email}
                </a>
                {" · "}
                <a
                  href={LEGAL_ENTITY.phoneHref}
                  className="transition hover:text-violet-400"
                >
                  {LEGAL_ENTITY.phone}
                </a>
              </p>
            </div>

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
                  href="/terms-of-use.html"
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
                <a
                  href={PLAY_STORE_DETAILS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-violet-400"
                >
                  Google Play
                </a>
              </li>
            </ul>
            <DunsSeal className="mt-5" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-3 border-t border-zinc-800 pt-6 text-center text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            &copy; {currentYear}, {LEGAL_ENTITY.name}. All rights reserved.
          </p>
          <p>
            By installing, you agree to our{" "}
            <a
              href="/terms-of-use.html"
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
  );
}
