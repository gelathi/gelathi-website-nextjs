import { NextResponse } from "next/server";
import { logger } from "@/lib/logger";

export const runtime = "nodejs";

const DEFAULT_BASE = "https://gelathi-prod.neulett.com";

interface GrievancePayload {
  guestName: string;
  guestEmail: string;
  guestPhone?: string;
  message: string;
  description?: string;
}

function isString(v: unknown, max: number, min = 1): v is string {
  return typeof v === "string" && v.length >= min && v.length <= max;
}

function buildPayload(body: unknown): GrievancePayload | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  if (!isString(b.guestName, 100)) return null;
  if (!isString(b.guestEmail, 254)) return null;
  if (!isString(b.message, 200)) return null;
  if (b.guestPhone !== undefined && !isString(b.guestPhone, 20)) return null;
  if (b.description !== undefined && !isString(b.description, 5000, 0)) return null;

  const payload: GrievancePayload = {
    guestName: b.guestName.trim(),
    guestEmail: b.guestEmail.trim(),
    message: b.message.trim(),
  };
  if (typeof b.guestPhone === "string" && b.guestPhone.trim()) {
    payload.guestPhone = b.guestPhone.trim();
  }
  if (typeof b.description === "string" && b.description.trim()) {
    payload.description = b.description.trim();
  }
  return payload;
}

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
  }

  const payload = buildPayload(raw);
  if (!payload) {
    return NextResponse.json(
      { message: "Missing or invalid required fields" },
      { status: 400 },
    );
  }

  const base = process.env.GRIEVANCE_API_BASE?.trim() || DEFAULT_BASE;
  const upstreamUrl = `${base.replace(/\/$/, "")}/reporting/grievance`;

  try {
    const upstream = await fetch(upstreamUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const text = await upstream.text();
    logger.info("grievance_proxied", {
      status: upstream.status,
      ok: upstream.ok,
    });

    return new NextResponse(text || "{}", {
      status: upstream.status,
      headers: {
        "content-type":
          upstream.headers.get("content-type") ?? "application/json",
      },
    });
  } catch (err) {
    logger.error("grievance_proxy_failed", {
      message: err instanceof Error ? err.message : String(err),
    });
    return NextResponse.json(
      { message: "Service temporarily unavailable. Please try again shortly." },
      { status: 502 },
    );
  }
}
