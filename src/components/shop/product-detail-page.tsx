"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useCart } from "@/components/cart/use-cart";
import type { HomeProduct, ProductGalleryImage, ProductSize } from "@/components/home/home-products";
import { getRelatedProducts } from "@/components/home/home-products";
import { SiteHeader } from "@/components/layout/site-header";
import { PillButton } from "@/components/ui/pill-button";
import { Reveal } from "@/components/home/reveal";
import { SizeSelector } from "./size-selector";

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[rgba(36,29,26,0.52)]">
      {children}
    </span>
  );
}

function DetailBlock({
  title,
  copy,
}: {
  title: string;
  copy: string;
}) {
  return (
    <div className="rounded-[1.6rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.48)] p-6">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[rgba(36,29,26,0.42)]">
        {title}
      </p>
      <p className="mt-4 text-sm leading-7 text-[rgba(36,29,26,0.68)]">{copy}</p>
    </div>
  );
}

export function ProductDetailPage({ product }: { product: HomeProduct }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = React.useState<ProductSize | null>(product.defaultSize);
  const [selectedImage, setSelectedImage] = React.useState<ProductGalleryImage>(product.gallery[0]);
  const [sizeError, setSizeError] = React.useState<string | null>(null);
  const relatedProducts = getRelatedProducts(product);

  const handleAddToBag = () => {
    if (!selectedSize) {
      setSizeError("Choose a size to add this layer to your bag.");
      return;
    }

    setSizeError(null);
    addItem(product, { size: selectedSize });
  };

  return (
    <main className="editorial-shell grain min-h-screen">
      <section className="px-5 pb-10 pt-5 sm:px-8 sm:pb-12 sm:pt-8 lg:px-10 lg:pb-14 lg:pt-10">
        <div className="mx-auto max-w-[84rem]">
          <SiteHeader />
        </div>

        <div className="mx-auto mt-8 max-w-7xl sm:mt-10">
          <Reveal className="grid gap-8 rounded-[2.2rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.5)] p-6 shadow-[var(--shadow-soft)] md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:p-10">
            <div className="space-y-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.9rem] bg-[var(--color-beige)]">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: selectedImage.position ?? product.imagePosition ?? "center center" }}
                />
              </div>

              <div className="flex flex-wrap gap-3">
                {product.gallery.map((image) => {
                  const isActive = selectedImage.image.src === image.image.src;

                  return (
                    <button
                      key={image.alt}
                      type="button"
                      onClick={() => setSelectedImage(image)}
                      aria-pressed={isActive}
                      className={`relative h-20 w-16 overflow-hidden rounded-[1rem] border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.18)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-cream)] ${
                        isActive
                          ? "border-[rgba(36,29,26,0.18)]"
                          : "border-[rgba(36,29,26,0.08)]"
                      }`}
                    >
                      <Image
                        src={image.image}
                        alt={image.alt}
                        fill
                        sizes="64px"
                        className="object-cover"
                        style={{ objectPosition: image.position ?? "center center" }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col">
              <SectionEyebrow>{product.collectionLabel}</SectionEyebrow>
              <h1 className="mt-4 max-w-[10ch] font-serif text-[3rem] leading-[0.94] sm:text-[4rem]">
                {product.name}
              </h1>
              <p className="mt-4 max-w-[30rem] text-base leading-8 text-[rgba(36,29,26,0.72)]">
                {product.valueLine}
              </p>

              <div className="mt-8 flex items-center justify-between gap-4 border-y border-[rgba(36,29,26,0.08)] py-5">
                <p className="font-serif text-[2.4rem] leading-none">{product.priceLabel}</p>
                <p className="text-sm leading-6 text-[rgba(36,29,26,0.58)]">{product.note}</p>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-medium text-[var(--color-charcoal)]">Select size</p>
                  <p className="text-sm text-[rgba(36,29,26,0.52)]">{product.sizeHint}</p>
                </div>
                <div className="mt-4">
                  <SizeSelector
                    sizes={product.availableSizes}
                    selectedSize={selectedSize}
                    onSelect={(size) => {
                      setSelectedSize(size);
                      setSizeError(null);
                    }}
                  />
                </div>
                {sizeError ? (
                  <p className="mt-3 text-sm text-[rgba(118,73,60,0.9)]">{sizeError}</p>
                ) : null}
              </div>

              <ul className="mt-8 space-y-3">
                {product.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-sm leading-7 text-[rgba(36,29,26,0.72)]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.82rem] h-1.5 w-1.5 rounded-full bg-[var(--color-brown)]"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <PillButton onClick={handleAddToBag}>
                  Add to Bag <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </PillButton>
                <p className="text-sm leading-7 text-[rgba(36,29,26,0.58)]">
                  Selected size: <span className="font-medium text-[var(--color-charcoal)]">{selectedSize ?? "Choose"}</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="grid gap-4 lg:grid-cols-4">
          <Reveal className="lg:col-span-1">
            <SectionEyebrow>Fit & Feel</SectionEyebrow>
          </Reveal>
          <Reveal className="lg:col-span-3 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <DetailBlock title="Fit & Feel" copy={product.fitFeel} />
            <DetailBlock title="Materials & Care" copy={product.materialsCare} />
            <DetailBlock title="When to Wear" copy={product.whenToWear} />
            <DetailBlock title="Size Guidance" copy={product.sizeGuidance} />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pb-28">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[30rem]">
            <SectionEyebrow>Related Products</SectionEyebrow>
            <h2 className="mt-4 font-serif text-[2.4rem] leading-[0.98] sm:text-[3rem]">
              More knitwear in the same quiet rhythm.
            </h2>
          </div>
          <p className="max-w-[24rem] text-sm leading-7 text-[rgba(36,29,26,0.62)]">
            A small edit of neighboring layers, chosen for similar comfort, shape, and daily use.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {relatedProducts.map((relatedProduct, index) => (
            <Reveal key={relatedProduct.slug} delay={index * 0.04}>
              <article className="group overflow-hidden rounded-[2rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.48)] shadow-[0_12px_40px_rgba(70,52,39,0.05)]">
                <Link
                  href={`/shop/${relatedProduct.slug}`}
                  className="relative block aspect-[4/5] overflow-hidden bg-[var(--color-beige)]"
                >
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 28vw, (min-width: 768px) 44vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{ objectPosition: relatedProduct.imagePosition ?? "center center" }}
                  />
                </Link>

                <div className="flex items-center justify-between gap-4 px-5 pb-5 pt-6 sm:px-6 sm:pb-6">
                  <div>
                    <Link
                      href={`/shop/${relatedProduct.slug}`}
                      className="font-serif text-[1.8rem] leading-[1] transition-colors hover:text-[rgba(36,29,26,0.82)]"
                    >
                      {relatedProduct.name}
                    </Link>
                    <p className="mt-2 text-sm text-[rgba(36,29,26,0.58)]">{relatedProduct.note}</p>
                  </div>
                  <span className="shrink-0 text-sm text-[rgba(36,29,26,0.72)]">{relatedProduct.priceLabel}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
