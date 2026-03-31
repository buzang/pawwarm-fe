"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { startTransition, useState } from "react";
import cloudCablePreview from "@/assets/home/featured-cloud-cable-preview.jpg";
import { PillButton } from "@/components/ui/pill-button";
import { Reveal } from "./reveal";

const featuredProduct = {
  id: "cloud-cable-sweater",
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
  priceLabel: "$82",
  image: cloudCablePreview,
  imageAlt:
    "Small dog wearing a knit PawWarm sweater shown in a closer, more product-focused view.",
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[rgba(36,29,26,0.52)]">
      {children}
    </span>
  );
}

export function ProductDetailPreviewSection() {
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
          className="overflow-hidden rounded-[1.85rem] bg-[rgba(255,255,255,0.42)]"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.85rem] bg-[var(--color-beige)]">
            <Image
              src={featuredProduct.image}
              alt={featuredProduct.imageAlt}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,24,20,0.03)_0%,rgba(31,24,20,0.14)_100%)]" />
          </div>
        </motion.figure>

        <div className="flex flex-col">
          <h2
            id="featured-product-preview-heading"
            className="max-w-[14ch] font-serif text-[2.2rem] leading-[1] tracking-[0.01em] sm:text-[2.75rem]"
          >
            Chosen for how it wears
          </h2>
          <p className="mt-4 max-w-[34rem] text-[15px] leading-8 text-[rgba(36,29,26,0.7)]">
            {featuredProduct.intro}
          </p>

          <div className="mt-8 h-px w-full bg-[rgba(36,29,26,0.08)]" />

          <div className="mt-8">
            <SectionEyebrow>{featuredProduct.kicker}</SectionEyebrow>
            <h3 className="mt-3 font-serif text-[2.85rem] leading-[0.96] sm:text-[3.55rem]">
              {featuredProduct.name}
            </h3>
            <p className="mt-5 max-w-[30rem] text-base leading-7 text-[rgba(36,29,26,0.76)]">
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
            <p className="font-serif text-[2.15rem] leading-none">{featuredProduct.priceLabel}</p>

            <div className="flex flex-col items-start gap-3 sm:items-end">
              <div className="flex flex-wrap items-center gap-3">
                <PillButton onClick={handleAddToBag}>Add to Bag</PillButton>
                <button
                  type="button"
                  onClick={handleToggleDetails}
                  aria-controls="featured-product-extra-details"
                  aria-expanded={detailsOpen}
                  className="inline-flex items-center gap-2 px-1 py-3 text-sm font-medium tracking-[0.01em] text-[rgba(36,29,26,0.6)] transition-colors hover:text-[var(--color-charcoal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.18)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-cream)]"
                >
                  More details
                  <MoveRight
                    aria-hidden="true"
                    className={`h-4 w-4 transition-transform ${
                      detailsOpen ? "translate-x-1" : ""
                    }`}
                  />
                </button>
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
              className="mt-6 grid gap-4 border-t border-[rgba(36,29,26,0.08)] pt-6 sm:grid-cols-2"
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
