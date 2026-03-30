/**
 * Best-effort device class from `navigator.userAgent` / touch hints.
 * Used only on the client after mount (no SSR user-agent here).
 */
export type DeviceClass = "ios" | "android" | "desktop";

export function getDeviceClass(): DeviceClass {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return "desktop";
  }

  const ua = navigator.userAgent;

  if (/Android/i.test(ua)) {
    return "android";
  }

  if (/iPhone|iPod/i.test(ua)) {
    return "ios";
  }

  // iPadOS 13+ often reports as Macintosh with touch
  if (/iPad/i.test(ua)) {
    return "ios";
  }
  if (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) {
    return "ios";
  }

  return "desktop";
}
