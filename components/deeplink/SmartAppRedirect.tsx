"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { AppOpenLanding } from "@/components/deeplink/AppOpenLanding";
import type { ShareKind } from "@/components/deeplink/types";
import { PLAY_STORE_DETAILS_URL } from "@/lib/deeplink/constants";
import { getDeviceClass } from "@/lib/deeplink/device";
import { logger } from "@/lib/logger";

export type { ShareKind } from "@/components/deeplink/types";

/** No-op subscribe: we only need a client vs server snapshot gate for hydration. */
function subscribeToNothing(): () => void {
  return () => {};
}

interface SmartAppRedirectProps {
  /** URI-encoded elsewhere only when attaching to Play `referrer`; clipboard uses raw string. */
  payload: string;
  shareKind: ShareKind;
}

function RedirectShell() {
  return (
    <div
      className="min-h-screen bg-[#faf8f5] dark:bg-zinc-950"
      aria-busy="true"
      aria-label="Redirecting to Google Play"
    />
  );
}

function IosAppRedirect({
  payload,
  shareKind,
}: {
  payload: string;
  shareKind: ShareKind;
}) {
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    // Copy payload to clipboard so the app can read it after a fresh install (deferred deep link).
    navigator.clipboard.writeText(payload).then(
      () => logger.info("deeplink_payload_copied", { shareKind }),
      (err) =>
        logger.warn("clipboard_write_failed", {
          shareKind,
          message: err instanceof Error ? err.message : String(err),
        }),
    );

    // Attempt to open the installed app via custom URL scheme.
    logger.info("deeplink_attempt_ios_scheme", { shareKind });
    window.location.href = `gelathi://?${payload}`;

    // If the app opened, the page becomes hidden (backgrounded by iOS).
    // Otherwise show the landing page with a Google Play download link.
    const timer = setTimeout(() => {
      if (document.hidden) return;
      logger.info("deeplink_show_landing_ios", { shareKind });
      setShowLanding(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [payload, shareKind]);

  if (showLanding) {
    return <AppOpenLanding kind={shareKind} />;
  }

  return <RedirectShell />;
}

function AndroidStoreRedirect({
  payload,
  shareKind,
}: {
  payload: string;
  shareKind: ShareKind;
}) {
  useEffect(() => {
    // Attempt to open the installed app via custom URL scheme.
    logger.info("deeplink_attempt_android_scheme", { shareKind });
    window.location.href = `gelathi://?${payload}`;

    // If the app isn't installed the scheme silently fails; fall back to the Play Store.
    // The referrer param carries the payload for deferred deep linking after a fresh install.
    const timer = setTimeout(() => {
      if (document.hidden) return;
      const target = `${PLAY_STORE_DETAILS_URL}&referrer=${encodeURIComponent(payload)}`;
      logger.info("deeplink_redirect_android", { shareKind });
      window.location.href = target;
    }, 2000);

    return () => clearTimeout(timer);
  }, [payload, shareKind]);

  return <RedirectShell />;
}

/**
 * Deferred deep link entry: on Android we redirect to Google Play (with context).
 * iOS and desktop show a lightweight “open in app” page with a Google Play link.
 */
export function SmartAppRedirect({ payload, shareKind }: SmartAppRedirectProps) {
  const isClient = useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );

  if (!isClient) {
    return <RedirectShell />;
  }

  const device = getDeviceClass();

  if (device === "ios") {
    return <IosAppRedirect payload={payload} shareKind={shareKind} />;
  }

  if (device === "android") {
    return <AndroidStoreRedirect payload={payload} shareKind={shareKind} />;
  }

  return <AppOpenLanding kind={shareKind} />;
}
