import type { Metadata } from "next";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  TWITTER_HANDLE,
} from "@/lib/seo/site";
import type {
  PostDto,
  PostMediaDto,
  ProductDto,
  ProductResponseDto,
} from "@/lib/api/server";

function clean(s: string | undefined | null): string {
  return (s ?? "").trim().replace(/\s+/g, " ");
}

function truncate(s: string | undefined | null, max: number): string {
  const c = clean(s);
  if (!c) return "";
  if (c.length <= max) return c;
  return c.slice(0, max - 1).trimEnd() + "…";
}

function formatINR(amount: number): string {
  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `₹${amount}`;
  }
}

function pickPostImage(media: PostMediaDto[]): string | null {
  const sorted = [...media].sort((a, b) => a.order - b.order);
  const firstImage = sorted.find((m) => m.type === "IMAGE");
  if (firstImage) return firstImage.url;
  const firstVideoThumb = sorted.find(
    (m) => m.type === "VIDEO" && typeof m.thumbnailUrl === "string",
  );
  return (firstVideoThumb?.thumbnailUrl as string | null) ?? null;
}

function pickProductImage(product: ProductDto): string | null {
  const firstImage = product.media.find((m) => m.type === "image");
  if (firstImage) return firstImage.url;
  const firstVideoThumb = product.media.find(
    (m) => m.type === "video" && m.thumbnail,
  );
  return firstVideoThumb?.thumbnail ?? null;
}

function authorHandle(post: PostDto): string {
  const username = post.user.profile?.username;
  if (username) return `@${username}`;
  return post.user.name || "a Gelathi member";
}

function authorTwitterHandle(post: PostDto): string {
  const username = post.user.profile?.username;
  return username ? `@${username}` : TWITTER_HANDLE;
}

export interface ShareUrlOpts {
  path: "post" | "product";
  id: string;
}

export function shareUrl({ path, id }: ShareUrlOpts): string {
  return `${SITE_URL}/content/${path}?id=${encodeURIComponent(id)}`;
}

/**
 * Fallback metadata used when the share id is missing, the upstream API
 * returns 404, or the resource is otherwise unavailable. Keeps unfurlers
 * from cleaning a half-broken card and prevents indexing of empty pages.
 */
export function defaultShareMetadata(canonical?: string): Metadata {
  return {
    title: { absolute: SITE_NAME },
    description: SITE_DESCRIPTION,
    metadataBase: new URL(SITE_URL),
    alternates: canonical ? { canonical } : undefined,
    robots: { index: false, follow: true },
    openGraph: {
      siteName: SITE_NAME,
      type: "website",
      url: canonical ?? SITE_URL,
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
    },
    twitter: {
      card: "summary",
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
    },
  };
}

export function buildPostMetadata(post: PostDto, id: string): Metadata {
  const handle = authorHandle(post);
  const caption = clean(post.caption);
  const titleCore = caption ? truncate(caption, 70) : `Post by ${handle}`;
  const title = caption
    ? `${handle}: ${truncate(caption, 60)}`
    : `${handle} on ${SITE_NAME}`;
  const description = caption
    ? truncate(caption, 200)
    : `Tap to view this post on ${SITE_NAME}.`;
  const image = pickPostImage(post.media);
  const url = shareUrl({ path: "post", id });
  const cardType: "summary_large_image" | "summary" = image
    ? "summary_large_image"
    : "summary";

  return {
    title: titleCore,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      siteName: SITE_NAME,
      type: "article",
      url,
      title,
      description,
      images: image
        ? [{ url: image, alt: caption ? truncate(caption, 120) : SITE_NAME }]
        : undefined,
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      authors: handle ? [handle] : undefined,
    },
    twitter: {
      card: cardType,
      site: TWITTER_HANDLE,
      creator: authorTwitterHandle(post),
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export function buildProductMetadata(
  payload: ProductResponseDto,
  id: string,
): Metadata {
  const product = payload.product;
  const cleanDesc = truncate(product.description, 180);
  const price = formatINR(product.discountedPrice);
  const hasDiscount =
    product.discountedPrice < product.originalPrice && product.originalPrice > 0;
  const priceLine = hasDiscount
    ? `${price} (was ${formatINR(product.originalPrice)})`
    : price;
  const description = cleanDesc
    ? `${priceLine} — ${cleanDesc}`
    : `${priceLine} on ${SITE_NAME}.`;

  const titleCore = product.title;
  const title = `${product.title} · ${SITE_NAME}`;
  const image = pickProductImage(product);
  const url = shareUrl({ path: "product", id });
  const cardType: "summary_large_image" | "summary" = image
    ? "summary_large_image"
    : "summary";

  return {
    title: titleCore,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      siteName: SITE_NAME,
      type: "website",
      url,
      title,
      description,
      images: image ? [{ url: image, alt: product.title }] : undefined,
    },
    twitter: {
      card: cardType,
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export function buildPostJsonLd(post: PostDto, id: string): Record<string, unknown> {
  const url = shareUrl({ path: "post", id });
  const image = pickPostImage(post.media);
  const username = post.user.profile?.username;
  const authorUrl = username
    ? `${SITE_URL}/content/user?id=${encodeURIComponent(post.user.id)}`
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "SocialMediaPosting",
    "@id": url,
    url,
    headline: truncate(post.caption, 110) || `${SITE_NAME} post`,
    articleBody: clean(post.caption) || undefined,
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    image: image ? [image] : undefined,
    author: {
      "@type": "Person",
      name: post.user.name,
      ...(username ? { alternateName: `@${username}` } : {}),
      ...(authorUrl ? { url: authorUrl } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(post._count?.likes !== undefined
      ? {
          interactionStatistic: [
            {
              "@type": "InteractionCounter",
              interactionType: { "@type": "LikeAction" },
              userInteractionCount: post._count.likes,
            },
            ...(post._count.comments !== undefined
              ? [
                  {
                    "@type": "InteractionCounter",
                    interactionType: { "@type": "CommentAction" },
                    userInteractionCount: post._count.comments,
                  },
                ]
              : []),
          ],
        }
      : {}),
  };
}

export function buildProductJsonLd(
  payload: ProductResponseDto,
  id: string,
): Record<string, unknown> {
  const product = payload.product;
  const url = shareUrl({ path: "product", id });
  const image = pickProductImage(product);
  const inStock = product.stockQuantity > 0 && product.isActive;
  const analytics = payload.analytics;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": url,
    name: product.title,
    description: clean(product.description),
    image: image ? [image] : undefined,
    sku: product.sku || undefined,
    brand: product.brandName
      ? { "@type": "Brand", name: product.brandName }
      : undefined,
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "INR",
      price: product.discountedPrice,
      availability: inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    },
    ...(analytics &&
    typeof analytics.averageRating === "number" &&
    analytics.reviewCount > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: analytics.averageRating,
            reviewCount: analytics.reviewCount,
          },
        }
      : {}),
  };
}

export function jsonLdScript(data: Record<string, unknown>): string {
  // Strip undefined deeply so the rendered JSON-LD stays compact.
  const compact = JSON.parse(
    JSON.stringify(data, (_k, v) => (v === undefined ? undefined : v)),
  );
  return JSON.stringify(compact).replace(/</g, "\\u003c");
}
