/** Android application id (Play store + intent filters). */
export const ANDROID_PACKAGE_ID = "com.neulett.gelathi";

/** Play Store listing; `referrer` is appended at runtime with the encoded payload. */
export const PLAY_STORE_DETAILS_URL = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE_ID}`;

/** iOS listing: numeric App Store id from App Store Connect (not Team ID). */
export function getIosAppStoreUrl(): string {
  const id = process.env.NEXT_PUBLIC_APPLE_APP_STORE_ID?.trim();
  if (id) {
    return `https://apps.apple.com/app/id${id}`;
  }
  // Fallback when env is missing so mobile users still reach the store.
  return "https://apps.apple.com/search?term=Gelathi";
}
