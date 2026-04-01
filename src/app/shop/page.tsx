import { ShopPage } from "@/components/shop/shop-page";

const validCollections = new Set([
  "all",
  "best-sellers",
  "everyday",
  "light-layers",
  "cold-weather",
]);

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ collection?: string }>;
}) {
  const params = await searchParams;
  const initialFilter =
    params.collection && validCollections.has(params.collection)
      ? params.collection
      : "all";

  return <ShopPage initialFilter={initialFilter as "all" | "best-sellers" | "everyday" | "light-layers" | "cold-weather"} />;
}
