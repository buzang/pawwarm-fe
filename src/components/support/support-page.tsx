"use client";

import Link from "next/link";
import { ArrowRight, Package, RefreshCcw, Shirt, Ruler } from "lucide-react";
import { useCart } from "@/components/cart/use-cart";
import { Reveal } from "@/components/home/reveal";
import { SiteHeader } from "@/components/layout/site-header";
import { PillButton } from "@/components/ui/pill-button";

const quickLinks = [
  { label: "Shipping", href: "#shipping" },
  { label: "Returns & Exchanges", href: "#returns" },
  { label: "Care", href: "#care" },
  { label: "FAQ", href: "#faq" },
];

const shippingItems = [
  {
    title: "Processing",
    copy: "Orders are usually prepared within 1–3 business days before they leave our studio or fulfillment partner.",
  },
  {
    title: "Delivery windows",
    copy: "Shipping speeds vary by destination, but most parcels arrive within a standard domestic or international window once they are in transit.",
  },
  {
    title: "Tracking",
    copy: "Tracking is sent as soon as your parcel is scanned into the carrier network, so you can follow each step after dispatch.",
  },
  {
    title: "Seasonal drops",
    copy: "During launches or colder seasonal moments, processing may take a little longer. We would rather ship carefully than rush the finish.",
  },
];

const returnItems = [
  {
    title: "Returns window",
    copy: "Unused items in original condition can usually be returned within 14 days of delivery. We keep the process clear and case-by-case, not rigid for the sake of it.",
  },
  {
    title: "Exchanges",
    copy: "If you need a different size, reach out before wear whenever possible. We can usually guide an exchange more smoothly when the knit is still unworn.",
  },
  {
    title: "Condition",
    copy: "Returned knitwear should be clean, unwashed, and free from stretching, snagging, or lingering fragrance so it can be reviewed properly.",
  },
  {
    title: "If sizing feels wrong",
    copy: "Start with measurements first, then contact us with neck, chest, and back length. That helps us suggest the next best step without guesswork.",
  },
];

const careItems = [
  {
    title: "Washing",
    copy: "Hand wash or use a delicate cold cycle inside a garment bag whenever possible. A mild detergent is enough.",
  },
  {
    title: "Drying",
    copy: "Lay flat to dry and reshape gently while damp. Avoid tumble drying, which can tighten the knit and change the hand feel.",
  },
  {
    title: "Storage",
    copy: "Fold rather than hang between wears so the shape stays even through the shoulders and body.",
  },
  {
    title: "Daily wear",
    copy: "Keep knits away from rough surfaces, sharp clips, or heavy friction that can catch softer yarns over time.",
  },
];

const faqItems = [
  {
    question: "How do I choose the right size?",
    answer:
      "Start with chest, then neck and back length. Weight can help as a secondary check, but measurements should guide the final choice.",
  },
  {
    question: "What if my dog is between sizes?",
    answer:
      "If you are between sizes, size up for a little more ease, especially if your dog has a fuller coat or sits at the upper end of a measurement range.",
  },
  {
    question: "Can I exchange for a different size?",
    answer:
      "Usually yes, as long as the knit remains unworn and in original condition. Contact us before wear when you can and we will guide the next step.",
  },
  {
    question: "Are your knits suitable for indoor-only wear?",
    answer:
      "Yes. Many PawWarm layers are soft and light enough to stay on indoors for longer stretches without feeling stiff or bulky.",
  },
  {
    question: "Are they suitable for short outdoor walks?",
    answer:
      "Yes. Most styles are designed for short walks, cooler starts, and returning indoors comfortably, rather than heavy outerwear use in harsh weather.",
  },
  {
    question: "How should I wash the knitwear?",
    answer:
      "A gentle cold wash and flat drying is the safest approach. That keeps shape, softness, and stretch more consistent over time.",
  },
  {
    question: "When will my order ship?",
    answer:
      "Most orders leave within 1–3 business days. Tracking is sent once the parcel is handed to the carrier.",
  },
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[rgba(36,29,26,0.52)]">
      {children}
    </span>
  );
}

type SupportCardProps = {
  id: string;
  icon: React.ReactNode;
  title: string;
  intro: string;
  items: { title: string; copy: string }[];
};

function SupportCard({ id, icon, title, intro, items }: SupportCardProps) {
  return (
    <Reveal>
      <section
        id={id}
        className="rounded-[2rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.54)] p-7 shadow-[var(--shadow-soft)] sm:p-8"
      >
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(36,29,26,0.06)] text-[var(--color-charcoal)]">
          {icon}
        </div>
        <h2 className="mt-5 font-serif text-[2.2rem] leading-[0.98] sm:text-[2.55rem]">{title}</h2>
        <p className="mt-4 max-w-[34rem] text-sm leading-7 text-[rgba(36,29,26,0.62)]">{intro}</p>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.4rem] border border-[rgba(36,29,26,0.08)] bg-white/70 p-5"
            >
              <h3 className="font-medium text-[var(--color-charcoal)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[rgba(36,29,26,0.6)]">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

export function SupportPage() {
  const { itemCount } = useCart();

  return (
    <main className="editorial-shell grain min-h-screen">
      <section className="px-5 pb-10 pt-5 sm:px-8 sm:pb-12 sm:pt-8 lg:px-10 lg:pb-14 lg:pt-10">
        <div className="mx-auto max-w-[84rem]">
          <SiteHeader />
        </div>

        <div className="mx-auto mt-8 max-w-7xl sm:mt-10">
          <Reveal className="rounded-[2.25rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.52)] px-6 py-10 shadow-[var(--shadow-soft)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <SectionEyebrow>Support</SectionEyebrow>
            <h1 className="mt-4 max-w-[9ch] font-serif text-[3rem] leading-[0.95] sm:text-[4rem] lg:text-[5rem]">
              Practical answers, kept calm and clear.
            </h1>
            <p className="mt-5 max-w-[36rem] text-base leading-8 text-[rgba(36,29,26,0.68)]">
              Shipping, returns, care, and fit questions in one place, so the next step
              feels easier before you buy.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {quickLinks.map((item) => (
                <PillButton key={item.label} subtle href={item.href}>
                  {item.label}
                </PillButton>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 sm:px-8 sm:pb-10 lg:px-10 lg:pb-12">
        <Reveal className="rounded-[1.8rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.48)] px-6 py-6 shadow-[var(--shadow-soft)] sm:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <SectionEyebrow>Fit Reminder</SectionEyebrow>
              <p className="mt-3 max-w-[36rem] text-sm leading-7 text-[rgba(36,29,26,0.62)]">
                Measure with your pet standing naturally, leave enough room for comfort,
                and if you are between sizes, size up first.
              </p>
            </div>
            <Link
              href="/size-guide"
              className="inline-flex items-center gap-2 text-sm font-medium text-[rgba(36,29,26,0.66)] transition-colors hover:text-[var(--color-charcoal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.18)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-cream)]"
            >
              Review the Size Guide
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl space-y-6 px-5 pb-10 sm:px-8 sm:pb-12 lg:px-10 lg:pb-14">
        <SupportCard
          id="shipping"
          icon={<Package aria-hidden="true" className="h-5 w-5" />}
          title="Shipping"
          intro="A simple view of when orders are prepared, when tracking arrives, and where timing can shift a little."
          items={shippingItems}
        />

        <SupportCard
          id="returns"
          icon={<RefreshCcw aria-hidden="true" className="h-5 w-5" />}
          title="Returns & Exchanges"
          intro="Policies that stay helpful instead of defensive, especially when the main question is simply whether the fit feels right."
          items={returnItems}
        />

        <SupportCard
          id="care"
          icon={<Shirt aria-hidden="true" className="h-5 w-5" />}
          title="Care"
          intro="A few quiet habits go a long way in keeping the knit soft, even, and easy to wear again."
          items={careItems}
        />

        <Reveal>
          <section
            id="faq"
            className="rounded-[2rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.54)] p-7 shadow-[var(--shadow-soft)] sm:p-8"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(36,29,26,0.06)] text-[var(--color-charcoal)]">
              <Ruler aria-hidden="true" className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-serif text-[2.2rem] leading-[0.98] sm:text-[2.55rem]">FAQ</h2>
            <p className="mt-4 max-w-[34rem] text-sm leading-7 text-[rgba(36,29,26,0.62)]">
              The questions that come up most often before ordering, answered with the same
              calm detail we would want ourselves.
            </p>

            <div className="mt-7 space-y-3">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[1.3rem] border border-[rgba(36,29,26,0.08)] bg-white/72 px-5 py-4"
                >
                  <summary className="cursor-pointer list-none pr-6 text-[15px] font-medium text-[var(--color-charcoal)] marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.18)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-warm-white)]">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-[rgba(36,29,26,0.6)]">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
        <Reveal className="rounded-[2rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.48)] p-8 shadow-[var(--shadow-soft)] sm:p-10">
          <SectionEyebrow>Next Step</SectionEyebrow>
          <h2 className="mt-4 max-w-[26rem] font-serif text-[2.5rem] leading-[0.98] sm:text-[3rem]">
            Ready to move back into the shopping flow?
          </h2>
          <p className="mt-4 max-w-[32rem] text-sm leading-7 text-[rgba(36,29,26,0.62)]">
            Use the size guide for a final fit check, return to the bag if you are already
            close, or keep browsing knitwear with a little more certainty.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <PillButton href="/size-guide">Review the Size Guide</PillButton>
            <PillButton subtle href="/shop">
              Shop Knitwear
            </PillButton>
            {itemCount > 0 ? (
              <PillButton subtle href="/bag">
                Return to Bag
              </PillButton>
            ) : null}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
