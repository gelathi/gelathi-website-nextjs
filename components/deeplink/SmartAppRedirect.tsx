"use client";

import { useEffect, useSyncExternalStore } from "react";
import { AppOpenLanding } from "@/components/deeplink/AppOpenLanding";
import type { ShareKind } from "@/components/deeplink/types";
import {
  getIosAppStoreUrl,
  PLAY_STORE_DETAILS_URL,
} from "@/lib/deeplink/constants";
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
      aria-label="Redirecting to app store"
    />
  );
}

function IosStoreRedirect({
  payload,
  shareKind,
}: {
  payload: string;
  shareKind: ShareKind;
}) {
  useEffect(() => {
    void (async () => {
      try {
        await navigator.clipboard.writeText(payload);
        logger.info("deeplink_payload_copied", { shareKind });
      } catch (err) {
        logger.warn("clipboard_write_failed", {
          shareKind,
          message: err instanceof Error ? err.message : String(err),
        });
      }
      const target = getIosAppStoreUrl();
      logger.info("deeplink_redirect_ios", { shareKind, target });
      window.location.href = target;
    })();
  }, [payload, shareKind]);

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
    const target = `${PLAY_STORE_DETAILS_URL}&referrer=${encodeURIComponent(payload)}`;
    logger.info("deeplink_redirect_android", { shareKind });
    window.location.href = target;
  }, [payload, shareKind]);

  return <RedirectShell />;
}

/**
 * Deferred deep link entry: on iOS/Android we only redirect to the store (with context).
 * Desktop shows a lightweight “open in app” page — no in-browser content for the shared entity.
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
    return <IosStoreRedirect payload={payload} shareKind={shareKind} />;
  }

  if (device === "android") {
    return <AndroidStoreRedirect payload={payload} shareKind={shareKind} />;
  }

  return <AppOpenLanding kind={shareKind} />;
}
