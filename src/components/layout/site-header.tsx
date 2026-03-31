"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/components/cart/use-cart";

type SiteHeaderProps = {
  light?: boolean;
  className?: string;
};

export function SiteHeader({ light = false, className = "" }: SiteHeaderProps) {
  const { itemCount, openCart } = useCart();
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  const bagAriaLabel = itemCount > 0
    ? `Open bag with ${itemCount} ${itemCount === 1 ? "item" : "items"}`
    : "Open bag";

  const navLinks = [
    { label: "Shop", href: "/shop" },
    { label: "Collections", href: "/#collections" },
    { label: "Lookbook", href: "/#lookbook" },
    { label: "About", href: "/#about" },
    { label: "Size Guide", href: "/size-guide" },
    { label: "Support", href: "/support" },
  ];

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
    <div className={`relative z-10 mx-auto w-full max-w-[82rem] ${className}`}>
      <header
        className={`flex items-center justify-between rounded-full border px-[1.15rem] py-[0.72rem] sm:px-6 sm:py-[0.8rem] lg:px-8 lg:py-[0.92rem] ${shellClassName}`}
      >
        <Link href="/" className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
          <span className="font-serif text-[1.58rem] tracking-[0.025em] sm:text-[1.66rem]">PawWarm</span>
        </Link>

        <div className="hidden flex-1 items-center justify-end gap-4 md:flex">
          <nav className="flex items-center justify-end gap-6 text-[0.98rem] font-medium tracking-[0.01em] lg:gap-8">
            {navLinks.slice(0, 5).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${navClassName}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={openCart}
            className={`relative inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium tracking-[0.01em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${triggerClassName}`}
            aria-label={bagAriaLabel}
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
            aria-label={bagAriaLabel}
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
            onClick={() => setIsMobileNavOpen((current) => !current)}
            aria-expanded={isMobileNavOpen}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${triggerClassName}`}
            aria-label={isMobileNavOpen ? "Close navigation" : "Open navigation"}
          >
            {isMobileNavOpen ? (
              <X aria-hidden="true" className="h-4 w-4" />
            ) : (
              <Menu aria-hidden="true" className="h-4 w-4" />
            )}
          </button>
        </div>
      </header>

      {isMobileNavOpen ? (
        <div
          className={`mt-3 rounded-[1.6rem] border px-5 py-4 shadow-[0_12px_30px_rgba(20,14,10,0.08)] backdrop-blur-md md:hidden ${shellClassName}`}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileNavOpen(false)}
                className={`rounded-[1rem] px-3 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${navClassName}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
