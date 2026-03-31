import { notFound } from "next/navigation";
import { ProductDetailPage } from "@/components/shop/product-detail-page";
import { getProductBySlug } from "@/components/home/home-products";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}
