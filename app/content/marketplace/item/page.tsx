import type { Metadata } from "next";
import { SmartAppRedirect } from "@/components/deeplink/SmartAppRedirect";
import { fetchProduct } from "@/lib/api/server";
import {
  buildProductJsonLd,
  buildProductMetadata,
  defaultShareMetadata,
  jsonLdScript,
  shareUrl,
} from "@/lib/seo/metadata";

interface PageSearchParams {
  id?: string;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<PageSearchParams>;
}): Promise<Metadata> {
  const { id } = await searchParams;
  if (!id) return defaultShareMetadata();

  const canonical = shareUrl({ path: "marketplace/item", id });
  const payload = await fetchProduct(id);
  if (!payload || !payload.product?.isActive) {
    return defaultShareMetadata(canonical);
  }
  return buildProductMetadata(payload, id);
}

export default async function SharedMarketplaceItemPage({
  searchParams,
}: {
  searchParams: Promise<PageSearchParams>;
}) {
  const { id } = await searchParams;

  const params: Record<string, string> = { type: "marketplace_item" };
  if (id) params.id = id;
  const payload = new URLSearchParams(params).toString();

  const product = id ? await fetchProduct(id) : null;
  const jsonLd =
    product && product.product.isActive
      ? buildProductJsonLd(product, id!)
      : null;

  return (
    <>
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
        />
      ) : null}
      <SmartAppRedirect payload={payload} shareKind="marketplace_item" />
    </>
  );
}
