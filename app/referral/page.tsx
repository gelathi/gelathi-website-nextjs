import { SmartAppRedirect } from "@/components/deeplink/SmartAppRedirect";

export default async function ReferralPage({
  searchParams,
}: {
  searchParams: Promise<{ invite_code?: string }>;
}) {
  const { invite_code } = await searchParams;
  const params: Record<string, string> = { type: "referral" };
  if (invite_code) params.invite_code = invite_code;
  const payload = new URLSearchParams(params).toString();

  return <SmartAppRedirect payload={payload} shareKind="referral" />;
}
