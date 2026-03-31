"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { CartItem } from "@/components/cart/use-cart";

type CheckoutSummaryProps = {
  items: CartItem[];
  subtotal: number;
};

function formatCurrency(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export function CheckoutSummary({ items, subtotal }: CheckoutSummaryProps) {
  return (
    <aside className="rounded-[2rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.58)] p-6 shadow-[var(--shadow-soft)] sm:p-7 lg:sticky lg:top-8">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[rgba(36,29,26,0.42)]">
        Order Summary
      </p>
      <p className="mt-4 max-w-[18rem] font-serif text-[2.1rem] leading-[0.98]">
        Your order, kept clear and close at hand.
      </p>

      <div className="mt-7 space-y-4 border-t border-[rgba(36,29,26,0.08)] pt-5">
        {items.map((item) => (
          <article key={item.cartKey} className="flex items-start gap-4">
            <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-[1.2rem] bg-[var(--color-beige)]">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="80px"
                className="object-cover"
                style={{ objectPosition: item.imagePosition ?? "center center" }}
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h2 className="font-serif text-[1.45rem] leading-[1.02]">{item.name}</h2>
                  <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[rgba(36,29,26,0.46)]">
                    Size: {item.selectedSize}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[rgba(36,29,26,0.58)]">
                    Qty {item.quantity}
                  </p>
                </div>

                <p className="shrink-0 font-serif text-[1.35rem] leading-none">
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-7 space-y-3 border-t border-[rgba(36,29,26,0.08)] pt-5">
        <div className="flex items-center justify-between text-sm text-[rgba(36,29,26,0.62)]">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-[rgba(36,29,26,0.62)]">
          <span>Shipping</span>
          <span>Calculated next</span>
        </div>
        <div className="flex items-center justify-between border-t border-[rgba(36,29,26,0.08)] pt-3">
          <span className="text-sm font-medium text-[rgba(36,29,26,0.66)]">Estimated total</span>
          <span className="font-serif text-[1.95rem] leading-none text-[var(--color-charcoal)]">
            {formatCurrency(subtotal)}
          </span>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-[rgba(36,29,26,0.52)]">
        Shipping and final charges will be confirmed in the live checkout integration.
      </p>

      <button
        type="button"
        disabled
        aria-disabled="true"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[var(--color-charcoal)] px-5 py-3 text-sm font-medium tracking-[0.02em] text-white opacity-90"
      >
        Continue to Payment
      </button>

      <p className="mt-4 text-sm leading-7 text-[rgba(36,29,26,0.48)]">
        Payment and order placement will be connected next. This page is the final review surface before that step.
      </p>

      <Link
        href="/bag"
        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[rgba(36,29,26,0.62)] transition-colors hover:text-[var(--color-charcoal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.18)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-cream)]"
      >
        <ArrowLeft aria-hidden="true" className="h-4 w-4" />
        Return to Bag
      </Link>
    </aside>
  );
}
