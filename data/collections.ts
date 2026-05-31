export interface Collection {
  id: string;
  name: string;
  tagline: string;
  image: string;
  gradient: string;
}

export const collections: Collection[] = [
  {
    id: "aurum",
    name: "Aurum",
    tagline: "Go Bold With Gold.",
    image: "/images/collections/aurum.jpg",
    gradient: "linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #D2691E 100%)",
  },
  {
    id: "sunkissed",
    name: "Sunkissed",
    tagline: "Jewellery that blushes pink under the sun.",
    image: "/images/collections/sunkissed.jpg",
    gradient: "linear-gradient(135deg, #E8526A 0%, #F5A3B3 50%, #FFD1DC 100%)",
  },
  {
    id: "starburst",
    name: "Starburst",
    tagline: "Shine like every star in the sky.",
    image: "/images/collections/starburst.jpg",
    gradient: "linear-gradient(135deg, #4A0E8F 0%, #7B2FBE 50%, #C77DFF 100%)",
  },
  {
    id: "manifest",
    name: "Manifest",
    tagline: "Wear your dreams. Own your story.",
    image: "/images/collections/manifest.jpg",
    gradient: "linear-gradient(135deg, #C41E3A 0%, #FF6B81 50%, #FFB3C1 100%)",
  },
  {
    id: "native",
    name: "Native",
    tagline: "Rooted in tradition, crafted for today.",
    image: "/images/collections/native.jpg",
    gradient: "linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #FFD700 100%)",
  },
];
