"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Instagram, Menu, MoveRight } from "lucide-react";
import { startTransition, useState } from "react";
import pawwarmHero from "@/assets/pawwarm-hero.png";
import { Reveal } from "./reveal";

const collections = [
  {
    title: "Signature Knits",
    copy: "The soft cable layers to reach for first, with gentle stretch and an easy fit for everyday warmth.",
    tone: "Core collection",
  },
  {
    title: "Floral Sweaters",
    copy: "A lighter mood in soft bloom tones, easy to slip on and gentle enough for day-long wear indoors or out.",
    tone: "Seasonal bloom",
  },
  {
    title: "Holiday Warmth",
    copy: "Soft winter layers for gatherings, evening visits, and colder days that ask for a little extra warmth.",
    tone: "Winter gatherings",
  },
  {
    title: "Everyday Cozy",
    copy: "Relaxed knitwear for quiet mornings, short outdoor moments, and settling back in when the day gets cold.",
    tone: "Daily comfort",
  },
];

const products = [
  {
    name: "Cloud Cable Sweater",
    price: "$82",
    note: "Soft around the neck",
    image:
      "linear-gradient(180deg, rgba(44, 30, 21, 0.18), rgba(44, 30, 21, 0.08)), url('https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80')",
  },
  {
    name: "Rosebud Knit Vest",
    price: "$76",
    note: "Easy to slip on",
    image:
      "linear-gradient(180deg, rgba(84, 56, 42, 0.16), rgba(84, 56, 42, 0.06)), url('https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=80')",
  },
  {
    name: "Moss Weekend Cardigan",
    price: "$88",
    note: "Comfortable indoors",
    image:
      "linear-gradient(180deg, rgba(36, 29, 26, 0.2), rgba(36, 29, 26, 0.06)), url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80')",
  },
  {
    name: "Fireside Mock Neck",
    price: "$92",
    note: "Warm for short winter walks",
    image:
      "linear-gradient(180deg, rgba(75, 56, 42, 0.18), rgba(75, 56, 42, 0.08)), url('https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=1200&q=80')",
  },
];

const featuredProduct = {
  id: "cloud-cable-sweater",
  slug: "cloud-cable-sweater",
  kicker: "Featured Layer",
  name: "Cloud Cable Sweater",
  valueLine: "Soft warmth for everyday movement at home and outside.",
  intro:
    "A closer look at one of our softest everyday layers. Easy through the neck, gentle in movement, and warm enough for the quieter parts of the day.",
  benefits: [
    "Gentle stretch, easy to slip on",
    "Soft around the neck, no pressure",
    "Warm without weight",
  ],
  detailNotes: [
    "A cable-knit layer that sits softly through the chest without feeling stiff.",
    "Easy to wear indoors, and enough coverage for a short walk when the air turns cooler.",
  ],
  sizeHint: "Fits most small breeds (3–6kg). If between sizes, size up.",
  price: 82,
  currency: "USD",
  priceLabel: "$82",
  image: pawwarmHero,
  imageAlt:
    "Dog and cat resting together in PawWarm knitwear, shown as a featured product preview.",
};

const lookbookFrames = [
  {
    title: "Quiet Morning",
    subtitle: "A soft layer for the first stretch, the first steps, and the first quiet walk of the day.",
    image:
      "linear-gradient(180deg, rgba(27, 22, 19, 0.18), rgba(27, 22, 19, 0.04)), url('https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=80')",
    className: "md:col-span-2 md:row-span-2 min-h-[28rem]",
  },
  {
    title: "City Walk",
    subtitle: "An easy knit for crisp air, quick walks, and a little warmth before heading back inside.",
    image:
      "linear-gradient(180deg, rgba(63, 47, 35, 0.16), rgba(63, 47, 35, 0.06)), url('https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=1200&q=80')",
    className: "min-h-[18rem]",
  },
  {
    title: "At Home",
    subtitle: "Gentle knitwear for curling up, moving room to room, and staying warm long after the walk is over.",
    image:
      "linear-gradient(180deg, rgba(39, 32, 28, 0.18), rgba(39, 32, 28, 0.05)), url('https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=1200&q=80')",
    className: "min-h-[18rem]",
  },
];

const notes = [
  "Measure chest, neck, and back length in under a minute.",
  "Each fit page includes breed examples and notes on shape and coverage.",
  "Stretch, weight, and layering guidance are clear before checkout.",
];

const footerLinks = {
  Shop: ["All Knitwear", "Best Sellers", "Gift Edit", "Size Guide"],
  About: ["Our Story", "Materials", "Journal", "Contact"],
  Support: ["Shipping", "Returns", "Care", "FAQ"],
};

function SectionEyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`text-[0.72rem] font-semibold uppercase tracking-[0.32em] ${
        light ? "text-white/58" : "text-[rgba(36,29,26,0.52)]"
      }`}
    >
      {children}
    </span>
  );
}

function PillButton({
  children,
  subtle = false,
  href,
  onClick,
  type = "button",
  ariaControls,
  ariaExpanded,
}: {
  children: React.ReactNode;
  subtle?: boolean;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaControls?: string;
  ariaExpanded?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const className = `inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-[0.02em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
    subtle
      ? "border border-[rgba(36,29,26,0.16)] bg-[rgba(255,255,255,0.35)] text-[var(--color-charcoal)] hover:bg-[rgba(255,255,255,0.58)] focus-visible:ring-[rgba(36,29,26,0.24)] focus-visible:ring-offset-[var(--color-cream)]"
      : "bg-[var(--color-charcoal)] text-white hover:bg-[rgba(36,29,26,0.92)] focus-visible:ring-white/80 focus-visible:ring-offset-[rgba(23,18,15,0.18)]"
  }`;

  if (href) {
    return (
      <motion.a
        whileHover={prefersReducedMotion ? undefined : { y: -2 }}
        whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
        href={href}
        className={className}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={prefersReducedMotion ? undefined : { y: -2 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      type={type}
      onClick={onClick}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      className={className}
    >
      {children}
    </motion.button>
  );
}

function ProductDetailPreviewSection() {
  const prefersReducedMotion = useReducedMotion();
  const [addedProductId, setAddedProductId] = useState<string | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleAddToBag = () => {
    startTransition(() => {
      setAddedProductId(featuredProduct.id);
    });
  };

  const handleToggleDetails = () => {
    startTransition(() => {
      setDetailsOpen((open) => !open);
    });
  };

  const isAdded = addedProductId === featuredProduct.id;

  return (
    <section
      aria-labelledby="featured-product-preview-heading"
      className="mx-auto max-w-7xl px-5 pb-10 pt-2 sm:px-8 sm:pb-12 sm:pt-4 lg:px-10 lg:pb-14 lg:pt-6"
    >
      <Reveal className="grid gap-8 rounded-[2rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.5)] p-6 shadow-[0_14px_45px_rgba(79,56,38,0.05)] md:p-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-10 lg:p-10">
        <motion.figure
          whileHover={prefersReducedMotion ? undefined : { y: -4 }}
          className="overflow-hidden rounded-[1.75rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.42)] p-3 sm:p-4"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-[var(--color-beige)]">
            <Image
              src={featuredProduct.image}
              alt={featuredProduct.imageAlt}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,24,20,0.05)_0%,rgba(31,24,20,0.22)_100%)]" />
          </div>
        </motion.figure>

        <div className="flex flex-col">
          <h2
            id="featured-product-preview-heading"
            className="max-w-[12ch] font-serif text-[2.6rem] leading-[0.98] sm:text-[3.25rem]"
          >
            Chosen for how it wears
          </h2>
          <p className="mt-4 max-w-[34rem] text-[15px] leading-8 text-[rgba(36,29,26,0.7)]">
            {featuredProduct.intro}
          </p>

          <div className="mt-8 h-px w-full bg-[rgba(36,29,26,0.08)]" />

          <div className="mt-8">
            <SectionEyebrow>{featuredProduct.kicker}</SectionEyebrow>
            <h3 className="mt-4 font-serif text-[2.45rem] leading-[0.98] sm:text-[3.1rem]">
              {featuredProduct.name}
            </h3>
            <p className="mt-4 max-w-[30rem] text-base leading-7 text-[rgba(36,29,26,0.76)]">
              {featuredProduct.valueLine}
            </p>
          </div>

          <ul className="mt-7 space-y-3" id="featured-layer-details">
            {featuredProduct.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 text-sm leading-7 text-[rgba(36,29,26,0.72)]"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.82rem] h-1.5 w-1.5 rounded-full bg-[var(--color-brown)]"
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm leading-7 text-[rgba(36,29,26,0.62)]">
            {featuredProduct.sizeHint}
          </p>

          <div className="mt-8 flex flex-col gap-6 border-t border-[rgba(36,29,26,0.08)] pt-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[rgba(36,29,26,0.44)]">
                Price
              </p>
              <p className="mt-3 font-serif text-[2.15rem] leading-none">
                {featuredProduct.priceLabel}
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 sm:items-end">
              <div className="flex flex-wrap gap-3">
                <PillButton onClick={handleAddToBag}>Add to Bag</PillButton>
                <PillButton
                  subtle
                  onClick={handleToggleDetails}
                  ariaControls="featured-product-extra-details"
                  ariaExpanded={detailsOpen}
                >
                  View full details
                </PillButton>
              </div>
              <p
                aria-live="polite"
                className={`text-sm leading-6 text-[rgba(36,29,26,0.56)] transition-opacity ${
                  isAdded ? "opacity-100" : "opacity-0"
                }`}
              >
                {isAdded ? "Cloud Cable Sweater added to bag." : " "}
              </p>
            </div>
          </div>

          {detailsOpen ? (
            <div
              id="featured-product-extra-details"
              className="mt-6 grid gap-4 rounded-[1.5rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.4)] p-5 sm:grid-cols-2"
            >
              {featuredProduct.detailNotes.map((note, index) => (
                <p
                  key={note}
                  className={`text-sm leading-7 text-[rgba(36,29,26,0.66)] ${
                    index === 0 ? "sm:pr-2" : "sm:pl-2"
                  }`}
                >
                  {note}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      </Reveal>
    </section>
  );
}

export function HomePage() {
  return (
    <main className="editorial-shell grain">
      <section className="relative min-h-screen overflow-hidden px-5 pb-14 pt-5 sm:px-8 sm:pb-18 sm:pt-8 lg:px-10 lg:pb-20 lg:pt-10">
        <div className="absolute inset-0">
          <div className="absolute inset-3 overflow-hidden rounded-[2rem] md:inset-4 md:rounded-[2.5rem]">
            <Image
              src={pawwarmHero}
              alt="PawWarm hero image with a dog and cat in knitwear"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,18,15,0.74)_0%,rgba(23,18,15,0.48)_30%,rgba(23,18,15,0.14)_58%,rgba(23,18,15,0.16)_100%)]" />
          </div>
          <div className="absolute inset-3 rounded-[2rem] border border-white/20 md:inset-4 md:rounded-[2.5rem]" />
        </div>

        <header className="relative z-10 mx-auto flex w-full max-w-[82rem] items-center justify-between rounded-full border border-white/14 bg-white/9 px-[1.15rem] py-[0.72rem] text-white shadow-[0_12px_30px_rgba(20,14,10,0.08)] backdrop-blur-md sm:px-6 sm:py-[0.8rem] lg:px-8 lg:py-[0.92rem]">
          <div className="shrink-0">
            <span className="font-serif text-[1.58rem] tracking-[0.025em] sm:text-[1.66rem]">
              PawWarm
            </span>
          </div>
          <nav className="hidden flex-1 items-center justify-end gap-6 text-[0.98rem] font-medium tracking-[0.01em] text-white/84 md:flex lg:gap-8">
            <a
              href="#shop"
              className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              Shop
            </a>
            <a
              href="#collections"
              className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              Collections
            </a>
            <a
              href="#lookbook"
              className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              Lookbook
            </a>
            <a
              href="#about"
              className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              About
            </a>
            <a
              href="#sizing"
              className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              Size Guide
            </a>
          </nav>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/14 bg-white/7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent md:hidden"
            aria-label="Open navigation"
          >
            <Menu aria-hidden="true" className="h-4 w-4" />
          </button>
        </header>

        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-6rem)] max-w-7xl items-end gap-10 px-2 pb-8 pt-12 md:px-4 md:pb-10 lg:pt-18">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[42rem]"
          >
            <SectionEyebrow light>Premium Pet Knitwear</SectionEyebrow>
            <h1 className="mt-5 max-w-[10ch] font-serif text-[3.65rem] leading-[0.92] text-white sm:text-[4.9rem] lg:text-[6.8rem]">
              Knitwear for the warm-hearted home.
            </h1>
            <p className="mt-6 max-w-[31rem] text-base leading-7 text-white/78 sm:text-lg">
              Soft knitwear for pets who live close to comfort, move easily through the day,
              and belong in every warm corner of home.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillButton href="#shop">
                    Shop Now <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </PillButton>
              <PillButton subtle href="#lookbook">View Lookbook</PillButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="collections"
        className="mx-auto max-w-7xl px-5 py-18 sm:px-8 sm:py-22 lg:px-10 lg:py-26"
      >
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[34rem]">
            <SectionEyebrow>Featured Collections</SectionEyebrow>
            <h2 className="mt-4 max-w-lg font-serif text-[2.7rem] leading-[0.98] sm:text-[3.4rem]">
              Four worlds of warmth, each with its own attitude.
            </h2>
          </div>
          <p className="max-w-[27rem] text-sm leading-7 text-[rgba(36,29,26,0.66)]">
            Different moods of knitwear, from light daily layers to colder-weather favorites.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {collections.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group h-full rounded-[1.8rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.55)] p-6 shadow-[0_10px_35px_rgba(74,58,44,0.06)] backdrop-blur-sm"
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[rgba(122,96,77,0.62)]">
                  {item.tone}
                </p>
                <h3 className="mt-8 font-serif text-[2rem] leading-[1.02]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[rgba(36,29,26,0.68)]">
                  {item.copy}
                </p>
                <div className="mt-10 inline-flex items-center gap-2 text-sm text-[var(--color-charcoal)]">
                  Discover{" "}
                  <MoveRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16"
      >
        <Reveal className="grid gap-8 rounded-[2rem] bg-[rgba(255,255,255,0.56)] p-8 shadow-[var(--shadow-soft)] md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div className="max-w-[24rem]">
            <SectionEyebrow>Brand Statement</SectionEyebrow>
            <h2 className="mt-4 font-serif text-[2.75rem] leading-[0.98] sm:text-[3.2rem]">
              Softness should look as considered as it feels.
            </h2>
          </div>
          <div className="grid gap-6 text-[15px] leading-8 text-[rgba(36,29,26,0.78)] lg:grid-cols-2">
            <p>
              We believe pet knitwear should feel thoughtful in every way: gentle on the
              body, easy to wear, and quietly right in a well-lived room.
            </p>
            <p>
              PawWarm brings softness, fit, and shape together so comfort feels natural on
              pets and calm in the spaces they move through every day.
            </p>
          </div>
        </Reveal>
      </section>

      <section
        id="lookbook"
        className="mx-auto max-w-7xl px-5 py-18 sm:px-8 sm:py-22 lg:px-10 lg:py-26"
      >
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[34rem]">
            <SectionEyebrow>Lookbook</SectionEyebrow>
            <h2 className="mt-4 font-serif text-[2.7rem] leading-[0.98] sm:text-[3.4rem]">
              A softer mood for colder days at home and out in the city.
            </h2>
          </div>
          <p className="max-w-[27rem] text-sm leading-7 text-[rgba(36,29,26,0.66)]">
            Think easy layers for pets on early walks, quiet afternoons indoors, and the
            kind of daily warmth that never feels overdone.
          </p>
        </Reveal>

        <div className="mt-12 grid auto-rows-fr gap-4 md:grid-cols-3">
          {lookbookFrames.map((frame, index) => (
            <Reveal key={frame.title} delay={index * 0.08} className={frame.className}>
              <motion.article
                whileHover={{ y: -6, scale: 0.995 }}
                className={`image-panel group relative h-full overflow-hidden rounded-[2rem] ${frame.className}`}
                style={{ backgroundImage: frame.image }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/52 via-black/8 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/62">
                    {frame.title}
                  </p>
                  <p className="mt-3 max-w-xs font-serif text-[2rem] leading-[1.02]">
                    {frame.subtitle}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="shop"
        className="mx-auto max-w-7xl px-5 pb-10 pt-18 sm:px-8 sm:pb-12 sm:pt-22 lg:px-10 lg:pb-14 lg:pt-26"
      >
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[34rem]">
            <SectionEyebrow>Best Sellers</SectionEyebrow>
            <h2 className="mt-4 font-serif text-[2.7rem] leading-[0.98] sm:text-[3.4rem]">
              Soft favorites to reach for all season.
            </h2>
          </div>
          <p className="max-w-[27rem] text-sm leading-7 text-[rgba(36,29,26,0.66)]">
            The pieces chosen most often for how they wear: easy through the neck, simple
            to slip on, comfortable indoors, and warm enough for quick walks outside.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <Reveal key={product.name} delay={index * 0.05}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group rounded-[1.8rem]"
              >
                <div
                  className="image-panel min-h-[20rem] rounded-[1.8rem] border border-[rgba(36,29,26,0.08)]"
                  style={{ backgroundImage: product.image }}
                />
                <div className="px-1 pb-1 pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-[1.7rem] leading-[1.04]">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-sm text-[rgba(36,29,26,0.58)]">
                        {product.note}
                      </p>
                    </div>
                    <span className="text-sm text-[rgba(36,29,26,0.72)]">
                      {product.price}
                    </span>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <ProductDetailPreviewSection />

      <section id="sizing" className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <Reveal className="grid gap-8 rounded-[2rem] bg-[var(--color-charcoal)] px-8 py-10 text-white md:grid-cols-[0.85fr_1.15fr] md:px-12 md:py-14">
          <div>
            <SectionEyebrow light>Fit Confidence</SectionEyebrow>
            <h2 className="mt-4 max-w-sm font-serif text-[2.7rem] leading-[0.98] sm:text-[3.4rem]">
              Sizing that feels careful, not complicated.
            </h2>
            <div className="mt-7">
              <PillButton href="#sizing">Find the Right Fit</PillButton>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {notes.map((item) => (
              <div key={item} className="rounded-[1.4rem] border border-white/12 bg-white/5 p-5">
                <p className="text-sm leading-7 text-white/78">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-18 sm:px-8 sm:py-22 lg:px-10 lg:py-26">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="image-panel min-h-[26rem] rounded-[2rem] border border-[rgba(36,29,26,0.08)]">
            <div
              className="image-panel h-full rounded-[2rem]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(33, 27, 23, 0.28), rgba(33, 27, 23, 0.08)), url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1600&q=80')",
              }}
            />
          </Reveal>
          <Reveal className="flex flex-col justify-center rounded-[2rem] bg-[rgba(255,255,255,0.45)] p-8 shadow-[var(--shadow-soft)] md:p-12">
            <SectionEyebrow>Life With PawWarm</SectionEyebrow>
            <h2 className="mt-4 max-w-[34rem] font-serif text-[2.75rem] leading-[0.98] sm:text-[3.45rem]">
              Meant for homes with slow mornings, textured blankets, and a dog by the window.
            </h2>
            <p className="mt-6 max-w-[31rem] text-[15px] leading-8 text-[rgba(36,29,26,0.72)]">
              PawWarm belongs to the rhythm of the day: the knit slipped on before the
              first walk, the return to soft light indoors, the familiar sight of a pet
              settling back into its favorite place. It is a quieter kind of dressing,
              made for daily rituals that feel easy and close.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillButton subtle href="#about">Read the Story</PillButton>
              <PillButton href="#shop">
                Shop PawWarm <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </PillButton>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-5 pb-10 pt-6 sm:px-8 lg:px-10">
        <Reveal className="rounded-[2rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.55)] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <SectionEyebrow>Newsletter</SectionEyebrow>
              <h2 className="mt-4 max-w-[30rem] font-serif text-[2.75rem] leading-[0.98] sm:text-[3.3rem]">
                Seasonal knitwear, quiet notes, and first notice of what is coming next.
              </h2>
              <form className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  name="email"
                  aria-label="Email address"
                  autoComplete="email"
                  enterKeyHint="send"
                  spellCheck={false}
                  placeholder="Email address"
                  className="h-[52px] flex-1 rounded-full border border-[rgba(36,29,26,0.1)] bg-white px-5 outline-none ring-0 placeholder:text-[rgba(36,29,26,0.4)] focus-visible:border-[rgba(36,29,26,0.22)] focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.12)]"
                />
                <button
                  type="submit"
                  className="inline-flex h-[52px] items-center justify-center rounded-full bg-[var(--color-charcoal)] px-6 text-sm font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.24)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-warm-white)]"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {Object.entries(footerLinks).map(([group, links]) => (
                <div key={group}>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(36,29,26,0.48)]">
                    {group}
                  </p>
                  <div className="mt-5 space-y-3 text-sm text-[rgba(36,29,26,0.74)]">
                    {links.map((link) => (
                      <a
                        key={link}
                        href="#"
                        className="block transition-colors hover:text-[var(--color-charcoal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.18)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-warm-white)]"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-[rgba(36,29,26,0.08)] pt-6 text-sm text-[rgba(36,29,26,0.58)] md:flex-row md:items-center md:justify-between">
            <p>PawWarm. Premium knitwear for pets and the homes they belong in.</p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(36,29,26,0.1)] transition hover:border-[rgba(36,29,26,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.2)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-warm-white)]"
              >
                <Instagram aria-hidden="true" className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="transition-colors hover:text-[var(--color-charcoal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.18)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-warm-white)]"
              >
                Instagram
              </a>
              <a
                href="#"
                className="transition-colors hover:text-[var(--color-charcoal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.18)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-warm-white)]"
              >
                Pinterest
              </a>
            </div>
          </div>
        </Reveal>
      </footer>
    </main>
  );
}
