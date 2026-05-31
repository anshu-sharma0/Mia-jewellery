export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  badge?: "NEW ARRIVAL" | "BESTSELLER";
  collection?: string;
  material?: string;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Radiant Cascade Diamond Drop Earrings",
    price: 103754,
    category: "Earrings",
    image: "/images/products/earrings-1.jpg",
    badge: "NEW ARRIVAL",
    collection: "Aurum",
    material: "18K Gold, Diamond",
  },
  {
    id: "p2",
    name: "Radiant Spectrum Sapphire & Diamond Earrings",
    price: 78179,
    category: "Earrings",
    image: "/images/products/earrings-2.jpg",
    badge: "NEW ARRIVAL",
    collection: "Sunkissed",
    material: "14K Gold, Sapphire, Diamond",
  },
  {
    id: "p3",
    name: "Classic Sunburst Diamond Stud Earrings",
    price: 26330,
    category: "Earrings",
    image: "/images/products/earrings-3.jpg",
    badge: "NEW ARRIVAL",
    collection: "Starburst",
    material: "14K Gold, Diamond",
  },
  {
    id: "p4",
    name: "Radiant Sunburst Diamond Stud Earrings",
    price: 46789,
    category: "Earrings",
    image: "/images/products/earrings-4.jpg",
    badge: "NEW ARRIVAL",
    collection: "Starburst",
    material: "18K Gold, Diamond",
  },
  {
    id: "p5",
    name: "Serpentine Grace Gold Bangle",
    price: 85126,
    category: "Bangles",
    image: "/images/products/bangle-1.jpg",
    badge: "BESTSELLER",
    collection: "Aurum",
    material: "22K Gold",
  },
  {
    id: "p6",
    name: "Playful Flick Gold Bangle",
    price: 66877,
    category: "Bangles",
    image: "/images/products/bangle-2.jpg",
    collection: "Manifest",
    material: "18K Gold",
  },
  {
    id: "p7",
    name: "Radiant Aurora Diamond Drop Earrings",
    price: 150088,
    category: "Earrings",
    image: "/images/products/earrings-5.jpg",
    badge: "BESTSELLER",
    collection: "Aurum",
    material: "18K Gold, Diamond, Ruby",
  },
  {
    id: "p8",
    name: "Celestial Bloom Diamond Ring",
    price: 42350,
    category: "Rings",
    image: "/images/products/ring-1.jpg",
    badge: "NEW ARRIVAL",
    collection: "Starburst",
    material: "14K Gold, Diamond",
  },
  {
    id: "p9",
    name: "Eternal Twist Gold Ring",
    price: 28990,
    category: "Rings",
    image: "/images/products/ring-2.jpg",
    collection: "Sunkissed",
    material: "18K Gold",
  },
  {
    id: "p10",
    name: "Moonlit Cascade Gold Necklace",
    price: 95400,
    category: "Necklaces",
    image: "/images/products/necklace-1.jpg",
    badge: "BESTSELLER",
    collection: "Manifest",
    material: "22K Gold",
  },
  {
    id: "p11",
    name: "Whisper Chain Diamond Pendant",
    price: 35670,
    category: "Pendants",
    image: "/images/products/pendant-1.jpg",
    badge: "NEW ARRIVAL",
    collection: "Sunkissed",
    material: "14K Gold, Diamond",
  },
  {
    id: "p12",
    name: "Velvet Rose Gold Ring",
    price: 19899,
    category: "Rings",
    image: "/images/products/ring-3.jpg",
    collection: "Sunkissed",
    material: "14K Rose Gold",
  },
  {
    id: "p13",
    name: "Heritage Kundan Drop Earrings",
    price: 58250,
    category: "Earrings",
    image: "/images/products/earrings-6.jpg",
    collection: "Native",
    material: "22K Gold, Kundan",
  },
  {
    id: "p14",
    name: "Golden Hour Layered Necklace",
    price: 72100,
    category: "Necklaces",
    image: "/images/products/necklace-2.jpg",
    badge: "NEW ARRIVAL",
    collection: "Aurum",
    material: "18K Gold",
  },
  {
    id: "p15",
    name: "Starfall Diamond Pendant",
    price: 44890,
    category: "Pendants",
    image: "/images/products/pendant-2.jpg",
    badge: "BESTSELLER",
    collection: "Starburst",
    material: "18K White Gold, Diamond",
  },
  {
    id: "p16",
    name: "Opulent Wave Gold Bangle",
    price: 112500,
    category: "Bangles",
    image: "/images/products/bangle-3.jpg",
    collection: "Aurum",
    material: "22K Gold",
  },
];

export const formatPrice = (price: number): string => {
  return "₹" + price.toLocaleString("en-IN");
};
