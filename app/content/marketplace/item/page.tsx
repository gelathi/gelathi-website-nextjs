import { SmartAppRedirect } from "@/components/deeplink/SmartAppRedirect";

export default async function SharedMarketplaceItemPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  const params: Record<string, string> = { type: "marketplace_item" };
  if (id) params.id = id;
  const payload = new URLSearchParams(params).toString();

  return <SmartAppRedirect payload={payload} shareKind="marketplace_item" />;
}
