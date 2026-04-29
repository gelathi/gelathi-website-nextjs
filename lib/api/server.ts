/**
 * Server-only Gelathi API client.
 * Used by share/landing pages to fetch post + product data for SEO metadata.
 *
 * Override the upstream base via `GELATHI_API_BASE` (server env) for previews
 * or staging. No auth header is sent — the upstream endpoints are expected to
 * permit anonymous reads for shareable resources.
 */
import "server-only";
import { logger } from "@/lib/logger";

const DEFAULT_API_BASE = "https://gelathi-prod.neulett.com";

export function getApiBase(): string {
  return process.env.GELATHI_API_BASE?.trim() || DEFAULT_API_BASE;
}

export interface PostMediaDto {
  id: string;
  url: string;
  thumbnailUrl?: string | null;
  type: "IMAGE" | "VIDEO";
  order: number;
}

export interface PostAuthorDto {
  id: string;
  name: string;
  image?: string | null;
  profile?: { username?: string | null } | null;
  isVerifiedListener: boolean;
}

export interface PostDto {
  id: string;
  caption: string;
  status: "ACTIVE" | "HIDDEN" | "ARCHIVED";
  createdAt: string;
  updatedAt: string;
  media: PostMediaDto[];
  user: PostAuthorDto;
  _count?: { likes?: number; comments?: number } | null;
  shareCount?: number;
}

export interface ProductMediaDto {
  type: "image" | "video";
  url: string;
  thumbnail?: string | null;
}

export interface ProductDto {
  id: string;
  title: string;
  description: string;
  sku?: string;
  brandName?: string;
  originalPrice: number;
  discountedPrice: number;
  media: ProductMediaDto[];
  isActive: boolean;
  stockQuantity: number;
  giftable?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProductAnalyticsDto {
  averageRating?: number | null;
  reviewCount: number;
}

export interface ProductResponseDto {
  product: ProductDto;
  analytics?: ProductAnalyticsDto;
}

const REVALIDATE_SECONDS = 60;

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, {
      headers: { accept: "application/json" },
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (res.status === 404 || res.status === 401) {
      return null;
    }

    if (!res.ok) {
      logger.warn("api_fetch_non_ok", { url, status: res.status });
      return null;
    }

    return (await res.json()) as T;
  } catch (err) {
    logger.error("api_fetch_failed", {
      url,
      message: err instanceof Error ? err.message : String(err),
    });
    return null;
  }
}

export function fetchPost(postId: string): Promise<PostDto | null> {
  const base = getApiBase().replace(/\/$/, "");
  const url = `${base}/post/${encodeURIComponent(postId)}?includeLikeCount=true&includeCommentCount=true`;
  return fetchJson<PostDto>(url);
}

export function fetchProduct(
  productId: string,
): Promise<ProductResponseDto | null> {
  const base = getApiBase().replace(/\/$/, "");
  const url = `${base}/shop/products/${encodeURIComponent(productId)}`;
  return fetchJson<ProductResponseDto>(url);
}
