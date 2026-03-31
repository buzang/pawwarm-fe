"use client";

import Link from "next/link";
import { Menu, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart/use-cart";

type SiteHeaderProps = {
  light?: boolean;
  className?: string;
};

export function SiteHeader({ light = false, className = "" }: SiteHeaderProps) {
  const { itemCount, openCart } = useCart();

  const shellClassName = light
    ? "border-white/14 bg-white/9 text-white shadow-[0_12px_30px_rgba(20,14,10,0.08)] backdrop-blur-md"
    : "border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.62)] text-[var(--color-charcoal)] shadow-[0_12px_30px_rgba(55,41,31,0.05)] backdrop-blur-sm";

  const navClassName = light ? "text-white/84 hover:text-white" : "text-[rgba(36,29,26,0.72)] hover:text-[var(--color-charcoal)]";
  const triggerClassName = light
    ? "border-white/14 bg-white/7 text-white hover:bg-white/12 focus-visible:ring-white/80 focus-visible:ring-offset-transparent"
    : "border-[rgba(36,29,26,0.1)] bg-white/70 text-[var(--color-charcoal)] hover:bg-white focus-visible:ring-[rgba(36,29,26,0.18)] focus-visible:ring-offset-[var(--color-cream)]";
  const badgeClassName = light
    ? "bg-white/14 text-white"
    : "bg-[rgba(36,29,26,0.08)] text-[var(--color-charcoal)]";

  return (
    <header
      className={`relative z-10 mx-auto flex w-full max-w-[82rem] items-center justify-between rounded-full border px-[1.15rem] py-[0.72rem] sm:px-6 sm:py-[0.8rem] lg:px-8 lg:py-[0.92rem] ${shellClassName} ${className}`}
    >
      <Link href="/" className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
        <span className="font-serif text-[1.58rem] tracking-[0.025em] sm:text-[1.66rem]">PawWarm</span>
      </Link>

      <div className="hidden flex-1 items-center justify-end gap-4 md:flex">
        <nav className="flex items-center justify-end gap-6 text-[0.98rem] font-medium tracking-[0.01em] lg:gap-8">
          <Link href="/shop" className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${navClassName}`}>
            Shop
          </Link>
          <Link href="/#collections" className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${navClassName}`}>
            Collections
          </Link>
          <Link href="/#lookbook" className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${navClassName}`}>
            Lookbook
          </Link>
          <Link href="/#about" className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${navClassName}`}>
            About
          </Link>
          <Link href="/#sizing" className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${navClassName}`}>
            Size Guide
          </Link>
        </nav>

        <button
          type="button"
          onClick={openCart}
          className={`relative inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium tracking-[0.01em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${triggerClassName}`}
          aria-label={itemCount > 0 ? `Open bag with ${itemCount} items` : "Open bag"}
        >
          <ShoppingBag aria-hidden="true" className="h-4 w-4" />
          <span>Bag</span>
          {itemCount > 0 ? (
            <span className={`inline-flex min-w-6 items-center justify-center rounded-full px-2 py-0.5 text-xs ${badgeClassName}`}>
              {itemCount}
            </span>
          ) : null}
        </button>
      </div>

      <div className="flex items-center gap-2 md:hidden">
        <button
          type="button"
          onClick={openCart}
          className={`relative inline-flex h-9 items-center justify-center rounded-full border px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${triggerClassName}`}
          aria-label={itemCount > 0 ? `Open bag with ${itemCount} items` : "Open bag"}
        >
          <ShoppingBag aria-hidden="true" className="h-4 w-4" />
          {itemCount > 0 ? (
            <span className={`absolute -right-1 -top-1 inline-flex min-w-5 items-center justify-center rounded-full px-1.5 py-0.5 text-[10px] ${badgeClassName}`}>
              {itemCount}
            </span>
          ) : null}
        </button>
        <button
          type="button"
          className={`inline-flex h-9 w-9 items-center justify-center rounded-full border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${triggerClassName}`}
          aria-label="Open navigation"
        >
          <Menu aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
