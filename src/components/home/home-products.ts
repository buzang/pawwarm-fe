import type { StaticImageData } from "next/image";
import featuredCloudCablePreview from "@/assets/home/featured-cloud-cable-preview.jpg";
import productCloudCable from "@/assets/home/product-cloud-cable.jpg";
import productFiresideMockNeck from "@/assets/home/product-fireside-mock-neck.jpg";
import productMossCardigan from "@/assets/home/product-moss-cardigan.jpg";
import productMossCardiganDetail from "@/assets/home/product-moss-cardigan-detail.jpg";
import productRosebudVest from "@/assets/home/product-rosebud-vest.jpg";

export type ProductSize = "XS" | "S" | "M" | "L";

export type ProductGalleryImage = {
  image: StaticImageData;
  alt: string;
  position?: string;
};

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
  gallery: ProductGalleryImage[];
  availableSizes: ProductSize[];
  defaultSize: ProductSize;
  note: string;
  sizeHint: string;
  kicker?: string;
  valueLine: string;
  intro?: string;
  benefits: readonly string[];
  detailNotes: readonly string[];
  fitFeel: string;
  materialsCare: string;
  whenToWear: string;
  sizeGuidance: string;
  relatedSlugs: string[];
};

const allSizes: ProductSize[] = ["XS", "S", "M", "L"];

export const featuredProduct = {
  id: "cloud-cable-sweater",
  slug: "cloud-cable-sweater",
  kicker: "Featured Layer",
  name: "Cloud Cable Sweater",
  price: 82,
  priceLabel: "$82",
  collection: "best-sellers",
  collectionLabel: "Best Sellers",
  image: featuredCloudCablePreview,
  imageAlt:
    "Small dog wearing a knit PawWarm sweater shown in a closer, more product-focused view.",
  imagePosition: "center center",
  gallery: [
    {
      image: featuredCloudCablePreview,
      alt: "Closer product view of the Cloud Cable Sweater on a small dog.",
      position: "center center",
    },
  ],
  availableSizes: allSizes,
  defaultSize: "S",
  note: "Soft around the neck",
  sizeHint: "Fits most small breeds (3–6kg). If between sizes, size up.",
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
  fitFeel:
    "Soft through the chest with enough give to move comfortably from room to room without feeling bulky.",
  materialsCare:
    "A softly brushed knit blend chosen for warmth, light structure, and easy care between regular wear.",
  whenToWear:
    "Made for slower mornings, cooler indoor corners, and short outdoor turns when the air feels crisp.",
  sizeGuidance:
    "Choose your usual size for an easy close fit. If your dog sits between sizes or carries more coat, take the next size up.",
  relatedSlugs: ["rosebud-knit-vest", "moss-weekend-cardigan"],
} satisfies HomeProduct;

export const bestSellerProducts: HomeProduct[] = [
  {
    ...featuredProduct,
    image: productCloudCable,
    imageAlt: "Dog wearing the Cloud Cable Sweater in a soft neutral interior.",
    imagePosition: "center 42%",
    gallery: [
      {
        image: productCloudCable,
        alt: "Cloud Cable Sweater shown in a room-toned product crop.",
        position: "center 42%",
      },
    ],
  },
  {
    id: "rosebud-knit-vest",
    slug: "rosebud-knit-vest",
    name: "Rosebud Knit Vest",
    price: 76,
    priceLabel: "$76",
    collection: "light-layers",
    collectionLabel: "Light Layers",
    image: productRosebudVest,
    imageAlt: "Small dog in a soft rose knit vest with a close product-focused crop.",
    imagePosition: "center 35%",
    gallery: [
      {
        image: productRosebudVest,
        alt: "Rosebud Knit Vest shown close to the neckline and chest.",
        position: "center 35%",
      },
    ],
    availableSizes: allSizes,
    defaultSize: "S",
    note: "Easy to slip on",
    sizeHint: "A lighter layer with gentle stretch for daily dressing.",
    valueLine: "Light knit structure for milder mornings, indoor ease, and easy layering.",
    benefits: [
      "Open neckline for easy dressing",
      "Soft knit that sits lightly on the body",
      "Simple coverage for transitional weather",
    ] as const,
    detailNotes: [
      "A vest shape that feels easy to reach for when full sleeves would be too much.",
      "Designed for everyday layering and indoor comfort through changing temperatures.",
    ] as const,
    fitFeel:
      "Light and relaxed, with enough give at the chest to slip on smoothly and settle softly.",
    materialsCare:
      "A lighter knit blend that keeps its shape with regular wear and is easy to freshen between washes.",
    whenToWear:
      "Best for mild days, indoor lounging, and layering when the weather shifts but does not fully turn cold.",
    sizeGuidance:
      "Choose your usual size for a neat fit. If your dog falls between sizes, take the larger size for easier layering.",
    relatedSlugs: ["cloud-cable-sweater", "moss-weekend-cardigan"],
  },
  {
    id: "moss-weekend-cardigan",
    slug: "moss-weekend-cardigan",
    name: "Moss Weekend Cardigan",
    price: 88,
    priceLabel: "$88",
    collection: "everyday",
    collectionLabel: "Everyday",
    image: productMossCardiganDetail,
    imageAlt: "Moss Weekend Cardigan shown on a single dog in a calm interior doorway.",
    imagePosition: "center 48%",
    gallery: [
      {
        image: productMossCardiganDetail,
        alt: "Moss Weekend Cardigan shown on a single dog in a calm interior doorway.",
        position: "center 48%",
      },
      {
        image: productMossCardigan,
        alt: "Moss Weekend Cardigan shown in a wider home-led setting.",
        position: "center 38%",
      },
    ],
    availableSizes: allSizes,
    defaultSize: "S",
    note: "Comfortable indoors",
    sizeHint: "Soft coverage for calm afternoons and room-to-room comfort.",
    valueLine: "An easy cardigan weight for calm interiors and all-day wear.",
    benefits: [
      "Soft coverage without stiffness",
      "Comfortable for longer indoor wear",
      "Gentle structure that still feels relaxed",
    ] as const,
    detailNotes: [
      "A cardigan shape with enough body to look polished while staying easy on the dog.",
      "Works well for daily indoor dressing and easy transitions before heading back out.",
    ] as const,
    fitFeel:
      "A soft everyday fit that sits close enough to feel tidy but never rigid across the shoulders.",
    materialsCare:
      "Midweight knitwear with a calm hand feel, chosen to stay comfortable through repeat wear at home.",
    whenToWear:
      "Ideal for long indoor stretches, visiting friends, or the quieter hours after a short walk.",
    sizeGuidance:
      "Take your usual size for everyday ease. If your dog is longer through the back, size up for extra coverage.",
    relatedSlugs: ["cloud-cable-sweater", "fireside-mock-neck"],
  },
  {
    id: "fireside-mock-neck",
    slug: "fireside-mock-neck",
    name: "Fireside Mock Neck",
    price: 92,
    priceLabel: "$92",
    collection: "cold-weather",
    collectionLabel: "Cold Weather",
    image: productFiresideMockNeck,
    imageAlt: "Dog in the Fireside Mock Neck with the knit texture visible.",
    imagePosition: "center 34%",
    gallery: [
      {
        image: productFiresideMockNeck,
        alt: "Fireside Mock Neck shown with a close crop on the collar and knit texture.",
        position: "center 34%",
      },
    ],
    availableSizes: allSizes,
    defaultSize: "S",
    note: "Warm for short winter walks",
    sizeHint: "A closer knit for colder starts and quick turns outside.",
    valueLine: "Closer warmth around the neck and chest for colder starts to the day.",
    benefits: [
      "Mock neck coverage without pressure",
      "Warmer knit for short outdoor use",
      "Structured enough to sit neatly under a coat",
    ] as const,
    detailNotes: [
      "A slightly closer knit with a calm mock neck that frames the face without feeling tight.",
      "Made for colder air, early starts, and the walk home when a little more warmth matters.",
    ] as const,
    fitFeel:
      "A closer, more protective fit that still leaves enough ease for moving, turning, and settling indoors.",
    materialsCare:
      "A denser knit chosen for colder weather use and a warmer hand feel through the neck and chest.",
    whenToWear:
      "Built for brisk mornings, short winter walks, and colder days that need a little more coverage.",
    sizeGuidance:
      "Choose your usual size for a close winter fit. If layering over another thin piece, take the larger size.",
    relatedSlugs: ["moss-weekend-cardigan", "cloud-cable-sweater"],
  },
];

export const allProducts = bestSellerProducts;

export function getProductBySlug(slug: string) {
  return allProducts.find((product) => product.slug === slug);
}

export function getProductById(id: string) {
  return allProducts.find((product) => product.id === id);
}

export function getRelatedProducts(product: HomeProduct) {
  return product.relatedSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((item): item is HomeProduct => item !== undefined);
}
