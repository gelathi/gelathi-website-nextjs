import { SmartAppRedirect } from "@/components/deeplink/SmartAppRedirect";

export default async function SharedUserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const payload = new URLSearchParams({ type: "user", id }).toString();

  return <SmartAppRedirect payload={payload} shareKind="user" />;
}
