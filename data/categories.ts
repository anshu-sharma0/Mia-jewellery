export interface Category {
  id: string;
  name: string;
  image: string;
  color: string;
}

export const categories: Category[] = [
  { id: "earrings", name: "Earrings", image: "/images/categories/earrings.jpg", color: "#F5E6FF" },
  { id: "bangles", name: "Bangles", image: "/images/categories/bangles.jpg", color: "#FFE6EE" },
  { id: "rings", name: "Rings", image: "/images/categories/rings.jpg", color: "#FFF5E6" },
  { id: "necklaces", name: "Necklaces", image: "/images/categories/necklaces.jpg", color: "#E6F5FF" },
  { id: "pendants", name: "Pendants", image: "/images/categories/pendants.jpg", color: "#FFE6F5" },
  { id: "diamond", name: "Diamond Jewellery", image: "/images/categories/diamond.jpg", color: "#F0F0FF" },
  { id: "coins", name: "Coins", image: "/images/categories/coins.jpg", color: "#FFF5E6" },
  { id: "mangalsutra", name: "Mangalsutra", image: "/images/categories/mangalsutra.jpg", color: "#FFE6E6" },
];
