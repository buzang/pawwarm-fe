"use client";

import { ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart/use-cart";
import { Reveal } from "@/components/home/reveal";
import { SiteHeader } from "@/components/layout/site-header";
import { PillButton } from "@/components/ui/pill-button";
import { CheckoutSummary } from "./checkout-summary";

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[rgba(36,29,26,0.52)]">
      {children}
    </span>
  );
}

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium tracking-[0.01em] text-[rgba(36,29,26,0.72)]"
    >
      {children}
    </label>
  );
}

function TextField({
  id,
  name,
  type = "text",
  autoComplete,
  placeholder,
}: {
  id: string;
  name: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className="mt-2 h-12 w-full rounded-[1rem] border border-[rgba(36,29,26,0.1)] bg-white/80 px-4 text-sm text-[var(--color-charcoal)] outline-none transition-colors placeholder:text-[rgba(36,29,26,0.36)] focus-visible:border-[rgba(36,29,26,0.2)] focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.14)]"
    />
  );
}

export function CheckoutPage() {
  const { items, subtotal } = useCart();

  return (
    <main className="editorial-shell grain min-h-screen">
      <section className="px-5 pb-10 pt-5 sm:px-8 sm:pb-12 sm:pt-8 lg:px-10 lg:pb-14 lg:pt-10">
        <div className="mx-auto max-w-[84rem]">
          <SiteHeader />
        </div>

        <div className="mx-auto mt-8 max-w-7xl sm:mt-10">
          <Reveal className="rounded-[2.25rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.52)] px-6 py-10 shadow-[var(--shadow-soft)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <SectionEyebrow>Checkout</SectionEyebrow>
            <h1 className="mt-4 max-w-[10ch] font-serif text-[3rem] leading-[0.95] sm:text-[4rem] lg:text-[5rem]">
              A final step, kept quiet and clear.
            </h1>
            <p className="mt-5 max-w-[34rem] text-base leading-8 text-[rgba(36,29,26,0.68)]">
              Your details, your delivery, and one last review before payment is connected.
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
              Checkout begins once there&apos;s something in your bag.
            </h2>
            <p className="mx-auto mt-4 max-w-[28rem] text-sm leading-7 text-[rgba(36,29,26,0.62)]">
              Add a layer first, then return here for delivery details and a final review before payment.
            </p>
            <div className="mt-8 flex justify-center">
              <PillButton href="/shop">
                Go to Shop <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </PillButton>
            </div>
          </Reveal>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <Reveal className="rounded-[2rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.54)] p-6 shadow-[var(--shadow-soft)] sm:p-8">
              <form className="space-y-8">
                <section>
                  <SectionEyebrow>Contact</SectionEyebrow>
                  <div className="mt-5">
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <TextField
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="name@example.com"
                    />
                  </div>
                </section>

                <section className="border-t border-[rgba(36,29,26,0.08)] pt-8">
                  <SectionEyebrow>Delivery Address</SectionEyebrow>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <FieldLabel htmlFor="firstName">First name</FieldLabel>
                      <TextField id="firstName" name="firstName" autoComplete="given-name" />
                    </div>
                    <div>
                      <FieldLabel htmlFor="lastName">Last name</FieldLabel>
                      <TextField id="lastName" name="lastName" autoComplete="family-name" />
                    </div>
                    <div className="sm:col-span-2">
                      <FieldLabel htmlFor="country">Country / Region</FieldLabel>
                      <TextField id="country" name="country" autoComplete="country-name" />
                    </div>
                    <div className="sm:col-span-2">
                      <FieldLabel htmlFor="address1">Address line 1</FieldLabel>
                      <TextField id="address1" name="address1" autoComplete="address-line1" />
                    </div>
                    <div className="sm:col-span-2">
                      <FieldLabel htmlFor="address2">Address line 2 (optional)</FieldLabel>
                      <TextField id="address2" name="address2" autoComplete="address-line2" />
                    </div>
                    <div>
                      <FieldLabel htmlFor="city">City</FieldLabel>
                      <TextField id="city" name="city" autoComplete="address-level2" />
                    </div>
                    <div>
                      <FieldLabel htmlFor="state">State / Province</FieldLabel>
                      <TextField id="state" name="state" autoComplete="address-level1" />
                    </div>
                    <div>
                      <FieldLabel htmlFor="postalCode">Postal code</FieldLabel>
                      <TextField id="postalCode" name="postalCode" autoComplete="postal-code" />
                    </div>
                    <div>
                      <FieldLabel htmlFor="phone">Phone (optional)</FieldLabel>
                      <TextField id="phone" name="phone" type="tel" autoComplete="tel" />
                    </div>
                  </div>
                </section>

                <section className="border-t border-[rgba(36,29,26,0.08)] pt-8">
                  <SectionEyebrow>Order Note</SectionEyebrow>
                  <div className="mt-5">
                    <FieldLabel htmlFor="orderNote">Optional note</FieldLabel>
                    <textarea
                      id="orderNote"
                      name="orderNote"
                      rows={4}
                      placeholder="Anything useful to know before delivery."
                      className="mt-2 w-full rounded-[1rem] border border-[rgba(36,29,26,0.1)] bg-white/80 px-4 py-3 text-sm text-[var(--color-charcoal)] outline-none transition-colors placeholder:text-[rgba(36,29,26,0.36)] focus-visible:border-[rgba(36,29,26,0.2)] focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.14)]"
                    />
                  </div>
                </section>
              </form>
            </Reveal>

            <Reveal>
              <CheckoutSummary items={items} subtotal={subtotal} />
            </Reveal>
          </div>
        )}
      </section>
    </main>
  );
}
