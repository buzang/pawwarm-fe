"use client";

import Image from "next/image";
import type { CartItem } from "@/components/cart/use-cart";

type BagLineItemProps = {
  item: CartItem;
  onIncrement: (cartKey: string) => void;
  onDecrement: (cartKey: string) => void;
  onRemove: (cartKey: string) => void;
};

function formatCurrency(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export function BagLineItem({
  item,
  onIncrement,
  onDecrement,
  onRemove,
}: BagLineItemProps) {
  return (
    <article className="grid gap-5 rounded-[1.8rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.5)] p-5 shadow-[0_12px_36px_rgba(70,52,39,0.04)] sm:grid-cols-[7.2rem_1fr] sm:p-6">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-[var(--color-beige)]">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 640px) 140px, 100vw"
          className="object-cover"
          style={{ objectPosition: item.imagePosition ?? "center center" }}
        />
      </div>

      <div className="flex min-w-0 flex-col gap-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h2 className="font-serif text-[2rem] leading-[0.98]">{item.name}</h2>
            <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[rgba(36,29,26,0.44)]">
              Size: {item.selectedSize}
            </p>
            <p className="mt-3 max-w-[34rem] text-sm leading-7 text-[rgba(36,29,26,0.62)]">
              {item.note}
            </p>
          </div>

          <div className="shrink-0 text-left sm:text-right">
            <p className="text-sm text-[rgba(36,29,26,0.58)]">Unit price</p>
            <p className="mt-2 font-serif text-[1.65rem] leading-none">{item.priceLabel}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[rgba(36,29,26,0.08)] pt-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col items-start gap-3">
            <div className="inline-flex items-center rounded-full border border-[rgba(36,29,26,0.08)] bg-white/85 p-1">
              <button
                type="button"
                onClick={() => onDecrement(item.cartKey)}
                aria-label={`Decrease quantity of ${item.name}`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-charcoal)] transition-colors hover:bg-[rgba(36,29,26,0.05)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.18)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-cream)]"
              >
                -
              </button>
              <span className="min-w-10 px-3 text-center text-sm font-medium text-[var(--color-charcoal)]">
                {item.quantity}
              </span>
              <button
                type="button"
                onClick={() => onIncrement(item.cartKey)}
                aria-label={`Increase quantity of ${item.name}`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-charcoal)] transition-colors hover:bg-[rgba(36,29,26,0.05)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.18)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-cream)]"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={() => onRemove(item.cartKey)}
              aria-label={`Remove ${item.name} size ${item.selectedSize} from bag`}
              className="text-xs font-medium uppercase tracking-[0.18em] text-[rgba(36,29,26,0.48)] transition-colors hover:text-[var(--color-charcoal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.18)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-cream)]"
            >
              Remove
            </button>
          </div>

          <div className="shrink-0 text-left sm:text-right">
            <p className="text-sm text-[rgba(36,29,26,0.58)]">Line total</p>
            <p className="mt-2 font-serif text-[1.95rem] leading-none">
              {formatCurrency(item.price * item.quantity)}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
