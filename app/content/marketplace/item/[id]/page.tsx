import { SmartAppRedirect } from "@/components/deeplink/SmartAppRedirect";

export default async function SharedMarketplaceItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const payload = new URLSearchParams({
    type: "marketplace_item",
    id,
  }).toString();

  return <SmartAppRedirect payload={payload} shareKind="marketplace_item" />;
}
