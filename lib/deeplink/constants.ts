/** Android application id (Play store + intent filters). */
export const ANDROID_PACKAGE_ID = "com.neulett.gelathi";

/** Play Store listing; `referrer` is appended at runtime with the encoded payload. */
export const PLAY_STORE_DETAILS_URL = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE_ID}`;
