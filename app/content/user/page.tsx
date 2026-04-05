import { SmartAppRedirect } from "@/components/deeplink/SmartAppRedirect";

export default async function SharedUserPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  const params: Record<string, string> = { type: "user" };
  if (id) params.id = id;
  const payload = new URLSearchParams(params).toString();

  return <SmartAppRedirect payload={payload} shareKind="user" />;
}
