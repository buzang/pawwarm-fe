"use client";

import { ArrowRight, Ruler } from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { SiteHeader } from "@/components/layout/site-header";
import { PillButton } from "@/components/ui/pill-button";

const measurementSteps = [
  {
    title: "Neck",
    copy:
      "Measure around the base of the neck where the knit naturally sits, leaving enough room for two fingers.",
  },
  {
    title: "Chest",
    copy:
      "Wrap the tape around the fullest part of the chest, just behind the front legs. This is the most important number.",
  },
  {
    title: "Back length",
    copy:
      "Measure from the base of the neck to the start of the tail while your dog is standing naturally.",
  },
] as const;

const fitReminders = [
  "Measure with your pet standing naturally.",
  "Let the tape sit close, never tight.",
  "If between sizes, size up for easier comfort.",
] as const;

const sizeRows = [
  { size: "XS", neck: "20-24 cm", chest: "28-34 cm", back: "20-24 cm", weight: "1.5-3 kg" },
  { size: "S", neck: "24-28 cm", chest: "34-40 cm", back: "24-29 cm", weight: "3-5 kg" },
  { size: "M", neck: "28-32 cm", chest: "40-46 cm", back: "29-34 cm", weight: "5-7.5 kg" },
  { size: "L", neck: "32-36 cm", chest: "46-54 cm", back: "34-40 cm", weight: "7.5-10 kg" },
] as const;

const fitNotes = [
  {
    title: "Between sizes",
    copy:
      "If two sizes seem possible, choose the larger size. PawWarm knitwear is meant to settle softly, not pull across the chest.",
  },
  {
    title: "Fluffier coat",
    copy:
      "Dogs with a fuller coat often need a little more room through the chest and neck, especially in closer knits.",
  },
  {
    title: "Broader chest",
    copy:
      "If the chest measurement is close to the next size, follow the chest first, then check that the back length still feels balanced.",
  },
  {
    title: "Longer back",
    copy:
      "For dogs longer through the body, size up when you want a little more coverage along the back.",
  },
  {
    title: "Closer fit",
    copy:
      "Choose the size that matches your measurements most closely when you want a neater, more fitted look indoors.",
  },
  {
    title: "Relaxed fit",
    copy:
      "Take the larger size when you prefer more ease for lounging, fluffier coats, or a little extra layering room.",
  },
] as const;

const breedGuidance = [
  {
    breed: "Toy Poodle",
    note: "Often begins around XS or S, depending on coat and chest.",
  },
  {
    breed: "Maltese",
    note: "Usually starts around XS or S, but back length can shift the fit.",
  },
  {
    breed: "Bichon Frise",
    note: "Often sits around S or M once coat volume is considered.",
  },
  {
    breed: "French Bulldog",
    note: "Often needs M or L because chest width matters more than weight alone.",
  },
] as const;

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[rgba(36,29,26,0.52)]">
      {children}
    </span>
  );
}

export function SizeGuidePage() {
  return (
    <main className="editorial-shell grain min-h-screen">
      <section className="px-5 pb-10 pt-5 sm:px-8 sm:pb-12 sm:pt-8 lg:px-10 lg:pb-14 lg:pt-10">
        <div className="mx-auto max-w-[84rem]">
          <SiteHeader />
        </div>

        <div className="mx-auto mt-8 max-w-7xl sm:mt-10">
          <Reveal className="grid gap-8 rounded-[2.25rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.52)] px-6 py-10 shadow-[var(--shadow-soft)] md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-12 lg:px-12 lg:py-14">
            <div className="max-w-[34rem]">
              <SectionEyebrow>Size Guide</SectionEyebrow>
              <h1 className="mt-4 max-w-[10ch] font-serif text-[3rem] leading-[0.95] sm:text-[4rem] lg:text-[5rem]">
                Finding the right fit.
              </h1>
              <p className="mt-5 text-base leading-8 text-[rgba(36,29,26,0.68)]">
                Sizing that feels careful, not complicated. Measure three points, check the table,
                and use our fit notes when your dog sits between sizes.
              </p>
            </div>

            <div className="rounded-[1.9rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.6)] p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(36,29,26,0.06)] text-[var(--color-charcoal)]">
                  <Ruler aria-hidden="true" className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[rgba(36,29,26,0.44)]">
                    Fit Reminder
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[rgba(36,29,26,0.66)]">
                    Chest is the primary check. Weight is only a loose guide after measurements.
                  </p>
                </div>
              </div>
              <div className="mt-6 grid gap-3">
                {fitReminders.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.2rem] border border-[rgba(36,29,26,0.08)] bg-[var(--color-cream)] px-4 py-3 text-sm leading-7 text-[rgba(36,29,26,0.68)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <Reveal className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="max-w-[24rem]">
            <SectionEyebrow>How to Measure</SectionEyebrow>
            <h2 className="mt-4 font-serif text-[2.5rem] leading-[0.98] sm:text-[3rem]">
              Three points, measured once.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[rgba(36,29,26,0.64)]">
              A soft tape measure and a natural standing posture are enough. These steps are what we
              use when deciding how PawWarm should sit on the body.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {measurementSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.04}>
                <article className="flex h-full flex-col rounded-[1.8rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.48)] p-6 shadow-[0_12px_40px_rgba(70,52,39,0.04)]">
                  <div className="flex items-center justify-between">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[rgba(36,29,26,0.42)]">
                      Step {index + 1}
                    </p>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(36,29,26,0.06)] text-[var(--color-charcoal)]">
                      <Ruler aria-hidden="true" className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="mt-6 font-serif text-[2rem] leading-[1]">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[rgba(36,29,26,0.68)]">{step.copy}</p>
                  <div className="mt-6 flex min-h-[9rem] items-center justify-center rounded-[1.4rem] border border-dashed border-[rgba(36,29,26,0.12)] bg-[linear-gradient(180deg,rgba(245,241,235,0.92),rgba(255,255,255,0.72))] px-4 text-center text-xs font-medium uppercase tracking-[0.22em] text-[rgba(36,29,26,0.34)]">
                    Illustration-ready
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <Reveal className="rounded-[2rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.5)] p-6 shadow-[var(--shadow-soft)] sm:p-8 lg:p-10">
          <div className="max-w-[32rem]">
            <SectionEyebrow>Size Table</SectionEyebrow>
            <h2 className="mt-4 font-serif text-[2.5rem] leading-[0.98] sm:text-[3rem]">
              Start with the body, not the breed.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[rgba(36,29,26,0.64)]">
              Neck, chest, and back length should lead the decision. Weight helps as a secondary check
              when measurements land close to two sizes.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-[rgba(36,29,26,0.08)] bg-white/70">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left">
                <thead className="bg-[rgba(36,29,26,0.04)]">
                  <tr className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[rgba(36,29,26,0.46)]">
                    <th scope="col" className="px-5 py-4 sm:px-6">Size</th>
                    <th scope="col" className="px-5 py-4 sm:px-6">Neck</th>
                    <th scope="col" className="px-5 py-4 sm:px-6">Chest</th>
                    <th scope="col" className="px-5 py-4 sm:px-6">Back Length</th>
                    <th scope="col" className="px-5 py-4 sm:px-6">Weight Guidance</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeRows.map((row) => (
                    <tr
                      key={row.size}
                      className="border-t border-[rgba(36,29,26,0.08)] text-sm leading-7 text-[rgba(36,29,26,0.7)]"
                    >
                      <th scope="row" className="px-5 py-4 font-serif text-[1.5rem] leading-none text-[var(--color-charcoal)] sm:px-6">
                        {row.size}
                      </th>
                      <td className="px-5 py-4 sm:px-6">{row.neck}</td>
                      <td className="px-5 py-4 sm:px-6">{row.chest}</td>
                      <td className="px-5 py-4 sm:px-6">{row.back}</td>
                      <td className="px-5 py-4 text-[rgba(36,29,26,0.56)] sm:px-6">{row.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <Reveal className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[2rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.48)] p-6 shadow-[0_12px_40px_rgba(70,52,39,0.04)] sm:p-8">
            <SectionEyebrow>Fit Notes</SectionEyebrow>
            <h2 className="mt-4 max-w-[15ch] font-serif text-[2.5rem] leading-[0.98] sm:text-[3rem]">
              How to read the table with a little more confidence.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {fitNotes.map((note) => (
                <div
                  key={note.title}
                  className="rounded-[1.4rem] border border-[rgba(36,29,26,0.08)] bg-[var(--color-cream)] p-5"
                >
                  <h3 className="font-serif text-[1.45rem] leading-[1.05]">{note.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[rgba(36,29,26,0.68)]">{note.copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[var(--color-charcoal)] p-6 text-white shadow-[var(--shadow-soft)] sm:p-8">
            <SectionEyebrow>Breed Examples</SectionEyebrow>
            <h2 className="mt-4 max-w-[16ch] font-serif text-[2.45rem] leading-[0.98] sm:text-[3rem]">
              Familiar starting points, not fixed answers.
            </h2>
            <p className="mt-5 max-w-[30rem] text-sm leading-7 text-white/74">
              These references can help you begin, but measurements should still make the final call.
            </p>
            <div className="mt-8 space-y-3">
              {breedGuidance.map((item) => (
                <div
                  key={item.breed}
                  className="rounded-[1.35rem] border border-white/10 bg-white/6 px-5 py-4"
                >
                  <p className="font-serif text-[1.4rem] leading-none">{item.breed}</p>
                  <p className="mt-3 text-sm leading-7 text-white/72">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pb-28">
        <Reveal className="rounded-[2rem] border border-[rgba(36,29,26,0.08)] bg-[rgba(255,255,255,0.5)] px-6 py-10 text-center shadow-[var(--shadow-soft)] sm:px-8 sm:py-12">
          <SectionEyebrow>Back to Shopping</SectionEyebrow>
          <h2 className="mt-4 font-serif text-[2.5rem] leading-[0.98] sm:text-[3rem]">
            Ready to choose with a little more ease.
          </h2>
          <p className="mx-auto mt-5 max-w-[32rem] text-sm leading-7 text-[rgba(36,29,26,0.64)]">
            Once you have chest, neck, and back length, the rest should feel simple. Return to the
            edit and shop with the fit in mind.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PillButton href="/shop">
              Shop Knitwear <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </PillButton>
            <PillButton subtle href="/shop">
              Browse Best Sellers
            </PillButton>
          </div>
          <p className="mt-6 text-sm leading-7 text-[rgba(36,29,26,0.56)]">
            Still unsure? Start with the chest measurement, then choose the larger size when comfort
            is in question.
          </p>
        </Reveal>
      </section>
    </main>
  );
}
