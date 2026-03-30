import type { NextConfig } from "next";

/**
 * Serves Digital Asset Links + Universal Links metadata from `public/.well-known/*`.
 * Universal Link path patterns live in `apple-app-site-association` (referral + shared content).
 * Apex and www (`gelathi.in`, `www.gelathi.in`) must both resolve to this deployment.
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
