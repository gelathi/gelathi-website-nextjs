import { SmartAppRedirect } from "@/components/deeplink/SmartAppRedirect";

/**
 * `/referral/[code]` — path-based referral code for native handoff.
 */
export default async function ReferralCodePage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const payload = new URLSearchParams({
    type: "referral",
    code,
  }).toString();

  return <SmartAppRedirect payload={payload} shareKind="referral_code" />;
}
