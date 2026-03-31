import featuredCloudCablePreview from "@/assets/home/featured-cloud-cable-preview.jpg";

export const featuredProduct = {
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
  priceLabel: "$82",
  image: featuredCloudCablePreview,
  imageAlt:
    "Small dog wearing a knit PawWarm sweater shown in a closer, more product-focused view.",
} as const;

export type FeaturedProduct = typeof featuredProduct;
