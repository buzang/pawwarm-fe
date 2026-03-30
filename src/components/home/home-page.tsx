"use client";

import { motion } from "framer-motion";
import { ArrowRight, Instagram, Menu, MoveRight } from "lucide-react";
import { Reveal } from "./reveal";

const collections = [
  {
    title: "Signature Knits",
    copy: "Refined cable textures, soft merino blends, and an easy drape for everyday elegance.",
    tone: "Warm minimal",
  },
  {
    title: "Floral Sweaters",
    copy: "Delicate jacquard blooms that feel playful, polished, and ready for a city walk.",
    tone: "Soft romance",
  },
  {
    title: "Holiday Warmth",
    copy: "Seasonal color stories and elevated festive details without the novelty-shop feel.",
    tone: "Quiet celebration",
  },
  {
    title: "Everyday Cozy",
    copy: "Simple silhouettes for lounging, layering, and staying warm from morning to dusk.",
    tone: "Daily ritual",
  },
];

const products = [
  {
    name: "Cloud Cable Sweater",
    price: "$82",
    note: "Merino blend",
    image:
      "linear-gradient(180deg, rgba(44, 30, 21, 0.18), rgba(44, 30, 21, 0.08)), url('https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80')",
  },
  {
    name: "Rosebud Knit Vest",
    price: "$76",
    note: "Lightweight floral",
    image:
      "linear-gradient(180deg, rgba(84, 56, 42, 0.16), rgba(84, 56, 42, 0.06)), url('https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=80')",
  },
  {
    name: "Moss Weekend Cardigan",
    price: "$88",
    note: "Textured knit",
    image:
      "linear-gradient(180deg, rgba(36, 29, 26, 0.2), rgba(36, 29, 26, 0.06)), url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80')",
  },
  {
    name: "Fireside Mock Neck",
    price: "$92",
    note: "Brushed softness",
    image:
      "linear-gradient(180deg, rgba(75, 56, 42, 0.18), rgba(75, 56, 42, 0.08)), url('https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=1200&q=80')",
  },
];

const lookbookFrames = [
  {
    title: "Chapter I",
    subtitle: "Morning light, soft yarn, quiet confidence.",
    image:
      "linear-gradient(180deg, rgba(27, 22, 19, 0.18), rgba(27, 22, 19, 0.04)), url('https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=80')",
    className: "md:col-span-2 md:row-span-2 min-h-[28rem]",
  },
  {
    title: "Chapter II",
    subtitle: "A knit layer for crisp streets and café windows.",
    image:
      "linear-gradient(180deg, rgba(63, 47, 35, 0.16), rgba(63, 47, 35, 0.06)), url('https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=1200&q=80')",
    className: "min-h-[18rem]",
  },
  {
    title: "Chapter III",
    subtitle: "Texture-led styling for weekends at home.",
    image:
      "linear-gradient(180deg, rgba(39, 32, 28, 0.18), rgba(39, 32, 28, 0.05)), url('https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=1200&q=80')",
    className: "min-h-[18rem]",
  },
];

const notes = [
  "Measure chest, neck, and back length in under a minute.",
  "Each fit page translates sizing into breed examples and body shape notes.",
  "Fabric stretch, lining weight, and layering guidance are shown before checkout.",
];

const footerLinks = {
  Shop: ["New Arrivals", "Signature Knits", "Gift Edit", "Fit Guide"],
  About: ["Our Philosophy", "Materials", "Journal", "Contact"],
  Support: ["Shipping", "Returns", "Care", "Wholesale"],
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
}: {
  children: React.ReactNode;
  subtle?: boolean;
}) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      href="#"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-[0.02em] transition-colors ${
        subtle
          ? "border border-[rgba(36,29,26,0.16)] bg-[rgba(255,255,255,0.35)] text-[var(--color-charcoal)] hover:bg-[rgba(255,255,255,0.58)]"
          : "bg-[var(--color-charcoal)] text-[var(--color-warm-white)] hover:bg-[rgba(36,29,26,0.92)]"
      }`}
    >
      {children}
    </motion.a>
  );
}

export function HomePage() {
  return (
    <main className="editorial-shell grain">
      <section className="relative min-h-screen overflow-hidden px-5 pb-10 pt-5 sm:px-8 lg:px-10">
        <div className="absolute inset-0">
          <div
            className="image-panel absolute inset-3 rounded-[2rem] md:inset-4 md:rounded-[2.5rem]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(23, 18, 15, 0.72) 0%, rgba(23, 18, 15, 0.42) 38%, rgba(23, 18, 15, 0.14) 68%, rgba(23, 18, 15, 0.18) 100%), url('https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1800&q=80')",
            }}
          />
          <div className="absolute inset-3 rounded-[2rem] border border-white/20 md:inset-4 md:rounded-[2.5rem]" />
        </div>

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/18 bg-white/10 px-4 py-3 text-[var(--color-warm-white)] backdrop-blur-md sm:px-6">
          <div>
            <span className="font-serif text-2xl tracking-[0.08em]">PawWarm</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-white/82 md:flex">
            <a href="#collections">Collections</a>
            <a href="#philosophy">Philosophy</a>
            <a href="#lookbook">Lookbook</a>
            <a href="#shop">Shop</a>
          </nav>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/16 bg-white/8 md:hidden"
            aria-label="Open navigation"
          >
            <Menu className="h-4 w-4" />
          </button>
        </header>

        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-6rem)] max-w-7xl items-end gap-10 px-2 pb-8 pt-14 md:grid-cols-[1.2fr_0.8fr] md:px-4 md:pb-10 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <SectionEyebrow light>Premium Pet Knitwear</SectionEyebrow>
            <h1 className="mt-5 max-w-[11ch] font-serif text-6xl leading-[0.9] tracking-[-0.04em] text-[var(--color-warm-white)] sm:text-7xl lg:text-[7.5rem]">
              Knitwear for the warm-hearted home.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/78 sm:text-lg">
              PawWarm creates refined sweaters and knit layers for pets who belong
              in beautifully lived-in spaces. Soft structure, quiet luxury, and comfort
              that feels considered.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillButton>
                Shop the Collection <ArrowRight className="h-4 w-4" />
              </PillButton>
              <PillButton subtle>Explore the Lookbook</PillButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="justify-self-end rounded-[1.8rem] border border-white/14 bg-black/16 p-5 text-[var(--color-warm-white)] shadow-[var(--shadow-soft)] backdrop-blur-md md:max-w-sm"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-white/54">
              Autumn campaign
            </p>
            <div className="mt-10 space-y-8">
              <div>
                <p className="text-4xl font-serif leading-none">01</p>
                <p className="mt-3 text-sm leading-6 text-white/72">
                  Soft merino textures, tailored silhouettes, and palette-led styling
                  designed for calm interiors and crisp walks.
                </p>
              </div>
              <div className="section-divider bg-white/20" />
              <div className="grid grid-cols-2 gap-5 text-sm">
                <div>
                  <p className="text-white/48">Material focus</p>
                  <p className="mt-2 text-white/80">Merino, brushed cotton, boucle blends</p>
                </div>
                <div>
                  <p className="text-white/48">Season mood</p>
                  <p className="mt-2 text-white/80">Quiet mornings, city cafés, fireside evenings</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="collections"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <SectionEyebrow>Featured Collections</SectionEyebrow>
            <h2 className="mt-4 max-w-lg font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
              Four worlds of warmth, each with its own attitude.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[rgba(36,29,26,0.66)]">
            Built to launch a real collection architecture later, without defaulting to a
            crowded commerce grid.
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
                <h3 className="mt-8 font-serif text-3xl tracking-[-0.04em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[rgba(36,29,26,0.68)]">
                  {item.copy}
                </p>
                <div className="mt-10 inline-flex items-center gap-2 text-sm text-[var(--color-charcoal)]">
                  Discover <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="philosophy"
        className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-16"
      >
        <Reveal className="grid gap-8 rounded-[2rem] bg-[rgba(255,255,255,0.56)] p-8 shadow-[var(--shadow-soft)] md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div className="max-w-sm">
            <SectionEyebrow>Brand Statement</SectionEyebrow>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-[3.4rem]">
              Softness should look as considered as it feels.
            </h2>
          </div>
          <div className="grid gap-6 text-[15px] leading-8 text-[rgba(36,29,26,0.78)] lg:grid-cols-2">
            <p>
              PawWarm is built around the idea that pet essentials can belong in a
              fashion-conscious home. Every piece is designed to add comfort without
              turning companionship into novelty.
            </p>
            <p>
              The palette is warm, the textures are tactile, and the silhouettes stay
              clean. It is knitwear that respects both the animal and the atmosphere of
              the space they live in.
            </p>
          </div>
        </Reveal>
      </section>

      <section
        id="lookbook"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-lg">
            <SectionEyebrow>Lookbook</SectionEyebrow>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
              A homepage that reads like a campaign, not a catalog wall.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[rgba(36,29,26,0.66)]">
            These frames can later be replaced by final campaign photography without
            changing the editorial structure.
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
                <div className="absolute inset-x-0 bottom-0 p-6 text-[var(--color-warm-white)]">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/62">
                    {frame.title}
                  </p>
                  <p className="mt-3 max-w-xs font-serif text-3xl leading-tight tracking-[-0.04em]">
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
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-lg">
            <SectionEyebrow>Best Sellers</SectionEyebrow>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
              Product cards that feel composed, not crowded.
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-charcoal)]"
          >
            View all styles <ArrowRight className="h-4 w-4" />
          </a>
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
                      <h3 className="font-serif text-[1.9rem] tracking-[-0.04em]">
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

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
        <Reveal className="grid gap-8 rounded-[2rem] bg-[var(--color-charcoal)] px-8 py-10 text-[var(--color-warm-white)] md:grid-cols-[0.85fr_1.15fr] md:px-12 md:py-14">
          <div>
            <SectionEyebrow light>Fit Confidence</SectionEyebrow>
            <h2 className="mt-4 max-w-sm font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
              Sizing that feels careful, not complicated.
            </h2>
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

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
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
            <h2 className="mt-4 max-w-lg font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
              Meant for homes with slow mornings, textured blankets, and a dog by the window.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-8 text-[rgba(36,29,26,0.72)]">
              The brand story is not only about keeping pets warm. It is about building a
              visual and emotional world around companionship, seasonal rituals, and
              beautifully designed essentials that naturally belong in daily life.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillButton subtle>Read the Journal</PillButton>
              <PillButton>
                Explore PawWarm <ArrowRight className="h-4 w-4" />
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
              <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
                Seasonal drops, lookbook notes, and warmth delivered gently.
              </h2>
              <form className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Email address"
                  className="h-[52px] flex-1 rounded-full border border-[rgba(36,29,26,0.1)] bg-white px-5 outline-none ring-0 placeholder:text-[rgba(36,29,26,0.4)]"
                />
                <button
                  type="submit"
                  className="inline-flex h-[52px] items-center justify-center rounded-full bg-[var(--color-charcoal)] px-6 text-sm font-medium text-[var(--color-warm-white)]"
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
                      <a key={link} href="#" className="block">
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
              <a href="#" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(36,29,26,0.1)]">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#">Instagram</a>
              <a href="#">Pinterest</a>
            </div>
          </div>
        </Reveal>
      </footer>
    </main>
  );
}
