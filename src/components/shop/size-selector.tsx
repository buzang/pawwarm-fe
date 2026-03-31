"use client";

import type { ProductSize } from "@/components/home/home-products";

type SizeSelectorProps = {
  sizes: ProductSize[];
  selectedSize: ProductSize | null;
  onSelect: (size: ProductSize) => void;
};

export function SizeSelector({ sizes, selectedSize, onSelect }: SizeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => {
        const isSelected = selectedSize === size;

        return (
          <button
            key={size}
            type="button"
            onClick={() => onSelect(size)}
            aria-pressed={isSelected}
            className={`inline-flex min-w-12 items-center justify-center rounded-full border px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(36,29,26,0.18)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-cream)] ${
              isSelected
                ? "border-[rgba(36,29,26,0.12)] bg-[var(--color-charcoal)] text-white"
                : "border-[rgba(36,29,26,0.1)] bg-[rgba(255,255,255,0.56)] text-[rgba(36,29,26,0.72)] hover:border-[rgba(36,29,26,0.18)] hover:text-[var(--color-charcoal)]"
            }`}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
}
