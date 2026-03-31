import type { StaticImageData } from "next/image";
import featuredCloudCablePreview from "@/assets/home/featured-cloud-cable-preview.jpg";
import productCloudCable from "@/assets/home/product-cloud-cable.jpg";
import productFiresideMockNeck from "@/assets/home/product-fireside-mock-neck.jpg";
import productMossCardigan from "@/assets/home/product-moss-cardigan.jpg";
import productRosebudVest from "@/assets/home/product-rosebud-vest.jpg";

export type HomeProduct = {
  id: string;
  slug: string;
  name: string;
  price: number;
  priceLabel: string;
  collection: "best-sellers" | "everyday" | "light-layers" | "cold-weather";
  collectionLabel: string;
  image: StaticImageData;
  imageAlt: string;
  imagePosition?: string;
  note?: string;
  sizeHint?: string;
  kicker?: string;
  valueLine?: string;
  intro?: string;
  benefits?: readonly string[];
  detailNotes?: readonly string[];
};

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
  ] as const,
  detailNotes: [
    "A cable-knit layer that sits softly through the chest without feeling stiff.",
    "Easy to wear indoors, and enough coverage for a short walk when the air turns cooler.",
  ] as const,
  note: "Soft around the neck",
  sizeHint: "Fits most small breeds (3–6kg). If between sizes, size up.",
  price: 82,
  priceLabel: "$82",
  collection: "best-sellers",
  collectionLabel: "Best Sellers",
  image: featuredCloudCablePreview,
  imageAlt:
    "Small dog wearing a knit PawWarm sweater shown in a closer, more product-focused view.",
  imagePosition: "center center",
} satisfies HomeProduct;

export const bestSellerProducts = [
  {
    ...featuredProduct,
    image: productCloudCable,
    imageAlt: "Dog wearing the Cloud Cable Sweater in a soft neutral interior.",
    imagePosition: "center 42%",
  },
  {
    id: "rosebud-knit-vest",
    slug: "rosebud-knit-vest",
    name: "Rosebud Knit Vest",
    price: 76,
    priceLabel: "$76",
    collection: "light-layers",
    collectionLabel: "Light Layers",
    note: "Easy to slip on",
    sizeHint: "A lighter layer with gentle stretch for daily dressing.",
    image: productRosebudVest,
    imageAlt: "Small dog in a soft rose knit vest with a close product-focused crop.",
    imagePosition: "center 35%",
  },
  {
    id: "moss-weekend-cardigan",
    slug: "moss-weekend-cardigan",
    name: "Moss Weekend Cardigan",
    price: 88,
    priceLabel: "$88",
    collection: "everyday",
    collectionLabel: "Everyday",
    note: "Comfortable indoors",
    sizeHint: "Soft coverage for calm afternoons and room-to-room comfort.",
    image: productMossCardigan,
    imageAlt: "Dog wearing the Moss Weekend Cardigan in a warm home setting.",
    imagePosition: "center 38%",
  },
  {
    id: "fireside-mock-neck",
    slug: "fireside-mock-neck",
    name: "Fireside Mock Neck",
    price: 92,
    priceLabel: "$92",
    collection: "cold-weather",
    collectionLabel: "Cold Weather",
    note: "Warm for short winter walks",
    sizeHint: "A closer knit for colder starts and quick turns outside.",
    image: productFiresideMockNeck,
    imageAlt: "Dog in the Fireside Mock Neck with the knit texture visible.",
    imagePosition: "center 34%",
  },
] satisfies HomeProduct[];
