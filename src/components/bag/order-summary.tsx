"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PillButton } from "@/components/ui/pill-button";

type OrderSummaryProps = {
  subtotal: number;
  itemCount: number;
};

function formatCurrency(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export function OrderSummary({ subtotal, itemCount }: OrderSummaryProps) {
  return (
    <aside className="rounded-[2rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.56)] p-6 shadow-[var(--shadow-soft)] sm:p-7 lg:sticky lg:top-8">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[rgba(36,29,26,0.42)]">
        Order Summary
      </p>
      <p className="mt-4 max-w-[18rem] font-serif text-[2.1rem] leading-[0.98]">
        A final look before checkout.
      </p>

      <div className="mt-8 space-y-4 border-t border-[rgba(36,29,26,0.08)] pt-5">
        <div className="flex items-center justify-between text-sm text-[rgba(36,29,26,0.62)]">
          <span>Items</span>
          <span>{itemCount}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-[rgba(36,29,26,0.62)]">
          <span>Subtotal</span>
          <span className="font-serif text-[1.7rem] leading-none text-[var(--color-charcoal)]">
            {formatCurrency(subtotal)}
          </span>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-[rgba(36,29,26,0.52)]">
        Shipping and taxes calculated at checkout. Size and quantity can still be adjusted before you continue.
      </p>

      <div className="mt-6 flex flex-col gap-3">
        <PillButton href="/checkout">
          Proceed to Checkout
        </PillButton>
        <PillButton subtle href="/shop">
          Continue Shopping <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </PillButton>
      </div>

      <p className="mt-5 text-sm leading-7 text-[rgba(36,29,26,0.48)]">
        You can move into checkout now and review delivery details before payment is connected.
      </p>

      <Link
        href="/size-guide"
        className="mt-5 inline-flex text-sm font-medium text-[rgba(36,29,26,0.62)] transition-colors hover:text-[var(--color-charcoal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.18)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-cream)]"
      >
        Review the Size Guide
      </Link>
    </aside>
  );
}
