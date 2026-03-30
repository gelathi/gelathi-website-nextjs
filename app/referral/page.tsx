import { SmartAppRedirect } from "@/components/deeplink/SmartAppRedirect";

/**
 * `/referral` — optional `?ref=` passes through to the app via clipboard / Play referrer.
 */
export default async function ReferralPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;
  const payload =
    ref !== undefined && ref !== ""
      ? `ref=${encodeURIComponent(ref)}`
      : "type=referral";

  return <SmartAppRedirect payload={payload} shareKind="referral" />;
}
