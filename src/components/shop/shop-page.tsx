"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { bestSellerProducts } from "@/components/home/home-products";
import { Reveal } from "@/components/home/reveal";
import { SiteHeader } from "@/components/layout/site-header";
import { useCart } from "@/components/cart/use-cart";

const filters = [
  { label: "All", value: "all" },
  { label: "Best Sellers", value: "best-sellers" },
  { label: "Everyday", value: "everyday" },
  { label: "Light Layers", value: "light-layers" },
  { label: "Cold Weather", value: "cold-weather" },
] as const;

type FilterValue = (typeof filters)[number]["value"];

function filterProducts(value: FilterValue) {
  if (value === "all") {
    return bestSellerProducts;
  }

  return bestSellerProducts.filter((product) => product.collection === value);
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[rgba(36,29,26,0.52)]">
      {children}
    </span>
  );
}

export function ShopPage({ initialFilter = "all" }: { initialFilter?: FilterValue }) {
  const [activeFilter, setActiveFilter] = React.useState<FilterValue>(initialFilter);
  const { addItem } = useCart();
  const visibleProducts = React.useMemo(() => filterProducts(activeFilter), [activeFilter]);

  return (
    <main className="editorial-shell grain min-h-screen">
      <section className="px-5 pb-10 pt-5 sm:px-8 sm:pb-12 sm:pt-8 lg:px-10 lg:pb-14 lg:pt-10">
        <div className="mx-auto max-w-[84rem]">
          <SiteHeader />
        </div>

        <div className="mx-auto mt-8 max-w-7xl px-1 sm:mt-10">
          <Reveal className="rounded-[2.25rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.52)] px-6 py-10 shadow-[var(--shadow-soft)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <SectionEyebrow>Shop</SectionEyebrow>
            <h1 className="mt-4 max-w-[9ch] font-serif text-[3rem] leading-[0.95] sm:text-[4rem] lg:text-[5rem]">
              Knitwear chosen for daily ease.
            </h1>
            <p className="mt-5 max-w-[34rem] text-base leading-8 text-[rgba(36,29,26,0.68)]">
              A quieter edit of PawWarm layers for softer mornings, short walks, and the hours spent settling back in.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
        <Reveal className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-[30rem]">
            <SectionEyebrow>Browse</SectionEyebrow>
            <p className="mt-4 text-sm leading-7 text-[rgba(36,29,26,0.64)]">
              Filter by how the layer tends to be worn, then add it straight to your bag.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const isActive = filter.value === activeFilter;

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.18)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-cream)] ${
                    isActive
                      ? "border-[rgba(36,29,26,0.12)] bg-[var(--color-charcoal)] text-white"
                      : "border-[rgba(36,29,26,0.1)] bg-[rgba(255,255,255,0.46)] text-[rgba(36,29,26,0.72)] hover:border-[rgba(36,29,26,0.18)] hover:text-[var(--color-charcoal)]"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.04}>
              <motion.article
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[2rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.48)] shadow-[0_12px_40px_rgba(70,52,39,0.05)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-beige)]">
                  <Link href={`/shop/${product.slug}`} className="absolute inset-0 z-10" aria-label={`View details for ${product.name}`} />
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 28vw, (min-width: 768px) 44vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{ objectPosition: product.imagePosition ?? "center center" }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,24,20,0.06)_0%,rgba(31,24,20,0.14)_100%)]" />
                </div>

                <div className="flex flex-col gap-5 px-5 pb-5 pt-6 sm:px-6 sm:pb-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link
                        href={`/shop/${product.slug}`}
                        className="font-serif text-[2rem] leading-[0.98] transition-colors hover:text-[rgba(36,29,26,0.82)]"
                      >
                        {product.name}
                      </Link>
                      <p className="mt-2 text-sm text-[rgba(36,29,26,0.58)]">{product.note}</p>
                    </div>
                    <span className="shrink-0 text-sm text-[rgba(36,29,26,0.72)]">{product.priceLabel}</span>
                  </div>

                  <p className="max-w-[28rem] text-sm leading-7 text-[rgba(36,29,26,0.62)]">
                    {product.sizeHint}
                  </p>

                  <div className="flex items-center justify-between gap-4 border-t border-[rgba(36,29,26,0.08)] pt-4">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[rgba(36,29,26,0.42)]">
                      {product.collectionLabel}
                    </span>
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/shop/${product.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-[rgba(36,29,26,0.62)] transition-colors hover:text-[var(--color-charcoal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.18)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-cream)]"
                      >
                        View details
                        <ArrowRight aria-hidden="true" className="h-4 w-4" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => addItem(product)}
                        className="rounded-full border border-[rgba(36,29,26,0.1)] px-4 py-2.5 text-sm font-medium text-[rgba(36,29,26,0.76)] transition-colors hover:border-[rgba(36,29,26,0.18)] hover:text-[var(--color-charcoal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.18)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-cream)]"
                        aria-label={`Quick add ${product.name} to bag`}
                      >
                        Quick add
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
