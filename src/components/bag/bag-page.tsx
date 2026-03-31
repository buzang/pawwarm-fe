"use client";

import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart/use-cart";
import { Reveal } from "@/components/home/reveal";
import { SiteHeader } from "@/components/layout/site-header";
import { PillButton } from "@/components/ui/pill-button";
import { BagLineItem } from "./bag-line-item";
import { OrderSummary } from "./order-summary";

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[rgba(36,29,26,0.52)]">
      {children}
    </span>
  );
}

export function BagPage() {
  const { items, subtotal, itemCount, incrementItem, decrementItem, removeItem } = useCart();

  return (
    <main className="editorial-shell grain min-h-screen">
      <section className="px-5 pb-10 pt-5 sm:px-8 sm:pb-12 sm:pt-8 lg:px-10 lg:pb-14 lg:pt-10">
        <div className="mx-auto max-w-[84rem]">
          <SiteHeader />
        </div>

        <div className="mx-auto mt-8 max-w-7xl sm:mt-10">
          <Reveal className="rounded-[2.25rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.52)] px-6 py-10 shadow-[var(--shadow-soft)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <SectionEyebrow>Your Bag</SectionEyebrow>
            <h1 className="mt-4 max-w-[10ch] font-serif text-[3rem] leading-[0.95] sm:text-[4rem] lg:text-[5rem]">
              The layers you&apos;ve chosen so far.
            </h1>
            <p className="mt-5 max-w-[34rem] text-base leading-8 text-[rgba(36,29,26,0.68)]">
              A final look before checkout. Review fit, refine quantities, and keep only what still feels right.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
        {items.length === 0 ? (
          <Reveal className="rounded-[2rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.54)] px-6 py-12 text-center shadow-[var(--shadow-soft)] sm:px-8 sm:py-14">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(36,29,26,0.06)] text-[var(--color-charcoal)]">
              <ShoppingBag aria-hidden="true" className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-serif text-[2.4rem] leading-[0.98] sm:text-[3rem]">
              Your bag is still waiting for its first layer.
            </h2>
            <p className="mx-auto mt-4 max-w-[28rem] text-sm leading-7 text-[rgba(36,29,26,0.62)]">
              Start with a piece that feels easy through the neck, warm enough for a short walk, and soft enough to keep on at home.
            </p>
            <div className="mt-8 flex justify-center">
              <PillButton href="/shop">
                Go to Shop <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </PillButton>
            </div>
          </Reveal>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-4">
              {items.map((item, index) => (
                <Reveal key={item.cartKey} delay={index * 0.03}>
                  <BagLineItem
                    item={item}
                    onIncrement={incrementItem}
                    onDecrement={decrementItem}
                    onRemove={removeItem}
                  />
                </Reveal>
              ))}
            </div>

            <Reveal>
              <OrderSummary subtotal={subtotal} itemCount={itemCount} />
            </Reveal>
          </div>
        )}

        {items.length > 0 ? (
          <Reveal className="mt-8">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-sm font-medium text-[rgba(36,29,26,0.62)] transition-colors hover:text-[var(--color-charcoal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.18)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-cream)]"
            >
              Continue Shopping
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </Reveal>
        ) : null}
      </section>
    </main>
  );
}
