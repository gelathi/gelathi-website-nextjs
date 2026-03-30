import type { NextConfig } from "next";

/**
 * Serves Digital Asset Links + Universal Links metadata from `public/.well-known/*`.
 *   10-character Apple Developer Team ID (Membership page), before production.
 * - Apex and www (`gelathi.in`, `www.gelathi.in`) must both resolve to this deployment so
 *   the same files are reachable on both hosts.
 */
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [
          // Apple expects JSON; correct Content-Type helps CDN and validators.
          { key: "Content-Type", value: "application/json" },
        ],
      },
      {
        source: "/.well-known/assetlinks.json",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
};

export default nextConfig;
