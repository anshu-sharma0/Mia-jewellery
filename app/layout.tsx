import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mia by Tanishq — Fine Jewellery for Every Moment",
  description:
    "Discover exquisite fine jewellery at Mia by Tanishq. Shop earrings, rings, necklaces, bangles, and more crafted in gold, diamond, and silver. A TATA product.",
  keywords: [
    "jewellery",
    "fine jewellery",
    "gold jewellery",
    "diamond jewellery",
    "earrings",
    "rings",
    "necklaces",
    "bangles",
    "Mia by Tanishq",
    "TATA",
    "luxury jewellery",
  ],
  openGraph: {
    title: "Mia by Tanishq — Fine Jewellery for Every Moment",
    description:
      "Discover exquisite fine jewellery crafted with care. Shop the latest collections in gold, diamond, and silver.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
