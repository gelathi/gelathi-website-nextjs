import { SmartAppRedirect } from "@/components/deeplink/SmartAppRedirect";

export default async function SharedPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const payload = new URLSearchParams({ type: "post", id }).toString();

  return <SmartAppRedirect payload={payload} shareKind="post" />;
}
