"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import { useEffect } from "react";
import type { CartItem } from "./use-cart";

type CartDrawerProps = {
  isOpen: boolean;
  items: CartItem[];
  subtotal: number;
  onClose: () => void;
  onIncrement: (cartKey: string) => void;
  onDecrement: (cartKey: string) => void;
  onRemove: (cartKey: string) => void;
};

export function CartDrawer({
  isOpen,
  items,
  subtotal,
  onClose,
  onIncrement,
  onDecrement,
  onRemove,
}: CartDrawerProps) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.div
            aria-hidden="true"
            className="fixed inset-0 z-40 bg-[rgba(28,22,19,0.32)] backdrop-blur-[2px]"
            initial={prefersReducedMotion ? undefined : { opacity: 0 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onClick={onClose}
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-drawer-title"
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-[29rem] flex-col border-l border-[rgba(36,29,26,0.08)] bg-[var(--color-warm-white)] px-6 pb-6 pt-5 shadow-[-18px_0_50px_rgba(52,39,30,0.08)] sm:px-7 sm:pb-7 sm:pt-6"
            initial={prefersReducedMotion ? undefined : { x: "100%" }}
            animate={prefersReducedMotion ? undefined : { x: 0 }}
            exit={prefersReducedMotion ? undefined : { x: "100%" }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[rgba(36,29,26,0.44)]">
                  Your Bag
                </p>
                <p
                  id="cart-drawer-title"
                  className="mt-3 max-w-[17rem] font-serif text-[1.95rem] leading-[1]"
                >
                  Soft layers chosen for slower days and short walks.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close cart drawer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(36,29,26,0.08)] text-[var(--color-charcoal)] transition-colors hover:border-[rgba(36,29,26,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.18)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-warm-white)]"
              >
                <X aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-7 flex-1 overflow-y-auto pr-1">
              {items.length === 0 ? (
                <div className="rounded-[1.6rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.52)] p-5">
                  <p className="text-sm leading-7 text-[rgba(36,29,26,0.62)]">
                    Your bag is empty. Add a layer when something feels right.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map((item) => (
                    <article
                      key={item.cartKey}
                      className="grid grid-cols-[4.9rem_1fr] gap-4 rounded-[1.45rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.58)] p-4"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.15rem] bg-[var(--color-beige)]">
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          fill
                          sizes="120px"
                          className="object-cover"
                          style={{ objectPosition: item.imagePosition ?? "center center" }}
                        />
                      </div>

                      <div className="flex min-w-0 flex-col">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="font-serif text-[1.3rem] leading-[1.02]">
                              {item.name}
                            </h3>
                            <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[rgba(36,29,26,0.42)]">
                              Size: {item.selectedSize}
                            </p>
                            <p className="mt-1.5 text-sm leading-6 text-[rgba(36,29,26,0.58)]">
                              {item.sizeHint}
                            </p>
                          </div>
                          <p className="shrink-0 text-sm text-[rgba(36,29,26,0.72)]">
                            {item.priceLabel}
                          </p>
                        </div>

                        <div className="mt-4 flex items-end justify-between gap-4">
                          <div className="flex flex-col items-start gap-2">
                            <div className="inline-flex items-center rounded-full border border-[rgba(36,29,26,0.08)] bg-white/80 p-1">
                              <button
                                type="button"
                                onClick={() => onDecrement(item.cartKey)}
                                aria-label={`Decrease quantity of ${item.name}`}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-charcoal)] transition-colors hover:bg-[rgba(36,29,26,0.05)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.18)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-warm-white)]"
                              >
                                <Minus aria-hidden="true" className="h-3.5 w-3.5" />
                              </button>
                              <span className="min-w-8 px-3 text-center text-sm font-medium text-[var(--color-charcoal)]">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => onIncrement(item.cartKey)}
                                aria-label={`Increase quantity of ${item.name}`}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-charcoal)] transition-colors hover:bg-[rgba(36,29,26,0.05)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.18)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-warm-white)]"
                              >
                                <Plus aria-hidden="true" className="h-3.5 w-3.5" />
                              </button>
                            </div>
                            <button
                              type="button"
                              onClick={() => onRemove(item.cartKey)}
                              aria-label={`Remove ${item.name} size ${item.selectedSize} from bag`}
                              className="text-xs font-medium uppercase tracking-[0.18em] text-[rgba(36,29,26,0.46)] transition-colors hover:text-[var(--color-charcoal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.18)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-warm-white)]"
                            >
                              Remove
                            </button>
                          </div>

                          <p className="text-sm text-[rgba(36,29,26,0.62)]">
                            {(item.price * item.quantity).toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-5 border-t border-[rgba(36,29,26,0.08)] pt-5">
              <div className="flex items-center justify-between text-sm text-[rgba(36,29,26,0.62)]">
                <span>Subtotal</span>
                <span className="font-serif text-[1.5rem] leading-none text-[var(--color-charcoal)]">
                  {subtotal.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-[rgba(36,29,26,0.5)]">
                Shipping and taxes calculated at checkout.
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/bag"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-charcoal)] px-5 py-3 text-sm font-medium tracking-[0.02em] text-white transition-colors hover:bg-[rgba(36,29,26,0.92)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.24)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-warm-white)]"
                >
                  Review Bag
                </Link>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-sm font-medium text-[rgba(36,29,26,0.66)] transition-colors hover:text-[var(--color-charcoal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.18)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-warm-white)]"
                >
                  Continue shopping
                </button>
              </div>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
