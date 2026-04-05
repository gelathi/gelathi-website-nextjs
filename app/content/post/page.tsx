import { SmartAppRedirect } from "@/components/deeplink/SmartAppRedirect";

export default async function SharedPostPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  const params: Record<string, string> = { type: "post" };
  if (id) params.id = id;
  const payload = new URLSearchParams(params).toString();

  return <SmartAppRedirect payload={payload} shareKind="post" />;
}
